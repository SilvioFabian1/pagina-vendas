const examples = {
  produto: { costLabel: 'Custos do produto', cost: 'R$ 45,00', fees: 'R$ 15,00', margin: '30%', total: 'R$ 85,71' },
  servico: { costLabel: 'Custos do serviço', cost: 'R$ 80,00', fees: 'R$ 20,00', margin: '25%', total: 'R$ 133,33' }
};

document.querySelectorAll('.sheet-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const example = examples[tab.dataset.type];
    document.querySelectorAll('.sheet-tab').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    document.getElementById('pricing-panel').setAttribute('aria-labelledby', tab.id);
    document.getElementById('cost-label').textContent = example.costLabel;
    document.getElementById('cost-value').textContent = example.cost;
    document.getElementById('fees-value').textContent = example.fees;
    document.getElementById('margin-value').textContent = example.margin;
    document.getElementById('total-value').textContent = example.total;
  });
});

document.querySelector('.sheet-tabs').addEventListener('keydown', (event) => {
  if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  const tabs = [...document.querySelectorAll('.sheet-tab')];
  const current = tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
  const next = (current + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
  tabs[next].click();
  tabs[next].focus();
});
