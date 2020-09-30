const login=document.getElementById('login')
const register=document.getElementById('register')

login_display()
function register_display(){
    register.classList.remove('hide')
    login.classList.add('hide')
}

function login_display(){
    login.classList.remove('hide')
    register.classList.add('hide')
}