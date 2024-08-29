let khachhang = [];

const holot = document.querySelector('.holot');
const ten = document.querySelector('.ten');
const male = document.querySelector('.male');
const female = document.querySelector('.female');
const mail = document.querySelector('.mail');
const dobit = document.querySelector('.dobit');
const addr = document.querySelector('.addr');
const sub = document.querySelector('.sub');

function clientAcc() {
  let inf = [holot.value, ten.value, mail.value, addr.value, dobit.value];
  inf.push(checkingGender());
  let clonekhachhang = { ho: inf[0], ten: inf[1], email: inf[2], diachi: inf[3], ngaysinh: inf[4], gioitinh: inf[5] };
  khachhang.push(clonekhachhang);
  localStorage.setItem('khachhang', JSON.stringify(clonekhachhang));
  localStorage.setItem('dskhachhang', JSON.stringify(khachhang));
}

function checkingGender() {
  if (male.checked) {
    return "nam";
  } else if (female.checked) {
    return "nu";
  } else {
    return "khong xac dinh"; 
  }
}

sub.addEventListener("click", clientAcc);

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

