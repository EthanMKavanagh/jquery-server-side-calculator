$( document ).ready( onReady );

function onReady(){
    refreshMath();
    $( document ).on( 'click', '#additionBtn', onAddition );
    $( document ).on( 'click', '#subtractionBtn', onSubtraction );
    $( document ).on( 'click', '#multiplicationBtn', onMultiplication );
    $( document ).on( 'click', '#divisionBtn', onDivision );
    $( document ).on( 'click', '#equalsBtn', onEquals );
    $( document ).on( 'click', '#clearBtn', onClear );
} // end onReady

//-------------------------------------------------------------

// operator functions, sets operator to a specific value depending on which button is clicked
let operator;
function onAddition(){
    operator = '+'
} // end onAddition
function onSubtraction(){
    operator = '-'
} // end onSubtraction
function onMultiplication(){
    operator = '*'
} // end onMultiplication
function onDivision(){
    operator = '/'
} // end onDivision
function onClear(){
    objectToSend = {
        inputOne: $( '#firstInput' ).val( '' ),
        operator: '',
        inputTwo: $( '#secondInput' ).val( '' )
    } // end objectToSend
} // end onClear

//-------------------------------------------------------------

// ajax GET
function refreshMath(){
    $.ajax( {
        url: '/mathematics',
        method: 'GET'
    } ).then( function( response ){
        console.log( 'We got a response:', response );
        let el = $( '#answerOut' );
        let element = $( '.listOut' );
        element.empty();
        // append list items and answer
        for( let i = 0; i < response.length; i++ ){
            $( '.listOut' ).append( `
                <li>
                    ${response[ i ].inputOne}
                    ${response[ i ].operator}
                    ${response[ i ].inputTwo}
                    =
                    ${response[ i ].answer}
                </li>
            ` );
            el.empty();
            $( '#answerOut' ).append( `
                <h2>
                    ${response[ i ].answer}
                </h2>
            ` );
        } // end for
    } ).catch( function( errorInfo ){
        alert( 'Error in ajax GET', errorInfo );
    } ); // end AJAX
} // refreshMath

//-------------------------------------------------------------

function onEquals(){
    // object
    let objectToSend = {
        inputOne: $( '#firstInput' ).val(),
        operator: operator,
        inputTwo: $( '#secondInput' ).val()
    } // end objectToSend
    $.ajax( {
        url: '/mathematics',
        method: 'POST',
        data: objectToSend
    } ).then( function( response ) {
        console.log( 'Created a math problem:', response );
        // call refreshMath to keep the DOM up to date
        refreshMath();
    } ).catch( function( errorInfo ){
        alert( 'Error in ajax POST', errorInfo );
    } ); // end AJAX
} // end onEquals