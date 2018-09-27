window.onload=getUsersNumbers;


//============== THIS FUNCTION IS THE MAIN ONE, IT EXECUTE WHEN THE PAGE FULLY LOADS INTO THE BROWSER =========
function getUsersNumbers() {

	// Define some variables without using the word var which will make them global variables

	usersNumbers = new Array(6);                   // Global array, note how var is missing
	balls = new Array(6);                          // Global array, note how var is missing

	var c = document.getElementById("lottoCanvas");
	ctx = c.getContext("2d");                      // Global variable, note how var is missing

	document.getElementById("lottoCanvas").style.background = "silver";  // Set background colour of canvas

    // Fill the usersNumbers array by prompting the user to enter 6 numbers

    for (var count = 0; count < 6; count++) {
        usersNumbers[count] = window.prompt("Enter your number (between 1 - 49) " + "ball number " + (count + 1) + ": ");
    }
    document.lotto.usersNumbers.value = usersNumbers;
}
//===============================================================================================================


//-----------------------------------------------------------------------------------
function bonusNumber() {
    var usersBonusBall = 0;

    document.lotto.bonusBall.value = window.prompt("Enter your Bonus Ball Number: ");
}

//-----------------------------------------------------------------------------------
function myFunction() {
    location.reload();
}
//-----------------------------------------------------------------------------------

// Draw Balls
function drawBalls()
{

	var randomNumber = 0;
	for (var i = 0 ; i < 6 ; i++ )
	{
	   do
		randomNumber = Math.floor(Math.random()*49+1);
	   while(balls.indexOf(randomNumber) !== -1)

	  balls[i] = randomNumber;
    }

	ctx.strokeStyle = "red";
	ctx.font = "20px Arial";
	ctx.lineWidth = "3";
	ctx.fillStyle = "green";


	// Sort the array named balls

	balls.sort( function(a, b){return a-b} );

	var x=50;
	var y=305;
	var r = 30;
	var gap = 35;

	for (var i = 0 ; i < balls.length ; i++)
	{
		ctx.beginPath();
		ctx.arc(x,y,r,0,2*Math.PI);
		ctx.stroke();
		ctx.fillText(balls[i], x-10, y+10);

		x += 2*r + gap;
	}

	// Show computer generated Bonus ball
	r = 40;
	x = 650;
	var bonusBall = Math.floor(Math.random()*49 + 1);

	ctx.strokeStyle = "black";
	ctx.fillStyle = "purple";
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.stroke();
	ctx.fillText(bonusBall, x-10, y+10);

//------------------------------------------------------
// This code below will show the Lottery ball matches as soon as you load up the Canvas balls!
//------------------------------------------------------
getMatch()
}

//=============================================================================================

function getMatch()
{
     var matches = [];
     var sorryMessage = "Sorry, you have not got any matches today!";
     var matchesFound = 0;

     for ( var i = 0; i < balls.length; i++ )
     {
         for ( var e = 0; e < usersNumbers.length; e++ )
         {
             if ( balls[i] === parseInt(usersNumbers[e]) )  // Note how users text input is converted to an int before comparing
             {
                matches.push( balls[i]);
                matchesFound++;
             }
         }
     }

     if (matchesFound === 0)
        document.lotto.getMatchField.value = sorryMessage;
     else
        document.lotto.getMatchField.value = "You have the following matches... " + matches;

 }


 //==============================================================================================





