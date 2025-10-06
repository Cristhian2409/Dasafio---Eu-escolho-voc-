var container_dado = document.getElementById("container-dado");

function sorte(){
    var desafios = [
        {
            desafio: "Desafio 1", 
            tema: "Sorria para alguém hoje",
            contexto: "Um sorriso pode mudar o dia de alguém e o seu também.",
        },
        {
            desafio: "Desafio 2",
            tema: "Faça uma boa ação",
            contexto: "Ajude alguém, mesmo que seja com um pequeno gesto."
        },
        {
            desafio:"Desafio 3",
            tema: "Fique 1 hora sem celular",
            contexto:"Aproveite para ler, descansar ou conversar sem distrações."
        },
        {
            desafio: "Desafio 4", 
            tema: "Escreva 3 coisas pelas quais é grato",
            contexto:"Reflita sobre o que fez o seu dia valer a pena."
        },
        {
            desafio: "Desafio 5", 
            tema: "Ouça uma música nova",
            contexto:"Descubra um som diferente, talvez um novo estilo musical."
        },
        {
            desafio: "Desafio 6",
            tema: "Diga algo positivo para alguém",
            contexto:"Espalhe um elogio sincero ou uma palavra de incentivo."
        },
    ];

    var indice = Math.floor(Math.random() * 6) + 1;

    var dsf_indice = indice - 1;

    document.getElementById("dado").src = `img/img${indice}.png`;
    document.getElementById("resultado").innerHTML = `${desafios[dsf_indice].desafio}<br>"${desafios[dsf_indice].tema}"
    <br><br>${desafios[dsf_indice].contexto}`;
}

