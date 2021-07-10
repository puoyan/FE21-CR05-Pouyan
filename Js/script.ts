interface location{
	city:string;
	name:string;
	ZIPCode:number;
	address:string;
	image:string;
}

var loc1:location = {
	"city":"Tehran",
	"name":"Theatre Shahr",
	"ZIPCode":0o21,
	"address":"Chaharrahe Valiasr ",
	"image":"./img/theatreShahr.jpeg",
}

var loc2:location  = {
	"city":"Tehran",
	"name":"pol",
	"ZIPCode":19,
	"address":"Chamran highway",
	"image":"./img/tabiatBridge.jpeg",
}

class Locations{
	
	myLocations = [];
	myResturantArray = [];
	myEvent = [];
	constructor(location:{
	city:string;
	ZIPCode:number;
	address:string;
	image:string;
	}){
		this.myLocations.push(location);
	}
	
	display(){
		for(let location of this.myLocations)
		{
			var myCode = `<div class="col col-md-6 col-lg-3 col-sm-12"><div class="box">
			<div class="card mb-5" >
				<img class="card-img-top" src="${location.image}" alt="Card image cap">
				<div class="card-body">
				  <p><span>ZipCode: </span>${location.ZIPCode} </p>
				  <p><span>City: </span>${location.city}</p>
				  <p><span>Address: </span>${location.address}</p>
				</div>
			      </div>
			</div></div>`;
			document.getElementById('blog').innerHTML += myCode;
		}

	}

	addLocation(input){
		this.myLocations.push(input);
	}
}

var locationObject1 = new Locations(loc1);
locationObject1.addLocation(loc2);
locationObject1.display();

//--------------------------------------------
//--------------------------------------------
interface resturant{
	name:string;
	address:string;
	image:string;
	telephone:number;
	type:string;
	website:string;
	ZIPCode:number;
	city:string;
}

var rest1:resturant ={
	"name":"Leon",
	"image":"./img/res1.jpeg",
	"telephone":0o21334433,
	"type":"Italian",
	"website":"www.leon.com",
	"address":"Hafte tir",
	"ZIPCode":0,
	"city":"",
}
var rest2:resturant = {
	"name":"Milad",
	"image":"./img/res2.jpeg",
	"telephone":0o2145677,
	"type":"Iranian",
	"website":"www.milad.com",
	"address":"Tehran",
	"ZIPCode":0,
	"city":"",
}

class Restaurant extends Locations{
	constructor(resturant:{
	name:string;
	address:string;
	image:string;
	telephone:number;
	type:string;
	website:string;
	ZIPCode:number;
	city:string;
	}){
		let location = {
			"city":resturant.city,
			"image":resturant.image,
			"address":resturant.address,
			"ZIPCode":resturant.ZIPCode
		}
		super(location);
		this.myResturantArray.push(resturant);
	}
	
	display(){
		for(let resturant of this.myResturantArray)
		{
			var myCode = `<div class="col col-md-6 col-lg-3 col-sm-12"><div class="box">
			<div class="card mb-5" >
				<img class="card-img-top" src="${resturant.image}" alt="Card image cap">
				<div class="card-body">
				<p><span>name: </span>${resturant.name}</p>
				  <p><span>telephone: </span>${resturant.telephone} </p>
				  <p><span>website: </span>${resturant.website}</p>
				</div>
			      </div>
			</div></div>`;
			document.getElementById('blog').innerHTML += myCode;
		}
	}

	addResturant(input){
		this.myResturantArray.push(input);
	}

}
var resturantObject = new Restaurant(rest1);
resturantObject.addResturant(rest2);
resturantObject.display();
//--------------------------------------------
//--------------------------------------------










class Events extends Locations{
	constructor(event:{
	city:string;
	name:string;
	ZIPCode:number;
	address:string;
	image:string;
	eventDate:string;
	eventTime:string;
	website:string;
	ticketPrice:number;
	}){
		let location = {
			"city":event.city,
			"image":event.image,
			"address":event.address,
			"ZIPCode":event.ZIPCode
		}
		super(location);
		this.myEvent.push(event);
	}
        
	display(){
		for(let event of this.myEvent)
		{
			var myCode = `<div class="col col-md-6 col-lg-3 col-sm-12">
			<div class="box">
			<div class="card mb-5" >
				<img class="card-img-top" src="${event.image}" alt="Card image cap">
				<div class="card-body">
				<p><span></span>${event.name}</p>
				<p><span>website: </span>${event.website}</p>
				  <p><span>sat: </span>${event.eventDate} ${event.eventTime} </p>
				  <p><span>address: </span>${event.address}</p>
				  <p><span>€: </span>${event.ticketPrice}</p>
				</div>
			      </div>
			</div>
			</div>`;
			document.getElementById('blog').innerHTML += myCode;
		}
	}
	addEvent(input){
		this.myEvent.push(input);
	}
}



var concert1 ={
	"city":"",
	"name":"Ahmad Pejman",
	"image":"./img/ahmad.jpeg",
	"website":"www.leon.com",
	"eventDate":"25.5.2021",
	"eventTime":"19:30",
	"address": "Vahdat Halle - Tehran 021",
	"ticketPrice":40,
	"ZIPCode":111
}
var concert2 ={
	"name":"Keyhan Kalhor",
	"image":"./img/keyhan.jpeg",
	"website":"www.keyhan.com",
	"eventDate":"12.8.2021",
	"eventTime":"20:30",
	"address": "Vahdat Halle - tehran 021",
	"ticketPrice":30,
	"ZIPCode":111,
	"city":""
}

var concertObject = new Events(concert1);
concertObject.addEvent(concert2);
concertObject.display();
