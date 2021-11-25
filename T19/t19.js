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

let card_one = document.querySelector("#card1");
let card_two = document.querySelector("#card2");
let card_three = document.querySelector("#card3");

let home = document.querySelector("#plan");




const spot ={"Kollam":[
	[ "Palaruvi Falls",
	"Palaruvi Waterfalls, which literally translates to ‘Stream of Milk’. The white-stream waterfall descending from the height of 300ft resembles the shape of a horse’s tail. An ideal time to visit this place is from June to January.  It is the 32nd highest waterfall in India, also known to have Ayurvedic properties.",
	"Hotel --> illikalam resort , Kollam, Contact number=907867564",
	"Restaurent--> Currymeen Restaurent , Kollam , Contact number=902347581",
	"url('Kollam1.jpg')"
	],
	[ "Kollam Beach",
	"Voted as the first 'Beach Wedding Destination' in Kerala, the Kollam Beach requires no introduction. There are a lot of places to visit in Kollam, but this beach is one of the most scenic and beautiful. This beach soothes wanderers with lush green and calm backwaters",
	"Hotel --> illikalam resort , Kollam, Contact number=907867564",
	"Restaurent--> Currymeen Restaurent , Kollam , Contact number=902347581",
	"url('Kollam2.jpg')"
	],
	[ " Thenmala",
	"Thenmala is India’s first planned eco-tourism destination located in the foothills of the Western Ghats of the Kollam district which is recognised as a UNESCO World Heritage Site. Thenmala means honey hill. Thenmala is also a dam site with the Parappar Dam which spans the Kallada River. ",
	"Hotel --> illikalam resort , Kollam, Contact number=907867564",
	"Restaurent--> Currymeen Restaurent , Kollam , Contact number=902347581",
	"url('Kollam3.jpg')"
	]],
	"Alappuzha":[
	[ "Vembanad Lake",
	"Vembanad Lake is quite at the top of the list of the most famous attractions of Kerala, and rightly so. On an ideal day, you can spot tourists lazing on decks of the many houseboats that are intrinsic to the lake.",
	"Hotel --> illikalam resort , kumarakom , Contact number=907867564",
	"Restaurent--> Currymeen Restaurent , kumarakom , Contact number=902347581",
	"url('Alappuzha1.jpg')"
	],
	[ "Allappey LightHouse",
	"Known for its breathtaking 360-degree views, the Alappuzha Lighthouse(Alleppey lighthouse) is an old-world charm. It is 4 km away from the main town lying on the sea bridge facing the Arabian sea coast. The 1862 lighthouse has a museum that preserves old equipment like oil lamps and items that testify to its 150-year-old journey. ",
	"Hotel -->  Baywatch Beach resort , Alleppey Beach , Contact number=627867561",
	"Restaurent -->Capsicum Seafood Restaurent , kumarakom , Contact number=902347581",
	"url('Alappuzha2.jpg')"
	],
	[ "Marari Beach",
	"One of the great delights of the Malabar Coast, the Marari Beach is an idyllic serene beach. About 11 km from the city of Alleppey, this beach is a hotspot for fishing activity.",
	"Hotel --> Neela Resort , Alleppey Beach , Contact number=627867561",
	"Restaurent--> Sandbanks Restaurent, Alleppey Beach , Contact number=8547129535",
	"url('Alappuzha3.jpg')"
	]],
	"Kozhikode":[
	[ "Kappad Beach",
	"Kappad, or Kappakadavu locally, is a beach near Koyilandy, in the district Kozhikode, Kerala, India. A stone monument installed by government commemorate the 'landing' by Vasco da Gama with the inscription, 'Vasco da Gama landed here, Kappakadavu.' ",
	"Hotel --> Park residency , Koyilandy , Contact number=907867564",
	"Restaurent --> Machli Restaurent , koyilandy , Contact number=902347581",
	"url('Kozhikode1.jpg')"
	],
	[ "Kozhippara Falls",
	"Easily accessible by roads, Kozhippara Falls are situated on the borders of Kakkadampoyil on the Malappuram -Calicut District divide in Malappuram district. Providing a stunning sight, these falls are best known for its swimming, bird watching and jungle trekking.",
	"Hotel --> Presidenct Hotel , Kakkadampoyil , Contact number=907867564",
	"Restaurent --> Malabar Restaurent , koyilandy , Contact number=902347581",
	"url('Kozhikode2.jpg')"
	],
	[ "Thikkotti Lighthouse",
	"Said to be built on the remains of a shipwreck, the Thikkoti Lighthouse is one of the major attractions of Kozhikode. Located on a rocky shoreline, the place is best known for the scenic views it offers as well as several species of nomadic birds.",
	"Hotel --> Nihara Resort , Thikkotti , Contact number=627867561",
	"Restaurent--> Paragon Restaurent, Thikkotti , Contact number=8547129535",
	"url('Kozhikode3.jpg')"
	]],
	"Wayanad":[
	[ "Chembra Peak",
	"Located close to Meppady and just 8 km south of Kalpetta, stands the highest peak of the Wayanad Hill Range- the Chembra Peak at an altitude of 2000 meters above sea level. The Chembra peak offers a panoramic view of not only the entire Wayanad district but also a large chunk of Kozhikode.",
	"Hotel --> Park residency , wayanad , Contact number=907867564",
	"Restaurent --> New india Restaurent , wayanad , Contact number=902347581",
	"url('Wayanad1.jpg')"
	],
	[ "BanasuraSagar Dam",
	"Lying in the lap of the Banasura hills in the Wayanad district is the picturesque Banasura Sagar dam. Banasura Dam is the largest earthen dam in the country and the second-largest in Asia. The view of the sprawling reservoir from the top of the dam is breathtaking.",
	"Hotel --> Pinaccle-inn , wayanad , Contact number=907867564",
	"Restaurent --> cafe wayanad Restaurent , wayanad , Contact number=902347581",
	"url('Wayanad2.jpg')"
	],
	[ "Edakkal caves",
	"Famous for its exquisite rock and wall carvings, the pre-historic Edakkal Caves are two naturally occurring alcoves located in the Wayanad district of Kerala. The caves measure at a massive length and width of 96 and 22 feet respectively and lie 1200 metres above the sea level.",
	"Hotel --> OneTree Resort , wayanad , Contact number=627867561",
	"Restaurent--> Aryas Restaurent, Wayanad , Contact number=8547129535",
	"url('Wayanad3.jpg')"
	]],
	"Malappuram":[
	[ "Teak museum",
	"Nilambur is famous for their teak produce, which is a kind of tree used for woodwork and is easily available throughout the country. Kerala, however, is one of the biggest providers of teak in the country, and this museum in the Nilambur district is entirely dedicated to the history of the wood.",
	"Hotel --> Park residency , Nilambur , Contact number=907867564",
	"Restaurent --> coffeehouse Restaurent , Nilambur , Contact number=902347581",
	"url('Malappuram1.jpg')"
	],
	[ "Arimbra hills",
	"Arimbra Hills or Mini Ooty is one of the most scenic places to visit in Malappuram. The place is called mini Ooty because of its resemblance to the hill station of the same name, and a rather famous one at that. Located at a height of about 1,050 feet above sea level, you can get a breathtaking view of the area around.",
	"Hotel --> hilltop Hotel , Aravankara , Contact number=907867564",
	"Restaurent --> cloud-nine Restaurent , Aravankara , Contact number=902347581",
	"url('Malappuram2.jpg')"
	],
	[ "Nedumkayam",
	"A stretch of jungle near Malappuram, the Nedumkayam is famous for the rich foliage of rain forests. Home to a wide variety of flora and fauna, the dense jungles attract a number of tourists from nearby and around the country, who come here to take some of the most amazing photographs. ",
	"Hotel --> Rockdale Resort , malappuram , Contact number=627867561",
	"Restaurent--> Indian gate Restaurent, malappuram , Contact number=8547129535",
	"url('Malappuram3.jpg')"
	]],
	"Idukki":[
	[ "Idukki Arch Dam",
	"Constructed across the hills of Kuravan and Kurathi, the Idukki Arch Dam stands tall at a height of about 550 ft. Recognized as the world’s second and Asia’s first arch dam, the massive Idukki Dam can be witnessed in all its glory on the Periyar river.",
	"Hotel --> Park residency , Idukki , Contact number=907867564",
	"Restaurent --> Jayesh's Restaurent , Idukki , Contact number=902347581",
	"url('Idukki1.jpg')"
	],
	[ "Calvary Mount",
	"Offering charismatic views of the gorgeous landscape that stretches from the Idukki Reservoir to the famous Ayyappancoil, your visit to Idukki is totally incomplete without visiting the Calvary Mount Viewpoint. This place is surrounded by beautiful homestays in Idukki offering a perfect vacation.",
	"Hotel --> Dave's-inn , Idukki , Contact number=907867564",
	"Restaurent --> salkara Restaurent , Idukki , Contact number=902347581",
	"url('Idukki2.jpg')"
	],
	[ "Ramakkalmedu",
	"A beautiful tourist place with green hills all around, Ramakkalmedu is undoubtedly one of the favorite Idukki destinations which also popular for its trekking trails. The view point atop the hill is the highest point in this area ",
	"Hotel --> Winterhill Resort , Idukki , Contact number=627867561",
	"Restaurent--> Ambika Restaurent, Idukki , Contact number=8547129535",
	"url('Idukki3.jpg')"
	]],

};


