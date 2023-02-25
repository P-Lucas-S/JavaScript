function idade(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var nasc = window.document.getElementById('inasc')
    var idade = Number(ano) - Number(nasc.value)
    console.log(idade)
    var sex = window.document.getElementsByName('sex')
    console.log(sex)
}