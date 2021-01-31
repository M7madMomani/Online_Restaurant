var flag = true;
var flag2 = true;
var flag3 = true;
var image = '';
var Order ="";
var bill =0;
var slideIndex = 0;



while(flag==true){
    var Name1 =prompt('Whats your Name ').toUpperCase();
    ;
    if(Name1){
        flag=false ;
    }
    else {
        alert('You should type your Name' );
    }
}


while(flag3==true){
    var NumberOfPic =prompt('Whats your NumberOfPic');
    if(NumberOfPic && NumberOfPic>0 ){
        flag3=false ;
    }
    else {
        alert('You should type your NumberOfPic' );
    }
}


while(!(Order=="BURGER"|| Order=="PIZZA")){
    Order =prompt('WHAT\'S YOUR FAVORITE FOOD, BURGER OR PIZZA ?').toUpperCase();

    
    if(Order =="BURGER"){
        document.getElementById("burger").style.display = "block";
        
        for(var i =0 ; i<NumberOfPic ; i++){
            image =image +'<img src="https://i.pinimg.com/originals/63/0d/96/630d96bbb40088587c50e1fc7307c10a.png">';
        }
    }
    else{
        document.getElementById("PIZZA").style.display = "block";
        for(var i =0 ; i<NumberOfPic ; i++){
            image =image +'<img src="https://seeklogo.com/images/P/pizza-logo-D075E874ED-seeklogo.com.png">';
        }
    }
}


// When the user scrolls the page, execute myFunction 
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


window.onscroll = function() {myFunction()};
showSlides();
document.write(image)