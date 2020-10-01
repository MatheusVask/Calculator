const valueDisplay = document.getElementById('value');

const teste = document.getElementById('digitos');

teste.addEventListener('click', (e)=>{calcula(e.toElement.innerText)})

function calcula(val){
  if(Number(val) || val == 0){
    console.log(val)
  }else{console.log('Não é numero')}
}

