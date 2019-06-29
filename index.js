var express = require('express')
var bodyParser = require('body-parser')
<<<<<<< HEAD
var teams = require('./teams.json')
=======
var Op = require('sequelize').Op
var models = require('./models')
>>>>>>> 5e609beeda5833b5f1046716f79cfbe54f2079cf

var app = express()

app.get('/teams', (request, response) => {
  models.Teams.findAll().then((teams) => {
    response.send(teams)
  })
})

app.get('/teams/:val', (request, response) => {
  models.Teams.findAll({
    where: {
      [Op.or]: [{ id: request.params.val }, { abbreviation: request.params.val }]
    }
  }).then((teams) => {
    if (teams.length) {
      response.send(teams)
    } else {
      response.sendStatus(404)
    }
  })
})

app.post('/teams', bodyParser.json(), (request, response) => {
  var { location, mascot, abbreviation, league, division } = request.body

  if (!location || !mascot || !abbreviation || !league || !division) {
    response.status(400).send('The following fields are required: location, mascot, abbreviation, league, division')
  }

  models.Teams.create({ location, mascot, abbreviation, league, division }).then((team) => {
    response.status(201).send(team)
  })
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
