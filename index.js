const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const HenrikDevValorantAPI = require('unofficial-valorant-api');
const vapi = new HenrikDevValorantAPI();

const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./output.txt'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, '/')));

app.get('/mmr/valorant/:name/:tag/:reg', async (req, res, next) => {
  const name = req.params.name;
  const tag = req.params.tag;
  const reg = req.params.reg;

  const mmr_data = await vapi.getMMR({
    version: 'v1',
    region: reg,
    name: name,
    tag: tag,
  });

  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
    return myConsole.log(`Username: ${name}#${tag} Error: ${mmr_data.status}`);
  }

  //console.log(`${mmr_data.data.currenttierpatched} - ${mmr_data.data.ranking_in_tier} RR`);
  //console.log(`${name}#${tag}`);
  res.send(`${mmr_data.data.currenttierpatched} (${mmr_data.data.ranking_in_tier} RR).`);
  myConsole.log(`${mmr_data.data.currenttierpatched} (${mmr_data.data.ranking_in_tier} RR).`);
});


app.get('/lastgame/valorant/:name/:tag/:reg', async (req, res) => {
  const name = req.params.name;
  const tag = req.params.tag;
  const reg = req.params.reg;

  const mmr_data = await vapi.getMMR({
    version: 'v1',
    region: reg,
    name: name,
    tag: tag,
  });

  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
    return myConsole.log(`Username: ${name}#${tag} Error: ${mmr_data.status}`);
  }

  //console.log(`${mmr_data.data.currenttierpatched} - ${mmr_data.data.ranking_in_tier} RR`);
  //console.log(`${name}#${tag}`);
  res.send(`${mmr_data.data.mmr_change_to_last_game} RR.`);
  myConsole.log(`${mmr_data.data.mmr_change_to_last_game} RR.`);
});

app.get('/all/valorant/:name/:tag/:reg', async (req, res) => {
  const name = req.params.name;
  const tag = req.params.tag;
  const reg = req.params.reg;

  const mmr_data = await vapi.getMMR({
    version: 'v1',
    region: reg,
    name: name,
    tag: tag,
  });

  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
    return myConsole.log(`Username: ${name}#${tag} Error: ${mmr_data.status}`);
  }

  //console.log(`${mmr_data.data.currenttierpatched} - ${mmr_data.data.ranking_in_tier} RR`);
  //console.log(`${name}#${tag}`);
  res.send(`${mmr_data.data.currenttierpatched} (${mmr_data.data.ranking_in_tier} RR). Last match: ${mmr_data.data.mmr_change_to_last_game} RR.`);
  myConsole.log(`${mmr_data.data.currenttierpatched} (${mmr_data.data.ranking_in_tier} RR). Last match: ${mmr_data.data.mmr_change_to_last_game} RR.`);
});

app.get('/mmr/valorant/:name/:tag/:reg/es', async (req, res, next) => {
  const name = req.params.name;
  const tag = req.params.tag;
  const reg = req.params.reg;

  const mmr_data = await vapi.getMMR({
    version: 'v1',
    region: reg,
    name: name,
    tag: tag,
  });

  if (mmr_data.data.currenttierpatched.includes("Iron")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Iron', 'Hierro')
  }

  if (mmr_data.data.currenttierpatched.includes("Bronze")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Bronze', 'Bronce')
  }

  if (mmr_data.data.currenttierpatched.includes("Silver")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Silver', 'Plata')
  }

  if (mmr_data.data.currenttierpatched.includes("Gold")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Gold', 'Oro')
  }

  if (mmr_data.data.currenttierpatched.includes("Platinum")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Platinum', 'Platino')
  }

  if (mmr_data.data.currenttierpatched.includes("Diamond")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Diamond', 'Diamante')
  }

  if (mmr_data.data.currenttierpatched.includes("Ascendant")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Ascendant', 'Ascendente')
  }

  if (mmr_data.data.currenttierpatched.includes("Immortal")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Immortal', 'Inmortal')
  }

  if (mmr_data.data.currenttierpatched.includes("Radiant")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Radiant', 'Radiante')
  }

  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
    return myConsole.log(`Username: ${name}#${tag} Error: ${mmr_data.status}`);
  }

  //console.log(`${mmr_data.data.currenttierpatched} - ${mmr_data.data.ranking_in_tier} RR`);
  //console.log(`${name}#${tag}`);
  res.send(`${newdata} (${mmr_data.data.ranking_in_tier} RR).`);
  myConsole.log(`${newdata} (${mmr_data.data.ranking_in_tier} RR).`);
});


app.get('/lastgame/valorant/:name/:tag/:reg/es', async (req, res) => {
  const name = req.params.name;
  const tag = req.params.tag;
  const reg = req.params.reg;

  const mmr_data = await vapi.getMMR({
    version: 'v1',
    region: reg,
    name: name,
    tag: tag,
  });

  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
    return myConsole.log(`Username: ${name}#${tag} Error: ${mmr_data.status}`);
  }

  //console.log(`${mmr_data.data.currenttierpatched} - ${mmr_data.data.ranking_in_tier} RR`);
  //console.log(`${name}#${tag}`);
  res.send(`${mmr_data.data.mmr_change_to_last_game} RR.`);
  myConsole.log(`${mmr_data.data.mmr_change_to_last_game} RR.`);
});

app.get('/all/valorant/:name/:tag/:reg/es', async (req, res) => {
  const name = req.params.name;
  const tag = req.params.tag;
  const reg = req.params.reg;

  const mmr_data = await vapi.getMMR({
    version: 'v1',
    region: reg,
    name: name,
    tag: tag,
  });

  if (mmr_data.data.currenttierpatched.includes("Iron")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Iron', 'Hierro')
  }

  if (mmr_data.data.currenttierpatched.includes("Bronze")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Bronze', 'Bronce')
  }

  if (mmr_data.data.currenttierpatched.includes("Silver")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Silver', 'Plata')
  }

  if (mmr_data.data.currenttierpatched.includes("Gold")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Gold', 'Oro')
  }

  if (mmr_data.data.currenttierpatched.includes("Platinum")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Platinum', 'Platino')
  }

  if (mmr_data.data.currenttierpatched.includes("Diamond")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Diamond', 'Diamante')
  }

  if (mmr_data.data.currenttierpatched.includes("Ascendant")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Ascendant', 'Ascendente')
  }

  if (mmr_data.data.currenttierpatched.includes("Immortal")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Immortal', 'Inmortal')
  }

  if (mmr_data.data.currenttierpatched.includes("Radiant")) {

    data = mmr_data.data.currenttierpatched
    newdata = mmr_data.data.currenttierpatched.replace('Radiant', 'Radiante')
  }

  if (mmr_data.error) {
    res.send(`Error ${mmr_data.status}`);
    return myConsole.log(`Username: ${name}#${tag} Error: ${mmr_data.status}`);
  }

  //console.log(`${mmr_data.data.currenttierpatched} - ${mmr_data.data.ranking_in_tier} RR`);
  //console.log(`${name}#${tag}`);
  res.send(`${newdata} (${mmr_data.data.ranking_in_tier} RR). Última partida: ${mmr_data.data.mmr_change_to_last_game} RR.`);
  myConsole.log(`${newdata} (${mmr_data.data.ranking_in_tier} RR). Última partida: ${mmr_data.data.mmr_change_to_last_game} RR`);
});

app.listen(port, () => {
  myConsole.log(`Cache`)
});