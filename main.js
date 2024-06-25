let valorHora, hora, salarioBruto, IR, INSS, sindicato, salarioLiquido, descontos

var calcular = document.getElementById('calcular');

calcular.addEventListener('click', (event) => {
    event.preventDefault();

    valorHora = document.getElementById('ganhoHora').value;
    hora = document.getElementById('horaTrab').value;

    salarioBruto = parseInt(valorHora) * parseInt(hora);

    IR = salarioBruto * 0.11;
    INSS = salarioBruto * 0.08;
    sindicato = salarioBruto * 0.05;

    descontos = IR + INSS + sindicato;

    salarioLiquido = salarioBruto - IR - INSS - sindicato;

    let valores = [salarioBruto.value, IR.value, INSS.value, sindicato.value, descontos.value, salarioLiquido.value];

    const salarioBruto = document.createElement('li');
    const IR = document.createElement('li');
    const INSS = document.createElement('li');
    const sindicato = document.createElement('li');
    const descontos = document.createElement('li');
    const salarioLiquido = document.createElement('li');
    

    salarioBruto.innerHTML = valores[0];
    IR.innerHTML = valores[1];
    INSS.innerHTML = valores[2];
    sindicato.innerHTML = valores[3];
    descontos.innerHTML = valores[4];
    salarioLiquido.innerHTML = valores[5];
    
    
    const ul = document.createElement('ul');
    let resultados = document.querySelector('.resultados');

    resultados.appendChild(ul);
    ul.appendChild(salarioBruto);
    ul.appendChild(INSS);
    ul.appendChild(sindicato);
    ul.appendChild(descontos);
    ul.appendChild(salarioLiquido);

})