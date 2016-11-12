'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class UserController {

	* register (request, response){
		let data = request.only('username', 'password', 'email')
		data.password = yield Hash.make('password')
		let user = yield User.create(data)
		response.status(201).json({text: "User created!", data: user})

	}

	* login (request, response){
		let data = request.only('username', 'password')
		let user = yield User.findBy('username', data.username)

		try {
			let correct = Hash.verify(data.password, user.password)
			if (!correct) { 
				throw new Error() 
			}
			user.access_token = yield request.auth.generate(user)
      		response.json(user)

		} catch(error) {
			response.status(401).json({text: "Wrong user name or password!"})

		}

		if (user){
			let correct =  yield Hash.verify(data.password, user.password)
			if (correct){
				user.access_token = yield request.auth.generate(user)
			}
		}
		Hash.verify(data.password)
	}

}

module.exports = UserController
