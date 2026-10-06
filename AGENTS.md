# Projektbeskrivelse

Projektet er en responsiv hjemmeside om herremode og personlig stil for begyndere.

Hjemmesiden skal implementeres ud fra den færdige Figma-prototype og bestå af fire sammenhængende sider:

- Forside
- Begynderguide
- Basisgarderobe
- Dit første outfit

Figma-designet er den primære visuelle reference.

# Teknologier

- HTML
- CSS
- Vanilla JavaScript kun hvor det er nødvendigt

# Projektstruktur

- HTML-filer placeres i projektets rodmappe.
- CSS, JavaScript, billeder og andre lokale assets placeres i `assets`.
- Delte styles og komponentmønstre skal genbruges, hvor det giver mening.
- Hold projektstrukturen enkel og overskuelig.

# Figma

- CODEX skal bruge Figma MCP som source of truth.
- CODEX skal inspicere relevante desktop- og mobilframes før implementering.
- Farver, typografi, spacing, dimensioner, billeder og responsive forskelle skal aflæses fra Figma, hvor det er muligt.
- CODEX må ikke gætte på designværdier, som kan aflæses direkte i Figma.
- Desktop- og mobilversionerne skal begge genskabes så tæt på Figma som praktisk muligt.

# Design

Designretningen er Modern Classic Menswear:

- elegant
- klassisk
- moderne
- rolig
- editorial-inspireret

Den eksisterende Figma-prototype og dens styles/components skal bevares som designgrundlag.

# Responsivitet

- Hjemmesiden skal fungere på både desktop og mobil.
- Responsive ændringer skal følge Figma-designet.
- Mobilnavigationen skal følge den separate hamburger-menu-frame.
- Undgå vandret scrolling og ødelagte layouts.

# Begrænsninger

- Brug ikke frameworks.
- Brug ikke backend-programmering.
- Tilføj ikke unødvendige tredjepartsbiblioteker.
- Opret ikke ekstra sider eller funktioner, som ikke er en del af designet.
- Undgå unødvendige refactors.
- Bevar den planlagte brugerrejse:
  Forside → Begynderguide → Basisgarderobe → Dit første outfit.

# Kvalitetskrav

- Brug semantisk HTML.
- CSS skal være struktureret og genbrugelig.
- JavaScript skal kun bruges, når funktionaliteten kræver det.
- Alle navigationer og links mellem siderne skal fungere.
- Der må ikke være ødelagte assets eller åbenlyse layoutfejl.
- CODEX skal sammenligne resultatet med Figma efter implementeringen og rette meningsfulde afvigelser.