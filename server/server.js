const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const PORT = 3000;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
/*
let math = [];

//-------------------------------------------------------------

// GET
app.get( '/mathematics', ( req, res ) => {
    console.log( 'inside of app.get!' );
    console.log( 'what is math?', math );
    res.send( math );
} ); // end GET

//-------------------------------------------------------------

// POST
app.post( '/mathematics', ( req, res ) => {
    let objectToSend = req.body;
    calculations( objectToSend );

    function calculations(){
        let equation;
        if( objectToSend.operator === '+' ){
            console.log( 'adding numbers' );
            equation = Number( objectToSend.inputOne ) + Number( objectToSend.inputTwo );
        } // end if
        else if( objectToSend.operator === '-' ){
            console.log( 'subtracting numbers' );
            equation =  Number( objectToSend.inputOne ) - Number( objectToSend.inputTwo );
        } // end else if
        else if( objectToSend.operator === '*' ){
            console.log( 'multiplying numbers' );
            equation = Number( objectToSend.inputOne ) * Number( objectToSend.inputTwo );
        } // end else if
        else if( objectToSend.operator === '/' ){
            console.log( 'dividing numbers' );
            equation = Number( objectToSend.inputOne ) / Number( objectToSend.inputTwo );
        } // end else if
        else{
            console.log( 'Somethings wrong in calculation' );
        } // end else
        console.log( 'Answer is:', equation );
        objectToSend.answer = equation;
        math.push( objectToSend );
        
    } // end calculations
    
    console.log( 'req.body is:', req.body );
    res.sendStatus( 200 );
} ); // end POST

//-------------------------------------------------------------

// listen
app.listen( PORT, () => {
    console.log( 'Node listening at port:', PORT );
} ); // end listen
*/