'use strict'

const Schema = use('Schema')

class VoteCommentsSchema extends Schema {

  up () {
      this.create('votes_comments', (table) => {
      table.timestamps()
      table.increments()
      
      table.integer('user_id')
      table.foreign('user_id').references('users.id')

      table.integer('links_id')
      table.foreign('links_id').references('links.id')

      table.integer('comments_id')
      table.foreign('comments_id').references('comments.id')
    })
  }

  down () {
    this.drop('votes_comments')
  }

}

module.exports = VoteCommentsSchema
