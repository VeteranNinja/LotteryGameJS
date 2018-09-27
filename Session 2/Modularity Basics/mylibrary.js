function convertFtoC(F) 
{ 
 var C = 0; // Initialise a local variable 
 C = 5.0/9.0*(F-32);
 return C; // Return the result back to the function call 
} 
//---------------------------------------------------------------------------------- 
function convertCtoF(C) 
{ 
 var F = 0; 
 F = (9.0/5.0 * C) + 32 ; 
 return F; 
} 
//---------------------------------------------------------------------------------- 
// Other functions can be written under here