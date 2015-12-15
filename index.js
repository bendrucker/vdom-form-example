'use strict'

var State = require('dover')
var EmailInput = require('email-input')
var ZipInput = require('zip-input')
var h = require('virtual-dom/h')
var submitEvent = require('value-event/submit')

module.exports = App

function App () {
  return State({
    email: EmailInput(),
    zip: ZipInput(),
    channels: {
      submit: submit
    }
  })
}

function submit (state, data) {
  if (!ready(state)) return
  console.log('i am ready to submit')
}

function ready (state) {
  return EmailInput.validate(state.email) && ZipInput.validate(state.zip)
}

App.render = function render (state) {
  var options = {
    attributes: {
      novalidate: ''
    },
    'ev-submit': submitEvent(state.channels.submit)
  }

  return h('form', options, [
    EmailInput.render(state.email, {
      placeholder: 'Email'
    }),
    ZipInput.render(state.zip, {
      placeholder: 'Zip'
    }),
    h('button', {type: 'submit'}, 'Print')
  ])
}