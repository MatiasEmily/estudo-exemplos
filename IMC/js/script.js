function start() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  var imcGrau = document.querySelector('#imc-grau');
  
  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  imcGrau.addEventListener('click', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height ** 2);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcGrau = document.querySelector('#imc-grau');
  
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;
  imcGrau.textContent = verificaImc(imc);
}

function verificaImc(imcVerificado) {
  if (imcVerificado >= 16 && imcVerificado < 17) {
    imcVerificado = 'Muito abaixo do peso';
  } else if (imcVerificado >= 17 && imcVerificado < 18.5) {
    imcVerificado = 'Abaixo do peso';
  } else if (imcVerificado >= 18.5 && imcVerificado < 25) {
    imcVerificado = 'Peso normal';
  } else if (imcVerificado >= 25 && imcVerificado < 30) {
    imcVerificado = 'Acima do peso';
  } else if (imcVerificado >= 30 && imcVerificado < 35) {
    imcVerificado = 'Obesidade grau I';
  } else if (imcVerificado >= 35 && imcVerificado < 40) {
    imcVerificado = 'Obesidade grau II';
  } else if (imcVerificado >= 40) {
    imcVerificado = 'Obesidade grau III';
  } else {
    imcVerificado = 'Valor inválido';
  }
  return imcVerificado;
}

start();
