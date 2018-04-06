let express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');

// 
router.get('/', (req,res) => {

    let queryText = `SELECT 'genre' FROM "movie_name";`;
    pool.query(queryText) 
    .then( (result) => {
    res.send(result.rows);
    console.log(result.rows);
    }).catch( (erro) => {
    console.log('error making query', error);
    res.sendStatus(500);
    })
});

router.post ('/', (req, res) => {
    let list = req.body;
    const queryText = `INSERT INTO movie_name ("name", "genre", "release_date", "run_time") VALUES ( $1, $2, $3, $4);`
    pool.query(queryText, [list.name, list.genre, list.release_date, list.run_time])
    .then( (response) => { console.log(response)
    res.sendStatus(201);
    }).catch( (error) => {
        console.log('Error', error);
    })

})




module.exports = router