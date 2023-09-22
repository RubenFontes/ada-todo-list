// TO DO LIST (CRUD)

class Atividade {
    constructor(nome, descricao, responsavel) {
        this.nome = nome;
        this.descricao = descricao;
        this.responsavel = responsavel;
    }
}

const listaDeAtividades = [];
const div = document.getElementById('list')

//ADICIONAR UMA ATIVIDADE
const adicionarAtividade = (nome, descricao, responsavel) => {
    //logica de adicionar uma nova atividade
    nome = prompt('nome: ')
    descricao = prompt('descrição: ')
    responsavel = prompt('responsável: ') 

    const novaAtividade = new Atividade(nome, descricao, responsavel) 
    listaDeAtividades.push(novaAtividade)
    console.log(listaDeAtividades)

    //renderização HTML
        let li = document.createElement("li")
        li.textContent = `${novaAtividade.nome} - ${novaAtividade.descricao} - ${novaAtividade.responsavel}`
        div.appendChild(li)
    
    return
}

const render = () => {
    listaDeAtividades.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = `${item.nome} - ${item.descricao} - ${item.responsavel}`;
        div.appendChild(li);
    });
}

const hide = () => {
    div.textContent = ''
}

//REMOVER UMA ATIVIDADE
const removerAtividade = (nome) => {
    //logica de remover atividade
    nome = prompt('remova uma atividade: ')

    for (let i=0; i < listaDeAtividades.length; i++){
        const nomeEscolhido = listaDeAtividades[i].nome
        const IndiceNomeEscolhido = nomeEscolhido.indexOf(nome)

        if(IndiceNomeEscolhido !== -1){

            listaDeAtividades.splice(nomeEscolhido, 1) 
            console.log(listaDeAtividades)

            //renderização HTML
            hide()
            render()
            return
        }

        console.log('Atividade não encontrada!')
    }
}

//PESQUISAR UMA ATIVIDADE
const buscarAtividade = (nomeBuscado) => {
    nomeBuscado = prompt('Busque uma atividade: ');

    for (let i = 0; i < listaDeAtividades.length; i++) {
        const atividade = listaDeAtividades[i];
        if (atividade.nome === nomeBuscado) {
            console.log(atividade.nome);

            hide()
            const li = document.createElement("li");
            li.textContent = `${atividade.nome} - ${atividade.descricao} - ${atividade.responsavel}`;
            div.appendChild(li);

            return; // Retorna após encontrar a primeira correspondência (caso haja várias com o mesmo nome)
        }
    }

    console.log('Atividade não encontrada!');
}


//EDITAR DESCRICAO DE UMA ATIVIDADE
const editarDescricaoAtividade = (nome, novaDescricao) => {
    //logica para editar descricao da atividade
    nome = prompt('Editar uma atividade: ')
    novaDescricao = prompt('Adicione uma nova descrição: ')

    for (let i=0; i < listaDeAtividades.length; i++){
        const nomeEscolhido = listaDeAtividades[i].nome

        if(nomeEscolhido === nome){
            const atividade = listaDeAtividades[i]

            atividade.descricao = novaDescricao

            console.log(listaDeAtividades)

            hide()
            render()
            return
        }

        console.log('Atividade não encontrada!')

    }

}




