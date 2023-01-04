const express = require('express');
const app = express();
const pokemonJson = require('./pokemon.json');

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/pokemon', (req, res, next) => {
    const filteredList = pokemonJson.filter((pokemonItem)=>{
      return !Boolean(req.query.search) || pokemonItem.name.english.toLowerCase().includes(req.query.search.toLowerCase())
    });
    res.send(filteredList);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
