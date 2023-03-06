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
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
}
function finalizar() {
    tab.sort()
    var final = document.getElementById('final')
    var item = document.createElement('p')
    final.appendChild(item)
    item.text = `Ao todo temos ${tab.length} números cadastrados`
    item.text = `O maior valor informado foi ${tab[tab.length-1]}`
}