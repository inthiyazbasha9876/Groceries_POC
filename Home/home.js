const fruitsurl = "http://localhost:4000/fruits"
const vegurl = "http://localhost:4000/fruits"
const fruitsList=document.getElementById('fruitsList')
const vegList=document.getElementById('vegList')

let fruitsdata
let vegdata


getFruitsData()
getVegData()
settingValues()

function getFruitsData() {
    fetch(fruitsurl)
        .then(res => {
            res.json().then(data => {
                fruitsdata = data
                
            })
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function getVegData() {
    fetch(vegurl)
        .then(res => {
            res.json().then(data => {
                vegdata = data
            })
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function settingValues(){
    console.log(fruitsdata);
    console.log(vegdata);
}