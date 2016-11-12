'use strict'

const Schema = use('Schema')

class VotesLinksSchema extends Schema {

  up () {
      this.create('votes_links', (table) => {
      table.timestamps()
      table.increments()
      
      table.integer('user_id')
      table.foreign('user_id').references('users.id')

      table.integer('links_id')
      table.foreign('links_id').references('links.id')
    })
  }

  down () {
    this.drop('votes_links')
  }

}

module.exports = VotesLinksSchema
