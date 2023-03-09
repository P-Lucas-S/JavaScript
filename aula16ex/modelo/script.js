var tab = []
function adicionar() {
    var num = document.getElementById('txtnum')
    var lis = document.getElementById('sellis')
    if (tab.indexOf(num.value) == -1 && num.value <= 100 && num.value >= 0) {
        tab.push(num.value)
        console.log(tab[0])
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lis.appendChild(item)
        num.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    var final = document.getElementById('final')
    // Qantidade de números cadastrados
    let quant = tab.length
    let maior = tab[0]
    let menor = tab[0]
    let soma = 0
    for(let pos in tab){
        soma += Number(tab[pos])
        if (tab[pos] > maior){
            maior = tab[pos]
        }
        if (tab[pos] < menor){
            menor = tab[pos]
        }
    }
    let media = soma / quant
    final.innerHTML = `<p>Ao todo, temos ${quant} números cadastrados</p>`
    final.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    final.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    final.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    final.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

}