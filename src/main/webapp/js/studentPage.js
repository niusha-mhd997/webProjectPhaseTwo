function myFunction() {

    // var obj=JSON.parse(document.json);
    var toppings = [
        ["1", "1396/12/3", "پیشنهاد", "رسیدگی شده", "مشاهده"]
        , ["2", "1397/01/20", "پیشنهاد", "رسیدگی شده", "مشاهده"]
        , ["3", "1397/12/3", "انتقاد", "در حال رسیدگی ", "مشاهده"]
        , ["4", "1398/02/3", "درخواست", "رسیدگی نشده", "مشاهده"]
    ];

    if (toppings.length !== 0) {

        var table = document.getElementById("table1");
        table.deleteRow(1);
        for (var i = 0; i < toppings.length; i++) {
            var rowItem = document.createElement("tr");
            for (var j = 0; j < 5; j++) {
                var tableItem = document.createElement("td");
                tableItem.textContent = toppings[i][j];
                if (j === 4) {
                    tableItem.className = "choose";
                    tableItem.id = "choose";
                    tableItem.onclick=f1
                }
                rowItem.appendChild(tableItem);
            }

            table.appendChild(rowItem);
        }
    }

}
function f1(){
    location.replace("EachCaseOfUser.html")
}

function date() {
    n = new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    h = n.getHours();
    min = n.getMinutes();
    document.getElementById("date-time").innerHTML = m + "/" + d + "/" + y + "&nbsp &nbsp &nbsp" + h + " : " + min;
}

function show() {
    var elem = document.getElementById("verNav");
    elem.style.display = "block";
    document.getElementById("menubar").style.display = "none";
}