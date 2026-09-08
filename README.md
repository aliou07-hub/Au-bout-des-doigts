# Au Bout Des Doigts — Website

Site vitrine pour **Au Bout Des Doigts**, restaurant italien / pizzeria / lounge à N'Djamena, Tchad.

Site statique (HTML/CSS/JS vanilla, aucune étape de build, aucune dépendance) — bilingue FR/EN, avec formulaire de réservation qui ouvre WhatsApp avec les détails pré-remplis.

## Structure

```
index.html                # Page unique (toutes les sections)
css/styles.css             # Styles
js/main.js                  # Interactions (nav, carousel, i18n, formulaire → WhatsApp)
js/i18n.js                  # Dictionnaire de traduction FR/EN
config/site.config.js       # Config éditable : téléphone, adresse, horaires, réseaux sociaux
public/assets/au-bout-des-doigts/
  ├─ assets.json            # Registre des images (authentiques vs. stock) avec sources
  └─ README.md              # Documentation détaillée des images/vidéo
```

## Modifier les informations du restaurant

Toutes les infos pratiques (téléphone, adresse, horaires, lien Facebook, note Tripadvisor) se modifient à un seul endroit : [`config/site.config.js`](config/site.config.js).

Les textes affichés (FR et EN) se modifient dans [`js/i18n.js`](js/i18n.js).

## Lancer en local

Aucune installation requise — un simple serveur statique suffit :

```bash
python -m http.server 8080
# puis ouvrir http://localhost:8080
```

ou avec Node :

```bash
npx serve .
```

## Déploiement sur Vercel

**Option A — via GitHub (recommandé) :**
1. Pousser ce dépôt sur GitHub (voir section suivante).
2. Sur [vercel.com/new](https://vercel.com/new), importer le dépôt GitHub.
3. Aucune configuration de build n'est nécessaire (site statique) — Vercel détecte `index.html` à la racine. Le fichier `vercel.json` fourni gère le cache des images et les URLs propres.
4. Déployer.

**Option B — via la CLI Vercel :**
```bash
npm i -g vercel
vercel
```

## Pousser sur GitHub

Créer un dépôt vide sur [github.com/new](https://github.com/new) (sans README/licence), puis :

```bash
git remote add origin https://github.com/<votre-utilisateur>/<nom-du-repo>.git
git branch -M main
git push -u origin main
```

## Note sur les images

Le dossier `public/assets/au-bout-des-doigts/` contient 9 photos authentiques du restaurant (fournies directement par le propriétaire) et quelques photos de substitution sous licence libre (Unsplash) pour les catégories non couvertes (cocktails, vin, plat local). Détails complets et sources dans `public/assets/au-bout-des-doigts/README.md` et `assets.json`.

---

🤖 Site construit avec [Claude Code](https://claude.com/claude-code).
