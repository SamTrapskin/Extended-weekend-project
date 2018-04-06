//PG CONFIG SETUP
const pg = require('pg'); 
const url = require('url');

                                   
const Pool = pg.Pool;                                           
const config = {                                               
    database:'movie_database', 
    host:'localhost',                                        
    port: 5432,                 
    max: 10,            
    idleTimeoutMillis:30000                               
}   
//lowercase p   //uppercaseP
const pool = new Pool(config);       

pool.on('connect', (client) => {     
    console.log('Postgresql connected');
});

pool.on('error', (err, client)=> {  
console.log("unexpected error on postgresql")
process.exit(-1);
});

module.exports = pool;     