# LCP

Site vitrine pour **LCP** (chef privé &amp; sommelier/majordome pour chalets de luxe), simple et sans outil compliqué : juste des pages HTML/CSS que tu peux ouvrir et modifier directement.

## Voir le site

Aucune installation nécessaire. Ouvre `index.html` dans ton navigateur (double-clic dessus, ou clic droit → « Ouvrir avec » → ton navigateur).

## Structure du site

- `index.html` — Accueil (présentation, contact rapide WhatsApp)
- `le-duo.html` — Barthélémy (chef privé) et Quentin (majordome & sommelier)
- `la-cave.html` — Vieux millésimes, accords mets & vins, vignerons indépendants, défilé photo
- `prestations.html` — Dîners, service en salle, vins & cocktails, moments signature, déroulement
- `galerie.html` — Galerie photo (dressages du chef, service au bar, belles bouteilles)
- `contact.html` — Formulaire de contact + WhatsApp + destinations
- `css/style.css` — Les couleurs, polices et la mise en page (un seul fichier pour tout le site)
- `img/` — Dossier où mettre les vraies photos

## Modifier le contenu

Tout le texte est écrit en clair dans les fichiers `.html`. Ouvre-les avec un éditeur de texte simple (Bloc-notes, TextEdit, ou mieux : [VS Code](https://code.visualstudio.com/), gratuit).

## Ajouter d'autres photos

Toutes les photos actuelles sont réelles. Si tu veux en ajouter de nouvelles ou remplacer une des figures de `galerie.html` :

1. Copie le fichier image dans le dossier `img/`
2. Repère la balise `<img src="img/....jpg" ...>` à remplacer, dans le fichier `.html` concerné
3. Change simplement le `src` (et l'`alt`), par exemple :
   ```html
   <img src="img/nouvelle-photo.jpg" alt="Description de la photo">
   ```

Envoie-moi les photos quand tu les as et je peux les intégrer directement.

## Le formulaire de contact

Le formulaire de `contact.html` est prêt visuellement mais n'envoie encore rien : un formulaire web a besoin d'un service pour recevoir les messages (ex. [Formspree](https://formspree.io/), gratuit pour un usage simple), ou une adresse WhatsApp/email en redirection directe. On pourra le brancher quand tu seras prêt.

## Mettre le site en ligne

Le site n'est pas encore publié. Quand tu voudras le rendre accessible en ligne, l'option la plus simple et gratuite est **GitHub Pages** :

1. Le code est déjà sur GitHub, dans ce dépôt
2. Dans les réglages du dépôt (Settings → Pages), on active GitHub Pages sur la branche principale
3. Le site devient accessible via une adresse en `https://<ton-compte>.github.io/Saison-hiver`

Idéalement, il faudra ensuite y associer un nom de domaine personnalisé (ex. `lcp-chalet.com`). Demande-moi quand tu veux avancer là-dessus.
