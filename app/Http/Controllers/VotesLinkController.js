'use strict'

const VotesLink = use('App/Model/VotesLink')

class VotesLinkController {

	* vote (request, response) {
		let user = request.authUser
		let linkId = request.param('link_id')
		let data = {}
		data.user_id = user.id
		data.links_id = linkId
		let vote = yield VotesLink.create(data)
		vote.save()
		response.status(201).json(vote)

	}

}

module.exports = VotesLinkController
