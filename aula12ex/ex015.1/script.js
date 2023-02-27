function idade(){
    var ano = new Date().getFullYear()
    var nasc = window.document.getElementById('inasc')
    if (nasc.value.length == 0 || Number(nasc.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = Number(ano) - Number(nasc.value)
        var sex = window.document.getElementsByName('sex')
        var genero = ''
        if (sex[0].checked){
            genero = 'Masculino'
        } else {
            genero = 'Feminino'
        }
        
    }
}