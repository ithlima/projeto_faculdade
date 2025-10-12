function rotas() {
    const rotasMapa = {
        "san_bas": "view/saneamento_pag.html",
        "saude": "view/saude_pag.html",
        "seguranca": "view/seguranca_pag.html",
        "educacao": "view/educacao_pag.html"
    };

    for (let id in rotasMapa) {
        const quadrado = document.getElementById(id);

        if (quadrado) {
            quadrado.addEventListener('click', function(event) {
                event.preventDefault();
                window.location.href = rotasMapa[id];
            });
        }
    }
}

rotas();