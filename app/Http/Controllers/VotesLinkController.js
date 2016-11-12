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
			yield vote.save()

			let link =  yield Link.findBy('id', data.links_id)
			let vote_count = link.votes
			if (vote_count === null){
				link.votes = 1
			} else {
				link.votes = vote_count+1
			}
			yield link.save()
			response.status(201).json([vote, link])
		} else {
			response.status(403).json({text: "Can't vote for that again"})
		}
	}

	// * show (request, response) {
	// 	let linkId = request.param('link_id')
	// 	let link =  yield Link.findBy('id', linkId)
	// 	console.log(link.votes)
	// 	response.status(201).json(link)

	// }

}

module.exports = VotesLinkController
