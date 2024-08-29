let donhang = document.querySelector('.cacmonan')
let tienphaitra =document.querySelector('.tongsotien')
let nuttinhtien = document.querySelector('.pay')
let nuttinhtien1 = document.querySelector('.pay1')
let hienthi = document.querySelector('.bill')
let hienthitbill = document.querySelector('.showcurrentbill')
        let switchbill  = document.querySelector('.currbillcont')
        let turnbill = document.querySelector('.delete')
let turnbill2 = document.querySelector('.delete2')



function updateTotal() {
    let hoadon = JSON.parse(localStorage.getItem('hoadon'));
    
    let total = hoadon.reduce((sum, hoadon) => sum + hoadon.giatien, 0);
    localStorage.setItem('total', total);
    console.log('Total:', total);
}



function currentbill(){
    let storedHoadon2 = JSON.parse(localStorage.getItem('hoadon'));
    
    
    storedHoadon2.forEach(item => {
     let cha = document.getElementById('cha')
     let cha1 = document.createElement('div')
     cha1.className ='flex j-c'
     cha1.style.padding = '40px'
     cha.appendChild(cha1)
     let cha2 = document.createElement('div')
     cha2.className = 'flex j-c text w-85'
     cha2.style.fontFamily = '"Be Vietnam Pro", sans-serif'
     cha2.style.color  = '#343D68'
     let cha3 = document.createElement('div')
     cha3.className = 'flex g-30'
     cha1.appendChild(cha2)
     cha1.appendChild(cha3)
     let mon = document.createElement('p')
    let price = document.createElement('p')
    mon.textContent = item.name
    price.textContent = item.giatien + ".000 đ"
    cha2.appendChild(mon)
    cha2.appendChild(price)
    let nut = document.createElement('button')
    nut.textContent = 'X'
    cha3.appendChild(nut)
    nut.addEventListener('click', () => {
        cha.removeChild(cha1);
       
        for (let i = 0; i < storedHoadon2.length; i++) {
            if (storedHoadon2[i].name === item.name) {
                storedHoadon2.splice(i, 1);

                break;
            }
        }
        localStorage.setItem('hoadon', JSON.stringify(storedHoadon2));
        updateTotal()
    });
    updateTotal()
    });
}

function totalinPaid(){
    let totalstored = localStorage.getItem('total')
    let soluong = JSON.parse(localStorage.getItem('hoadon'))
    let chachacha = document.getElementById('cha')
   
    let cha2 = document.createElement('div')
     cha2.className = 'flex j-c text w-85'
     cha2.style.padding = '40px'
     cha2.style.fontFamily = '"Be Vietnam Pro", sans-serif'
     cha2.style.color = '#E84949'
     cha2.innerHTML = ''
     chachacha.appendChild(cha2)
     let tong = document.createElement('p')
    let gia = document.createElement('p')
    tong.textContent = 'Tổng số món:  ' + soluong.length
    gia.innerHTML = '&nbsp;&nbsp;&nbsp;' + totalstored +  ".000 đ"
    cha2.appendChild(tong)
    cha2.appendChild(gia)
}

nuttinhtien.addEventListener("click", currentbill)
nuttinhtien1.addEventListener("click", totalinPaid)
let headas = document.querySelector('.heads')
let nut = document.querySelector('.soc')

let clicked = false
function showing(){
    clicked = !clicked
    if(clicked){
        headas.style.display = 'flex'
    }
    else{
        headas.style.display = 'none'
    }
}

nut.addEventListener("click", showing)