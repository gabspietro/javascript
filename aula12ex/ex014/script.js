function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#65b6f5'
        document.querySelector("link[rel='shortcut icon']").href = "faviconmanha.ico";
        document.querySelector("link[rel*='icon']").href = "faviconmanha.ico";
    } else if (hora >= 12 && hora < 18){
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#ed9a58'
        document.querySelector("link[rel='shortcut icon']").href = "favicontarde.ico";
        document.querySelector("link[rel*='icon']").href = "favicontarde.ico";
    } else {
        // Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#01121b'
        document.querySelector("link[rel='shortcut icon']").href = "faviconnoite.ico";
        document.querySelector("link[rel*='icon']").href = "faviconnoite.ico";
    }
}