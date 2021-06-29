// Return an rgba colour from a hex
export const hexToRGBA = (hex, alpha = 1) => {
  let parseString = hex;
  if (hex.startsWith("#")) {
    parseString = hex.slice(1, 7);
  }
  if (parseString.length !== 6) {
    return null;
  }
  const r = parseInt(parseString.slice(0, 2), 16);
  const g = parseInt(parseString.slice(2, 4), 16);
  const b = parseInt(parseString.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return null;
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const intToPx = (num) => `${num}px`;

// Return the value of a css variable
export const getVar = (cssVar) => {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar);
  }
};

// Set value of new or existing css variable
export const setVar = (cssVar, newValue) => {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(cssVar, newValue);
  }
};
