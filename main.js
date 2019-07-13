let locations = [];	
document.addEventListener('DOMContentLoaded',function(){
	
	let obj = [
				  {
				    "latitude": 12.97007, 
				    "image": "Gruda-mall00.jpg_1536305492.jpg", 
				    "name": "Garuda Mall", 
				    "longitude": 77.60986, 
				    "address": "Magrath Rd, Ashok Nagar, Bengaluru, Karnataka 560025, India"
				  }, 
				  {
				    "latitude": 12.90775, 
				    "image": "Vega City Mall 2.jpg_1548054384.jpg", 
				    "name": "Vega City Mall", 
				    "longitude": 77.60108, 
				    "address": "No. 172/1, Srinivas Industrial Estate, Bannerghatta Road, Bengaluru, Karnataka 560076, India"
				  }, 
				  {
				    "latitude": 12.97326, 
				    "image": "1MgRoad_2.jpg_1533296556.jpg", 
				    "name": "1 MG-Lido Mall", 
				    "longitude": 77.62041, 
				    "address": "Trinity Circle, MG Road, Bengaluru, Karnataka 560001, India"
				  }, 
				  {
				    "latitude": 12.99704, 
				    "image": "phoenix.jpg_1537173615.jpg", 
				    "name": "Phoenix Marketcity", 
				    "longitude": 77.69662, 
				    "address": "Whitefield Main Road, Mahadevpura, Bengaluru, Karnataka 560048, India"
				  }, 
				  {
				    "latitude": 13.01079, 
				    "image": "orion_1.jpg_1536059547.jpg", 
				    "name": "Orion Mall", 
				    "longitude": 77.55489, 
				    "address": "Brigade Gateway, 26/1 Dr. Rajkumar Road, Malleshwaram West, Bengaluru, Karnataka 560055, India"
				  }, 
				  {
				    "latitude": 12.9795, 
				    "image": "inorbitmall.jpg_1537433038.jpg", 
				    "name": "Inorbit Mall", 
				    "longitude": 77.72873, 
				    "address": "75, Rd Number 7, EPIP Zone, Whitefield, Bengaluru, Karnataka 560066, India"
				  }, 
				  {
				    "latitude": 12.993288, 
				    "image": "gopalan-arcade-mall-facility.jpg", 
				    "name": "Gopalan Signature Mall", 
				    "longitude": 77.661712, 
				    "address": "Old Madras Road, C V Raman Nagar, Bengaluru, Karnataka"
				  }, 
				  {
				    "latitude": 12.99163, 
				    "image": "mantri mall.jpg_1535975934.jpg", 
				    "name": "Mantri Square Mall", 
				    "longitude": 77.57117, 
				    "address": "Sampige Rd, Malleshwaram West, Bengaluru, Karnataka 560003, India"
				  }, 
				  {
				    "latitude": 12.936, 
				    "image": "gopalan-arcade-mall.jpg", 
				    "name": "Gopalan Arcade Mall", 
				    "longitude": 77.5176, 
				    "address": "Mysore Rd, Kenchenhalli, RR Nagar, Bengaluru, Karnataka"
				  }, 
				  {
				    "latitude": 13.0011, 
				    "image": "orion east mall.jpg_1537864959.jpg", 
				    "name": "Orion East Mall", 
				    "longitude": 77.63266, 
				    "address": "10/34, Dodda Banaswadi Main Road, Banaswadi Layout, Maruthi Sevanagar, Bengaluru, Karnataka 560033, India"
				  }, 
				  {
				    "latitude": 12.99633, 
				    "image": "vrmall.jpg_1537341725.jpg", 
				    "name": "VR Bengaluru", 
				    "longitude": 77.6952, 
				    "address": "Whitefield Rd, Devasandra Industrial Estate, Mahadevapura, Bengaluru, Karnataka 560048, India"
				  }, 
				  {
				    "latitude": 12.876, 
				    "image": "ROYAL MEE.jpg_1538032410.jpg", 
				    "name": "Royal Meenakshi Mall", 
				    "longitude": 77.59563, 
				    "address": "Bannerghatta Main Road, Bengaluru, Karnataka 560076, India"
				  }, 
				  {
				    "latitude": 12.97361, 
				    "image": "GT WORLD MALL.jpg_1538802776.jpg", 
				    "name": "GT World Mall", 
				    "longitude": 77.55175, 
				    "address": "9th Cross Rd, Cholourpalya, Bengaluru, Karnataka 560023, India"
				  }, 
				  {
				    "latitude": 12.98722, 
				    "image": "ascendes park square mall.jpg_1548156905.jpg", 
				    "name": "Ascendas Park Square Mall", 
				    "longitude": 77.73647, 
				    "address": "40, ITPB Main Road, International Tech Park, Whitefield Road, Pattandur Agrahara, Whitefield, Bengaluru, Karnataka 560066, India"
				  }, 
				  {
				    "latitude": 12.95875, 
				    "image": "kemp-fort-mall-bangalore-1.jpg_1533297535.jpg", 
				    "name": "Kemp Fort Mall", 
				    "longitude": 77.65683, 
				    "address": "97, Old Airport Road, Near Murugeshpalya shiva temple, Bengaluru, Karnataka 560017, India"
				  }, 
				  {
				    "latitude": 12.9145, 
				    "image": "gopalan-innovation-mall.jpg", 
				    "name": "Gopalan Innovation Mall", 
				    "longitude": 77.5994, 
				    "address": "Bannerghatta Main Rd, Bengaluru, Karnataka"
				  }, 
				  {
				    "latitude": 12.95963, 
				    "image": "Forum_Value_Mall_in_Whitefield_Bangalore.JPG_1533292711.JPG", 
				    "name": "The Forum Neighbourhood Mall", 
				    "longitude": 77.74795, 
				    "address": "No.62, Whitefield Rd, Prestige Ozone, Whitefield, Bengaluru, Karnataka 560066, India"
				  }, 
				  {
				    "latitude": 12.96601, 
				    "image": "ak_895_92100188-1509438910_700x700.png_1549001160.png", 
				    "name": "Brookefield Mall ", 
				    "longitude": 77.71792, 
				    "address": "Sy No.111 &123/2, ITPL Main Rd, AECS Layout, Brookefield, Bengaluru, Karnataka 560037, India"
				  }, 
				  {
				    "latitude": 12.93478, 
				    "image": "FORUM KORMANGALA.jpg_1533295304.jpg", 
				    "name": "Forum Mall", 
				    "longitude": 77.61232, 
				    "address": "Hosur Rd, 7th Block, Koramangala, Bengaluru, Karnataka 560030, India"
				  }
			  ];
		  
    obj.forEach(function(element) {
	  	locations.push({lat: element.latitude, lng: element.longitude});
	  	let html, newhtml;
	  	html  = '<div class="col-sm-6 col-md-6 col-lg-4 mt-3 mb-3"><div class="card m-auto h-100" ><img src="pictures/%location_img.jpg%" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">%location_name%</h5><p class="card-text">%address%.</p></div></div></div>';
	  	newhtml = html.replace('%location_img.jpg%', element.image);
	  	newhtml = newhtml.replace('%address%',element.address);
	  	newhtml = newhtml.replace('%location_name%',element.name);
	  	console.log();
	  	document.querySelector('.row').insertAdjacentHTML('beforeend', newhtml);
	});
	

});

var map;
function initMap() {
	setTimeout(()=>{
		 var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 12.97007, lng: 77.60986}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length]
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	},3000);
 
}

document.getElementById('map-view').addEventListener('click',function(){
	document.getElementById('locations-list').style.display = 'none';
	document.getElementById('map').style.display = 'block';
});

document.getElementById('normal-view').addEventListener('click',function(){
	document.getElementById('locations-list').style.display = 'block';
	document.getElementById('map').style.display = 'none';
});