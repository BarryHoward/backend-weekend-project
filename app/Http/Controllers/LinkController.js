'use strict'

const Link = use('App/Model/Link')

class LinkController {

	* create (request, response) {
		let data = request.only('title', 'destination_url')
		let user = request.authUser
		data.user_id = user.id
		let link = yield Link.create(data)

		link.save()
		response.status(201).json(link)
	}

	* delete (request, response){
		let link_id = request.param("link_id")

		let link = yield Link.findBy('id', link_id)
		let user = request.authUser

		if (!link){
			response.status(404).json({text: "Link not found"})
		} else {
		  	if (user.id === link.user_id){
		  		yield link.delete()
		  		response.status(201).json({text: "Link deleted!"})
		  	} else {
		  		reposne.status(403).json({text: "Access denied"})
		  	}
		}

	}

	* show (request, response){
		const link_list = yield Link.query().table('links')
		.orderBy('votes', 'desc')
		.orderBy('created_at', 'desc')
		response.json(link_list)
	}

}

module.exports = LinkController
