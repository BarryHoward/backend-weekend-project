Link Share Weekend Project

November 12, 2016

[github repo](https://github.com/BarryHoward/link_share)

[heroku deployment](https://link-share-barry.herokuapp.com/)

API and Routes:

	Register/Login

	/register : Register user
	request verb: Post
	info:  Include username, password, email parameters in request

	/login : Login user
	request verb: Post
	info:  Include username and password paramters in request.  
	Token contained in parameter access_token in response

------------------------------------------------------------------------------------------------------
	Links

	/links : Get list of posted links
	request verb: Get
	info: Organized by vote count and then creation date

	/links : Create new link
	request verb: Post (logged-in)
	info:  Include title and destination_url parameters in request.  
	Must include token in header for login.  Link post will be associated with user.

	/links/:linkId : Delete link
	request verb: Delete (logged-in)
	info:  Must include token in header for login.  Link post must be 
	from associated user.

------------------------------------------------------------------------------------------------------
	Comments

	/links/:link_id/comments : Get list of comments from a link
	request verb: Get
	info: Ordered by votes and then creation date

	/links/:link_id/comments/:comment_id : Get children comments of a 
	specified parent comment
	request verb: Get
	info: Ordered by votes and then creation date

	/links/:link_id/comments : Post comment for associated link
	request verb: Post (logged-in)
	info:  Include text in body parameter.  If a parent comment exists, 
	its id should be stored in parent_comment_id parameter.  Must include 
	token in header for login.  Comment will be associated with user.

	/links/:linkId/comments/:comment_id : Delete Comment
	request verb: Delete (logged-in)
	info:  Must include token in header for login.  Comment must be from 
	associated user.

------------------------------------------------------------------------------------------------------
	Votes

	/links/:link_id : Add vote to link
	request verb: Post (logged-in)
	info: Creates a vote in table.  Must include token in header for login.  
	Same user cannot vote on link multiple times

	/links/:link_id/commments/:comment_id : Add vote to comment
	request verb: Post (logged-in)
	info: Creates a vote in table.  Must include token in header for login.  
	Same user cannot vote on comment multiple times
