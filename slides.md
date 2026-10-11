---
theme: default
title: Craft Kesaco ?
info: |
 Software Craftsmanship et qualité logicielle.
  Contenu sous licence CC BY-SA 4.0.
author: Yoan Thirion
colorSchema: light
fonts:
  sans: Space Mono
  mono: Space Mono
  serif: Space Mono
transition: none
exportFilename: craft-kesaco
---

<div class="h-full flex items-center justify-between gap-10">
  <div class="flex-1">
    <div class="card-dark" style="padding: 2rem 2.2rem">
      <h1 style="color:#fff; font-size: 2.1rem; margin:0">Craft Kesaco&nbsp;?</h1>
    </div>
    <p class="subtitle">Software Craftsmanship · qualité logicielle · responsabilité</p>
  </div>
  <div class="w-72 flex flex-col gap-6">
    <div class="card text-right">
      <div class="font-bold">YOAN THIRION</div>
    </div>
    <div class="text-[0.6rem] text-right" style="color:#555">
      Contenu sous licence CC BY-SA 4.0
    </div>
  </div>
</div>

<!--
Durée totale : 60 min. Les questions marquées [BONUS] dans les notes sont à sauter si on est en retard.
-->

---
layout: center
---

<h1 class="absolute top-9 left-14">Qui suis-je&nbsp;?</h1>

<div class="frame w-56 h-56">
  <img src="/img/avatar.png" alt="Avatar de Yoan Thirion" />
</div>

<div class="card-dark mt-10 text-center">
  <h2 style="color:#fff; margin:0">Yoan Thirion</h2>
</div>

<div class="tag mt-5">@yot88</div>

<!--
À compléter à l'oral : parcours, rôle actuel, pourquoi le craft.
-->

---
layout: center
---

<div class="question big max-w-3xl">
Quels mots associez-vous au métier de développeur·se et à sa responsabilité&nbsp;?
</div>

<!--
[0. Dev logiciel & responsabilité · 7 min]
Noter les mots au tableau et les GARDER jusqu'à la fin du cours.
Si ça ne démarre pas : "et quand ça casse&nbsp;?", "et vis-à-vis des utilisateurs&nbsp;?"
-->

---
layout: center
---

<div class="question big max-w-3xl">
Quand un logiciel cause un préjudice, qui est responsable&nbsp;?<br/>
La ou le dev&nbsp;? L'entreprise&nbsp;? Le client&nbsp;?
</div>

---

# Dieselgate · Volkswagen

<p class="subtitle">quand le code fait exactement ce qu'on lui a demandé</p>

<div class="grid grid-cols-3 gap-6 mt-6">
  <div class="card text-center">
    <div class="tag">le code</div>
    <div class="figure">Triche</div>
    <p class="text-sm mt-2">le logiciel moteur <strong>détecte les tests</strong> d'homologation et réduit les émissions… seulement pendant le test</p>
  </div>
  <div class="card text-center">
    <div class="tag">2015</div>
    <div class="figure">11 M</div>
    <p class="text-sm mt-2">véhicules diesel concernés dans le monde, jusqu'à <strong>40×</strong> la limite de NOx sur route aux États-Unis</p>
  </div>
  <div class="card text-center">
    <div class="tag">2017</div>
    <div class="figure">40 mois</div>
    <p class="text-sm mt-2">de prison pour un <strong>ingénieur</strong> qui a participé au développement du logiciel</p>
  </div>
</div>

<div class="card-dark statement mt-10">
« J'ai juste fait ce qu'on m'a demandé. »
</div>

<!--
Raconter l'histoire en 1-2 min :
- Le logiciel reconnaît les conditions de test (roues qui tournent sans que le volant bouge, durée, vitesse…) et active le traitement complet des émissions uniquement dans ce cas.
- Découvert par des chercheurs de l'université de West Virginia, révélé par l'EPA en septembre 2015.
- Plus de 30 milliards d'euros de coûts pour Volkswagen (amendes, rappels, indemnisations).
- James Liang, ingénieur VW, condamné en 2017 aux États-Unis à 40 mois de prison : il a coopéré et plaidé coupable, mais "obéir aux ordres" n'a pas suffi.
Relance : "Et si c'était votre manager qui vous le demandait ?"

