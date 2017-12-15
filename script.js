
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
   ;
   return document.getElementById("finalGrade").innerHTML = "You Currently Have A " +  Math.round(finalGrade) + "%";


}

function convertArrayStringToNumber(string) {
    var array = string.split(",");
    for (var i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
    }
    return array;


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


  }


function calculateGradeNeeded(){
     var gradeWanted =parseInt(document.getElementById("finalgrade").value);
//     console.log(gradeWanted);
     var gradeWeight =parseInt(document.getElementById("finalweight").value);
//     console.log(gradeWeight);
     var currentGrade=parseInt(document.getElementById("currentGrade").value);
    var final=100*(gradeWanted + (gradeWeight-currentGrade))/gradeWeight;
    Math.round(final);
    return document.getElementById("neededOnFinal").innerHTML = "You Need A " +  Math.round(final) + "% On The Final In Order To Get A " + gradeWanted + "%"
}

