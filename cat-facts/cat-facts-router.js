const axios = require('axios');

const router = require('express').Router();

router.get('/', (req, res) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://cat-fact.herokuapp.com/facts/random', requestOptions)
    .then(response => {
      res.status(200).json(response.data.text);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Cat Facts', error: err });
    });
});

module.exports = router;