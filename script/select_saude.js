function mostrarDiv() {
    const valor = document.getElementById("guia_saude").value

    for (let i = 1; i <= 4; i++) {
        document.getElementById("esc" + i).style.display = "none";
    }

    if (valor) {
        document.getElementById("esc" + valor).style.display = "block";
    }
}
function resposta_consulta() {
  alert("Consulta registrada! Em breve entraremos em contato pelo WhatsApp para confirmar os detalhes do seu atendimento.");
}

function resposta_medicamento() {
  alert("Agendamento registrado! Nossa equipe confirmará sua retirada de medicamentos pelo WhatsApp.");
}

function resposta_exame() {
  alert("Seu exame foi agendado com sucesso! Em breve confirmaremos o horário via WhatsApp.");
}

function resposta_tele() {
  alert("Teleconsulta agendada! Você receberá o link de acesso pelo WhatsApp ou e-mail.");
}
