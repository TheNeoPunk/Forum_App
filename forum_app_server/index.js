//Importing depenencies                      
const express = require('express');
const bodyparser = require('body-parser');   //Parses html body parts into js
const mysql = require('mysql');
const cors = require('cors');
const { encrypt, decrypt } = require('./encryptionHandler');

//Creating objects for use of dependency functions
const app = express();
const db = mysql.createPool({

    //Pool access credentials
    host: 'localhost',
    user: 'root',
    password: '************',
    database: 'forum_app_db',
    multipleStatements: 'true'

});

//Allows the request of triggered events in https server instance
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json()); //allows body parsing of front end data from axios

app.post('/register', async (req, res) => {

    const user = req.body.user_name;
    const email = req.body.user_email;
    const user_pass = req.body.user_pass;
    const user_confirm = req.body.user_confirm;

    //Encrypt password
    const scramblePassword = encrypt(user_pass);

    var registerUserIns = "INSERT INTO user_info_db (user_name, user_email, user_password, iv) VALUES (?,?,?,?);";

    //Query the above SQL command with the specific parameters to gather user data on front end
    db.query(
        registerUserIns, 
        [user, email, scramblePassword.password, scramblePassword.iv], 
        (err, result) => {
            
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send(result);
    }); 
});

//Login authentication
app.post('/login', ( req, res) => {

    //body parsing user insertted login data
    const email = req.body.user_email;
    const password = req.body.user_pass;

    //SQL command to select existing queries in DB
    const sqlLoginSLC = "SELECT * FROM forum_app_db.user_info_db WHERE user_email = ?";
    
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
                const decipheredPass = decrypt(result[0].user_password, result[0].iv);
                //console.log(decipheredPass)
                if(password === decipheredPass){
                    //Send result
                    res.send(result);
                    //console.log(result)
                }else{
                    //Send feedback otherwise
                    res.send({message: "Incorrect credentials"});
                }
            }else{
                //Send feedback otherwise
                res.send({message: "Incorrect credentials"});
            }
        }
    );
});

//Handle thread creation to forum feed
app.post('/createThread', (req, res) => {

    const thread_title = req.body.thread_title;
    const thread_content = req.body.thread_content;
    const thread_owner = req.body.thread_owner;
    const thread_comments = '[]';

    const sqlThread = "INSERT INTO user_threads (thread_owner, thread_content, thread_title, thread_comments) VALUES (?,?,?,?);"

    db.query(
        sqlThread,
        [thread_owner, thread_content, thread_title, thread_comments],
        (err, result) => {

            if(err){
                res.send(err);
            }else{
                res.send(result)
            }
            console.log(result)
        }
    );
});

app.get('/grabAllThreads', (req, res) => {

    const threadQuerySQL = "SELECT * FROM forum_app_db.user_threads;";


    db.query(
        threadQuerySQL,
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send(result);
            console.log('this is responding');
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