Alternatives : Horizon (La Poste britannique, 900+ sous-postiers condamnés à tort à cause de bugs) ; Therac-25 (1985-1987, surdoses mortelles dues à une race condition).
-->

---
layout: center
---

<div class="card-dark statement max-w-3xl" style="font-size:1.25rem; padding: 2rem">
Le code a des conséquences réelles.<br/><br/>
Le craft, c'est prendre cette responsabilité au sérieux.
</div>

---
layout: center
---

<div class="section-num">01</div>
<div class="card-dark mt-3"><h1 style="color:#fff; margin:0">Le Software Craftsmanship</h1></div>

<!--
[1. Le Software Craftsmanship · 12 min]
-->

---

# Le manifeste Agile

<p class="subtitle">2001 · Snowbird, Utah · 17 signataires</p>

<div class="grid grid-cols-2 gap-x-6 gap-y-4 mt-4">
  <div class="card compact"><span class="hl">Les individus et leurs interactions</span><p class="text-sm">plutôt que les processus et les outils</p></div>
  <div class="card compact"><span class="hl">Des logiciels opérationnels</span><p class="text-sm">plutôt qu'une documentation exhaustive</p></div>
  <div class="card compact"><span class="hl">La collaboration avec les clients</span><p class="text-sm">plutôt que la négociation contractuelle</p></div>
  <div class="card compact"><span class="hl">L'adaptation au changement</span><p class="text-sm">plutôt que le suivi d'un plan</p></div>
</div>

<div class="card-dark mt-8 text-sm">
<div class="tag" style="color:#111">principe n°9</div>
Une attention continue à l'excellence technique et à une bonne conception renforce l'agilité.
</div>

<!--
Insister sur le principe n°9 : l'excellence technique fait partie de l'agile dès le départ.
Parmi les signataires : Kent Beck (XP), Robert C. Martin, Martin Fowler, Ken Schwaber et Jeff Sutherland (Scrum)…
-->

---

# La dérive

<p class="subtitle">années 2000 : l'agile se diffuse… et se transforme</p>

<div class="grid grid-cols-3 gap-6 mt-2">
  <div class="card compact">
    <div class="tag">process</div>
    <p class="text-sm">L'agile se réduit à des <strong>rituels</strong> : daily, sprint, rétro, story points.</p>
  </div>
  <div class="card compact">
    <div class="tag">certifications</div>
    <p class="text-sm">On devient « Scrum Master certifié » en 2 jours. L'agile devient un <strong>marché</strong>.</p>
  </div>
  <div class="card compact">
    <div class="tag">technique</div>
    <p class="text-sm">Les pratiques d'XP (tests, refactoring, pair programming) passent <strong>à la trappe</strong>.</p>
  </div>
</div>

<div class="card compact mt-6">
  <div class="tag">Martin Fowler · 2009 · « Flaccid Scrum »</div>
  <p class="text-sm">Des équipes adoptent le process sans les pratiques techniques… et leur base de code finit en bourbier.</p>
</div>

<div class="question mt-6">Dans vos équipes, l'agile, ce sont des rituels ou des pratiques&nbsp;?</div>

---

# Le mouvement craft

<p class="subtitle">remettre l'excellence technique et le professionnalisme au centre</p>

<div class="flex items-stretch gap-4 mt-8">
  <div class="card flex-1">
    <div class="tag">2001</div>
    <h2>Le livre fondateur</h2>
    <p class="text-sm">Pete McBreen, <em>Software Craftsmanship: The New Imperative</em>. Le développement comme un artisanat : apprenti, compagnon, maître.</p>
  </div>
  <div class="self-center font-bold text-2xl">→</div>
  <div class="card flex-1">
    <div class="tag">2008</div>
    <h2>« Craftsmanship over crap »</h2>
    <p class="text-sm">Robert C. Martin propose une 5e valeur au manifeste Agile, lors de la conférence Agile 2008.</p>
  </div>
  <div class="self-center font-bold text-2xl">→</div>
  <div class="card-dark flex-1">
    <div class="tag" style="color:#111">2009</div>
    <h2>Le manifeste</h2>
    <p class="text-sm">Manifesto for Software Craftsmanship, puis les communautés : coding dojos, code retreats, conférences.</p>
  </div>
