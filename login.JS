var lInputs = Array.from(document.querySelectorAll('.login'));
var lBtn = document.querySelector('.loginbtn');
var lLogin=[];

var uUsers = [];
if (localStorage.getItem('users') != null) {
    uUsers = JSON.parse(localStorage.getItem('users'));
}


lBtn.addEventListener('click', function (e) {

    e.preventDefault();

    var lUser = {
        name:"",
        email: lInputs[0].value,
        password: lInputs[1].value
    };

    var sLink = document.querySelector('.a');
   var eError = document.querySelector(".errortext");
   eError.innerHTML='';

for (var i = 0; i < uUsers.length; i++) {
    if(lUser.email == uUsers[i].email && lUser.password == uUsers[i].password){
        lUser.name=uUsers[i].name;
        lLogin.push(lUser);
        localStorage.setItem('login',JSON.stringify(lLogin))
       window.open("home.html","_self");
        eError.innerHTML='success';
        eError.classList.replace('text-danger','text-success');
        sLink.classList.replace('fs-1','fs-6');
}
}
if(eError.innerHTML!='success'){
    eError.innerHTML='this account is not exist';
    eError.classList.replace('text-success','text-danger');
    sLink.classList.add('fs-1');
}

})