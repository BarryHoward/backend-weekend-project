'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.timestamps()

      table.integer('user_id')
      table.foreign('user_id').references('users.id')

      table.integer('links_id')
      table.foreign('links_id').references('links.id')

      table.integer('parent_comment_id')
      table.foreign('parent_comment_id').references('comments.id')

      table.text('body')
    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