</div>

<div class="card-dark statement mt-10 py-2">Le craft ne remplace pas l'agile, il le complète.</div>

---

# Le manifeste

<p class="subtitle">manifesto.softwarecraftsmanship.org · 2009</p>

<div class="flex flex-col gap-4 mt-4">
  <div class="card py-2">Pas seulement un logiciel qui fonctionne, <span class="hl">mais aussi un logiciel bien conçu</span></div>
  <div class="card py-2">Pas seulement répondre au changement, <span class="hl">mais aussi ajouter de la valeur en continu</span></div>
  <div class="card py-2">Pas seulement les individus et leurs interactions, <span class="hl">mais aussi une communauté de professionnels</span></div>
  <div class="card py-2">Pas seulement la collaboration avec le client, <span class="hl">mais aussi des partenariats productifs</span></div>
</div>

<!--
Le craft ne remplace pas l'agile : il le complète ("pas seulement… mais aussi").
Mettre en regard avec les 4 valeurs du manifeste Agile.
-->

---

# The Software Craftsman · 1/3

<div class="grid grid-cols-5 gap-8 mt-2">
  <div class="col-span-3">
    <div class="frame h-96"><img src="/img/software-craftsman-1.webp" alt="Infographie The Software Craftsman, partie 1 : idéologie" /></div>
  </div>
  <div class="col-span-2 flex flex-col gap-4">
    <div class="tag self-start">l'idéologie</div>
    <div class="question small">« Du code qui marche, c'est le minimum pour un professionnel. » D'accord&nbsp;?</div>
    <div class="question small">Agilité : construire la bonne chose. Craft : bien construire la chose. L'un sans l'autre, ça donne quoi&nbsp;?</div>
    <div class="question small">Votre carrière : c'est vous qui la pilotez, ou votre employeur&nbsp;?</div>
  </div>
</div>

<!--
Infographie : Sandro Mancuso, The Software Craftsman (2014), illustrée par Yoan Thirion.
Points à faire ressortir : not a religion / not a method, "craftsmanship over crap", own your career vs principe de Peter.
Q3 [BONUS] si déjà abordée.
-->

---

# The Software Craftsman · 2/3

<div class="grid grid-cols-5 gap-8 mt-2">
  <div class="col-span-3">
    <div class="frame h-96"><img src="/img/software-craftsman-2.webp" alt="Infographie The Software Craftsman, partie 2 : le manifeste détaillé" /></div>
  </div>
  <div class="col-span-2 flex flex-col gap-4">
    <div class="tag self-start">le manifeste en pratique</div>
    <div class="question small">« La qualité du code ne garantit pas le succès, mais elle peut être la cause principale de l'échec. » Un exemple&nbsp;?</div>
    <div class="question small">La règle du boy scout : laisser le code plus propre qu'on ne l'a trouvé. Vous le faites&nbsp;?</div>
    <div class="question small">Dire non à un client, ça peut être pour son bien&nbsp;?</div>
  </div>
</div>

<!--
Points à faire ressortir : well-crafted = tests automatisés, langage métier dans le code, design simple ; boy scout rule ; "we are not factory workers".
Q3 [BONUS].
-->

---

# The Software Craftsman · 3/3

<div class="grid grid-cols-5 gap-8 mt-2">
  <div class="col-span-3">
    <div class="frame h-96"><img src="/img/software-craftsman-3.webp" alt="Infographie The Software Craftsman, partie 3 : attitude, pratiques et apprentissage continu" /></div>
  </div>
  <div class="col-span-2 flex flex-col gap-4">
    <div class="tag self-start">pratiquer &amp; apprendre</div>
    <div class="question small">Les musicien·nes répètent, les sportif·ves s'entraînent. Et les développeur·ses&nbsp;?</div>
    <div class="question small">« On te paie pour » ou « j'ai envie de » : qu'est-ce qui vous fait vraiment progresser&nbsp;?</div>
    <div class="question small">Brown bags, lightning talks, communautés : ça existe dans votre entreprise&nbsp;?</div>
  </div>
</div>

