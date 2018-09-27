// JavaScript Document

function init()
{
	 document.getElementById("Weight").focus();
}

//===========================================================================

function BMICalc() 
{ 

 
   var F = document. BMICalculator.weight.value; 
   var C = 0; // Initialise the variable 
 
   if (isNaN(F)) //Pass the entered value of degrees Fahrenheit to the function
   {
	 alert (F + "is not a valid number. Please enter a number....");
	 document.getElementById("height").focus();
   }
   else
   {
		bmi = weight / (height * height) ; // Convert Height and weight to BMI
	
	    document. BMICalculator.BMI.value = BMI.toFixed(2); 
	    document.getElementById("weight").focus();

   } 
}
