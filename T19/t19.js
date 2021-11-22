let search = document.querySelector("#search");
let back = document.querySelector(".back--2");
let page = document.querySelector(".slide--1");

let modal= document.querySelector(".modal-container");

let modal_one=document.querySelector(".modal--1");
let modal_two=document.querySelector(".modal--2");
let modal_three=document.querySelector(".modal--3");

let button_one= document.querySelector(".buton--1");
let button_two= document.querySelector(".buton--2");
let button_three= document.querySelector(".buton--3");

let close_one = document.querySelector(".mclose--1");
let close_two = document.querySelector(".mclose--2");
let close_three = document.querySelector(".mclose--3");


const spot ={"Kollam":[
	[ "Beypore Fort",
	"content1",
	"hotel-info1",
	"Restaurent-info1",
	],
	[ "name2",
	"mcontent2",
	"content2",
	"hotel-info2",
	"Restaurent-info2",
	],
	[ "name3",
	"content3",
	"hotel-info3",
	"Restaurent-info3",
	]
]};


search.addEventListener('click',function(){
	var dis = document.getElementById("dropdown");
	var district = dis.options[dis.selectedIndex].text;
	document.querySelector('#placedesc').innerHTML = "Here are some awesome places to visit at "+district;
	document.querySelector('.ctitle--1').innerHTML = spot[district][0][0];
	document.querySelector('.ctitle--2').innerHTML = spot[district][1][0];
	document.querySelector('.ctitle--3').innerHTML = spot[district][2][0];
	page.classList.add("sliding-front");
});


back.addEventListener('click',function(){
	page.classList.remove("sliding-front");
});

button_one.addEventListener('click',function(){
	modal.classList.add("modal-appear");
	modal_one.classList.add("smodal-appear");
});


close_one.addEventListener('click',function(){
	modal.classList.remove("modal-appear");
	modal_one.classList.remove("smodal-appear");
});

button_two.addEventListener('click',function(){
	modal.classList.add("modal-appear");
	modal_two.classList.add("smodal-appear");
});


close_two.addEventListener('click',function(){
	modal.classList.remove("modal-appear");
	modal_two.classList.remove("smodal-appear");
});

button_three.addEventListener('click',function(){
	modal.classList.add("modal-appear");
	modal_three.classList.add("smodal-appear");
});


close_three.addEventListener('click',function(){
	modal.classList.remove("modal-appear");
	modal_three.classList.remove("smodal-appear");
});