<!--
Points à faire ressortir : katas, pet projects, pair/mob programming ; motivation intrinsèque vs extrinsèque ; pratiques XP ; culture du partage.
Q2 et Q3 [BONUS].
-->

---

# The Software Craftsman

<p class="subtitle">Sandro Mancuso · 2014</p>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="card">
    <div class="tag">attitude</div>
    <p>Le craft est une <strong>attitude</strong>, pas une liste de pratiques.</p>
  </div>
  <div class="card">
    <div class="tag">valeur</div>
    <p>Le client paie pour un logiciel qui marche <strong>et</strong> qui pourra évoluer.</p>
  </div>
  <div class="card">
    <div class="tag">dire non</div>
    <p>Un pro sait dire non… et <strong>propose une alternative</strong>.</p>
  </div>
  <div class="card">
    <div class="tag">carrière</div>
    <p>Votre carrière <strong>vous appartient</strong>, pas à votre employeur.</p>
  </div>
</div>

---

# Et vous&nbsp;?

<div class="flex flex-col gap-6 mt-8">
  <div class="question">Pour vous, c'est quoi un·e développeur·se professionnel·le&nbsp;?</div>
  <div class="question">Savoir dire non à son manager ou à son client, ça fait partie du métier&nbsp;?</div>
  <div class="question">Qui est responsable de votre montée en compétences : vous ou votre employeur&nbsp;?</div>
</div>

<!--
Q1 : obligatoire.
Q2 : [BONUS]. Relancer avec l'alternance : "on vous a déjà demandé de livrer sans tester&nbsp;?"
Q3 : [BONUS].
-->

---

# Le craft, ce n'est pas…

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="card">
    <div class="tag">ce n'est pas</div>
    <ul>
      <li><span v-mark="{ at: 1, type: 'strike-through', color: '#111', strokeWidth: 3 }">faire du code parfait</span></li>
      <li><span v-mark="{ at: 2, type: 'strike-through', color: '#111', strokeWidth: 3 }">être élitiste</span></li>
      <li><span v-mark="{ at: 3, type: 'strike-through', color: '#111', strokeWidth: 3 }">être dogmatique</span></li>
    </ul>
  </div>
  <div class="card-dark" v-click="4">
    <div class="tag" style="color:#111">c'est</div>
    <ul>
      <li>se comporter en professionnel</li>
      <li v-click="5">assumer la qualité</li>
      <li v-click="6">progresser en permanence</li>
      <li v-click="7">construire avec fierté</li>
    </ul>
  </div>
</div>

---
layout: center
---

<div class="section-num">02</div>
<div class="card-dark mt-3"><h1 style="color:#fff; margin:0">Le craft au quotidien</h1></div>

<!--
[2. Le craft au quotidien · 8 min]
-->

---

# Craft ou pas craft&nbsp;?

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="question">La CI est rouge depuis 3 jours. La release est dans 5 jours. On merge quand même&nbsp;?</div>
  <div class="question">La démo est dans 48 h et 10 tests sont instables. On les commente&nbsp;?</div>
  <div class="question">Une PR de 1 500 lignes validée en 6 minutes avec un « LGTM ». C'est une review&nbsp;?</div>
  <div class="question">Vous l'avez déjà vécu en entreprise&nbsp;?</div>
</div>

<!--
En poser 2 ou 3 selon les réactions.
Pour chaque cas : quel est le vrai risque&nbsp;? Que ferait une équipe craft&nbsp;?
Autres situations possibles (cf. crafting-code-b3) : la refacto qu'on repousse ("on ajoutera juste un if"), le fix direct en prod sans test.
-->

---

# Ce qui émerge

<div class="flex flex-wrap gap-4 mt-8">
  <span class="hl text-lg">CI robuste</span>
  <span class="hl text-lg">tests automatisés</span>
  <span class="hl text-lg">refactoring continu</span>
  <span class="hl text-lg">code review exigeante</span>
  <span class="hl text-lg">pair / mob programming</span>
  <span class="hl text-lg">ownership</span>
  <span class="hl text-lg">feedback rapide</span>
</div>

<div class="question mt-14 max-w-3xl">
Si c'était un produit artisanal, à quoi verrait-on la différence&nbsp;?
</div>

