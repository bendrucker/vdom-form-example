'use strict'

var Loop = require('main-loop')
var vdom = require('virtual-dom')
var Delegator = require('dom-delegator')
var App = require('./')

Delegator()

var state = App()

var loop = Loop(state(), App.render, vdom)

state(loop.update)

document.body.appendChild(loop.target)

App.onSubmit(state, console.log.bind(console, 'submitted:'))