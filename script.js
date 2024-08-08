function atualizarRelogio() {
  const agora = new Date();

  const hora = agora.getHours();
  const minuto = agora.getMinutes();
  const segundo = agora.getSeconds();

  // Atualizar relógio digital
  const relogioDigital = document.getElementById('relogio-digital');
  relogioDigital.textContent = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}`;

  // Atualizar os ponteiros do relógio analógico
  const ponteiroHora = document.querySelector('.hora');
  const ponteiroMinuto = document.querySelector('.minuto');
  const ponteiroSegundo = document.querySelector('.segundo');

  const anguloHora = (hora % 12) * 30 + (minuto / 2); // Cada hora são 30 graus, cada minuto adiciona 0.5 graus
  const anguloMinuto = minuto * 6; // Cada minuto são 6 graus
  const anguloSegundo = segundo * 6; // Cada segundo são 6 graus

  ponteiroHora.style.transform = `rotate(${anguloHora}deg)`;
  ponteiroMinuto.style.transform = `rotate(${anguloMinuto}deg)`;
  ponteiroSegundo.style.transform = `rotate(${anguloSegundo}deg)`;
}

// Atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Atualizar relógio imediatamente ao carregar a página
atualizarRelogio();
