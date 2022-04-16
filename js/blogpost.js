var modal3 = document.getElementById("modal3");

var deletebtn = document.getElementsByClassName("trash");

var modal1 = document.getElementById("na");

deletebtn[0].onclick=function() {
  modal3.style.display = "block";
 }
deletebtn[1].onclick=function() {
 modal3.style.display = "block";
}
deletebtn[2].onclick=function() {
 modal3.style.display = "block";
}
deletebtn[3].onclick=function() {
 modal3.style.display = "block";
}
deletebtn[4].onclick=function() {
 modal3.style.display = "block";
}

modal1.onclick = function() {
    modal3.style.display = "none";
}
  
var editbtn=document.getElementsByClassName("fa fa-ellipsis-h");
editbtn[0].onclick=function(){
window.location.href='../html/post.html';
}
editbtn[1].onclick=function(){
window.location.href='../html/post.html';
}
editbtn[2].onclick=function(){
window.location.href='../html/post.html';
}
editbtn[3].onclick=function(){
window.location.href='../html/post.html';
}
editbtn[4].onclick=function(){
window.location.href='../html/post.html';
}