'use strict'

class LinkController {

  * create (request, response) {
    let data = request.only('title', 'destination_url')
    let user = request.authUser
    data.user_id = user.id
    let link = yield Link.create(data)

    link.save()
    response.status(201).json(link)
  }

}

module.exports = LinkController
