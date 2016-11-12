'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.post('/register', 'UserController.register')
Route.post('/login', 'UserController.login')


Route.post('/links', 'LinkController.create').middleware('auth')
Route.delete('/links/:link_id', 'LinkController.delete').middleware('auth')
Route.get('/links', 'LinkController.show')


Route.post('/links/:link_id/comments', 'CommentController.create').middleware('auth')
Route.delete('/links/:link_id/comments/:comment_id', 'CommentController.delete').middleware('auth')
Route.get('/links/:link_id/comments', 'CommentController.show')

Route.post('/links/:link_id', 'VotesLinkController.vote').middleware('auth')
Route.post('/links/:link_id/comments/:comment_id', 'VotesCommentController.vote').middleware('auth')