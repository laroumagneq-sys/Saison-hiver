# LCP Cousins

Site vitrine pour **LCP Cousins** (chef privé &amp; sommelier/majordome pour chalets de luxe), simple et sans outil compliqué : juste des pages HTML/CSS que tu peux ouvrir et modifier directement.

## Voir le site

Aucune installation nécessaire. Ouvre `index.html` dans ton navigateur (double-clic dessus, ou clic droit → « Ouvrir avec » → ton navigateur).

## Structure du site

- `index.html` — Accueil (présentation, contact rapide WhatsApp)
- `le-duo.html` — Barthélémy (chef privé) et Quentin (majordome & sommelier)
- `prestations.html` — Dîners, service en salle, vins & cocktails, moments signature, déroulement
- `galerie.html` — Galerie photo (dressages du chef, service en cave, quelques placeholders restants)
- `contact.html` — Formulaire de contact + WhatsApp + destinations
- `css/style.css` — Les couleurs, polices et la mise en page (un seul fichier pour tout le site)
- `img/` — Dossier où mettre les vraies photos

## Modifier le contenu

Tout le texte est écrit en clair dans les fichiers `.html`. Ouvre-les avec un éditeur de texte simple (Bloc-notes, TextEdit, ou mieux : [VS Code](https://code.visualstudio.com/), gratuit).

## Ajouter d'autres photos

Il reste quelques cadres avec icônes à la place de photos (champagne, bouteille, cave, dans `galerie.html`). Pour les remplacer :

1. Copie le fichier image dans le dossier `img/`
2. Repère le bloc `<div class="placeholder">...</div>` à remplacer
3. Remplace-le par une balise image, par exemple :
   ```html
   <img src="img/nom-du-fichier.jpg" alt="Description de la photo">
   ```

Envoie-moi les photos quand tu les as et je peux les intégrer directement.

## Le formulaire de contact

Le formulaire de `contact.html` est prêt visuellement mais n'envoie encore rien : un formulaire web a besoin d'un service pour recevoir les messages (ex. [Formspree](https://formspree.io/), gratuit pour un usage simple), ou une adresse WhatsApp/email en redirection directe. On pourra le brancher quand tu seras prêt.

## Mettre le site en ligne

Le site n'est pas encore publié. Quand tu voudras le rendre accessible en ligne, l'option la plus simple et gratuite est **GitHub Pages** :

1. Le code est déjà sur GitHub, dans ce dépôt
2. Dans les réglages du dépôt (Settings → Pages), on active GitHub Pages sur la branche principale
3. Le site devient accessible via une adresse en `https://<ton-compte>.github.io/Saison-hiver`

Idéalement, il faudra ensuite y associer un nom de domaine personnalisé (ex. `lcp-cousins.com`). Demande-moi quand tu veux avancer là-dessus.
