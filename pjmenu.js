

const bcbo = document.querySelector('.banhbo');
const nutbcbo = document.querySelector('.nutbcb');
const tenbcbo = document.querySelector('.tenbcbo');

const bcheo = document.querySelector('.banhheo');
const nutbcheo = document.querySelector('.nutbch');
const tenbcheo = document.querySelector('.tenbcheo');

const bcga = document.querySelector('.banhga');
const nutbcga = document.querySelector('.nutbcg');
const tenbcga = document.querySelector('.tenbcga');

const bcmix2 = document.querySelector('.banhmix2');
const nutbcmix2 = document.querySelector('.nutbanhmix2');
const tenbcmix2 = document.querySelector('.tenbcmix2');

const bcmix3 = document.querySelector('.banhmix3');
const nutbcmix3 = document.querySelector('.nutbanhmix3');
const tenbcmix3 = document.querySelector('.tenbcmix3');


const nutkhoai = document.querySelector('.nutkhoai');
const nutkhoai2 = document.querySelector('.nutkhoai2');
const nutxienga = document.querySelector('.nutxienga');
const nutxienheo = document.querySelector('.nutxienheo');

const giakhoai = document.querySelector('.giakhoai');
const giakhoai2 = document.querySelector('.giakhoai2');
const giatienxienga = document.querySelector('.giatienxienga');
const giatienxienheo = document.querySelector('.giatienxienheo');

const tenkhoai = document.querySelector('.tenkhoai');
const tenkhoai2 = document.querySelector('.tenkhoai2');
const tenxienga = document.querySelector('.tenxienga');
const tenxienheo = document.querySelector('.tenxienheo');


const nutbacon = document.querySelector('.nutbacon');
const nuttrungchien = document.querySelector('.nuttrungchien');
const nutxucxich = document.querySelector('.nutxucxich');

const giabacon = document.querySelector('.giabacon');
const giatrungchien = document.querySelector('.giatrungchien');
const giatienxucxich = document.querySelector('.giatienxucxich');

const tenbacon = document.querySelector('.tenbacon');
const tentrungchien = document.querySelector('.tentrungchien');
const tenxucxich = document.querySelector('.tenxucxich');

        const nutrachanh = document.querySelector('.nutrachanh');
        const nutratac = document.querySelector('.nutratac');
        const nutradao = document.querySelector('.nutradao');
        const nutnuocsuoi = document.querySelector('.nutnuocsuoi');
        const nuttravai = document.querySelector('.nuttravai');
        const nuttrasua = document.querySelector('.nuttrasua');
        const nutraoxanh = document.querySelector('.nutraoxanh');

        const giatrachanh = document.querySelector('.giatrachanh');
        const giatratac = document.querySelector('.giatratac');
        const giatradao = document.querySelector('.giatradao');
        const giannuocsuoi = document.querySelector('.giannuocsuoi');
        const giatravai = document.querySelector('.giatravai');
        const giatrasua = document.querySelector('.giatrasua');
        const giatraoxanh = document.querySelector('.giatraoxanh');

        const tentrachanh = document.querySelector('.tentrachanh');
        const tentratac = document.querySelector('.tentratac');
        const tentradao = document.querySelector('.tentradao');
        const tennuocsuoi = document.querySelector('.tennuocsuoi');
        const tentravai = document.querySelector('.tentravai');
        const tentrasua = document.querySelector('.tentrasua');
        const tentraoxanh = document.querySelector('.tentraoxanh');

       
        let counting = document.querySelector('.counterchild')
        let counterbutton = document.querySelector('.counterbutton')
        
        
let hoadon = JSON.parse(localStorage.getItem('hoadon') || '[]') 

function addMeal(priceElement, nameElement){
    let price = parseInt(priceElement.textContent);
    let meal = {name: nameElement.textContent, giatien: price};
    hoadon.push(meal);
    
    localStorage.setItem('hoadon', JSON.stringify(hoadon));
    
    console.log(nameElement.textContent);
   
    
}

