
function gerarNumeros() {
    
    //mapear os inputs
    const min = Math.ceil(document.querySelector(".input-min").value) //arrendondado para baixo
    const max = Math.floor(document.querySelector(".input-max").value) //arredondando para cima

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    alert(result)
}




