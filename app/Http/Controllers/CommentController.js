'use strict'

const Comment = use('App/Model/Comment')

class CommentController {

	* create (request, response) {
		let data = request.only('body')
		let linkId = request.param('link_id')
		data.links_id = linkId

		let user = request.authUser
		data.user_id = user.id
		let comment = yield Comment.create(data)

		comment.save()
		response.status(201).json(comment)
	}

	* delete (request, response){
		let comment_id = request.param("comment_id")

		let comment = yield Comment.findBy('id', comment_id)
		let user = request.authUser

		if (!comment){
			response.status(404).json({text: "Comment not found"})
		} else {
		  	if (user.id === comment.user_id){
		  		yield comment.delete()
		  		response.status(201).json({text: "Comment deleted!"})
		  	} else {
		  		reposne.status(403).json({text: "Access denied"})
		  	}
		}

	}

	* show (request, response){
		const comment_list = yield Comment.query().table('comments')
		.orderBy('created_at', 'desc')
		response.json(comment_list)
	}

}

module.exports = CommentController
