const valueDisplay = document.getElementById('value');
const digitos = document.getElementById('digitos');
const equal = document.getElementsByClassName('equal')[0];
const visor = document.getElementById('value');

digitos.addEventListener('click', (e)=>{validaNum1(e.toElement.innerText)});

equal.addEventListener('click', ()=>{
  visor.innerHTML = calcula()
  valores.result = visor.innerHTML
  valores.num1 = valores.result
  valores.num2 = 0
})

let valores = {
  num1: 0,
  operator: '',
  num2: 0,
  result: 0
}

function validaNum1(val){
  if(Number(val) || val == 0){
      recebeNum(val)
  }else if(val != '=' && val != 'C'){
    valores.operator = val;
  }
}

function recebeNum(num){
  if(valores.operator == ''){
    const atual = valores.num1;
    const post = num;
    valores.num1 = Number(`${atual}${post}`)
    visor.innerHTML = valores.num1
  }else{
    const atual = valores.num2;
    const post = num;
    valores.num2 = Number(`${atual}${post}`)
    visor.innerHTML = valores.num2
  }
}


function calcula(){
  if(valores.operator == '/'){
    return Number(valores.num1) / Number(valores.num2);
  }
  else if(valores.operator == '*'){
    return Number(valores.num1) * Number(valores.num2);
  }
  else if(valores.operator == '-'){
    return Number(valores.num1) - Number(valores.num2);
  }
  else if(valores.operator == '+'){
    return Number(valores.num1) + Number(valores.num2);
  }
}