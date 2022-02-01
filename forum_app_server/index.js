//Importing depenencies                      
const express = require('express');
const bodyparser = require('body-parser');   //Parses html body parts into js
const mysql = require('mysql');
const cors = require('cors');
const { encrypt, decrypt } = require('./encryptionHndler');

//Creating objects for use of dependency functions
const app = express();
const db = mysql.createPool({

    //Pool access credentials
    host: 'localhost',
    user: 'root',
    password: '**********',
    database: 'message_app_db',
    multipleStatements: 'true'

});

//Allows the request of triggered events in https server instance
app.use(bodyparser.urlencoded({extended: true}));
app.use(express());
app.use(cors());
app.use(express.json()); //allows body parsing of front end data from axios


//Creating objects for use of dependency functions
const app = express();

app.post('/register', async (req, res) => {

    const user = req.body.user_name;
    const email = req.body.user_email;
    const user_pass = req.body.user_pass;
    const user_confirm = req.body.user_confirm;

    var registerUserIns = "";

    

});


//Login authentication
app.post('/login', async ( req, res) => {

    //body parsing user insertted login data
    const email = req.body.auth_email;
    const password = req.body.auth_pass;
    //const encrypt_pass = req.body.encryption.password,
    //const iv = req.body.encryption.iv

    //SQL command to select existing queries in DB
    const sqlLoginSLC = "SELECT * FROM message_app_db.user_info WHERE user_email = ?";
    
    //Query into table
    db.query(

        sqlLoginSLC,
        [email], //Grab body parser values
        (err, result, fields) => { //Feedback after process

            //If there are errors
            if(err){
                //Log errors to front end
                res.send(err);
            }

            //Check for results from SQL command
            if(result.length > 0){

                //Log decryption
                const decipheredPass = decrypt(result[0].user_pass, result[0].iv);
                if(password === decipheredPass){

                    console.log(decrypt(result[0].user_pass, result[0].iv));

                    //Send result
                    res.send(result);
                    
                }else{

                    //Send feedback otherwise
                    res.send({message: "Incorrect credentials"});

                }
                //Send decrypted password
                //res.send(decrypt(password));
                //console.log(result);

            }else{
                //Send feedback otherwise
                res.send({message: "Incorrect credentials"});
            }

        }

    );

});

app.get('/', (req, res) => {

    res.send('Hello World');
   
});

//Host server on 3001 port
app.listen(3001, () => {

    console.log('Server is running on 3001');

});