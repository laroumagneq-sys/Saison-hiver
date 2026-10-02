# LCP — Direction artistique (référence)

Établie avec le skill UI/UX Pro Max : style **Editorial / Magazine** croisé avec un
**minimalisme de maison de luxe** (grandes typographies, beaucoup d'espace, une seule couleur d'accent).

## Couleurs

| Rôle | Valeur | Usage |
|---|---|---|
| Noir pierre | `#1c1917` | Fonds sombres, texte principal |
| Ivoire | `#f7f4ee` | Fond principal |
| Papier | `#efe9df` | Sections alternées |
| Pierre | `#57534e` | Texte secondaire sur fond clair (6,9:1) |
| Or champagne | `#c6a15b` | Accent sur fond sombre, bouton principal (7,2:1) |
| Or profond | `#7f612b` | Accent sur fond clair (5,2:1) |

Toutes les associations texte/fond respectent WCAG AA (≥ 4,5:1).

## Typographie

- **Titres** : Cormorant Garamond 300 (italique pour les mots mis en valeur, en or)
- **Texte** : Jost 300 / 400, petites capitales espacées (0,2em) pour les libellés
- Polices hébergées dans `fonts/` (aucun appel à Google, conforme RGPD)

## Principes

1. Une image forte par écran, jamais de cadre ni d'ombre décorative.
2. Numérotation éditoriale (01, 02… / I, II, III) pour rythmer les sections.
3. Alternance ivoire / papier / noir pour séparer les chapitres.
4. Un seul appel à l'action principal par écran : « Réserver sur WhatsApp ».
5. Animations discrètes (apparition au défilement, 1 s) et désactivées si l'utilisateur limite les animations.

## Composants (css/style.css)

`hero`, `page-hero`, `statement`, `credentials`, `chapter`, `duo`, `portrait`,
`steps`, `cards`, `ledger`, `offers`, `signatures`, `rail`, `masonry` + `lightbox`,
`form`, `footer-cta`, `wa-float`.
