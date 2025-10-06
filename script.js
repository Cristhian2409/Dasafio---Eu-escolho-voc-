var container_dado = document.getElementById("container-dado");

function sorte(){
    var times = ["Karasuno", "Shiratorizawa","Nekoma", "Fukurodani","Inarizaki", "Aobajosai"];

    var indice = Math.floor(Math.random() * 6) + 1;

    var time_indice = indice - 1;

    document.getElementById("dado").src = `img/img${indice}.jpg`;
    document.getElementById("resultado").innerHTML = `${indice} - ${times[time_indice]}`;
}

