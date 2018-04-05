let express = require('express');
let router = express.Router();
const pg = require('pg');
const app = express();
const bodyParser = require('body-parser');
const movieRouter = require('./routes/movies.router')
const genreRouter = require('./routes/genre.router')

let PORT = process.env.PORT || 5025;

app.use(bodyParser.json());
app.use(express.static( 'server/public' ) );
app.use(bodyParser.urlencoded( { extended: true } ) );

app.use('/movies', movieRouter);  //engaged when request is made from MOVIE view.//goes to app.get
app.use('/genre', genreRouter);   //engaged whe a request is made from SALE view


app.listen(PORT, ( ) => {
console.log('listening on port', PORT);
} );
    
module.exports = router