search.addEventListener('click',function(){
	
	var dis = document.getElementById("dropdown");
	var district = dis.options[dis.selectedIndex].text;
	
	document.querySelector('#placedesc').innerHTML = "Here are some awesome places to visit at "+district;
	document.querySelector('.ctitle--1').innerHTML = spot[district][0][0];
	document.querySelector('.ctitle--2').innerHTML = spot[district][1][0];
	document.querySelector('.ctitle--3').innerHTML = spot[district][2][0];

	document.querySelector('.mheading--1').innerHTML = spot[district][0][0];
	document.querySelector('.mheading--2').innerHTML = spot[district][1][0];
	document.querySelector('.mheading--3').innerHTML = spot[district][2][0];

	document.querySelector('.mcontent--1').innerHTML = spot[district][0][1];
	document.querySelector('.mcontent--2').innerHTML = spot[district][1][1];
	document.querySelector('.mcontent--3').innerHTML = spot[district][2][1];

	document.querySelector('.mhotel--1').innerHTML = spot[district][0][2];
	document.querySelector('.mhotel--2').innerHTML = spot[district][1][2];
	document.querySelector('.mhotel--3').innerHTML = spot[district][2][2];

	document.querySelector('.mfood--1').innerHTML = spot[district][0][3];
	document.querySelector('.mfood--2').innerHTML = spot[district][1][3];
	document.querySelector('.mfood--3').innerHTML = spot[district][2][3];


	card_one.style.backgroundImage = spot[district][0][4];
	card_two.style.backgroundImage = spot[district][1][4];
	card_three.style.backgroundImage = spot[district][2][4];

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


