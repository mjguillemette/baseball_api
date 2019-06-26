var express = require('express')
var bodyParser = require('body-parser')
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


app.post('/teams', bodyParser.json(), (request, response) => {
  var { location, mascot, abbreviation, league, division} = request.body
  
  var newTeam = teams.push(request.body)

  if(!location || !mascot || !abbreviation || !league || !division){
    response.sendStatus(400).send('Creating a new team requires an object with: location, mascot, abbreviation, league and division')
  } else {
    response.sendStatus(201).send(newTeam)
  }
})

var server = app.listen(1337, () => {
  console.log('Listening on port 1337')
})

module.exports = server
