var flag = true;
while(flag  ==true){
    var Name1 =prompt('Whats your Name ').toUpperCase();
    ;
    if(Name1){
        alert('Wlcome :- '+ Name1 )
        flag=false ;
    }
    else {
        alert('You should type your Name' );
    }
}



var flag2 = true;
var Order ="";
while(!(Order =="BURGER"|| Order =="PIZZA")){
    Order =prompt('WHAT\'S YOUR FAVORITE FOOD, BURGER OR PIZZA ?').toUpperCase();

    
    if(Order =="BURGER"){
        document.getElementById("burger").style.display = "block";
        
    }
    else{
        document.getElementById("PIZZA").style.display = "block";
    }
}



// When the user scrolls the page, execute myFunction 
var bill =0;
window.onscroll = function() {myFunction()};
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}



//  ADD To Bill
function ADDToBill (){
    bill+=10;
}
function PrintBill (){
    var x = document.getElementById("BillDiv");
    
       x.innerHTML = "<h1>"+"Have A Nice Day "+Name1+ "<br> Your Bill = " +bill +"$" +"</h1>" ;
}




// this is for image slide show 
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}