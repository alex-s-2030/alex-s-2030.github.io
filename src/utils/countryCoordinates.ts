// Coordinates for country markers aligned to outline map (1000x500 viewBox)
export const COUNTRY_COORDINATES: Record<string, { x: number; y: number; name: string }> = {
  // North America
  CA: { x: 200, y: 150, name: 'Canada' },
  US: { x: 220, y: 280, name: 'United States' },
  MX: { x: 180, y: 380, name: 'Mexico' },

  // British Isles
  GB: { x: 510, y: 200, name: 'United Kingdom' },

  // Western Europe
  FR: { x: 540, y: 260, name: 'France' },
  ES: { x: 500, y: 350, name: 'Spain' },
  PT: { x: 465, y: 355, name: 'Portugal' },
  IT: { x: 580, y: 320, name: 'Italy' },

  // Central Europe
  DE: { x: 570, y: 230, name: 'Germany' },
  NL: { x: 545, y: 205, name: 'Netherlands' },
  BE: { x: 540, y: 225, name: 'Belgium' },
  CH: { x: 560, y: 270, name: 'Switzerland' },
  AT: { x: 600, y: 270, name: 'Austria' },
  CZ: { x: 595, y: 240, name: 'Czech Republic' },

  // Northern Europe (Scandinavia)
  NO: { x: 565, y: 110, name: 'Norway' },
  SE: { x: 600, y: 125, name: 'Sweden' },
  DK: { x: 570, y: 185, name: 'Denmark' },
  FI: { x: 640, y: 100, name: 'Finland' },

  // Eastern/Southern Europe
  PL: { x: 625, y: 230, name: 'Poland' },
  GR: { x: 650, y: 360, name: 'Greece' },
};