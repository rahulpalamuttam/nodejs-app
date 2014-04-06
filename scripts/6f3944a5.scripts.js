"use strict";angular.module("wtbApp",["ngCookies","ngResource","ngSanitize","leaflet-directive","ngRoute","ngCollection"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/test",{templateUrl:"views/tools.html",controller:"MainCtrl"}).when("/map",{templateUrl:"views/map.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("wtbApp").controller("MainCtrl",["$scope","$http","leafletData","$collection",function(a,b,c){a.showLeaflet=function(){console.log(a.markers),c.getMap().then(function(a){console.log(a)})},a.DHs={Cowell:{lat:36.996991744785,lng:-122.0530629158,message:"Cowell/ Stevenson"},NineTen:{lat:37.001093932027,lng:-122.05775812268,message:"9/10 Dining Hall"},Oakes:{lat:36.991587873187,lng:-122.06532329321,message:"College 8 / Oakes"},Porter:{lat:36.994365371902,lng:-122.06584632396,message:"Porter / Kresge"},Crown:{lat:36.999974688794,lng:-122.05444693565,message:"Crown / Merrill"}},a.url="http://www.kimonolabs.com/api/ce6dd1oc?apikey=2323b50a71ade7d336c82c9f9dd5c072",a.newMessage="",a.messages=["Steve Jobs - 515,000,000 results"],a.add=function(){b.jsonp(a.url).then(function(b){a.newMessage=b.data,a.messages.push(a.newMessage)}),console.log(a.newMessage)},a.addNew=function(){},a.altLoc="",a.startup=!0,a.pos,a.altLook,a.geoLook=function(){a.startup=!1,alert("hi"),a.showLoc=!1,navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(b){a.pos=b,a.showLoc=!0,a.$apply(),console.log(a.pos)},function(){a.showLoc=!1,a.$apply()})};var d={default_icon:{},leaf_icon:{iconUrl:"examples/img/leaf-green.png",shadowUrl:"examples/img/leaf-shadow.png",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-3,-76]},div_icon:{type:"div",iconSize:[230,0],html:"Using <strong>Bold text as an icon</strong>: Lisbon",popupAnchor:[0,0]},orange_leaf_icon:{iconUrl:"examples/img/leaf-orange.png",shadowUrl:"examples/img/leaf-shadow.png",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],shadowAnchor:[4,62]}};angular.extend(a,{icons:d}),angular.extend(a,{lisbon:{lat:36.98904808157193,lng:-122.0545220375061,zoom:14},markers:{},defaults:{scrollWheelZoom:!1}})}]);