# Les Migrations dans le Monde - Version HTML/CSS pour Wix

Cette version HTML/CSS du site "Les Migrations dans le Monde" est prête à être importée sur Wix.

## 📁 Structure des fichiers

```
site-migrations-html/
├── index.html          # Page d'accueil principale
├── styles.css          # Feuille de styles CSS
├── script.js           # Fichier JavaScript pour les interactions
├── images/             # Dossier contenant les images
│   ├── hero-migration.jpg
│   ├── stats-bg.jpg
│   ├── about-team.jpg
│   └── quiz-icon.jpg
└── README.md           # Ce fichier
```

## 🚀 Comment importer sur Wix

### Option 1 : Code Embed (Recommandé)
1. Allez sur votre site Wix
2. Cliquez sur "Ajouter" → "Plus" → "HTML Embed"
3. Copiez le contenu du fichier `index.html`
4. Collez-le dans la zone HTML Embed
5. Assurez-vous que les images sont accessibles via des URLs publiques

### Option 2 : Importer comme page
1. Créez une nouvelle page sur Wix
2. Utilisez l'option "Importer du HTML"
3. Téléchargez les fichiers HTML, CSS et JS
4. Assurez-vous que les chemins des images sont corrects

## 🎨 Personnalisation

### Modifier les couleurs
Ouvrez `styles.css` et modifiez les variables CSS au début du fichier :

```css
:root {
    --primary: #4ade80;        /* Couleur principale (vert)*/
    --secondary: #b366ff;      /* Couleur secondaire (violet) */
    --accent: #ff1493;         /* Couleur d'accent (rose) */
    --background: #0a0e27;     /* Couleur de fond */
    --foreground: #ffffff;     /* Couleur du texte */
}
```

### Modifier le texte
Ouvrez `index.html` et modifiez le contenu des balises HTML.

### Ajouter des liens
Remplacez les URLs des liens dans les balises `<a href="">` par vos propres URLs.

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte automatiquement à :
- Desktop (1280px+)
- Tablette (768px - 1279px)
- Mobile (< 768px)

## 🔐 Codes de Triche

Le système de codes de triche est intégré dans `script.js` :

- **MIGRATIONS2024** : Déverrouille les jeux spéciaux
- **YLANE5** : Affiche la section "Notre Cobaye"
- **VIERGE** : Réinitialise tous les codes

Tapez simplement le code sur votre clavier pour l'activer.

## 📸 Images

Toutes les images sont libres d'accès et proviennent de sources publiques :

- **hero-migration.jpg** : Business Insider
- **stats-bg.jpg** : Migration Data Portal
- **about-team.jpg** : Evinex
- **quiz-icon.jpg** : Math Exercises For Kids

Voir `IMAGE_SOURCES.md` pour plus de détails.

## ⚙️ Configuration Wix

### Paramètres recommandés :
1. **Domaine personnalisé** : Configurez un domaine personnalisé dans les paramètres Wix
2. **SSL/HTTPS** : Activé par défaut sur Wix
3. **SEO** : Modifiez le titre et la description dans les paramètres de page
4. **Mobile** : Testez sur mobile pour vérifier la responsive

## 🐛 Dépannage

### Les images ne s'affichent pas
- Vérifiez que les images sont dans le dossier `images/`
- Vérifiez que les chemins dans `index.html` sont corrects
- Sur Wix, utilisez des URLs absolues pour les images

### Le CSS ne s'applique pas
- Assurez-vous que `styles.css` est chargé correctement
- Vérifiez que le fichier CSS n'est pas bloqué par Wix
- Essayez d'utiliser du CSS inline si nécessaire

### Les liens ne fonctionnent pas
- Remplacez les URLs relatives par des URLs absolues
- Utilisez les URLs complètes de votre site Wix

## 📝 Notes importantes

1. **Wix limite les fichiers HTML** : Vous devrez peut-être diviser le contenu en plusieurs pages
2. **Les animations peuvent être limitées** : Wix ne supporte pas toutes les animations CSS
3. **Les formulaires** : Utilisez les formulaires Wix au lieu des formulaires HTML
4. **Les bases de données** : Utilisez les collections Wix pour les données dynamiques

## 🎯 Prochaines étapes

1. Testez le site sur Wix
2. Ajustez les styles si nécessaire
3. Configurez les domaines et le SEO
4. Publiez le site

## 📞 Support

Pour toute question ou problème, consultez :
- La documentation Wix : https://www.wix.com/fr/support
- Les tutoriels HTML/CSS : https://developer.mozilla.org/fr/

---

**Créé pour l'exposé 4e4 sur les migrations mondiales**
Saifeddine, Jecim, Hugo
