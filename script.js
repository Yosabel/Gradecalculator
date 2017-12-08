
function calculateCurrentGrade(){
    console.log("hi my nae is");
    var homework = document.getElementById("hw").value;
    console.log(homework);
    var classwork= document.getElementById("cw").value;
    var tq = document.getElementById("tq").value;
    var homeworkWeight=parseInt(document.getElementById("hwweight").value);
    var classworkWeight=parseInt(document.getElementById("cwweight").value);
    var tqWeight =parseInt(document.getElementById("tqweight").value);
    console.log("hi my name is");
    var hwAverage = averageArray(convertArrayStringToNumber(homework));
    var cwAverage=averageArray(convertArrayStringToNumber(classwork));
    var tqAverage=averageArray(convertArrayStringToNumber(tq));

   var finalHw= (hwAverage * (homeworkWeight/100));
   console.log(finalHw);
   var finalCw=(cwAverage * (classworkWeight/100));
    console.log(finalCw);
   var finalTq=(tqAverage * (tqWeight/100));
   console.log(finalTq);
   var finalWeight= homeworkWeight+classworkWeight+tqWeight;
   console.log(finalWeight);
   var totalPoints=finalHw+finalCw+finalTq;
   console.log(totalPoints);
   var finalGrade= (totalPoints/finalWeight)*100;
    console.log(finalGrade);
    document.getElementById("finalGrade").innerHTML=finalGrade;
    return "you have a" + finalGrade + "%";

    // var classworkArray = convertArrayStringToNumber(classwork);
    // var classworkAvg = averageArray(classworkArray);

    // → takes data from page, calls on sub-functions to calculate the student grade and output it back to page.  Also “return” the result so that calculateGradeNeeded() can use it.
}

function convertArrayStringToNumber(string) {
    var array = string.split(",");
    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    return array;

    // takes an array of strings (from page) and returns the same array, except all the items are numbers.
// Use string.split(“,”)  to convert a string into an array of strings, then iterate through and convert each item in the array into a number like:
//     array[i] = parseInt(array[i])
}
  function averageArray(array) {
      console.log(array);
      var sum = 0;
      for (var i = 0; i < array.length; i++) {
          sum += array[i];
          console.log(sum);
          var average = sum / array.length;
          console.log(average);
      }
      return average;

      // → takes an array of numbers and returns the average of those numbers
  }


function calculateGradeNeeded(calculateCurrentGrade){
// calculateCurrentGrade
    // → takes the current grade returned by calculateCurrentGrade() and the grade desired and does the math to determine what the user needs on the final.
}

