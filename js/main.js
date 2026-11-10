(() => {
  'use strict';
  const views = {
    shelf: ['dvd.jpg', '拟物化 DVD 书架界面', '把资料库，变成你的私人书架。', '拟物化 DVD 盒子陈列，让数字收藏拥有熟悉的实体质感。浏览、筛选，在书脊之间重遇你的收藏。'],
    graph: ['directforceview.jpg', '作品与人物的力导向关联图谱', '从一个条目，走进一张关系网。', '以人物和作品为节点，沿着关联探索收藏。让原本分散的资料，在同一张图谱中建立联系。'],
    chart: ['chart.jpg', '个人记录与分析图表界面', '让记录，呈现新的视角。', '通过分析图表回看个人记录与收藏变化，为浏览和整理提供另一种视角。部分分析功能仍在完善中。']
  };
  const tabs = [...document.querySelectorAll('[data-view]')];
  const img = document.querySelector('#gallery-image');
  function select(view, focus = false) {
    if (!img || !views[view]) return;
    const data = views[view];
    tabs.forEach(tab => { const active = tab.dataset.view === view; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; if (active && focus) tab.focus(); });
    img.src = 'assets/screenshots/' + data[0]; img.alt = data[1];
    document.querySelector('#gallery-title').textContent = data[2];
    document.querySelector('#gallery-description').textContent = data[3];
    document.querySelector('#preview-panel').setAttribute('aria-labelledby', 'tab-' + view);
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab.dataset.view));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next].dataset.view, true); }
    });
  });
  document.querySelectorAll('[data-select]').forEach(link => link.addEventListener('click', () => select(link.dataset.select)));
  const dialog = document.querySelector('#lightbox');
  const trigger = document.querySelector('.preview-image');
  if (dialog && trigger) {
    trigger.addEventListener('click', () => { const large = dialog.querySelector('img'); large.src = img.src; large.alt = img.alt; dialog.querySelector('p').textContent = img.alt; dialog.showModal(); });
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
  }
})();
