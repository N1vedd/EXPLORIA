let search = document.querySelector("#search");
let back = document.querySelector(".back--2");
let page = document.querySelector(".slide--1");

search.addEventListener('click',function(){
	page.classList.add("sliding-front");
});

back.addEventListener('click',function(){
	page.classList.remove("sliding-front");
});
