// Question App

      //Code adapted from https://leafletjs.com/, accessed 25/04/2018 and UCL CEGEG077 Module, Week 1:Leaflet and Javascript Part 1, accessed 21st April 2018
     // Create a global variable to hold map 
	 // Define the coordinates for map view and set the zoom level
     var mymap = L.map('mapid').setView([51.505, -0.09], 13);
     // Insert map tiles
     L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
	                  maxZoom: 18,
					  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, '+
               					  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '+ 
								  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                      id: 'mapbox.streets'
                }).addTo(mymap);
				
	// Run the function to insert existing quiz data when the document is loaded
	document.addEventListener('DOMContentLoaded', function() {    
	getpois(); 
	}, false); 
				
	//Code adapted from https://www.w3schools.com/html/html5_geolocation.asp, accessed 26th April 2018
	// Track location of user
	 function trackLocation() {     
            if (navigator.geolocation) {         
	        navigator.geolocation.watchPosition(showPosition);     
	            } 
				 else {
					    document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";     
	                  } 
            } 
  
    //Show the position of a user on the map
     function showPosition(position){
	 // Create an icon to mark the position of a user 
	 // Set the size of icon
	 var position_icon = L.icon({
         iconUrl: 'my-icon.png',
         iconSize: [25, 40],
         });

     //Code adapted from https://leafletjs.com/reference-1.3.0.html#latlngbounds, accessed 26th April 2018
	//Create a variable to hold bounds of user's position (longitude and latitude)
    bounds = new L.LatLngBounds();
	//Show the coordinates of a user in the 'showLocation' div which is located under the map
    document.getElementById('showLocation').innerHTML = "<b>Coordinates of Current Location</b>" + "<br>Latitude: " 
	                                                    + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
    //Create an icon marker for a user's position														
	marker = L.marker([position.coords.latitude, position.coords.longitude], {icon: position_icon})
	//add marker to map
	.addTo(mymap)
	//extend boundary to get marker position
	bounds.extend(marker.getLatLng());
	//fit the map to the boundary
	mymap.fitBounds(bounds);
    }  

	       
	// Create a global variable to hold popup data
	var popup = L.popup(); 
     //The event detector function is run when a user clicks on a point on the map
	 //Code adapted from https://leafletjs.com/examples/quick-start/, accessed 22th April 2018
	 // A popup will then appear for a user to insert data(e.g. question, four answers, the correct answer, longitude and latitude) into the database 
	function onMapClick(e) {  
			          popup    
					         .setLatLng(e.latlng)    
							 .setContent('<h3>Insert a Question</h3>'+
		                     '<label for="question">Question </label>' + '<input style="margin:auto;display:block"  type="text" size="25" id="question"/></p>' +
						     '<label for="check1">Answer 1 </label>' + '<input style="margin:auto;display:block"  type="text" size="25" id="check1"/><br />'+
						     '<label for="check2">Answer 2 </label>' + '<input style="margin:auto;display:block"  type="text" size="25" id="check2"/><br />'+
						     '<label for="check3">Answer 3 </label>' + '<input style="margin:auto;display:block"  type="text" size="25" id="check3"/><br />'+
						     '<label for="check4">Answer 4 </label>' + '<input style="margin:auto;display:block"  type="text" size="25" id="check4"/><br />'+
						     '<br /><label for="correctanswer">Correct Answer </label>' + '<input style="margin:auto;display:block" type="text" size="25" id="correctanswer"/>' +
						     '<br /><label for="latitude">Latitude </label>' + '<input style="margin:auto;display:block"  type="text" size="25" id="latitude"/><br />' +
						     '<label for="longitude">Longitude </label>' + '<input style="margin:auto;display:block"  type="text" size="25" id="longitude"/><br />' +
						     '<p> <div id="dataUploadResult"></div>' + '<button style="margin:auto;display:block" id="startUpload" onclick="startDataUpload()">Submit Answer</button></p>')    
							 .openOn(mymap);        
			} 
            // add the event detector data to map
			mymap.on('click', onMapClick);  
	
	//Code adapted from https://www.w3schools.com/xml/xml_http.asp, accessed 27th April 2018 and UCL CEGEG077 Module, Week 5:Creating an HTTPS Server, accessed 22nd April 2018
    //Retrieve the quiz data from the database by using httpServer
    var poilayer;
    function getpois() {    
          client = new XMLHttpRequest();    
          client.open('GET','http://developer.cege.ucl.ac.uk:30268/getPOI'); 
          client.onreadystatechange = poiResponse;  
	      client.send(); 
    } 
        
    //Check if data is ready and process it
    function poiResponse() {      
         if (client.readyState == 4) {         
	     var poidata = client.responseText;     
	     loadPoilayer(poidata);     
	     } 
    } 
   	    
	//Load data and parse it to retrieve quiz data values (e.g. question)
	function loadPoilayer(poidata) {
         var poijson = JSON.parse(poidata);
		    //Create a geojson layer 
	         poilayer = L.geoJson(poijson, {
			//For each feature, create a popup that marks the location of a question
		     onEachFeature: function (feature, layer) {
		     pop = layer.bindPopup('Location with Existing Question');  
						  		  }
            }
	    )
		//add (geojson) quiz data to map 
		.addTo(mymap);     
		//Open the popup attached to each marker
	     pop.openPopup();
    }