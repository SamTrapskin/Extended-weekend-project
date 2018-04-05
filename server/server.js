let express = require('express');
let router = express.Router();

const app = express();
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 5025;


app.use(bodyParser.json());

app.use(express.static( 'server/public' ) );

app.use(bodyParser.urlencoded( { extended: true } ) );



app.listen(PORT, ( ) => {
console.log('listening on port', PORT);
} );
    
    module.exports = router