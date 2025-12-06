// Coordinates for country markers aligned to outline map (1000x500 viewBox)
export const COUNTRY_COORDINATES: Record<string, { x: number; y: number; name: string }> = {
  // North America (left side of map, x: 100-350)
  CA: { x: 250, y: 220, name: 'Canada' },
  US: { x: 250, y: 340, name: 'United States' },
  MX: { x: 300, y: 435, name: 'Mexico' },

  // British Isles
  GB: { x: 825, y: 210, name: 'United Kingdom (Great Britain)' },

  // Western Europe
  FR: { x: 835, y: 295, name: 'France' },
  ES: { x: 815, y: 350, name: 'Spain' },
  PT: { x: 750, y: 375, name: 'Portugal' },
  IT: { x: 895, y: 340, name: 'Italy' },

  // Central Europe
  DE: { x: 895, y: 270, name: 'Germany' },
  NL: { x: 830, y: 205, name: 'Netherlands' },
  BE: { x: 845, y: 275, name: 'Belgium' },
  CH: { x: 895, y: 315, name: 'Switzerland' },
  AT: { x: 890, y: 280, name: 'Austria' },
  CZ: { x: 895, y: 295, name: 'Czech Republic' },

  // Northern Europe (Scandinavia)
  NO: { x: 890, y: 210, name: 'Norway' },
  SE: { x: 930, y: 210, name: 'Sweden' },
  DK: { x: 895, y: 255, name: 'Denmark' },
  FI: { x: 880, y: 210,  name: 'Finland' },

  // Eastern/Southern Europe
  PL: { x: 930, y: 255, name: 'Poland' },
  GR: { x: 845, y: 380, name: 'Greece' },
};
