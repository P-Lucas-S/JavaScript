function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var cont = document.getElementById('cont')
    if (inicio.value.lenth == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        cont.innerText = 'Impossível contar!'
        // window.alert('[ERRO] Falam dados!')
    } else {
        cont.innerText = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i;c <= f;c += p){
                cont.innerHTML += c + '&#x1F449;'
            }
        } else {
            // Contagem regressiva
            for (let c = i;c >= f;c -= p){
                cont.innerHTML += c + '&#x1F449;'
            }
        }
        cont.innerHTML += '&#x2690'
    }
}