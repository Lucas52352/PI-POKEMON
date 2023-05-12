const axios = require('axios');
const { Router } = require('express');
const { Types } = require('../db.js');

const typeRoute = Router();

typeRoute.get('/', async (req, res) => {

    try {
        
        const typeApi = await axios.get('https://pokeapi.co/api/v2/type');
        
        
    const types = typeApi.data.results.map(type => { return {
        name: type.name
    }});

    await Types.bulkCreate(types);
    
    const allTypes = await Types.findAll();

    return res
      .status(200)
      .json(allTypes);

  } catch (error) {

    return res.status(400).json({ error: error.message });

  }
});

module.exports = typeRoute;