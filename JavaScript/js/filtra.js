var campoFiltro = document.querySelector("#filtrar-tabela");
    //adiciona o evento "input" no campo de filtro.
    campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    //verifica se contém texto no input, se verdadeiro busca por cada letra da td info-nome.
    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //criando expressão regular com modificador "i = case-insensitive"
            var expressao = new RegExp(this.value, "i");
            if(expressao.test(nome)){
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});