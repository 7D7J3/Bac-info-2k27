// docs.js — affiche les PDF du dossier Drive (matière > trimestre > chapitre)
(function () {
  const DOCS_URL = "https://script.google.com/macros/s/AKfycbzlzSl5LCSG33gIdq1zTl5cFLo4Fkd3rGtN_dUOEdX0pU_8pXf4mZ5J8C2K1OC4Hovk/exec?type=drive";

  // matière du site -> mots-clés du nom de dossier Drive (sans accents, minuscules)
  const SUBJECT_KEYS = {
    "Algo & Programmation": ["algo", "prog", "info"],
    "Physique & Chimie": ["phys", "chimie"],
    "STI (Mme Salma)": ["salma"],
    "STI (Mr Omar)": ["omar"]
  };

  const subject = document.body.dataset.subject;
  if (!SUBJECT_KEYS[subject]) return;                 // seulement les pages prévues
  if (document.getElementById('pdfsList')) return;    // math.html garde son système

  const noteForm = document.getElementById('noteForm');
  const notesSection = noteForm && noteForm.closest('.notes-section');
  if (!notesSection) return;

  // ----- style -----
  const st = document.createElement('style');
  st.textContent =
    '.dx-item{display:block;width:100%;text-align:left;margin:4px 0;padding:.55rem .8rem;background:var(--bg,#0f172a);' +
    'border:1px solid var(--border,#334155);border-radius:8px;color:var(--text,#e2e8f0);cursor:pointer;font-size:.9rem}' +
    '.dx-item:hover{border-color:#38bdf8}' +
    '.dx-group{margin:8px 0 8px 10px}.dx-group>summary{cursor:pointer;font-weight:600;padding:4px 0}' +
    '.dx-search{width:100%;padding:.6rem .8rem;margin:8px 0;background:var(--bg,#0f172a);border:1px solid var(--border,#334155);' +
    'border-radius:10px;color:var(--text,#e2e8f0)}';
  document.head.appendChild(st);

  // ----- section Documents (avant "Notes des élèves") -----
  const sec = document.createElement('div');
  sec.className = 'notes-section';
  sec.innerHTML =
    '<h3>Documents (PDF) <span id="dxCount"></span></h3>' +
    '<input type="text" id="dxSearch" class="dx-search" placeholder="Rechercher un document (chapitre, titre)...">' +
    '<div id="dxList" class="notes-list"></div>';
  notesSection.parentNode.insertBefore(sec, notesSection);

  // ----- modale d'aperçu -----
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.style.display = 'none';
  modal.innerHTML =
    '<div class="modal-card pdf-preview-card">' +
    '<div class="pdf-preview-header"><h2 id="dxTitle">Document</h2>' +
    '<button type="button" id="dxClose" class="pdf-preview-close" aria-label="Fermer">✕</button></div>' +
    '<iframe id="dxFrame" class="pdf-preview-frame" src="" title="Aperçu du document"></iframe>' +
    '<a id="dxOpen" class="btn-resume pdf-preview-openlink" href="#" target="_blank" rel="noopener">Ouvrir dans Google Drive ↗</a>' +
    '</div>';
  document.body.appendChild(modal);

  const $ = id => document.getElementById(id);
  const list = $('dxList'), search = $('dxSearch'), count = $('dxCount');
  const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let tree = null;

  const total = n => n.files.length + n.folders.reduce((a, f) => a + total(f), 0);

  function prune(n, q) {
    if (!q || norm(n.name).includes(q)) return n;
    const files = n.files.filter(f => norm(f.name).includes(q));
    const folders = n.folders.map(f => prune(f, q)).filter(Boolean);
    return files.length || folders.length ? { name: n.name, files: files, folders: folders } : null;
  }

  function html(n, open) {
    return n.files.map(f =>
      '<button type="button" class="dx-item" data-id="' + esc(f.id) + '" data-name="' + esc(f.name) + '">📄 ' + esc(f.name) + '</button>'
    ).join('') + n.folders.map(f =>
      '<details class="dx-group"' + (open ? ' open' : '') + '><summary>' + esc(f.name) + '</summary>' + html(f, open) + '</details>'
    ).join('');
  }

  function render() {
    const q = norm(search.value.trim());
    const t = tree && prune(tree, q);
    list.innerHTML = t && total(t) ? html(t, !!q) : '<p style="color:var(--text-muted)">Aucun document.</p>';
  }

  function openPdf(id, name) {
    $('dxTitle').textContent = name;
    $('dxFrame').src = 'https://drive.google.com/file/d/' + id + '/preview';
    $('dxOpen').href = 'https://drive.google.com/file/d/' + id + '/view';
    modal.style.display = 'flex';
  }
  function closePdf() { modal.style.display = 'none'; $('dxFrame').src = ''; }

  list.addEventListener('click', e => {
    const b = e.target.closest('.dx-item');
    if (b) openPdf(b.dataset.id, b.dataset.name);
  });
  $('dxClose').addEventListener('click', closePdf);
  modal.addEventListener('click', e => { if (e.target === modal) closePdf(); });
  search.addEventListener('input', render);

  async function load() {
    list.textContent = 'Chargement...';
    let root = null;
    try {
      const c = JSON.parse(sessionStorage.getItem('docsTree') || 'null');
      if (c && Date.now() - c.t < 600000) root = c.d;
    } catch (e) {}
    if (!root) {
      try {
        root = await (await fetch(DOCS_URL)).json();
        try { sessionStorage.setItem('docsTree', JSON.stringify({ t: Date.now(), d: root })); } catch (e) {}
      } catch (e) { list.textContent = 'Erreur réseau.'; return; }
    }
    const keys = SUBJECT_KEYS[subject];
    tree = (root.folders || []).find(f => keys.some(k => norm(f.name).includes(k)));
    if (!tree) {
      list.innerHTML = '<p style="color:var(--text-muted)">Dossier introuvable pour cette matière. Dossiers trouvés : ' +
        (root.folders || []).map(f => esc(f.name)).join(', ') + '</p>';
      return;
    }
    count.textContent = '(' + total(tree) + ')';
    render();
  }
  load();
})();
