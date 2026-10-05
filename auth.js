// ====== À CONFIGURER ======
const AUTH_URL = "https://script.google.com/macros/s/AKfycbzlzSl5LCSG33gIdq1zTl5cFLo4Fkd3rGtN_dUOEdX0pU_8pXf4mZ5J8C2K1OC4Hovk/exec";
const GOOGLE_CLIENT_ID = "321091889082-h1kkib92ftf967l9tccvpd7ck1f552ar.apps.googleusercontent.com";
// ==========================

let pendingEmail = "";
const $ = id => document.getElementById(id);

function msg(text, ok) {
    const m = $('msg');
    m.textContent = text || '';
    m.className = ok ? 'ok' : '';
}

async function api(payload) {
    const res = await fetch(AUTH_URL, { method: 'POST', body: JSON.stringify(payload) });
    return res.json();
}

function grant(name, email) {
    localStorage.setItem('bacInfoAccessGranted', 'true');
    localStorage.setItem('loginDate', new Date().toDateString());
    localStorage.setItem('userName', name || 'Élève');
    localStorage.setItem('userEmail', email || '');
    location.href = 'index.html';
}

function showCodeStep(email) {
    pendingEmail = email;
    $('authBox').style.display = 'none';
    $('codeForm').style.display = 'block';
    msg("Code envoyé à l'admin. Demande-le lui puis entre-le ici.", true);
}

function showResetStep(email) {
    pendingEmail = email;
    $('forgotForm').style.display = 'none';
    $('resetForm').style.display = 'block';
    msg("Code envoyé à l'admin. Demande-le lui puis entre-le ici.", true);
}

function handleResult(r) {
    if (r.status === 'ok') return grant(r.name, r.email);
    if (r.status === 'code_sent' || r.status === 'pending') return showCodeStep(r.email);
    if (r.status === 'reset_sent') return showResetStep(r.email);
    if (r.status === 'reset_ok') {
        $('resetForm').style.display = 'none';
        $('authBox').style.display = 'block';
        tab(false);
        return msg("Mot de passe changé ! Connecte-toi.", true);
    }
    const errors = {
        exists: "Ce compte existe déjà : utilise l'onglet Connexion.",
        no_account: "Aucun compte avec cet email : inscris-toi d'abord.",
        bad_password: "Mot de passe incorrect.",
        bad_code: "Code incorrect ! Contacte l'administrateur.",
        bad_token: "Connexion Google invalide, réessaie.",
        blocked: "Compte bloqué. Contacte l'administrateur.",
        invalid: "Données invalides."
    };
    msg(errors[r.status] || ("Erreur serveur : " + (r.error || JSON.stringify(r))));
}

async function call(payload) {
    msg('Chargement...', true);
    try { handleResult(await api(payload)); }
    catch (e) { msg("Erreur réseau, réessaie."); }
}

// Onglets
function tab(signup) {
    $('signupForm').style.display = signup ? 'block' : 'none';
    $('loginForm').style.display = signup ? 'none' : 'block';
    $('tabSignup').classList.toggle('on', signup);
    $('tabLogin').classList.toggle('on', !signup);
    msg('');
}
$('tabSignup').onclick = () => tab(true);
$('tabLogin').onclick = () => tab(false);

$('signupForm').addEventListener('submit', e => {
    e.preventDefault();
    if ($('suPass').value !== $('suPass2').value) return msg("Les mots de passe ne correspondent pas.");
    call({
        action: 'signup',
        name: $('suName').value.trim(),
        email: $('suEmail').value.trim().toLowerCase(),
        password: $('suPass').value
    });
});

$('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    call({
        action: 'login',
        email: $('liEmail').value.trim().toLowerCase(),
        password: $('liPass').value
    });
});

$('codeForm').addEventListener('submit', e => {
    e.preventDefault();
    call({ action: 'verify', email: pendingEmail, code: $('codeInput').value.trim() });
});

// Mot de passe oublié
$('forgotLink').addEventListener('click', e => {
    e.preventDefault();
    $('authBox').style.display = 'none';
    $('forgotForm').style.display = 'block';
    msg('');
});
$('forgotBack').addEventListener('click', e => {
    e.preventDefault();
    $('forgotForm').style.display = 'none';
    $('authBox').style.display = 'block';
    msg('');
});
$('forgotForm').addEventListener('submit', e => {
    e.preventDefault();
    call({ action: 'forgot', email: $('fgEmail').value.trim().toLowerCase() });
});
$('resetForm').addEventListener('submit', e => {
    e.preventDefault();
    if ($('rsPass').value !== $('rsPass2').value) return msg("Les mots de passe ne correspondent pas.");
    call({
        action: 'reset',
        email: pendingEmail,
        code: $('rsCode').value.trim(),
        password: $('rsPass').value
    });
});

// Google Sign-In
window.addEventListener('load', () => {
    if (!window.google || !google.accounts) return;
    google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: resp => call({ action: 'google', idToken: resp.credential })
    });
    google.accounts.id.renderButton($('gbtn'), { theme: 'filled_black', size: 'large', text: 'continue_with', width: 280 });
});

// déjà connecté ?
if (localStorage.getItem('bacInfoAccessGranted') === 'true') location.replace('index.html');
