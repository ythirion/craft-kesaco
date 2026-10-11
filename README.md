# Craft Kesaco ?

> Pourquoi « ça marche » ne suffit pas

Support du cours magistral d'une heure sur le **Software Craftsmanship** et la **qualité logicielle**, destiné aux étudiant·es de BUT 3 (environ 30 personnes).

Le cours est construit autour de **questions posées à l'oral** pour lancer la discussion. Il n'y a pas d'exercice : les TD/TP qui suivent quelques semaines plus tard passent à la pratique.

Le contenu reprend les deux premières sections du module [Crafting Code B3](https://coda-dijon.github.io/crafting-code-b3/) : *Artisanat logiciel* et *Mais au fait c'est quoi la qualité ?*

## Déroulé (60 min)

| # | Séquence | Durée | Fil rouge |
|---|---|---|---|
| 0 | Dev logiciel & responsabilité | 7' | les mots des étudiant·es, le Dieselgate (Volkswagen) |
| 1 | Le Software Craftsmanship | 12' | manifeste Agile, la dérive, le mouvement craft, infographie *The Software Craftsman* en 3 parties |
| 2 | Le craft au quotidien | 8' | CI rouge, tests commentés, review express |
| 3 | C'est quoi, la qualité ? | 13' | 3 couches, Accelerate / DORA, loi de Goodhart |
| 4 | Garantir la qualité | 10' | waterfall vs XP, pyramide, quadrants |
| 5 | Le craft à l'heure de l'IA | 7' | vitesse ≠ productivité, responsabilité du code généré |
| 6 | Synthèse | 3' | retour aux mots du début, teaser des TD/TP |

Les **notes de présentation** contiennent le minutage, les relances et les questions marquées `[BONUS]`, à sauter si le temps manque. Elles s'affichent en mode présentateur.

## Lancer les slides

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev       # ouvre http://localhost:3030
```

- Mode présentateur (avec les notes) : http://localhost:3030/presenter
- Export PDF : `npm run export`, qui génère `craft-kesaco.pdf` (nécessite `playwright-chromium`, déjà présent dans les dépendances de dev)
- Build statique : `npm run build`, qui génère le dossier `dist/`

## Publication sur GitHub Pages

Le workflow `.github/workflows/deploy.yml` construit et publie les slides à chaque push sur `main` (ou manuellement depuis l'onglet *Actions*).

À faire une seule fois sur le dépôt GitHub : *Settings → Pages → Source : **GitHub Actions***.

Les slides sont alors disponibles sur `https://<utilisateur>.github.io/<nom-du-depot>/`.

## Structure

```
slides.md          # contenu des slides et notes de présentation
styles/index.css   # thème noir & blanc
global-top.vue     # pied de page : licence et numéro de slide
components/        # diagrammes SVG (QualityLayers : les 3 couches de la qualité)
public/img/        # images
vite.config.ts     # désactive la minification CSS (bug lightningcss avec le thème par défaut)
.github/workflows/ # publication sur GitHub Pages
```

### Le thème

Le thème reprend le langage visuel du support *Guide de survie à l'ère des LLM* : fond crème pointillé, police Space Mono, titres en capitales, cadres noirs avec ombre décalée, images en niveaux de gris.

Les classes utilisables dans `slides.md` :

| Classe | Rendu |
|---|---|
| `.card` | carte blanche, bordure et ombre noires |
| `.card.compact` | carte avec moins de marge, pour les slides denses |
| `.card-dark` | bloc noir, texte blanc, ombre grise |
| `.statement` | phrase-clé en capitales, centrée |
| `.question` / `.question.big` | question à poser à l'amphi, avec l'étiquette « ? À VOUS » |
| `.hl` | mot-clé inline sur fond noir |
| `.tag` | petite étiquette encadrée |
| `.frame` | cadre d'image, image passée en niveaux de gris |
| `.figure` | gros chiffre |
| `.caption` | légende ou crédit |

## Licence

[![CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)

Ce contenu est sous licence [Creative Commons Attribution - Partage dans les Mêmes Conditions 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). Le détail est dans [LICENSE](LICENSE).

Les images tierces (schémas de Martin Fowler, couverture d'*Accelerate*…) restent sous la licence de leurs auteurs respectifs.
