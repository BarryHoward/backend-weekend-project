'use strict'

const Schema = use('Schema')

class AddVoteColumnsTableSchema extends Schema {

  up () {
    this.table('links', (table) => {
      table.integer('votes')
    })

    this.table('comments' (table) =>{
      table.integer('votes')
    })
  }

  down () {
    // this.table('links', (table) => {
    //   // opposite of up goes here
    // })
  }

}

module.exports = AddVoteColumnsTableSchema
