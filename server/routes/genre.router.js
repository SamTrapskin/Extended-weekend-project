let express = require('express');
const router = require('express').Router();
const pool = require('../modules/pool');


router.get('/', (req,res) => {
    let queryText = `SELECT * FROM "film_genres";`;
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
    let list = req.body;
    const queryText = `INSERT INTO film_genres ("genre") VALUES ($1);`
    pool.query(queryText, [list.genre])
    .then( (response) => { console.log(response)
    res.sendStatus(201);
    }).catch( (error) => {
        console.log('Error', error);
    })

})

router.delete('/:id', (req, res) => {
    console.log('DELETE /genre', req.params);
    const genreId = req.params.id;
    pool.query('DELETE FROM "film_genres" WHERE "id" = $1;', [genreId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error making movie delete query', error);
            res.sendStatus(500);
        });
});


module.exports = router