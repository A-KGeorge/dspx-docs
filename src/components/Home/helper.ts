export const pivotData = (rawData: {
  [key: string]: { [key: string]: number };
}) => {
  const sizes = Object.keys(Object.values(rawData)[0]);
  const libraries = Object.keys(rawData);

  return sizes.map((size) => {
    const entry = { size: parseInt(size, 10) };
    libraries.forEach((lib) => {
      entry[lib] = rawData[lib][size];
    });
    return entry;
  });
};
