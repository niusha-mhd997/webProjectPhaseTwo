
// var s = $.getJSON('students.json');
//
// var data = JSON.parse(s);
// console.log(data);
// document.getElementById('list').innerHTML=data.firstName+ " "+ data.lastname;

function date(){
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    h=n.getHours();
    min=n.getMinutes();
    document.getElementById("date-time").innerHTML = d + "/" + m + "/" + y +"&nbsp &nbsp &nbsp" + h+" : "+min;
}

function show() {
    var elem = document.getElementById("verNav");
    elem.style.display = "block";
    document.getElementById("menubar").style.display="none";
}
function accept() {
  document.getElementById("questionmarkicon").style.visibility="hidden";
  document.getElementById("accepticon").style.visibility="visible";
  document.getElementById("denyicon").style.visibility="hidden";

    // elem.style.visibility =" hidden";
    // document.getElementById("accepticon").style.visibility=
    // alert("gshjkl");
}
function deny() {
    document.getElementById("questionmarkicon").style.visibility="hidden";
    document.getElementById("accepticon").style.visibility="hidden";
    document.getElementById("denyicon").style.visibility="visible";

    // elem.style.visibility =" hidden";
    // document.getElementById("accepticon").style.visibility=
    // alert("gshjkl");
}
function delet1() {

    document.getElementById("denyicon").style.visibility="visible";

    // elem.style.visibility =" hidden";
    // document.getElementById("accepticon").style.visibility=
    // alert("gshjkl");
}