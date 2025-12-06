// Coordinates for country markers aligned to outline map (1000x500 viewBox)
export const COUNTRY_COORDINATES: Record<string, { x: number; y: number; name: string }> = {
  // North America (left side of map, x: 100-350)
  CA: { x: 250, y: 140, name: 'Canada' },
  US: { x: 250, y: 280, name: 'United States' },
  MX: { x: 300, y: 400, name: 'Mexico' },

  // British Isles
  GB: { x: 690, y: 210, name: 'United Kingdom' },

  // Western Europe
  FR: { x: 825, y: 280, name: 'France' },
  ES: { x: 700, y: 370, name: 'Spain' },
  PT: { x: 650, y: 375, name: 'Portugal' },
  IT: { x: 875, y: 340, name: 'Italy' },

  // Central Europe
  DE: { x: 860, y: 230, name: 'Germany' },
  NL: { x: 830, y: 205, name: 'Netherlands' },
  BE: { x: 820, y: 225, name: 'Belgium' },
  CH: { x: 845, y: 275, name: 'Switzerland' },
  AT: { x: 890, y: 280, name: 'Austria' },
  CZ: { x: 895, y: 245, name: 'Czech Republic' },

  // Northern Europe (Scandinavia)
  NO: { x: 860, y: 100, name: 'Norway' },
  SE: { x: 800, y: 120, name: 'Sweden' },
  DK: { x: 865, y: 190, name: 'Denmark' },
  FI: { x: 850, y: 90, name: 'Finland' },

  // Eastern/Southern Europe
  PL: { x: 825, y: 235, name: 'Poland' },
  GR: { x: 845, y: 380, name: 'Greece' },
};
