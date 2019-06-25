var express = require('express')
var teams = require('./teams.json')

var app = express()

app.get('/teams', (request, response) => {
  response.send(teams)
})

app.get('/teams/:id', (request, response) => {
  var teamData = teams.filter((entry) => {
    return entry.id === parseInt(request.params.id) ||
      entry.abbreviation === request.params.id
  })

  if (teamData.length) {
    response.send(teamData)
  } else {
    response.sendStatus(404)
  }
})

var server = app.listen(1337, () => {
  console.log('Listening on port 1337')
})

module.exports = server
