function myFunction() {

  var toppings = ["آقای امینی مسوول آزمایشگاه", "آقای یزدی مسوول سایت", "خانم رضایی مسوول آموزش",
    "خانم اصفهانی مسوول کلاس ها"];

  var ul = document.getElementById("asami");

  for (var i = 0; i < toppings.length; i++) {
    var topping2 = toppings[i];

    var topping = "  " + toppings[i];

    var listItem = document.createElement("li");
    listItem.tabindex="1";

    var divItem = document.createElement("div");
    divItem.className="cases-item-li";
    divItem.ID="listdiv";

    var imgItem = document.createElement("img");
    imgItem.className="imgc";
    imgItem.style="background: #00cc00";
    imgItem.src="img/avatar.png";


    var spanItem = document.createElement("span");
    spanItem.style="color: #0b2e13";
    spanItem.innerHTML = topping;


    divItem.appendChild(imgItem);
    divItem.appendChild(spanItem);

    listItem.appendChild(divItem);

    ul.appendChild(listItem);

  }


}



function myNewFunction(sel) {
  mozoo = sel.options[sel.selectedIndex].text;
}



var mozoo = "شکایت";
var matn;
var file;
var masool_name;


function send() {

  if(masool_name==undefined){

    alert("کاربر مسوول رسیدگی را انتخاب کنید");

  }

  else{
    //matn = document.getElementById('matn_eteraz').value;
    //alert(masool_name + " " + mozoo);
    alert("درخواست شما با موفقیت ثبت شد");
  }


}

function date(){
  n = new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  h=n.getHours();
  min=n.getMinutes();
  document.getElementById("date-time").innerHTML = m + "/" + d + "/" + y +"&nbsp &nbsp &nbsp" + h+" : "+min;
}

function show() {
  var elem = document.getElementById("verNav");
  elem.style.display = "block";
  document.getElementById("menubar").style.display="none";
}
