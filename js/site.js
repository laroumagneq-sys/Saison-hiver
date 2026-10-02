// Menu mobile
document.querySelectorAll('.nav-toggle').forEach(function (btn) {
  var nav = document.getElementById(btn.getAttribute('aria-controls'));
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Fermer' : 'Menu';
  });
});

// Formulaire de contact : envoie la demande sur WhatsApp, pré-remplie
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var f = form.elements;
    var lines = ['Bonjour LCP,'];
    if (f.name.value) lines.push('Nom : ' + f.name.value);
    if (f.email.value) lines.push('Email : ' + f.email.value);
    if (f.dates.value) lines.push('Dates & destination : ' + f.dates.value);
    if (f.message.value) lines.push('', f.message.value);
    window.open('https://wa.me/33652894780?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
  });
}
