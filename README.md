# Casa d'Amaro — application de gestion

Application web simple (un seul fichier `index.html`, sans installation) pour suivre les dépenses,
les réservations et le prévisionnel des 4 logements, à partir du classeur
« Casa d'Amaro — tableau de bord prestataire ».

**Utilisation :** ouvrir `index.html` dans un navigateur (ordinateur ou téléphone).

## Onglets
- **Tableau de bord** : recettes, dépenses, cash, nuits et occupation réels vs prévus, par année ou sur 3 ans.
- **Dépenses** : saisie (date, montant, catégorie, logement, fournisseur), dépenses récurrentes mensuelles/annuelles, filtres, export CSV.
- **Réservations** : nuits, montant, ménage facturé et commission (calculés automatiquement si laissés vides).
- **Suivi mensuel** : écarts réel / prévisionnel mois par mois (remplace l'onglet « Suivi réel »).
- **Prévision** : synthèse 3 ans, scénarios et détail mensuel — mêmes formules que le classeur.
- **Logements & tâches** : fiche des logements et liste des points « à définir / à vérifier ».
- **Paramètres** : tarifs saisonniers, occupation, ménage, crédit, charges… (les « cellules jaunes »).

La mensualité du crédit (2 377,83 €) est ajoutée automatiquement chaque mois aux dépenses réelles à partir de la première échéance (réglable ou désactivable dans Paramètres).

## Données
Les données sont enregistrées dans le navigateur utilisé. Le bouton **Sauvegarder** télécharge un
fichier `.json` ; **Restaurer** le recharge (pour faire une sauvegarde ou passer sur un autre appareil).
