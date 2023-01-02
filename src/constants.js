export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  laptopMax: 600,
  tabletMax: 950,
  phoneMax: 500 
}

export const QUERIES = {
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
}