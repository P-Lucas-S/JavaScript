function verificar()  {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Cria uma tag
        img.setAttribute('id', 'foto') //cria um atributo
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menino.jpg') //Cria um atributo
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescenteh.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Crinça
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/adolescentem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/velha.jpg')
            }
        }
        res.style.textAlign = 'center' //Manipula o CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // Cria um child com os atributos anteriormente formatados
    }
}