<!--
[BONUS] la question du bas. Faire formuler : lisibilité, tests explicites, architecture intentionnelle, dette maîtrisée.
Transition : "Mais au fait, c'est quoi la qualité&nbsp;?"
-->

---
layout: center
---

<div class="section-num">03</div>
<div class="card-dark mt-3"><h1 style="color:#fff; margin:0">C'est quoi, la qualité&nbsp;?</h1></div>

<!--
[3. C'est quoi, la qualité&nbsp;? · 13 min]
-->

---
layout: center
---

<div class="question big max-w-3xl">
Comment prouveriez-vous à votre patron que votre logiciel est de qualité&nbsp;?
</div>

<!--
Regrouper les réponses au tableau : vitesse, bugs, tests, incidents, satisfaction utilisateur.
Relance : "est-ce que ça mesure vraiment la qualité, ou seulement une partie&nbsp;?"
-->

---

# Les 3 couches de la qualité

<QualityLayers class="mt-2" />

<div v-click="5" class="card-dark statement mt-3 py-2">La qualité ne se limite pas aux bugs.</div>

---

# Accelerate · DORA

<p class="subtitle">Forsgren, Humble, Kim · 2018 · des années de données sur des milliers d'équipes</p>

<div class="grid grid-cols-5 gap-8 mt-2">
  <div class="col-span-1">
    <div class="frame"><img src="/img/accelerate.webp" alt="Couverture du livre Accelerate" /></div>
  </div>
  <div class="col-span-4 grid grid-cols-2 gap-4">
    <div class="card py-2">
      <div class="tag">débit</div>
      <p class="text-sm font-bold">Fréquence de déploiement</p>
    </div>
    <div class="card py-2">
      <div class="tag">débit</div>
      <p class="text-sm font-bold">Délai entre commit et prod</p>
    </div>
    <div class="card py-2">
      <div class="tag">stabilité</div>
      <p class="text-sm font-bold">Taux d'échec des changements</p>
    </div>
    <div class="card py-2">
      <div class="tag">stabilité</div>
      <p class="text-sm font-bold">Temps de restauration</p>
    </div>
  </div>
</div>

<div class="card-dark statement mt-8">Les meilleures équipes sont rapides <span class="hl" style="background:#fff;color:#111">et</span> stables.</div>

---
layout: center
---

<div class="question big max-w-3xl">
Dans votre entreprise, combien de temps se passe entre un commit et la mise en prod&nbsp;?
</div>

<!--
Faire réagir sur les écarts : quelques heures vs plusieurs semaines. Qu'est-ce qui bloque&nbsp;? (tests manuels, validation, peur de casser…)
-->

---

# Quand la mesure devient l'objectif

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="card">
    <div class="tag">loi de Goodhart</div>
    <p>« Lorsqu'une mesure devient un objectif, elle cesse d'être une bonne mesure. »</p>
  </div>
  <div class="card">
    <div class="tag">effet cobra</div>
    <p class="text-sm">Une prime pour chaque cobra tué… on se met à <strong>élever des cobras</strong>.</p>
  </div>
</div>

<div class="flex justify-between gap-4 mt-8">
  <span class="tag text-sm">couverture de code ≠ qualité</span>
  <span class="tag text-sm">nombre de bugs ≠ maturité</span>
  <span class="tag text-sm">story points ≠ valeur</span>
</div>

<div class="question mt-6">Si on impose 80 % de couverture de tests, que va-t-il se passer&nbsp;?</div>

<!--
Réponse attendue : des tests sans assertion, des tests qui couvrent sans vérifier, des getters testés…
-->

---
layout: center
---

<div class="section-num">04</div>
<div class="card-dark mt-3"><h1 style="color:#fff; margin:0">Garantir la qualité</h1></div>

<!--
[4. Garantir la qualité · 10 min]
-->

---
layout: center
---

<div class="question big max-w-3xl">
Dans votre équipe, qui teste, et à quel moment&nbsp;?
</div>

---

# Tester à la fin… ou tout le temps&nbsp;?

<div class="grid grid-cols-2 gap-8 mt-6">
  <div>
    <div class="frame h-60"><img src="/img/waterfall.webp" alt="Processus en cascade" /></div>
    <div class="caption">Waterfall : le test arrive en fin de chaîne</div>
  </div>
  <div>
    <div class="frame h-60"><img src="/img/xp.webp" alt="Boucles de feedback d'eXtreme Programming" /></div>
    <div class="caption">XP : le test est une activité continue</div>
  </div>
</div>

<div class="caption">schémas : Martin Fowler · martinfowler.com</div>

---

# Tous les tests ne servent pas la même finalité

<div class="grid grid-cols-2 gap-8 mt-4">
  <div>
    <div class="frame h-64"><img src="/img/test-pyramid.webp" alt="Pyramide des tests" /></div>
    <div class="caption">La pyramide des tests</div>
  </div>
  <div>
    <div class="frame h-64"><img src="/img/agile-quadrants1.webp" alt="Quadrants des tests agiles" /></div>
    <div class="caption">Les quadrants des tests agiles</div>
  </div>
</div>

<!--
Pyramide : beaucoup de tests rapides et isolés à la base, peu de tests E2E lents en haut.
Quadrants :
Q1 tech / support au dev : unitaires, intégration
Q2 métier / support au dev : BDD, tests d'acceptation
Q3 métier / critique du produit : exploratoire, UAT
Q4 tech / critique du produit : perf, sécurité, robustesse
-->

---
layout: center
---

<div class="section-num">05</div>
<div class="card-dark mt-3"><h1 style="color:#fff; margin:0">Le craft à l'heure de l'IA</h1></div>

<!--
[5. Le craft à l'heure de l'IA · 7 min]
Source : Sandro Mancuso, "Software Craftsmanship in the AI Era" (Codurance).
-->

---
layout: center
---

<div class="question big max-w-3xl">
Quelle part de votre code est écrite par une IA aujourd'hui&nbsp;?<br/>
Vous comprenez tout ce qu'elle produit&nbsp;?
</div>

---

# Vitesse ≠ productivité

<div class="grid grid-cols-3 gap-6 mt-2 items-start">
  <div class="card text-center col-span-1">
    <div class="tag">écrire du code</div>
    <div class="figure">&lt; 25 %</div>
    <p class="text-sm mt-2">du temps des devs. Le reste : lire, comprendre, débugger, discuter du besoin.</p>
  </div>
  <div class="col-span-2 flex flex-col gap-3">
    <div class="card compact">
      <div class="tag">amplification</div>
      <p class="text-sm">L'IA s'appuie sur le code existant : <strong>un mauvais code engendre plus de mauvais code</strong>.</p>
    </div>
    <div class="card compact">
      <div class="tag">compréhension</div>
      <p class="text-sm">Le code n'est plus dans la tête de l'équipe : le système devient une boîte noire.</p>
    </div>
    <div class="card compact">
      <div class="tag">revue</div>
      <p class="text-sm">Des PR énormes, impossibles à relire sérieusement.</p>
    </div>
  </div>
</div>

<div class="card-dark statement mt-5 py-2">Sans bonnes pratiques, l'IA accélère surtout le chaos.</div>

---
layout: center
---

<div class="question big max-w-3xl">
Si l'IA génère un bug en prod, qui est responsable&nbsp;?
</div>

<!--
Boucler avec l'ouverture (Dieselgate) : l'ingénieur de VW n'a pas échappé à sa responsabilité en disant qu'il obéissait. Avec l'IA, c'est pareil : celui qui merge est responsable.
-->

---
layout: center
---

<div class="card-dark statement max-w-3xl" style="font-size:1.5rem; padding: 2.2rem">
AI is the engine.<br/>Craftsmanship is the compass.
</div>

<div class="caption mt-6">Sandro Mancuso · Software Craftsmanship in the AI Era</div>

---
layout: center
---

<div class="section-num">06</div>
<div class="card-dark mt-3"><h1 style="color:#fff; margin:0">Synthèse</h1></div>

<!--
[6. Synthèse & teaser · 3 min]
-->

---
layout: center
---

<div class="question big max-w-3xl">
Retour au tableau : quels mots ajouteriez-vous, ou retireriez-vous&nbsp;?
</div>

---

# Du code pour des humains

<div class="grid grid-cols-5 gap-8 mt-2">
<div class="col-span-2">

<div class="tag">avant</div>

```ts
function calc(c: any, d: number) {
  let x = 0
  for (let i = 0; i < c.o.length; i++) {
    if (c.o[i].s == 2) continue
    x += c.o[i].p * c.o[i].q
  }
  if (c.t == 1 && d - c.d > 365) x = x * 0.9
  return x
}
```

<div class="question small mt-6">Que fait cette fonction&nbsp;?</div>

</div>
<div v-click class="col-span-3">

<div class="tag">après</div>

```ts
const LOYALTY_DISCOUNT = 0.1
const ONE_YEAR_IN_DAYS = 365

function orderTotal(customer: Customer, today: Day) {
  const subtotal = customer.orderLines
    .filter(line => !line.isCancelled())
    .reduce((sum, line) =>
      sum + line.unitPrice * line.quantity, 0)

  return isLoyal(customer, today)
    ? subtotal * (1 - LOYALTY_DISCOUNT)
    : subtotal
}

function isLoyal(customer: Customer, today: Day) {
  return customer.isPremium()
    && daysBetween(customer.memberSince, today)
       > ONE_YEAR_IN_DAYS
}
```

</div>
</div>

<div v-click class="card-dark statement mt-5 py-2 text-sm">
« N'importe qui peut écrire du code qu'une machine comprend.<br/>Les bons développeur·ses écrivent du code que les humains comprennent. »
</div>

<div v-after class="caption">d'après Martin Fowler · Refactoring, 1999</div>

<!--
Laisser les étudiant·es chercher ce que fait la version "avant" (1 min) : c'est le signe que le code n'est pas écrit pour des humains.
Réponse : le total d'une commande, sans les lignes annulées (s == 2), avec 10 % de remise pour les client·es premium (t == 1) inscrit·es depuis plus d'un an.
Clic 1 : même comportement, mais les noms racontent le métier. Plus de nombres magiques, plus de commentaires nécessaires.
Clic 2 : la citation. On lit le code bien plus souvent qu'on ne l'écrit.
-->

---

# Et maintenant&nbsp;?

<div class="grid grid-cols-2 gap-8 mt-8">
  <div class="card">
    <div class="tag">d'ici les TD</div>
    <p>Choisissez <strong>une pratique</strong> vue aujourd'hui et essayez-la dans votre projet ou votre alternance.</p>
  </div>
  <div class="card-dark">
    <div class="tag" style="color:#111">en TD / TP</div>
    <p>Aujourd'hui, le <strong>pourquoi</strong>.<br/>Bientôt, le <strong>comment</strong> : les mains dans le code.</p>
  </div>
</div>

<div class="flex flex-wrap gap-4 mt-10">
  <span class="hl">clean code</span>
  <span class="hl">refactoring</span>
  <span class="hl">tests &amp; TDD</span>
  <span class="hl">code review</span>
</div>

<!--
Adapter les thèmes aux TD/TP prévus, en reprenant les pratiques sorties pendant le cours.
-->

---

# Pour aller plus loin

<div class="grid grid-cols-2 gap-6 mt-6 text-sm">
  <div class="card">
    <div class="tag">livres</div>
    <ul>
      <li><em>The Software Craftsman</em> · Sandro Mancuso</li>
      <li><em>Software Craft</em> · Dunod</li>
      <li><em>The Pragmatic Programmer</em> · Hunt &amp; Thomas</li>
      <li><em>Accelerate</em> · Forsgren, Humble, Kim</li>
    </ul>
  </div>
  <div class="card">
    <div class="tag">en ligne</div>
    <ul>
      <li>manifesto.softwarecraftsmanship.org</li>
      <li>dora.dev</li>
      <li>martinfowler.com/articles/practical-test-pyramid.html</li>
      <li>testdesiderata.com</li>
    </ul>
  </div>
</div>

<div class="caption mt-10">
Contenu sous licence <strong>Creative Commons BY-SA 4.0</strong> · creativecommons.org/licenses/by-sa/4.0<br/>
Les images tierces restent sous la licence de leurs auteurs respectifs.
</div>
