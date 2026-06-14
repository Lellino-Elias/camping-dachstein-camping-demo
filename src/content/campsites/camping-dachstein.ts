import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-dachstein";

const campingDachstein: CampsiteConfig = {
  name: "Camping Dachstein & Pension Gsenger",
  shortName: "Dachstein",
  slug: "camping-dachstein",
  ort: "Ramsau am Dachstein",
  region: "Steiermark",
  brandKind: "Camping & Pension",
  regionLong: "Ramsau am Dachstein · Schladming-Dachstein · Steiermark",

  heroVariant: "center",

  claim: "Klein, fein — auf 1150 m am Dachstein",
  claimEmphasis: "am Dachstein",
  emailDetail: "die persönliche Platzeinteilung durch Inge selbst",
  intro:
    "Auf 1150 Metern, in Südlage am Fuß des Dachsteins: ein kleiner, persönlich geführter Campingplatz mit Bergblick — dazu die Frühstückspension Gsenger im alten Bauernhaus, in der du genauso herzlich ankommst.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Dachstein & Pension Gsenger Logo" },

  statement: {
    text: "Rund dreißig Stellplätze, ein sonniges Plateau und der Dachstein zum Greifen nah — viel mehr braucht ein guter Campingsommer nicht.",
    emphasis: "zum Greifen nah",
  },

  pillars: [
    {
      title: "Plateau in der Sonne",
      text: "Der Platz liegt auf 1150 m in Südlage, umgeben von einer herrlichen Bergkulisse — und bleibt bewusst klein.",
      image: { src: `${IMG}/camp-plateau.webp`, alt: "Wohnwagen und Zelte auf der sonnigen Campingwiese mit Bergkulisse" },
    },
    {
      title: "Pension im Bauernhaus",
      text: "Gleich oberhalb wartet die Frühstückspension Gsenger im alten Bauernhaus mit Südbalkonen und Frühstücksbuffet.",
      image: { src: `${IMG}/pension-haus.webp`, alt: "Bauernhaus der Pension Gsenger mit Blumenbalkonen vor dem Berg" },
    },
    {
      title: "Persönlich geführt",
      text: "Inge und Niels haben den Platz 2006 übernommen und führen ihn selbst — Gastfreundschaft, die von Herzen kommt.",
      image: { src: `${IMG}/inge.webp`, alt: "Gastgeberin Inge Sterenberg am Frühstücksbuffet der Pension" },
    },
  ],

  usps: [
    "Sonniges Plateau, 1150 m",
    "Südlage mit Bergblick",
    "Sanitär mit Fußbodenheizung",
    "Kostenloses WLAN",
    "Hunde willkommen",
    "Spielplatz & Trampolin",
  ],

  trust: {
    heading: "Warum Gäste länger als geplant bleiben",
    headingEmphasis: "länger als geplant",
    intro:
      "Seit 2006 führen Inge und Niels den Platz selbst: gepflegte Wiese, persönliche Platzeinteilung, kurze Wege zu Loipe, Bushaltestelle und Bikestrecke — und der Hund gehört selbstverständlich dazu.",
  },

  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-zelt.webp`, alt: "Zelt auf der Campingwiese am Dachstein mit Blick in die Berge" },
  },

  breather: {
    image: { src: `${IMG}/breather-spiegelsee.webp`, alt: "Dachsteinmassiv spiegelt sich in einem Bergsee auf der Reiteralm" },
    line: "Der Dachstein, gespiegelt auf der Reiteralm.",
  },

  camping: {
    heading: "Camping auf dem Plateau",
    intro:
      "Rund 30 Stellplätze auf gepflegter Wiese, zehn davon extra groß. Im Winter bleiben rund 15 Plätze offen — mit beheiztem Sanitärraum, Loipe und Skibus vor der Tür.",
    features: [
      {
        title: "Stellplätze mit Bergblick",
        text: "Die Plätze liegen in Südlage auf dem Plateau — morgens die Sonne, ringsum die Berge, zehn davon besonders großzügig.",
        image: { src: `${IMG}/camp-stellplatz.webp`, alt: "Wohnwagen am Stellplatz mit Blick ins Tal und auf die Berge" },
      },
      {
        title: "Platz für Wohnmobil & Zelt",
        text: "Wohnmobil, Wohnwagen oder Zelt bis 6,50 m: In der Hauptsaison teilt Inge die Plätze selbst ein, damit jeder gut und gerade steht.",
        image: { src: `${IMG}/camp-wohnmobil.webp`, alt: "Campingbus und Wohnmobil am Stellplatz, Gastgeberin begrüßt die Gäste" },
      },
      {
        title: "Renovierter Sanitärraum",
        text: "Der Sanitärraum ist frisch renoviert und hat im Winter Fußbodenheizung — warmes Wasser, Duschen und Müllentsorgung sind inklusive.",
        image: { src: `${IMG}/camp-sanitaer-innen.webp`, alt: "Renovierter Sanitärraum mit Duschen und Waschbecken am Campingplatz" },
      },
      {
        title: "Spielplatz & Kletterturm",
        text: "Für Kinder gibt es einen Kletterturm mit Rutsche, Schaukel, Trampolin und einen großen Fußball- und Spielplatz im Garten.",
        image: { src: `${IMG}/camp-spielplatz.webp`, alt: "Kletterturm mit Rutsche auf dem Campingplatz vor dem Berghang" },
      },
      {
        title: "Hunde willkommen",
        text: "Hunde willkommen (gegen Gebühr, max. zwei) — Inge und Niels sind selbst mit Border Collies unterwegs.",
        image: { src: `${IMG}/camp-hund.webp`, alt: "Gastgeber mit Border Collie auf einer Almwiese vor den Dachsteinfelsen" },
      },
      {
        title: "Echte Wiese, ruhige Lage",
        text: "Gezeltet wird auf gepflegtem Gras, Autos parken am Rand — so haben Kinder Platz und Zelte stehen trocken.",
        image: { src: `${IMG}/camp-zelt.webp`, alt: "Zelte mit Sonnensegel auf der Campingwiese vor den Bergen" },
      },
    ],
  },

  mobilheime: {
    heading: "Frühstückspension Gsenger",
    intro:
      "Gleich oberhalb des Platzes liegt die Pension Gsenger — ein altes Bauernhaus in Südlage mit Frühstücksbuffet, Südbalkonen und Bergblick. Die Schladming-Dachstein Card ist ab zwei Nächten inklusive.",
    items: [
      {
        name: "Appartement",
        kind: "Ferienwohnung",
        text: "Wohnzimmer mit kleiner Küche, Schlafzimmer, Bad und Südbalkon — inklusive Schladming-Dachstein Card und WLAN.",
        image: { src: `${IMG}/pension-appartement.webp`, alt: "Wohnzimmer des Appartements mit Balkon und Bergblick" },
        features: ["Eigene Küche", "Südbalkon", "1. Stock"],
      },
      {
        name: "Doppelzimmer",
        kind: "Zimmer mit Frühstück",
        text: "15 m² mit Doppelbett, eigenem Bad und Südbalkon — inklusive reichhaltigem Frühstücksbuffet und Schladming-Dachstein Card.",
        image: { src: `${IMG}/pension-doppelzimmer.webp`, alt: "Doppelzimmer der Pension Gsenger mit Holzdecke und Bergblick" },
        features: ["Frühstücksbuffet", "Südbalkon", "Gratis WLAN"],
      },
      {
        name: "Vierbettzimmer",
        kind: "Familienzimmer",
        text: "26 m² mit Doppelbett und zwei Einzelbetten für bis zu vier Personen — mit eigenem Bad, Südbalkon und Frühstücksbuffet.",
        image: { src: `${IMG}/pension-vierbett.webp`, alt: "Vierbettzimmer mit Doppelbett und Zusatzbetten in der Pension Gsenger" },
        features: ["Bis 4 Personen", "Eigenes Bad", "Frühstück inkl."],
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um Ramsau & den Dachstein",
    intro:
      "Vom Platz weg: Wandern, Biken und Langlaufen direkt vor der Tür, dazu Dachsteingletscher, Silberkarklamm und die Loipe in wenigen Minuten.",
    items: [
      {
        title: "Wandern am Dachstein",
        text: "Wanderwege für jedes Niveau starten direkt in Ramsau — mit Blick auf die Dachstein-Südwand, vom Plateau bis hinauf zum Gletscher.",
        image: { src: `${IMG}/aktiv-wandern.webp`, alt: "Wanderin auf einem Höhenweg mit Blick auf das Dachsteinmassiv" },
      },
      {
        title: "Mountainbiken",
        text: "Bikestrecken starten wenige Gehminuten vom Platz; Ski- und Bikeraum sowie ein Abspülplatz sind in der Pension.",
        image: { src: `${IMG}/aktiv-bike.webp`, alt: "Mountainbikerin vor einer Almhütte und den Dachsteinfelsen" },
      },
      {
        title: "Gletscher & Hängebrücke",
        text: "Zwei Kilometer zur Dachsteinstraße: Gletscher, Hängebrücke, Treppe ins Nichts und Eispalast liegen gleich um die Ecke.",
        image: { src: `${IMG}/aktiv-haengebruecke.webp`, alt: "Hängebrücke am Dachstein über schroffen Felsgrat" },
      },
      {
        title: "Langlaufen",
        text: "Die Loipe und die Skibus-Haltestelle erreichst du in wenigen Gehminuten — Langlaufen und Skaten direkt von Ramsau aus.",
        image: { src: `${IMG}/aktiv-langlauf.webp`, alt: "Langläuferin auf der frisch gespurten Loipe im Schnee" },
      },
      {
        title: "Silberkarklamm",
        text: "Wilde Wasser ganz nah: die Silberkarklamm und der Riesachfall gehören zu den schönsten Ausflügen rund um Schladming.",
        image: { src: `${IMG}/aktiv-klamm.webp`, alt: "Holzsteg durch die Silberkarklamm zwischen Felswänden" },
      },
      {
        title: "Rodeln & Winterspaß",
        text: "Im Winter locken Rodelbahnen, Schneeschuhwandern und der Dachsteingletscher — Schnee gibt es auf 1150 m verlässlich.",
        image: { src: `${IMG}/aktiv-rodeln.webp`, alt: "Familie auf Rodeln auf einer verschneiten Waldabfahrt" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt aufs Plateau",
    modes: [
      {
        title: "Aus Salzburg",
        text: "Über die Tauernautobahn A10, Abfahrt Eben Richtung Filzmoos, dann weiter nach Ramsau-Hierzegg — beschildert auf der rechten Straßenseite, rund 80 km.",
      },
      {
        title: "Aus Graz",
        text: "Über die Pyhrnautobahn A9 bis Liezen, im Ennstal weiter bis Schladming und von dort hinauf in die Ramsau nach Hierzegg.",
      },
      {
        title: "Bahn & Flug",
        text: "Nächster Bahnhof ist Schladming, der nächste Flughafen Salzburg (W. A. Mozart). Im Winter empfehlen wir Schneeketten für die Hangstraße.",
      },
    ],
  },

  galerie: {
    heading: "Sommer und Winter am Dachstein",
    headingEmphasis: "Sommer und Winter",
    intro:
      "Frühstücksbuffet, blühende Balkone, Wintermorgen und Gletscherbahn — ein paar Eindrücke von Platz, Pension und Umgebung.",
    tag: "Mai bis September · Dezember bis März",
    moreCount: 24,
    images: [
      { src: `${IMG}/gal-buffet.webp`, alt: "Frühstücksbuffet mit Käse, Aufschnitt und Müsli in der Pension Gsenger" },
      { src: `${IMG}/gal-balkone.webp`, alt: "Blumengeschmückte Holzbalkone am Bauernhaus der Pension" },
      { src: `${IMG}/gal-winter.webp`, alt: "Wintermorgen mit Heißluftballons über den verschneiten Hängen von Ramsau" },
      { src: `${IMG}/gal-gletscherbahn.webp`, alt: "Gletscherbahn auf den Dachstein über den verschneiten Gipfeln" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz auf dem Plateau",
    headingEmphasis: "auf dem Plateau",
    intro:
      "Sag uns Zeitraum und Personenzahl — Inge meldet sich persönlich mit deiner Verfügbarkeit für Stellplatz oder Zimmer.",
    pricesArePlaceholder: false,
    priceNote:
      "Sommer-Richtpreise: Stellplatz für 2 Personen inkl. Wasser, Duschen & Müllentsorgung — zzgl. Nächtigungsabgabe € 3 pro Person und Strom ab € 5,50; Hund € 5. Winter- und Feiertagspreise abweichend.",
    highlight: {
      title: "Auch im Winter offen",
      text: "Renovierter Sanitärraum mit Fußbodenheizung — Loipe und Skibus sind nur wenige Gehminuten entfernt.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz · Sommer (2 Pers.)", perNight: 46, perExtraGuest: 14 },
      { id: "einzel", label: "Einzelstellplatz (1 Pers.)", perNight: 40 },
    ],
  },

  kontakt: {
    coords: { lat: 47.428826, lng: 13.582611 },
    tel: "+43 664 75038183",
    telHref: "tel:+4366475038183",
    mail: "info@camping-dachstein.at",
    facebook: "https://www.facebook.com/campingdachstein/",
    adresse: "Hierzegg 26 · 8972 Ramsau am Dachstein · Österreich",
  },

  languages: ["DE", "EN", "NL"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär & Service", href: "#camping" },
      ],
    },
    { label: "Pension", href: "#mobilheime" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingDachstein;
