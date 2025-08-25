# Fullscreen Statement Options

## Current Implementation

### Statement 1 (After Wertmaximierung, Before Services)
**Current:**
- Headline: "Ihr Lebenswerk verdient mehr als nur einen Käufer."
- Subtext: "Es verdient die richtige Zukunft."

**Alternative Options:**
1. "25 Jahre Vertrauen. 500+ gesicherte Lebenswerke."
   - Subtext: "Diskretion ist unsere DNA."

2. "Der Wert Ihres Unternehmens? Unbezahlbar. Der Preis? Optimal."
   - Subtext: "Wir kennen den Unterschied."

3. "Erst wenn Sie bereit sind. Nicht wenn Sie müssen."
   - Subtext: "Die beste Zeit für den Verkauf bestimmen Sie."

### Statement 2 (After Transactions, Before Team)
**Current:**
- Headline: "Hinter jedem Verkauf steht eine persönliche Geschichte."
- Subtext: "Wir schreiben sie mit Ihnen zu Ende."

**Alternative Options:**
1. "Wir kennen den Wert Ihrer schlaflosen Nächte."
   - Subtext: "Und sorgen für ruhigen Schlaf."

2. "Ihr Nachfolger ist da draußen. Wir finden ihn."
   - Subtext: "Diskret. Professionell. Erfolgreich."

3. "Menschen verkaufen an Menschen."
   - Subtext: "Nicht an Nummern in einer Excel-Tabelle."

## Video Placeholder Instructions

When you have the video files ready, update the components like this:

```tsx
<FullscreenStatement
  headline="Your chosen headline"
  subtext="Your chosen subtext"
  videoSrc="/your-video-file.mp4"  // Add this line
  darkOverlay={true}
  textColor="white"
/>
```

The component supports:
- `darkOverlay={true/false}` - Adds a semi-transparent black overlay over the video
- `textColor="white/black"` - Adjusts text color based on video brightness
- Automatic fallback to gradient background if no video is provided