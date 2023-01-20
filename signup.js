var sInputs = Array.from(document.querySelectorAll('.signup'));
var sBtn = document.querySelector('.signupbtn');

var uUsers = [];
if (localStorage.getItem('users') != null) {
    uUsers = JSON.parse(localStorage.getItem('users'));
}

sBtn.addEventListener('click', function (e) {

    e.preventDefault();

    var sUser = {
        name: sInputs[0].value,
        email: sInputs[1].value,
        password: sInputs[2].value
    };
    var sLink = document.querySelector('.a');
    var eError = document.querySelector('.errortext');
    eError.innerHTML = "";

        for (var i = 0; i < uUsers.length; i++) {
            if (uUsers[i].email == sUser.email) {
                eError.innerHTML = "this email is alraedy exist";
                eError.classList.add('text-danger');
                sLink.classList.replace('fs-1','fs-6');
            }
        }
   
    if (  eError.innerHTML != "this email is alraedy exist") {
        uUsers.push(sUser);
        localStorage.setItem('users', JSON.stringify(uUsers));
        eError.innerHTML = "Succes";
        eError.classList.replace('text-danger','text-success');
        sLink.classList.add('fs-1');
    }
})