var person = {
    fname: "saikrishna",
    lname: "baludhara"
};

console.log( person );

// array opens with [] and separated with commas.

var players = [ "rahul", "rohit", "virat", "dhoni" ];
console.log( players[ 2 ] );

players.push( "sai krsihna" ) //Adding a value to array
players.unshift( "sriram" );// Value added to staring posiotion
players.shift() // will remove firtst value
players.pop() //
players.splice(1,0,"sai krsihna") //will remove at given index 
players.sort()
players.reverse()



for ( var i = 0; i < players.length; i++ )
{
    console.log( players[ i ] )
    document.write(players[i]+"<br>")
}