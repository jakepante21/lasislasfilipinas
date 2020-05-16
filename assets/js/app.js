var webPage = document.querySelector(".navbar-brand");


// HOME JS

// SLIDERJS
// var sliderContainer = document.querySelector(".image-slider-container");
// var sliderImage = document.getElementsByClassName("slider-image");
// var next = document.getElementById("slider-button-right");
// var prev = document.getElementById("slider-button-left");

// let counter = 1;
// // console.log(sliderImage[1].width)
// var size = sliderImage[0].width;


// sliderContainer.style.transform = "translateX(" + (-size * counter) + "px)";

// next.addEventListener("click",function(){
// 	if(counter >= sliderImage.length -1){
// 		return;
// 	}
// 	sliderContainer.style.transition = "transform 0.4s ease-in-out";
// 	counter++;
// 	sliderContainer.style.transform = "translateX(" + (-size * counter) + "px)";
// })

// prev.addEventListener("click",function(){
// 	if(counter <= 0){
// 		return;
// 	}
// 	sliderContainer.style.transition = "transform 0.4s ease-in-out";
// 	counter--;
// 	sliderContainer.style.transform = "translateX(" + (-size * counter) + "px)";
// })

// sliderContainer.addEventListener("transitionend",function(){
// 	if(sliderImage[counter].id === "last-clone"){
// 		sliderContainer.style.transition = "none";
// 		counter = sliderImage.length - 2;
// 		sliderContainer.style.transform = "translateX(" + (-size * counter) + "px)";
// 	}else if(sliderImage[counter].id === "first-clone"){
// 		sliderContainer.style.transition = "none";
// 		counter = sliderImage.length - counter;
// 		sliderContainer.style.transform = "translateX(" + (-size * counter) + "px)";
// 	}
// })



// SCROLL ANIMATION 246.89

scrollAppear = () =>{
	var firstImageText = document.querySelector(".image-text-container");
	var secondImageOne = document.querySelector(".second-image-one");
	var imageOneCaption = document.querySelector(".image-one-caption");
	var secondImageTwo = document.querySelector(".second-image-two");
	var imageTwoCaption = document.querySelector(".image-two-caption");
	var firstImageTextPosition = firstImageText.getBoundingClientRect().top;
	var secondImageOnePosition = secondImageOne.getBoundingClientRect().top;
	var imageOneCaptionPosition = imageOneCaption.getBoundingClientRect().top;
	var secondImageTwoPosition = secondImageTwo.getBoundingClientRect().top;
	var imageOneCaptionPosition = imageOneCaption.getBoundingClientRect().top;
	var screenPosition = window.innerHeight /3;
	// console.log(firstImageTextPosition);

	if(firstImageTextPosition < screenPosition){
		firstImageText.classList.add("image-text-container-appear");
	}

	if(secondImageOnePosition < screenPosition){
		secondImageOne.classList.add("second-image-one-appear");
		imageOneCaption.classList.add("second-image-one-appear");
	}

	if(secondImageTwoPosition < screenPosition){
		secondImageTwo.classList.add("second-image-one-appear");
		imageTwoCaption.classList.add("second-image-one-appear");
	}
}

if(webPage.id == 'home'){
	window.addEventListener("scroll",scrollAppear);
}