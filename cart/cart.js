const url = "http://localhost:5000/cart/"
const name = document.getElementById('name')
const totalprice = document.getElementById('totalprice')
let cartdetails = document.getElementById('cartdetails')

let removalid = ''
let cartdata
let id
setuser()
getCartdata()

async function getCartdata() {
    await fetch(url)
        .then(res => {
            res.json().then(data => {
                cartdata = data
                let founddata = cartdata.filter(a => Number(a.userid) == id)
                settingcartdata(founddata)
                calculate(founddata)
            })
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function settingcartdata(data) {
    removeold(data)
    for (let i of data) {
        let row = document.createElement('div')
        removalid = i.id
        row.id = i.id
        row.classList.add('row','borderclass','mb-2')
        let itemname = document.createElement('p')
        let itemprice = document.createElement('p')
        let itemquantity = document.createElement('p')
        let havetopay = document.createElement('p');
        let icon = document.createElement('i')

        itemname.classList.add('col-2')
        itemprice.classList.add('col-2')
        itemquantity.classList.add('col-2')
        havetopay.classList.add('col-2')
        icon.classList.add('fa', 'fa-trash','col-2')
        icon.addEventListener('click', () => {
            deleteitem(i.id)
        }, false)

        itemname.innerHTML = i.name
        itemprice.innerHTML = i.price
        itemquantity.innerHTML = i.quantity
        havetopay.innerHTML = i.havetopay

        row.appendChild(itemname)
        row.appendChild(itemquantity)
        row.appendChild(itemprice)
        row.appendChild(havetopay)
        row.appendChild(icon)

        cartdetails.appendChild(row)
    }

}


function setuser() {
    id = localStorage.getItem('id')
    name.innerHTML = localStorage.getItem('name')
}

function signout() {
    localStorage.removeItem('name')
    localStorage.removeItem('id')
    window.location.href = "../login/login.html"
}


async function deleteitem(itemid) {
    await fetch(url + itemid, {
        method: 'DELETE'
    })
    removeItem(itemid)
    getCartdata()
    return
}

function calculate(e) {
    let total = 0
    for (let i of e) {
        total += i.havetopay
    }
    totalprice.innerHTML = total
}

function removeold(e) {
    if (removalid != '') {
        for (let i of e) {
            let removeitems = document.getElementById(i.id)
            removeitems.remove()
        }

    }
}

function removeItem(e) {
    const itemremove = document.getElementById(e)
    itemremove.remove()
}