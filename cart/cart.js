const url="http://localhost:5000/cart"
const cartdetials=document.getElementById('cartdetials')

let cartdata

getCartdata()
async function getCartdata(){
    await fetch(url)
    .then(res => {
        res.json().then(data => {
            cartdata = data
            settingcartdata()
        })
    })
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });
}

function settingcartdata(){
    console.log(cartdata);
    let total=0
    for(let i of cartdata){
        total+=i.havetopay
        let row=document.createElement('tr')
        let itemname=document.createElement('td')
        let itemprice=document.createElement('td')
        let itemquantity=document.createElement('td')
        let havetopay=document.createElement('td')

        let p=document.createElement(div)

        let sub=document.createElement('button')
        let add=document.createElement('button')
        
        itemname.innerHTML=i.name
        itemprice.innerHTML=i.price
        itemquantity.innerHTML=i.quantity
        havetopay.innerHTML=i.havetopay
        
        row.appendChild(itemname)
        row.appendChild(itemquantity)
        row.appendChild(itemprice)
        row.appendChild(havetopay)

        cartdetials.appendChild(row)
    }
    let Totalrow=document.createElement('tr')
    let text=document.createElement('td')
    text.innerHTML='Total'
    text.setAttribute('colspan',3)

    let value=document.createElement('td')
    value.innerHTML=total

    Totalrow.appendChild(text)
    Totalrow.appendChild(value)
    cartdetials.appendChild(Totalrow)

    let buttonrow=document.createElement('tr')
    let cshopbtn=document.createElement('td')
    let check=document.createElement('td')
    check.setAttribute('colspan',3)

    let home=document.createElement('a')
    home.setAttribute('href','../Home/home.html')
    home.classList.add('btn','abtn')
    home.innerHTML='Continue Shopping'

    let checkout=document.createElement('a')
    checkout.setAttribute('href','#')
    checkout.classList.add('btn','abtn','pull-right')
    checkout.innerHTML='CheckOut'

    cshopbtn.appendChild(home)
    check.appendChild(checkout)
    buttonrow.appendChild(cshopbtn)
    buttonrow.appendChild(check)

    cartdetials.appendChild(buttonrow)
}