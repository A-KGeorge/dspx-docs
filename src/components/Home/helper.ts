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

export const pivotLatencyData = (rawData: {
  [key: number]: { [key: string]: number };
}) => {
  const sizes = Object.keys(rawData).map(Number); // input sizes
  const metrics = Object.keys(rawData[sizes[0]]); // p50, p95, p99

  return sizes.map((size) => {
    const row: any = { size };

    metrics.forEach((metric) => {
      row[metric] = rawData[size][metric];
    });

    return row;
  });
};

export const numberFormatter = (number: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  });
  if (number >= 1_000_000) {
    return formatter.format(number / 1_000_000) + "M";
  } else if (number >= 1_000) {
    return formatter.format(number / 1_000) + "K";
  } else {
    return number.toString();
  }
};

export const stringNumberFormatter = (str: string) => {
  const num = Number(str);
  return isNaN(num) ? str : numberFormatter(num);
};
