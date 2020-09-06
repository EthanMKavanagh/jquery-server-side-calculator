// Setting up document
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const PORT = 3000;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

// declaring variable
let math = [];

//-------------------------------------------------------------

// GET
app.get( '/mathematics', ( req, res ) => {
    console.log( 'inside of app.get!' );
    console.log( 'what is math?', math );
    // sending the variable math back to client.js
    res.send( math );
} ); // end GET

//-------------------------------------------------------------

// POST
app.post( '/mathematics', ( req, res ) => {
    // declaring req.body to a different variable
    let objectToSend = req.body;

/* Work in progress!
    // making sure inputs aren't empty
    if( objectToSend.inputOne === '' || objectToSend.operator === '' || objectToSend.inputTwo === '' ){
        res.sendStatus( 401 );
    } // end if
*/

    // pushing variable into calculations function
    calculations( objectToSend );

    function calculations(){
        let equation;
        // addition operator
        if( objectToSend.operator === '+' ){
            console.log( 'adding numbers' );
            equation = Number( objectToSend.inputOne ) + Number( objectToSend.inputTwo );
        } // end if
        // subtraction operator
        else if( objectToSend.operator === '-' ){
            console.log( 'subtracting numbers' );
            equation =  Number( objectToSend.inputOne ) - Number( objectToSend.inputTwo );
        } // end else if
        // multiplication operator
        else if( objectToSend.operator === '*' ){
            console.log( 'multiplying numbers' );
            equation = Number( objectToSend.inputOne ) * Number( objectToSend.inputTwo );
        } // end else if
        // division operator
        else if( objectToSend.operator === '/' ){
            console.log( 'dividing numbers' );
            equation = Number( objectToSend.inputOne ) / Number( objectToSend.inputTwo );
        } // end else if
        // fallback in case the function is broken
        else{
            console.log( 'Somethings wrong in calculation' );
        } // end else
        console.log( 'Answer is:', equation );
        // adding another property to the objectToSend object
        objectToSend.answer = equation;
        // pushing objectToSend to variable math
        math.push( objectToSend );
        
    } // end calculations
    
    console.log( 'req.body is:', req.body );
    // sending back the OK
    res.sendStatus( 200 );
} ); // end POST

//-------------------------------------------------------------

// listen
app.listen( PORT, () => {
    console.log( 'Node listening at port:', PORT );
} ); // end listen