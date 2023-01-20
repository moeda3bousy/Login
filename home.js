var nName = document.querySelector('.name');
var lLogout = document.querySelector('.logout');

var lLogin = [];
if (localStorage.getItem('login') != null) {
    lLogin = JSON.parse(localStorage.getItem('login'));
}

nName.innerHTML= `${lLogin[lLogin.length-1].name}`;

lLogout.addEventListener('click',function() {
    window.open('index.html','_self');
})