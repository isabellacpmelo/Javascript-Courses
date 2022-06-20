function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora}h`
        img.src = `manha.jpg`
        document.body.style.background = `#9FAEB1`
    } else if (hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde! Agora são ${hora}h`
        img.src = `tarde.jpg`
        document.body.style.background = `#BB6027`
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora}h`
        img.src = `noite.jpg`
        document.body.style.background = `#42453C`
    }
}

