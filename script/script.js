function addValue(){
    // get the operands value
    value1 = document.getElementById ("input_a").value
    value2 = document.getElementById ("input_b").value

    // parse to integer. You can use: parseInt(input, 10);
    numA = parseInt(value1);
    numB = parseInt(value2);
    // perform operation
    sumval = numA + numB;
    // creating the text output
    text = numA + "+" + numB + " = " + sumval; 
    
    // (if you want to check) print out in console
    console.log(value1);
    console.log(value2);
    console.log(sumval);
    // change the text area

    document.mycalculator.output.value = text;
}


function mulValue(){
   //document.mycalculator.output.value = text;
   value1 = document.getElementById ("input_a").value
   value2 = document.getElementById ("input_b").value

 
   numA = parseInt(value1);
   numB = parseInt(value2);
   mulval = numA * numB;
 
   text = numA + "x" + numB + " = " + mulval; 

   console.log(value1);
   console.log(value2);
   console.log(mulval);

   document.mycalculator.output.value = text;
}


function divValue(){
    //document.mycalculator.output.value = text;
   value1 = document.getElementById ("input_a").value
   value2 = document.getElementById ("input_b").value

   numA = parseInt(value1);
   numB = parseInt(value2);
   divval = numA / numB;
 
   text = numA + "/" + numB + " = " + divval; 
   console.log(value1);
   console.log(value2);
   console.log(divval);

   document.mycalculator.output.value = text;
}
