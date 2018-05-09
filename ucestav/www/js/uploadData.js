//Upload Data for Question App
//All code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API) , accessed 18th April 2018

//Create an AJAX call for inserting data into database
var client; 
 function processData(postString) {    
   client = new XMLHttpRequest();    
   client.open('POST','http://developer.cege.ucl.ac.uk:30268/uploadData',true);    
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
   client.onreadystatechange = dataUploaded;      
   client.send(postString); 
 } 

 //Once data is ready, show the response data in the 'datauploadResult' div which is located in the popup
 function dataUploaded() {   
   if (client.readyState == 4) {     
   document.getElementById("dataUploadResult").innerHTML = client.responseText;    
   }
  }
 
 function startDataUpload() { 
  //Retrieve the inputs of the question popup
  var question = document.getElementById("question").value; 
  var correctanswer = document.getElementById("correctanswer").value;
  var checkString= document.getElementById("check1").value + ',' + document.getElementById("check2").value + ',' 
                   + document.getElementById("check3").value + ',' + document.getElementById("check4").value; 
  //Assign question and correct answer input values to postString variable
  var postString = "&question="+question + "&correct_answer=" + correctanswer;  
  //Update postString variable to include answer values
  postString = postString + "&answerlist="+checkString;
  var latitude = document.getElementById("latitude").value;
  var longitude = document.getElementById("longitude").value;
  //Update postString variable to include longitude and latitude values
  postString = postString + "&latitude=" + latitude + "&longitude=" + longitude; 
  processData(postString);} 
 