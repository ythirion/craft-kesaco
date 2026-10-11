<!-- Les 3 couches de la qualité, d'après le schéma au tableau (qualité.webp).
     Apparition au clic : 1 interne, 2 externe, 3 perçue, 4 client. -->
<template>
  <svg
    viewBox="0 0 920 400"
    class="w-full"
    style="height: 330px; font-family: 'Space Mono', monospace"
    role="img"
    aria-label="Qualité interne au centre, qualité externe autour, qualité perçue par le client à droite"
  >
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#111" />
      </marker>
    </defs>

    <!-- Externe : le produit (dessiné sous l'interne, affiché après) -->
    <g v-click="2">
      <ellipse cx="258" cy="208" rx="235" ry="185" fill="#111" />
      <ellipse cx="250" cy="200" rx="235" ry="185" fill="#fff" stroke="#111" stroke-width="3" />
      <g style="font-size: 15px; font-weight: 700; text-anchor: middle" fill="#111">
        <text x="250" y="75">PERFORMANCE</text>
        <text x="70" y="205">SÉCURITÉ</text>
        <text x="432" y="195" transform="rotate(72 432 195)">ACCESSIBILITÉ</text>
        <text x="250" y="352">UX / UI</text>
      </g>
      <rect x="160" y="4" width="180" height="24" fill="#111" />
      <text style="font-size: 12px; font-weight: 700; text-anchor: middle" x="250" y="21" fill="#fff">EXTERNE · LE PRODUIT</text>
    </g>

    <!-- Interne : l'équipe -->
    <g v-click="1">
      <ellipse cx="250" cy="215" rx="128" ry="108" fill="#f5f4f0" stroke="#111" stroke-width="3" />
      <g style="font-size: 13px; text-anchor: middle" fill="#111">
        <text x="250" y="148">lisibilité</text>
        <text x="250" y="172">cohérence</text>
        <text x="250" y="196">maintenabilité</text>
        <text x="250" y="220">testabilité</text>
        <text x="250" y="244">dette technique</text>
      </g>
      <g fill="none" stroke="#111" stroke-width="2.5">
        <circle cx="236" cy="272" r="6" />
        <circle cx="250" cy="268" r="6" />
        <circle cx="264" cy="272" r="6" />
        <path d="M226,296 Q236,280 246,296" />
        <path d="M240,292 Q250,276 260,292" />
        <path d="M254,296 Q264,280 274,296" />
      </g>
      <rect x="165" y="96" width="170" height="24" fill="#111" />
      <text style="font-size: 12px; font-weight: 700; text-anchor: middle" x="250" y="113" fill="#fff">INTERNE · L'ÉQUIPE</text>
    </g>

    <!-- Perçue : le regard du client -->
    <g v-click="3">
      <line x1="492" y1="215" x2="550" y2="215" stroke="#111" stroke-width="2.5" stroke-dasharray="6 5" marker-end="url(#arrow)" />
      <g fill="none" stroke="#111" stroke-width="3" stroke-linecap="round">
        <path d="M610,80 Q680,30 750,80 Q680,130 610,80 Z" fill="#fff" />
        <circle cx="680" cy="80" r="20" />
        <line x1="645" y1="61" x2="637" y2="42" />
        <line x1="680" y1="55" x2="680" y2="33" />
        <line x1="715" y1="61" x2="723" y2="42" />
      </g>
      <circle cx="680" cy="80" r="8" fill="#111" />
      <rect x="595" y="135" width="170" height="24" fill="#111" />
      <text style="font-size: 12px; font-weight: 700; text-anchor: middle" x="680" y="152" fill="#fff">PERÇUE · LE CLIENT</text>
      <rect x="568" y="183" width="240" height="110" fill="#111" />
      <rect x="560" y="175" width="240" height="110" fill="#fff" stroke="#111" stroke-width="3" />
      <g style="font-size: 14px" fill="#111">
        <text x="578" y="208">+ satisfaction</text>
        <text x="578" y="236">+ confiance</text>
        <text x="578" y="264">+ stabilité ressentie</text>
      </g>
    </g>

    <!-- Le client -->
    <g v-click="4">
      <line x1="808" y1="230" x2="840" y2="230" stroke="#111" stroke-width="2.5" marker-end="url(#arrow)" />
      <g fill="none" stroke="#111" stroke-width="3">
        <circle cx="872" cy="212" r="12" />
        <path d="M852,250 Q872,222 892,250" />
      </g>
      <text style="font-size: 12px; font-weight: 700; text-anchor: middle" x="872" y="272" fill="#111">CLIENT</text>
    </g>
  </svg>
</template>
