# Saison-hiver

Site vitrine personnel, simple et sans outil compliqué : juste des pages HTML/CSS que tu peux ouvrir et modifier directement.

## Voir le site

Aucune installation nécessaire. Ouvre `index.html` dans ton navigateur (double-clic dessus, ou clic droit → « Ouvrir avec » → ton navigateur).

## Structure du site

- `index.html` — Page d'accueil
- `a-propos.html` — Qui tu es, ton parcours, tes compétences
- `hiver.html` — Ta passion pour la montagne et l'hiver (galerie photo)
- `contact.html` — Comment te contacter
- `css/style.css` — Les couleurs, polices et la mise en page (un seul fichier pour tout le site)
- `img/` — Dossier où mettre tes photos

## Modifier le contenu

Tout le texte est écrit en clair dans les fichiers `.html`. Ouvre-les avec un éditeur de texte simple (Bloc-notes, TextEdit, ou mieux : [VS Code](https://code.visualstudio.com/), gratuit) et remplace :

- `Alex Martin` par ton nom, partout où il apparaît
- Les paragraphes d'exemple (« Lorem ipsum... », « Remplace ce texte... ») par tes propres mots
- `contact@exemple.com`, le téléphone et la ville dans `contact.html`

## Ajouter tes photos

1. Copie tes images dans le dossier `img/`
2. Dans `hiver.html`, remplace un bloc `<div class="placeholder">...</div>` par une balise image, par exemple :
   ```html
   <img src="img/ma-photo.jpg" alt="Description de la photo">
   ```

## Le formulaire de contact

Le formulaire de `contact.html` est prêt visuellement mais n'envoie encore rien : un formulaire web a besoin d'un service pour recevoir les messages (ex. [Formspree](https://formspree.io/), gratuit pour un usage simple). On pourra le brancher quand tu seras prêt.

## Mettre le site en ligne

Le site n'est pas encore publié. Quand tu voudras le rendre accessible en ligne, l'option la plus simple et gratuite est **GitHub Pages** :

1. Le code est déjà sur GitHub, dans ce dépôt
2. Dans les réglages du dépôt (Settings → Pages), on active GitHub Pages sur la branche principale
3. Le site devient accessible via une adresse en `https://<ton-compte>.github.io/Saison-hiver`

Demande-moi quand tu veux le faire, je m'occupe de la configuration.
