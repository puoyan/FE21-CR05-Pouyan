var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var loc1 = {
    "city": "Tehran",
    "name": "Theatre Shahr",
    "ZIPCode": 17,
    "address": "Chaharrahe Valiasr ",
    "image": "./img/theatreShahr.jpeg"
};
var loc2 = {
    "city": "Tehran",
    "name": "pol",
    "ZIPCode": 19,
    "address": "Chamran highway",
    "image": "./img/tabiatBridge.jpeg"
};
var Locations = /** @class */ (function () {
    function Locations(location) {
        this.myLocations = [];
        this.myResturantArray = [];
        this.myEvent = [];
        this.myLocations.push(location);
    }
    Locations.prototype.display = function () {
        for (var _i = 0, _a = this.myLocations; _i < _a.length; _i++) {
            var location_1 = _a[_i];
            var myCode = "<div class=\"col col-md-6 col-lg-3 col-sm-12\"><div class=\"box\">\n\t\t\t<div class=\"card mb-5\" >\n\t\t\t\t<img class=\"card-img-top\" src=\"" + location_1.image + "\" alt=\"Card image cap\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t  <p><span>ZipCode: </span>" + location_1.ZIPCode + " </p>\n\t\t\t\t  <p><span>City: </span>" + location_1.city + "</p>\n\t\t\t\t  <p><span>Address: </span>" + location_1.address + "</p>\n\t\t\t\t</div>\n\t\t\t      </div>\n\t\t\t</div></div>";
            document.getElementById('blog').innerHTML += myCode;
        }
    };
    Locations.prototype.addLocation = function (input) {
        this.myLocations.push(input);
    };
    return Locations;
}());
var locationObject1 = new Locations(loc1);
locationObject1.addLocation(loc2);
locationObject1.display();
var rest1 = {
    "name": "Leon",
    "image": "./img/res1.jpeg",
    "telephone": 4569371,
    "type": "Italian",
    "website": "www.leon.com",
    "address": "Hafte tir",
    "ZIPCode": 0,
    "city": ""
};
var rest2 = {
    "name": "Milad",
    "image": "./img/res2.jpeg",
    "telephone": 576447,
    "type": "Iranian",
    "website": "www.milad.com",
    "address": "Tehran",
    "ZIPCode": 0,
    "city": ""
};
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(resturant) {
        var _this = this;
        var location = {
            "city": resturant.city,
            "image": resturant.image,
            "address": resturant.address,
            "ZIPCode": resturant.ZIPCode
        };
        _this = _super.call(this, location) || this;
        _this.myResturantArray.push(resturant);
        return _this;
    }
    Restaurant.prototype.display = function () {
        for (var _i = 0, _a = this.myResturantArray; _i < _a.length; _i++) {
            var resturant = _a[_i];
            var myCode = "<div class=\"col col-md-6 col-lg-3 col-sm-12\"><div class=\"box\">\n\t\t\t<div class=\"card mb-5\" >\n\t\t\t\t<img class=\"card-img-top\" src=\"" + resturant.image + "\" alt=\"Card image cap\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t<p><span>name: </span>" + resturant.name + "</p>\n\t\t\t\t  <p><span>telephone: </span>" + resturant.telephone + " </p>\n\t\t\t\t  <p><span>website: </span>" + resturant.website + "</p>\n\t\t\t\t</div>\n\t\t\t      </div>\n\t\t\t</div></div>";
            document.getElementById('blog').innerHTML += myCode;
        }
    };
    Restaurant.prototype.addResturant = function (input) {
        this.myResturantArray.push(input);
    };
    return Restaurant;
}(Locations));
var resturantObject = new Restaurant(rest1);
resturantObject.addResturant(rest2);
resturantObject.display();
//--------------------------------------------
//--------------------------------------------
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(event) {
        var _this = this;
        var location = {
            "city": event.city,
            "image": event.image,
            "address": event.address,
            "ZIPCode": event.ZIPCode
        };
        _this = _super.call(this, location) || this;
        _this.myEvent.push(event);
        return _this;
    }
    Events.prototype.display = function () {
        for (var _i = 0, _a = this.myEvent; _i < _a.length; _i++) {
            var event_1 = _a[_i];
            var myCode = "<div class=\"col col-md-6 col-lg-3 col-sm-12\">\n\t\t\t<div class=\"box\">\n\t\t\t<div class=\"card mb-5\" >\n\t\t\t\t<img class=\"card-img-top\" src=\"" + event_1.image + "\" alt=\"Card image cap\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t<p><span></span>" + event_1.name + "</p>\n\t\t\t\t<p><span>website: </span>" + event_1.website + "</p>\n\t\t\t\t  <p><span>sat: </span>" + event_1.eventDate + " " + event_1.eventTime + " </p>\n\t\t\t\t  <p><span>address: </span>" + event_1.address + "</p>\n\t\t\t\t  <p><span>\u20AC: </span>" + event_1.ticketPrice + "</p>\n\t\t\t\t</div>\n\t\t\t      </div>\n\t\t\t</div>\n\t\t\t</div>";
            document.getElementById('blog').innerHTML += myCode;
        }
    };
    Events.prototype.addEvent = function (input) {
        this.myEvent.push(input);
    };
    return Events;
}(Locations));
var concert1 = {
    "city": "",
    "name": "Ahmad Pejman",
    "image": "./img/ahmad.jpeg",
    "website": "www.leon.com",
    "eventDate": "25.5.2021",
    "eventTime": "19:30",
    "address": "Vahdat Halle - Tehran 021",
    "ticketPrice": 40,
    "ZIPCode": 111
};
var concert2 = {
    "name": "Keyhan Kalhor",
    "image": "./img/keyhan.jpeg",
    "website": "www.keyhan.com",
    "eventDate": "12.8.2021",
    "eventTime": "20:30",
    "address": "Vahdat Halle - tehran 021",
    "ticketPrice": 30,
    "ZIPCode": 111,
    "city": ""
};
var concertObject = new Events(concert1);
concertObject.addEvent(concert2);
concertObject.display();
