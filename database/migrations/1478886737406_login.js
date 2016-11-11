'use strict'

const Schema = use('Schema')

class LoginTableSchema extends Schema {

  up () {
    this.table('login', (table) => {
      // alter login table
    })
  }

  down () {
    this.table('login', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = LoginTableSchema
