const code = document.getElementById('code')
const background = document.getElementById('wrapper')
const button = document.querySelector('button')
let hex=['0','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']

button.addEventListener('click',changebg)

function changebg(){
    hexcolor='#'
    for( let i=0;i<6;i++){
        hexcolor +=codegener()
    }
    console.log(hexcolor)
    background.style.backgroundColor=hexcolor
    code.innerHTML=hexcolor
}
function codegener(){
    color=Math.floor(Math.random()*17)
    return hex[color]
}
