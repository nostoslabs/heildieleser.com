export const SITE_URL = 'https://heildieleser.com';

const strings = {
  site: {
    title: {
      af: 'Heil die Leser · Amanda Kreitzer',
      en: 'Heil die Leser · Amanda Kreitzer'
    },
    description: {
      af: "’n Argief van Amanda Kreitzer se voorwoorde en prosa uit Val du Charron, Wellington.",
      en: 'An archive of Amanda Kreitzer’s editorials and prose from Val du Charron, Wellington.'
    },
    subtitle: {
      af: 'Maandelikse voorwoord · Amanda Kreitzer',
      en: 'Monthly editorial · Amanda Kreitzer'
    },
    footerByline: {
      af: 'Geskryf deur Amanda Kreitzer · Redaktrise,',
      en: 'Written by Amanda Kreitzer · Editor,'
    },
    footerTagline: {
      af: "’n Bewaarplek van haar maandelikse voorwoorde en prosastukke.",
      en: 'An archive of her monthly editorials and prose pieces.'
    }
  },
  nav: {
    voorwoorde: { af: 'Voorwoorde', en: 'Editorials' },
    prosa: { af: 'Prosa', en: 'Prose' },
    argief: { af: 'Argief', en: 'Archive' },
    kontak: { af: 'Kontak', en: 'Contact' },
    oor: { af: 'Oor', en: 'About' },
    ariaLabel: { af: 'Hoofnavigasie', en: 'Main navigation' },
    langSwitch: { af: 'Kies taal', en: 'Choose language' }
  },
  home: {
    ledeTitle: {
      af: 'Voorwoorde',
      en: 'Editorials'
    },
    lede: {
      af: 'Van ongeveer 1996 af was Amanda Kreitzer vir ’n kwarteeu lank die redaktrise van <em>Val du Charron</em>, ’n maandelikse nuuskoerant vir Wellington en die Wamakersvallei. Elke uitgawe het oopgegaan met ’n voorwoord onder die titel <em>Heil die Leser</em>. Hierdie bladsy bring haar voorwoorde byeen — ’n kroniek van seisoene, genade, en die vallei aan die voet van Groenberg en die Hawekwas.',
      en: 'From around 1996, for a quarter of a century, Amanda Kreitzer was the editor of <em>Val du Charron</em>, a monthly newspaper for Wellington and the Wagon-makers Valley. Every issue opened with an editorial under the title <em>Heil die Leser</em>. This page gathers her editorials together — a chronicle of seasons, grace, and the valley at the foot of Groenberg and the Hawekwa.'
    }
  },
  article: {
    back: { af: '← Terug na die argief', en: '← Back to the archive' },
    byline: { af: 'Deur Amanda Kreitzer', en: 'By Amanda Kreitzer' },
    dedication: { af: 'Opgedra aan', en: 'Dedicated to' },
    notTranslated: {
      af: '',
      en: 'This editorial has not yet been translated into English. The Afrikaans original is shown below.'
    }
  },
  oor: {
    title: { af: 'Oor · Heil die Leser', en: 'About · Heil die Leser' },
    kicker: { af: 'Oor die redaktrise', en: 'About the editor' }
  },
  argief: {
    title: { af: 'Argief · Heil die Leser', en: 'Archive · Heil die Leser' },
    kicker: { af: 'Val du Charron', en: 'Val du Charron' },
    heading: { af: 'Argief', en: 'Archive' },
    recovered: { af: 'Teruggekry', en: 'Recovered' },
    aria: { af: 'Uitgawes wat tot dusver teruggekry is', en: 'Issues recovered so far' },
    pages: { af: 'bladsye', en: 'pages' }
  },
  kontak: {
    title: { af: 'Kontak · Heil die Leser', en: 'Contact · Heil die Leser' },
    kicker: { af: 'Skryf gerus', en: 'Drop a line' },
    heading: { af: 'Kontak', en: 'Contact' },
    defaultSubject: {
      af: '’n Briefie oor Heil die Leser',
      en: 'A note about Heil die Leser'
    },
    labelName: { af: 'Naam', en: 'Name' },
    labelEmail: { af: 'E-pos adres', en: 'Email address' },
    labelSubject: { af: 'Onderwerp', en: 'Subject' },
    labelMessage: { af: 'Boodskap', en: 'Message' },
    labelWebsite: { af: 'Webwerf', en: 'Website' },
    submit: { af: 'Stuur die briefie', en: 'Send the note' },
    submitting: { af: 'Besig om te stuur…', en: 'Sending…' },
    thanksTitle: { af: 'Dankie vir u briefie.', en: 'Thank you for your note.' },
    errorGeneric: {
      af: 'Iets het skeefgeloop. Probeer asseblief weer.',
      en: 'Something went wrong. Please try again.'
    },
    errorServer: {
      af: 'Die bediener het nie geantwoord nie. Probeer asseblief weer.',
      en: 'The server did not respond. Please try again.'
    }
  },
  prosa: {
    title: { af: 'Prosa · Heil die Leser', en: 'Prose · Heil die Leser' },
    ledeTitle: { af: 'Prosastukke', en: 'Prose pieces' },
    back: { af: '← Terug na prosa', en: '← Back to prose' },
    kicker: { af: 'Prosa', en: 'Prose' },
    notTranslated: {
      af: '',
      en: 'This piece has not been translated into English. The Afrikaans original is shown below.'
    }
  }
};

export function t(key, lang = 'af') {
  const node = key.split('.').reduce((acc, part) => acc?.[part], strings);
  if (!node) return '';
  return node[lang] ?? node.af ?? '';
}

export function altLangPath(pathname, targetLang) {
  const stripped = pathname === '/en'
    ? '/'
    : pathname.startsWith('/en/')
      ? pathname.slice(3)
      : pathname;
  if (targetLang === 'en') {
    return stripped === '/' ? '/en' : `/en${stripped}`;
  }
  return stripped;
}

export function langPath(pathname, lang) {
  if (lang === 'en') {
    return pathname === '/' ? '/en' : `/en${pathname}`;
  }
  return pathname;
}
