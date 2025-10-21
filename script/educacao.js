document.addEventListener("DOMContentLoaded", () => {
    const enviar = document.getElementById("enviarObs");

    enviar.addEventListener("click", () => {
        const texto = document.querySelector("textarea").value.trim();

        if (texto === "") {
            alert("Por favor, escreva algo antes de enviar.");
            return;
        }

        alert("Observação enviada com sucesso!");
        document.querySelector("textarea").value = "";
    });
});
