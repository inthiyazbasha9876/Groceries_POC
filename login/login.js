const login = document.getElementById('login')
const registerdiv = document.getElementById('registerdiv')
const registerbtn = document.getElementById('registerbtn')
const register = document.getElementById('register')
const loginbtn = document.getElementById('loginbtn')
const username = document.getElementById('username')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const errorMsg=document.getElementById('errorMsg')
const label=document.getElementById('label')

login_display()
function register_display() {
    label.innerHTML="Register New User"
    register.classList.remove('hide')
    registerbtn.classList.remove('hide')
    registerdiv.classList.remove('hide')
    login.classList.add('hide')
    loginbtn.classList.add('hide')
}

function login_display() {
    label.innerHTML="Login"
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
    console.log(newuser);
    if(newuser.password === newuser.confirmPswd){
        let url = "http://localhost:3000/userDetails"
        postData(url, newuser).then(res=>{
            console.log(res);
            let div=document.createElement('div')
            let p=document.createElement('p')
            if(res.status==404){
                
                p.innerHTML="404 - Not Found(URL Mistake)"
                div.classList.add('msg','w3-right','w3-animate-right')
                div.appendChild(p)
                document.body.appendChild(div)
                setTimeout(()=>{
                    div.classList.add('opcty')
                },3000)
            }else if(res.status==201){
                p.innerHTML="User Created"
                div.classList.add('msg','w3-right','w3-animate-right')
                div.appendChild(p)
                document.body.appendChild(div)
                setTimeout(()=>{
                    div.classList.add('opcty')
                },3000)
            }
        }).catch(error=>{
            console.log(error);
        })
    }else{
        errorMsg.innerHTML="Password Miss match"
    }
    
}

async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

function change(){
    errorMsg.innerHTML=''
}