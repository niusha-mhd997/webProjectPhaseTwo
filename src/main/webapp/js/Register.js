/**
 * Created by win_8.1 on 5/21/2019.
 */
function Register(){

    console.log("amad");

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:8080/contacts/rest/student/studentregister",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
        },
        "data": {
            "email": document.getElementById("email").value,
            "name": document.getElementById("name").value,
            "password": document.getElementById("pwd1").value
        }
    }

    $.ajax(settings).done(function (response) {
        //alert(response.data.token);
        if(response.success == true){
            localStorage.setItem("token",response.data.token)
            localStorage.setItem("name",response.data.name)
            localStorage.setItem("email",response.data.email)
            localStorage.setItem("password",response.data.password)
            alert("با موفقیت ثبت نام شد");
            window.open("http://localhost:8080/contacts/StudentPage.html","_parent")

        }else{
            alert(response.message)

        }
    });

}
