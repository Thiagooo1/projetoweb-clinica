//variaveis
const medicos = [];
const pacientes = [];
const consultas = [];

//verifica 
document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario && senha) {
        document.getElementById('tela-login').classList.add('oculto');
        document.getElementById('painel-sistema').classList.remove('oculto');
    }
});

function logout() {
    document.getElementById('painel-sistema').classList.add('oculto');
    document.getElementById('tela-login').classList.remove('oculto');
}

//muda menu
function mostrarAba(abaId) {
    document.querySelectorAll('.conteudo-aba').forEach(aba => aba.classList.add('oculto'));
    document.getElementById(abaId).classList.remove('oculto');
}

// medico
document.getElementById('form-medico').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('medico-nome').value;
    const crm = document.getElementById('medico-crm').value;

    medicos.push({ nome, crm });
    atualizarSelects();
    alert('Médico cadastrado com sucesso!');
    this.reset();
});

// paciente
document.getElementById('form-paciente').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('paciente-nome').value;

    pacientes.push({ nome });
    atualizarSelects();
    alert('Paciente cadastrado com sucesso!');
    this.reset();
});

// salva as info
function atualizarSelects() {
    const selectMedico = document.getElementById('consulta-medico');
    const selectPaciente = document.getElementById('consulta-paciente');

    selectMedico.innerHTML = '<option value="">Selecione o médico</option>';
    selectPaciente.innerHTML = '<option value="">Selecione o paciente</option>';

    medicos.forEach(m => {
        selectMedico.innerHTML += `<option value="${m.nome}">${m.nome} (CRM: ${m.crm})</option>`;
    });

    pacientes.forEach(p => {
        selectPaciente.innerHTML += `<option value="${p.nome}">${p.nome}</option>`;
    });
}

// agendamento
document.getElementById('form-consulta').addEventListener('submit', function(e) {
    e.preventDefault();
    const paciente = document.getElementById('consulta-paciente').value;
    const medico = document.getElementById('consulta-medico').value;
    const data = document.getElementById('consulta-data').value;
    const hora = document.getElementById('consulta-hora').value;

    consultas.push({ paciente, medico, data, hora });
    renderizarConsultas();
    alert('Consulta agendada!');
    this.reset();
});

// mostra consultas
function renderizarConsultas() {
    const lista = document.getElementById('lista-consultas-ul');
    lista.innerHTML = '';
    consultas.forEach(c => {
        lista.innerHTML += `<li><strong>${c.data} às ${c.hora}</strong> - Paciente: ${c.paciente} | Médico: ${c.medico}</li>`;
    });
}