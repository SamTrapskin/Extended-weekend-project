let express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "movie_name";`;
    pool.query(queryText) 
    .then( (result) => {
    res.send(result.rows);
    console.log(result.rows);
    }).catch( (error) => {
    console.log('error making query', error);
    res.sendStatus(500);
    })
});

router.post ('/', (req, res) => {
    let collection = req.body;
    const queryText = `INSERT INTO movie_name ("name", "genre", "release_date", "run_time") VALUES ( $1, $2, $3, $4);`
    pool.query(queryText, [collection.name, collection.genre, collection.release_date, collection.run_time])
    .then( (response) => { console.log(response)
    res.sendStatus(201);
    }).catch( (error) => {
        console.log('Error', error);
    })

})

router.delete('/:id', (req, res) => {
    console.log('DELETE /movie', req.params);
    const movieId = req.params.id;
    pool.query('DELETE FROM "movie_name" WHERE "id" = $1;', [movieId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making movie delete query', error);
            res.sendStatus(500);
        });
});


module.exports = router