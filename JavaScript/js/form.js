var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFomulario(form);
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    tabela.appendChild(pacienteTr);

    form.reset();
    var mensagensErros = document.querySelector("#mensagens-erro");
    mensagensErros.innerHTML = "";


});

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("O nome não pode ser em branco.");

    if(paciente.gordura.length == 0) erros.push("A gardura não pode ser em branco.");

    if(paciente.peso.length == 0) erros.push("O peso não pode ser em branco.");

    if(paciente.altura.length == 0) erros.push("A altura não pode ser em branco.");

    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

    return erros;

}

function obtemPacienteDoFomulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(dado, classe){
    //Cria a TD
    var td = document.createElement("td");
    //Adiciona a classe
    td.classList.add(classe);
    //Adiciona o dado
    td.textContent = dado;

    return td;
}

function montaTr(paciente){
    //Cria a TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-godura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//Cria uma li dentro da ul para cada erro encontrado.
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}