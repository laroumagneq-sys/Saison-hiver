# Saison-hiver
saison hiver LCP

## 📇 Cardex Prospection (`index.html`)

Une interface pour suivre la prospection clients : noter chaque appel et chaque mail, leur résultat et le statut de chaque client.

### Utilisation
1. **Sur iPhone / iPad / Safari** : utilise la version en ligne publiée sur claude.ai (lien privé). Les données y sont enregistrées en ligne et sont les mêmes sur téléphone et ordinateur.
   **Sur ordinateur** : tu peux aussi télécharger `index.html` et l'ouvrir dans Chrome, Edge ou Firefox (données gardées dans ce navigateur uniquement).
2. Clique sur **📥 Importer Excel / CSV** et choisis ton tableau de clients. Vérifie à quoi correspond chaque colonne (c'est détecté automatiquement), puis valide.
3. Sur chaque client, clique sur **📞 Appel** ou **✉️ Mail**, choisis le résultat (pas de réponse, messagerie, intéressé, pas intéressé, RDV fixé…) et ajoute un commentaire si besoin.
   Le statut et la date de relance sont proposés automatiquement, et tu peux les modifier.
4. Clique sur un client pour ouvrir sa fiche : tout l'historique, ses coordonnées, ses notes et les colonnes d'origine du tableau.

### Fonctions
- Tableau de bord : clients contactés / total, taux de réponse, intéressés, relances du jour, nombre d'appels et de mails.
- Filtres par statut, **Relances du jour** et **Jamais contactés**, recherche et tri.
- Statuts : À contacter · Contacté – sans réponse · À rappeler / relancer · A répondu – à suivre · Intéressé · RDV fixé · Client signé · Pas intéressé.
- **📤 Exporter Excel** : un fichier `.xlsx` avec une feuille *Clients* (statut, nombre d'appels et de mails, dernier résultat, prochaine relance) et une feuille *Historique*.
- Affichage adapté au téléphone.

### ⚠️ Où sont les données ?
Version en ligne : tout est enregistré en ligne automatiquement. Fichier `index.html` ouvert en local : tout est enregistré **dans le navigateur de l'appareil utilisé**. Pour ne rien perdre ou pour changer d'ordinateur, utilise **⋯ Sauvegarde → Télécharger une sauvegarde** (fichier `.json`), puis **Restaurer** sur l'autre appareil.
La lecture et l'export des fichiers Excel ont besoin d'une connexion internet (sans connexion, l'import en CSV fonctionne toujours).
