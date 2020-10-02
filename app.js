const valueDisplay = document.getElementById('value');
const digitos = document.getElementById('digitos');

const equal = document.getElementsByClassName('equal')[0];

digitos.addEventListener('click', (e)=>{validaNum1(e.toElement.innerText)});

equal.addEventListener('click', ()=>{console.log(calcula())})

let valores = {
  num1: 0,
  operator: '',
  num2: 0
}

function validaNum1(val){
  if(Number(val) || val == 0){
      recebeNum(val)
  }else if(val != '=' && val != 'C'){
    valores.operator = val;
    console.log(valores.operator)
  }
}

function recebeNum(num){
  if(valores.operator == ''){
    const atual = valores.num1;
    const post = num;
    valores.num1 = Number(`${valores.num1}${num}`)
    console.log(valores.num1)
  }else{
    const atual = valores.num2;
    const post = num;
    valores.num2 = Number(`${valores.num2}${num}`)
    console.log(valores.num2)
  }
}


function calcula(){
  if(valores.operator == '/'){
    return valores.num1 / valores.num2
  }
}