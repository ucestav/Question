# Question
The question app used to click a location on a map and insert one question and four answers into the database

A new question is created when a user clicks on a point on the map. A question relating to the point is inserted into the text input of a popup, along with the additional details (e.g. coordinates). These values are submitted into the PostgreSQL database which is then inserted into the Quiz App when deployed. A new question can be submitted when the user clicks on a new map point. The Question App tracks the position of a user and the map view is set to its location boundaries. This is beneficial since the user can easily identify their own position and become aware of nearby POI's.

There are 4 files in the Question Repository that are used to carry out tasks within the Question App. The ‘index.html’ file has code relating to the app design, the ‘upload.Data.js’ relates to uploading data into the database, ‘appActivity.js’ relates to functions used in the question activity, and ‘httpServer.js’ allows data transfer between database and app. The user guide is labelled 'Question_Guide.html' in www directory. A link in the navigation bar and dropdown menu of the (index) HTML file has been created to retrieve information about using the Question App.

A connection to the PostgeSQL database is established and information in the quiz table are read into the Question App. A blue marker is used to identify quiz point locations and a corresponding popup states that it is a ‘Location with Existing Question’. A red marker is used to identify the user's current location. Once a user clicks on a point in the map, a popup with input text fields is displayed at the clicked map position. Input text fields for a question, four alternative answers, a correct answer, longitude and latitude is created in the popup. A user fills out each text field and clicks on the submit button once completed. This instigates a function which inserts the data into corresponding rows and columns of the quiz table in PostgreSQL.

Steps to Run Question App
1. Download Question App: The code to run this app is on a GitHub account (https://github.com/ucestav).
2. Run NodeJS Server: Existing questions are inserted on the map and new questions are uploaded into the database 
3. Open Question App and locate user's position: The user's location is identified by a red marker and the map view is set to have the user's location at the centre. 
4. Search map and click on a location: Existing questions are identified by blue markers. A user creates a question that is relevant to the location.
5. A popup with textboxes will appear at the clicked location and the user is required to input the following data: a question, four alternative answers, the correct answer, longitude and latitude.
6. After all textboxes are filled out, press the submit button and the data is inserted into the database.

**References for the Question App**
[uploadData.js Code adapted from UCL CEGEG077 Module, Week 6 and 7:Creating a Data Server (API), accessed 18th April 2018, Also available from: https://github.com/claireellul/cegeg077-week6formcode/blob/master/ucfscde/www/js/uploadData.js ]

[index.html Code adapted from Material Design - : https://getmdl.io/templates/index.html, accessed 23rd April 2018]

[appActivity.js Adding a Leaflet Map: Code adapted from https://leafletjs.com/, accessed 25/04/2018 and UCL CEGEG077 Module, Week 1:Leaflet and Javascript Part 1, accessed 21st April 2018, Also available from: https://github.com/claireellul/cegeg077-week5app/blob/master/ucfscde/www/js/appActivity.js

Get LatLngBounds: Code adapted from https://leafletjs.com/reference-1.3.0.html#latlngbounds, accessed 26th April 2018,

AJAX HttpRequest: Code adapted from https://www.w3schools.com/xml/xml_http.asp, accessed 27th April 2018 and UCL CEGEG077 Module, Week 5:Creating an HTTPS Server, accessed 22nd April 2018, Also available from: https://github.com/claireellul/cegeg077-week5server/blob/master/httpServer.js

Haversine Distance Between Two Points: Code adapted from https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-in-your-web-apps.html, accessed 19th April 2018, Also available from: https://github.com/claireellul/cegeg077-week1/blob/master/getDistance.html

Track location of User: Code adapted from https://www.w3schools.com/html/html5_geolocation.asp, accessed 26th April 2018. Also available from: https://github.com/claireellul/cegeg077-week4/blob/master/ucfscde/www/js/appActivity.js]
