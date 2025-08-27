// Destacar link ativo no menu com base no caminho da página
(function() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();

// Inserir o ano atual no rodapé automaticamente
document.getElementById('year').textContent = new Date().getFullYear();
