# Question
The question app used to click a location on a map and insert one question and four answers into the database

The objective of the Question App is to create a new question when a point on the map is clicked. The user inputs a question and four alternative answers which relate to the POI. The data is then stored in a database and can be inserted into the Quiz App when it is launched.

Similar to the Quiz App, there are 4 files that are used to achieve functionality in the Question App.  The ‘index.html’ file has code relating to the app design, the ‘upload.Data.js’ relates to uploading data into the database, ‘appActivity.js’ relates to quiz functions, and ‘httpServer.js’ allows data transfer between database and app. 

Quiz data from the PostgreSQL database is requested and inserted into the Question App. A marker is inserted on a map to identify the location of the quiz points and a corresponding popup states that it is a ‘Location with Existing Question’. The user is able to select any point on a map and a popup with text fields relating to the question, four alternative answers, correct answer, longitude and latitude is created. The user inserts the relevant information for each text field and these values are inserted into the PostgreSQL databse when the submit button is pressed. The location of a user is tracked and the map view is set to its boundaries. This function helps the user to identify their own position and they can become orientated with their own surroudings first. 

