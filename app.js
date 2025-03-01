//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Inicie declarando uma variável do tipo array, que armazenará os nomes dos amigos inseridos.
let amigos = [];

//Implemente uma função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById("amigos"); //Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário. 
    const nome = input.value.trim();

    //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if (nome === "") {
        alert("Por favor, insira um nome."); //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
        return;
    }

    amigos.push(nome); //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    input.value = ""; //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    atualizarLista();
}

//Implementa uma função para atualizar a lista de amigos
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); //Obter o elemento da lista: Utilize document.getElementById() ou document.querySelector() para selecionar a lista onde os amigos serão exibidos.
    listaAmigos.innerHTML = ""; //Limpar a lista existente: Defina lista.innerHTML = "" para garantir que não haja duplicados ao atualizar.
    
    //Percorrer o array: Use um loop for para percorrer o array amigos e criar elementos de lista (<li>) para cada nome.
    amigos.forEach((nome) => {
        const li = document.createElement("li"); //Adicionar elementos à lista: Para cada amigo, crie um novo elemento de lista.
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

//Implementa uma função para sortear os amigos
function sortearAmigo() {

    //Validar que há amigos disponíveis: Antes de sortear, verificar se o array amigos não está vazio.
    if (amigos.length < 2) {
        alert("Adicione pelo menos mais um amigo!");
        return;
    }

    let sorteio = [...amigos].sort(() => Math.random() - 0.5); //Gerar um índice aleatório: Usar Math.random() e Math.floor() para selecionar um índice aleatório do array.
    let sorteados = {};

    //Obter o nome sorteado: Utilizar o índice aleatório para acessar o nome correspondente no array.
    for (let i = 0; i < sorteio.length; i++) {
        sorteados[sorteio[i]] = sorteio[(i + 1) % sorteio.length];
    }

    exibirResultado(sorteados);
}

//Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() e innerHTML para exibir o amigo sorteado.
function exibirResultado(sorteados) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "<h2>Resultado do Sorteio</h2>";

    for (let amigo in sorteados) {
        const li = document.createElement("li");
        li.textContent = `${amigo} x ${sorteados[amigo]}`;
        resultadoLista.appendChild(li);
    }
}

function LimparListaAmigos() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}
