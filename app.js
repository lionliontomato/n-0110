(() => {
  'use strict';

  const views = {
    songs: {
      tab: document.getElementById('songs-tab'),
      panel: document.getElementById('songs-panel'),
      frame: document.getElementById('songs-frame'),
      url: 'https://lionliontomato.github.io/NIAN/'
    },
    treasure: {
      tab: document.getElementById('treasure-tab'),
      panel: document.getElementById('treasure-panel'),
      frame: document.getElementById('treasure-frame'),
      url: 'https://lionliontomato.github.io/nm/'
    }
  };
  const originalLink = document.getElementById('open-original');
  let current = null;

  function showView(name, updateHash = true) {
    if (!views[name]) name = 'songs';
    if (current === name) return;
    current = name;

    Object.entries(views).forEach(([key, view]) => {
      const active = key === name;
      view.tab.classList.toggle('is-active', active);
      view.tab.setAttribute('aria-selected', String(active));
      view.panel.hidden = !active;
      if (active && !view.frame.src) view.frame.src = view.url;
    });

    originalLink.href = views[name].url;
    originalLink.textContent = '在原網站開啟 ↗';
    if (updateHash && location.hash !== `#${name}`) {
      history.replaceState(null, '', `#${name}`);
    }
  }

  Object.entries(views).forEach(([name, view]) => {
    view.tab.addEventListener('click', () => showView(name));
  });

  window.addEventListener('hashchange', () => {
    const requested = location.hash.slice(1);
    showView(views[requested] ? requested : 'songs', false);
  });

  const initial = location.hash.slice(1);
  showView(views[initial] ? initial : 'songs', false);
})();
