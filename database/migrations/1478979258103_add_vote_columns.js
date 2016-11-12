'use strict'

const Schema = use('Schema')

class AddVoteColumnsTableSchema extends Schema {

  up () {
    this.table('links', (table) => {
      table.integer('votes')
    })

    this.table('comments', (table) =>{
      table.integer('votes')
    })
  }

  down () {
    this.table('links', (table) => {
      table.dropColumn('votes')
    })

    this.table('comments', (table) =>{
      table.dropColumn('votes')
    })
  }

}

module.exports = AddVoteColumnsTableSchema
