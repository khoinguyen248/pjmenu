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