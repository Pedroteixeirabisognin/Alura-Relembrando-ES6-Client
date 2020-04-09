var campos = [
    //seleciona a parte do DOM relacionado ao respectivo Id, para buscar os dados inseridos
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);
//Seleciona a parte do DOM relacionado ao elemento tbody dentro do elemento table
var tbody = document.querySelector("table tbody");

//Seleciona a classe form quando ocorre um submit
document.querySelector(".form").addEventListener("submit",function(event) {

    //Impede que o valor volte para o default quando recarregar a página por culpa do submit.
    event.preventDefault();
    
    //Cria o elemento tr dentro da variavel tr
    /*
    
        <tr>
        
        </tr>
    
    */
    var tr = document.createElement("tr");

    //Para cada componente da lista de campos lá em cima
    campos.forEach(function(campo){

        //Cria um elemento td
        var td = document.createElement("td");
        //Insere o valor do campo atual na parte textual da variável td
        td.textContent = campo.value;
        //Insere td dentro de tr
        /*
            <tr>
                <td>dados</td>
            </tr>
        */
        tr.appendChild(td);
    });

    //Cria um td dentro de tdVolume
    var tdVolume = document.createElement("td");
    
    //Insere os campos dentro do td em tdVolume
    tdVolume.textContent = campos[1].value * campos[2].value;

    //Insere tdVolume dentro de tr
    tr.appendChild(tdVolume);

    //Insere tr dentro de tbody
    tbody.appendChild(tr);

    //Reseta os campos
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});