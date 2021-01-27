
var bill =0;
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
function ADDToBill (){
    bill+=10;
}
function PrintBill (){
    var x = document.getElementById("BillDiv");
       x.innerHTML = "<h1>"+"Your Bill = " +bill +"$" +"</h1>" ;
}
