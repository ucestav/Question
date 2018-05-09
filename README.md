# Question
The question app used to click a location on a map and insert one question and four answers into the database

The objective of the Question App is to create a new question when a point on the map is clicked. The user inputs a question and four alternative answers which relate to the POI. The data is then stored in a database and can be inserted into the Quiz App when it is launched.

Similar to the Quiz App, there are 4 files that are used to achieve functionality in the Question App.  The ‘index.html’ file has code relating to the app design, the ‘upload.Data.js’ relates to uploading data into the database, ‘appActivity.js’ relates to quiz functions, and ‘httpServer.js’ allows data transfer between database and app. The user guide is labelled 'Question_Guide.html' in www directory. 

Quiz data from the PostgreSQL database is requested and inserted into the Question App. A marker is inserted on a map to identify the location of the quiz points and a corresponding popup states that it is a ‘Location with Existing Question’. The user is able to select any point on a map and a popup with text fields relating to the question, four alternative answers, correct answer, longitude and latitude is created. The user inserts the relevant information for each text field and these values are inserted into the PostgreSQL databse when the submit button is pressed. The location of a user is tracked and the map view is set to its boundaries. This function helps the user to identify their own position and they can become orientated with their own surroudings first. 

Steps to Run Question App
1. Download Question App: The code to run this app is on a GitHub account (https://github.com/ucestav).
2. Run NodeJS Server: Existing questions are inserted on the map and new questions are uploaded into the database 
3. Open Question App and locate user's position: The user's location is identified by a red marker and the map view is set to have the user's location at the centre. 
4. Search map and click on a location: Existing questions are identified by blue markers. A user creates a question that is relevant to the location.
5. A popup with textboxes will appear at the clicked location and the user is required to input the following data: a question, four alternative answers, the correct answer, longitude and latitude.
6. After all textboxes are filled out, press the submit button and the data is inserted into the database.

**References for the Question App**

[uploadData.js All code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API) , accessed 18th April 2018]

[index.html Material Design for index.html documents: code adapted from Material Design -https://getmdl.io/templates/index.html, accessed 23rd April 2018]

[appActivity.js  Adding a Leaflet Map: Code adapted from https://leafletjs.com/, accessed 25/04/2018 and UCL CEGEG077 Module, Week 1:Leaflet and Javascript Part 1, accessed 21st April 2018

Event Detector for Map Click: Code adapted from https://leafletjs.com/examples/quick-start/, accessed 22th April 2018

Track location of User: Code adapted from https://www.w3schools.com/html/html5_geolocation.asp, accessed 26th April 2018

Get LatLngBounds: Code adapted from https://leafletjs.com/reference-1.3.0.html#latlngbounds, accessed 26th April 2018

AJAX HttpRequest: Code adapted from https://www.w3schools.com/xml/xml_http.asp, accessed 27th April 2018 and UCL CEGEG077 Module, Week 5:Creating an HTTPS Server, accessed 22nd April 2018
