// Função genérica para validar um formulário
function validarFormulario(formId, mensagemSucesso) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático

    // pega todos os inputs e selects do formulário
    const campos = form.querySelectorAll("input, select");
    let tudoPreenchido = true;

    campos.forEach(campo => {
      // verifica se o campo é obrigatório e está vazio
      if (campo.hasAttribute("required") && !campo.value.trim()) {
        tudoPreenchido = false;
      }
    });

    // mostra mensagem de erro ou sucesso
    if (!tudoPreenchido) {
      alert("Por favor, preencha todos os campos antes de confirmar o agendamento.");
    } else {
      alert(mensagemSucesso);
      form.reset(); // opcional: limpa o formulário após envio
    }
  });
}

// Aplicando validação nos 4 formulários
validarFormulario("formConsulta", "Consulta registrada com sucesso! Entraremos em contato pelo WhatsApp.");
validarFormulario("formMedicamentos", "Agendamento registrado! Nossa equipe confirmará sua retirada de medicamentos pelo WhatsApp.");
validarFormulario("formExames", "Seu exame foi agendado com sucesso! Em breve confirmaremos o horário via WhatsApp.");
validarFormulario("formTeleconsulta", "Teleconsulta agendada! Você receberá o link de acesso pelo WhatsApp ou e-mail.");
