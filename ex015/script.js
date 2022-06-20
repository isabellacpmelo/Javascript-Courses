function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var formAno = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (formAno.value == 0 || formAno.value > ano) {
    window.alert('[ERRO]Verifique os dados e tente novamente!')
  } else {
    var formSex = document.getElementsByName('radsex')
    var idade = ano - Number(formAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (formSex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 17) {
            // Jovem
            img.setAttribute('src', 'crianca-homem.jpg')
        } else if (idade < 60) {
            // Adulto
            img.setAttribute('src', 'adulto-homem.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idoso-homem.jpg')
        }
    } else if (formSex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 17) {
            // Jovem
            img.setAttribute('src', 'crianca-mulher.jpg')
        } else if (idade < 60) {
            // Adulto
            img.setAttribute('src', 'adulto-mulher.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idoso-mulher.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
    res.appendChild(img)
  }
}