function mostrarDiv() {
  const valor = document.getElementById("guia_saude").value;

  for (let i = 1; i <= 4; i++) {
    const div = document.getElementById("esc" + i);
    div.style.display = "none";
    div.classList.remove("show"); 
  }

  if (valor) {
    const divSelecionada = document.getElementById("esc" + valor);
    divSelecionada.style.display = "block";

   
    setTimeout(() => {
      divSelecionada.classList.add("show");
    }, 10); 
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
