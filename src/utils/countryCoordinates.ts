// Coordinates for country markers aligned to outline map (1000x500 viewBox)
export const COUNTRY_COORDINATES: Record<string, { x: number; y: number; name: string }> = {
  // North America (left side of map, x: 100-350)
  CA: { x: 180, y: 140, name: 'Canada' },
  US: { x: 200, y: 280, name: 'United States' },
  MX: { x: 150, y: 400, name: 'Mexico' },

  // British Isles
  GB: { x: 730, y: 220, name: 'United Kingdom' },

  // Western Europe
  FR: { x: 770, y: 290, name: 'France' },
  ES: { x: 715, y: 380, name: 'Spain' },
  PT: { x: 665, y: 390, name: 'Portugal' },
  IT: { x: 825, y: 350, name: 'Italy' },

  // Central Europe
  DE: { x: 810, y: 240, name: 'Germany' },
  NL: { x: 775, y: 215, name: 'Netherlands' },
  BE: { x: 770, y: 235, name: 'Belgium' },
  CH: { x: 795, y: 285, name: 'Switzerland' },
  AT: { x: 845, y: 285, name: 'Austria' },
  CZ: { x: 850, y: 250, name: 'Czech Republic' },

  // Northern Europe (Scandinavia)
  NO: { x: 810, y: 95, name: 'Norway' },
  SE: { x: 860, y: 115, name: 'Sweden' },
  DK: { x: 815, y: 195, name: 'Denmark' },
  FI: { x: 920, y: 85, name: 'Finland' },

  // Eastern/Southern Europe
  PL: { x: 880, y: 235, name: 'Poland' },
  GR: { x: 905, y: 395, name: 'Greece' },
};