'use strict'

const VotesLink = use('App/Model/VotesLink')
const Link = use('App/Model/Link.js')

class VotesLinkController {

	* vote (request, response) {
		let user = request.authUser
		let linkId = request.param('link_id')
		let data = {}
		data.user_id = Number(user.id)
		data.links_id = Number(linkId)

		const exists = yield VotesLink.query().table('votes_links')
			.where("user_id", data.user_id).andWhere("links_id", data.links_id)

		if (exists.length === 0){
			let vote = yield VotesLink.create(data)
			vote.save()

			// const link = yield Link.query().table('links')
			// .where("id", data.links_id)
			// link.votes = link.votes+1
			// link.save()

			response.status(201).json(vote)
		} else {
			response.status(403).json({text: "Can't vote for that again"})
		}



	}

}

module.exports = VotesLinkController
