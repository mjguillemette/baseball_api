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
  var {id, location, mascot, abbreviation, league, division} = request.body

  id = 0

  teams.forEach(team => {
    // console.log(team.id)
    if(parseInt(team.id) > id) {
       id = parseInt(team.id) + 1 
    }
  })

  if(!location || !mascot || !abbreviation || !league || !division){
    response.send('Team object must include: location, mascot, abbreviation, league and division.')
            .status(400)
  } else {
    var newTeam = {id, location, mascot, abbreviation, league, division}
    teams.push(newTeam)

    response.send(newTeam)
            .status(201)
  }
})

var server = app.listen(1337, () => {
  console.log('Listening on port 1337')
})

module.exports = server
