<div class="ornament" aria-hidden="true">
  <svg viewBox="0 0 360 54" xmlns="http://www.w3.org/2000/svg">
    <!-- Flanking hairlines -->
    <g fill="none" stroke="currentColor" stroke-linecap="round">
      <line x1="14" y1="28" x2="140" y2="28" stroke-width="0.9" />
      <line x1="220" y1="28" x2="346" y2="28" stroke-width="0.9" />
    </g>

    <!-- Terminal dots and small diamond stops -->
    <g fill="currentColor">
      <circle cx="14" cy="28" r="1.2" />
      <circle cx="346" cy="28" r="1.2" />
      <path d="M 148 25 L 152 28 L 148 31 L 144 28 Z" />
      <path d="M 212 25 L 216 28 L 212 31 L 208 28 Z" />
    </g>

    <!-- Fleur-de-lis, torse centred at (180, 28) -->
    <g fill="currentColor" transform="translate(155, -3)">
      <!-- Central flame (spear pointing up) -->
      <path
        d="M 25 4
           C 21 10, 19 18, 20 26
           L 21 30
           L 29 30
           L 30 26
           C 31 18, 29 10, 25 4 Z"
      />
      <!-- Left petal, curving up-and-out -->
      <path
        d="M 22 30
           C 16 28, 10 24, 7 16
           C 7 12, 10 10, 13 12
           C 12 16, 14 20, 17 22
           C 15 24, 15 28, 22 30 Z"
      />
      <!-- Right petal, mirror of left -->
      <path
        d="M 28 30
           C 34 28, 40 24, 43 16
           C 43 12, 40 10, 37 12
           C 38 16, 36 20, 33 22
           C 35 24, 35 28, 28 30 Z"
      />
      <!-- Horizontal torse (band) -->
      <rect x="6" y="29" width="38" height="4" rx="0.5" />
      <!-- Bottom tail -->
      <path
        d="M 23 33
           C 21 40, 21 46, 25 52
           C 29 46, 29 40, 27 33 Z"
      />
    </g>
  </svg>
</div>

<style>
  .ornament {
    color: var(--rule);
    display: flex;
    justify-content: center;
    margin: 2.6rem auto;
  }
  .ornament svg {
    width: clamp(260px, 46%, 380px);
    height: auto;
  }
</style>
