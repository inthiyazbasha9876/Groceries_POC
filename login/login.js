const login = document.getElementById('login')
const registerdiv = document.getElementById('registerdiv')
const registerbtn = document.getElementById('registerbtn')
const register = document.getElementById('register')
const loginbtn = document.getElementById('loginbtn')
const username = document.getElementById('username')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')

login_display()
function register_display() {
    register.classList.remove('hide')
    registerbtn.classList.remove('hide')
    registerdiv.classList.remove('hide')
    login.classList.add('hide')
    loginbtn.classList.add('hide')
}

function login_display() {
    login.classList.remove('hide')
    loginbtn.classList.remove('hide')
    register.classList.add('hide')
    registerbtn.classList.add('hide')
    registerdiv.classList.add('hide')
}


function loginClick() {
    console.log("hello");
}

function registerClick() {
    let newuser = {
        'username': username.value,
        'password': password.value,
        'confirmPswd': cpassword.value
    }
    let url = "http://localhost:3000/userDetails"
    let res = postData(url, newuser)
    console.log(res);
}

async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}