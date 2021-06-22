var nome = document.getElementById('nome')
var tel = document.getElementById('tel')
var data = new Date()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getUTCFullYear()
var p01 = document.getElementById('p01')

function att(){
    p01.innerHTML = `Nome: ${nome.value}<br>`
    p01.innerHTML += `Data: ${dia} / ${mes} / ${ano}`
    p01.innerHTML += ` /  Telefone: ${tel.value}<br>`
}

let final = 0

function rec(){
  let getn1 = document.getElementById('n1').value;
  let getn2 = document.getElementById('n2').value;
  let getn3 = document.getElementById('n3').value;
  let list = document.getElementById('list');
  let m3 = getn1 * getn2 * getn3;
  var resultado = m3 * 100;
  if(resultado <=0){
    alert('Insira valores maiores que 0')
    document.getElementById('n1').value=''
    document.getElementById('n2').value=''
    document.getElementById('n3').value=''
  }else{
  let valor = resultado.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
    
 
    list.innerHTML += `<li>Serviço de recorte de <br> ${getn2}m X ${getn2}m e profundidade de ${getn3}m...................${valor}</li>`

    document.getElementById('n1').value=''
    document.getElementById('n2').value=''
    document.getElementById('n3').value=''
    
    
    let result = document.getElementById('res');
    let addItem = final += resultado;
    let emReal = addItem.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
    result.innerHTML = `Total: .......................................${emReal}`;
}
  }

  function desb(){
  let getn1 = document.getElementById('alt').value;
  let getn2 = document.getElementById('larg').value;
  let getn3 = document.getElementById('prof').value;
  let list = document.getElementById('list');
  let m3 = getn1 * getn2 * getn3;
  var resultado = m3 * 200;
  if(resultado <=0){
    alert('Insira valores maiores que 0')
    document.getElementById('alt').value=''
    document.getElementById('larg').value=''
    document.getElementById('prof').value=''
  }else{
  let valor = resultado.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
    
 
    list.innerHTML += `<li>Serviço de desbaste / usinagem 3D <br> de ${getn2}m X ${getn2}m e profundidade de ${getn3}m..............${valor}</li>`
   
    document.getElementById('alt').value=''
    document.getElementById('larg').value=''
    document.getElementById('prof').value=''
    
    
  let result = document.getElementById('res');
  let addItem = final += resultado;
  let emReal = addItem.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
  result.innerHTML = `Total: .......................................${emReal}`;
}
  }

  function mad(){
    let getn1 = document.getElementById('larg-m').value;
    let getn2 = document.getElementById('comp').value;
    let getn3 = document.getElementById('expes').value;
    let list = document.getElementById('list');
    let m3 = getn1 * getn2 * getn3;
    var resultado = m3 * 250;
    if(resultado <=0){
      alert('Insira valores maiores que 0')
      document.getElementById('larg-m').value=''
      document.getElementById('comp').value=''
      document.getElementById('expes').value=''
    }else{
    let valor = resultado.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    });
      
   
      list.innerHTML += `<li>Peça de madeira <br> ${getn2}m X ${getn2}m e profundidade de ${getn3}m...................${valor}</li>`
  
      document.getElementById('larg-m').value=''
      document.getElementById('comp').value=''
      document.getElementById('expes').value=''
      
      
      let result = document.getElementById('res');
      let addItem = final += resultado;
      let emReal = addItem.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      });
      result.innerHTML = `Total: .......................................${emReal}`;
  }
    }

    function arte(){
      let arte = document.querySelector('input[name="art"]:checked').value;
      
      let resultado = Number(arte)

      let valor = resultado.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      });

      let addItem = final += resultado;
      let emReal = addItem.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      });

      list.innerHTML += `<li>Arte no valor de: <br> ......................................................................${valor}</li>`

      let result = document.getElementById('res');
      result.innerHTML = `Total: .......................................${emReal}`;
      
    }