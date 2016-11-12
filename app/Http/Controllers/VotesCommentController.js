'use strict'

const VotesComment = use('App/Model/VotesComment')

class VotesCommentController {

	* vote (request, response) {
		let user = request.authUser
		let linkId = request.param('link_id')
		let commentId = request.param('comment_id')
		let data = {}
		data.user_id = user.id
		data.links_id = linkId
		data.comments_id = commentId
		let vote = yield VotesComment.create(data)
		vote.save()
		response.status(201).json(vote)
	}
}

module.exports = VotesCommentController