function addMeal2(priceElement, nameElement){
    let topping = prompt('chọn loại topping mix: ')
    let price = parseInt(priceElement.textContent);
    let meal = {name: nameElement.textContent, giatien: price};
    hoadon.push(meal);
    
    localStorage.setItem('hoadon', JSON.stringify(hoadon));
    
    console.log(topping);
    console.log(nameElement.textContent)
    
    
}





let counter = localStorage.getItem('somon') || 0
function bodem(){
    
    counter++
    counting.textContent = counter
    localStorage.setItem('somon', counter)

}

const dem = localStorage.getItem('somon') || 0;

counting.innerHTML = dem
console.log(dem)



nutbcbo.addEventListener("click", () => {
    addMeal(bcbo, tenbcbo);
    bodem();
});
nutbcheo.addEventListener("click", () => {
    addMeal(bcheo, tenbcheo);
    bodem();
});
nutbcga.addEventListener("click", () => {
    addMeal(bcga, tenbcga);
    bodem();
});
nutbcmix2.addEventListener("click", () => {
    addMeal2(bcmix2, tenbcmix2);
    bodem();
});
nutbcmix3.addEventListener("click", () => {
    addMeal2(bcmix3, tenbcmix3);
    bodem();
});
nutkhoai.addEventListener("click", () => {
    addMeal(giakhoai, tenkhoai);
    bodem();
});
nutkhoai2.addEventListener("click", () => {
    addMeal(giakhoai2, tenkhoai2);
    bodem();
});
nutxienga.addEventListener("click", () => {
    addMeal(giatienxienga, tenxienga);
    bodem();
});
nutxienheo.addEventListener("click", () => {
    addMeal(giatienxienheo, tenxienheo);
    bodem();
});
nutbacon.addEventListener("click", () => {
    addMeal(giabacon, tenbacon);
    bodem();
});
nuttrungchien.addEventListener("click", () => {
    addMeal(giatrungchien, tentrungchien);
    bodem();
});
nutxucxich.addEventListener("click", () => {
    addMeal(giatienxucxich, tenxucxich);
    bodem();
});
nutrachanh.addEventListener("click", () => {
    addMeal(giatrachanh, tentrachanh);
    bodem();
});
nutratac.addEventListener("click", () => {
    addMeal(giatratac, tentratac);
    bodem();
});
nutradao.addEventListener("click", () => {
    addMeal(giatradao, tentradao);
    bodem();
});
nutnuocsuoi.addEventListener("click", () => {
    addMeal(giannuocsuoi, tennuocsuoi);
    bodem();
});
nuttravai.addEventListener("click", () => {
    addMeal(giatravai, tentravai);
    bodem();
});
nuttrasua.addEventListener("click", () => {
    addMeal(giatrasua, tentrasua);
    bodem();
});
nutraoxanh.addEventListener("click", () => {
    addMeal(giatraoxanh, tentraoxanh);
    bodem();
});













const classNames = [
    'tentrachanh', 'tentratac', 'tentradao', 'tennuocsuoi', 'tentravai', 'tentrasua', 'tentraoxanh',
    'tenbcbo', 'tenbcheo', 'tenbcga', 'tenbcmix2', 'tenbcmix3', 'tenkhoai', 'tenkhoai2', 'tenxienga', 'tenxienheo', 'tenbacon', 'tentrungchien','tenxucxich'
];
const ndinput = document.querySelector('.tenmoninput')
const input = document.querySelector('.findbt')

function searching() {
    const query = ndinput.value.toLowerCase().trim();
    for (let i = 0; i < classNames.length; i++) {
        const element = document.querySelector('.' + classNames[i]);
        if (element && element.textContent.toLowerCase().includes(query)) {
            const vitriphantu = element.getBoundingClientRect();
            const vitrituyetdoi = vitriphantu.top + window.pageYOffset;
            const vitricanbang = 170;
            const scrollTop = vitrituyetdoi - vitricanbang ;
            window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
            break;
        }
    }
}

input.addEventListener("click", searching)



