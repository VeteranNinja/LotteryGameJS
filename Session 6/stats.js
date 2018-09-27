
   //*********** FUNCTION TO FILL AN ARRAY WITH RANDOM NUMBERS (0 TO A MAX VALUE) ***********

   function fillArrayRandomNumbers(arr, max )
   {
     for (var i = 0 ; i < arr.length ; i++ )  // i is a typical variable name for array index numbers
     {
       arr[i] = Math.floor(Math.random()*max + 1);  // Put a random number into the array
     }
     return arr;
   }

   //*********** FUNCTION TO FILL DISPLAY THE CONTENTS OF AN ARRAY ***********

   function displayArray(arr)
   {
      document.write("<br />");
      for (var i = 0 ; i < arr.length ; i++ )
      {
        document.write("Element[" + i +"] = " + arr[i] + "<br />");
      }
      document.write("<br />");
   }

   //*********** FUNCTION TO CALCULATE THE MEAN OF A SET OF NUMBERS IN AN ARRAY ***********

   function calcMeanOfArray(arr)
   {
     var sum = 0;
     var mean = 0;

	 for (var i = 0 ; i < arr.length ; i++ )
	 {
	   sum += arr[i];
	 }

	 mean = sum / arr.length;
	 return mean;

   }
var days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];  //Initialise a literal array
var carMakes = new Array('Ford', 'Vauxhall', 'VW', 'Toyota');     //Create and initialise an array object
var marks = new Array(10);                                        //Create and set the size of an array object

displayArray(days);      // In this context the word days is referring to where the array is in memory.
displayArray(carMakes);

fillArrayRandomNumbers(marks , 100);
displayArray(marks);
document.write("<br /> The mean of the set of exam marks = " + calcMeanOfArray(marks) + "<br />");