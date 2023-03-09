// Ecma Script ES - versions
// european computer manufactures association

document.write( "KRishna Rama" );


var players = ["rahul","dk","virat","sachin","Hardik"]
players.forEach( function ( m )
{
    console.log(m);
} );

players.forEach( ( a,i,arr ) =>
{
    console.log( a + i );
    document.write(a + " with Players "+i + arr)
}) 