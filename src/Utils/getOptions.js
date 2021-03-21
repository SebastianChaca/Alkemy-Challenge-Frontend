export const getOptions = (data, filterType) => {
  const options = data.map(cat => {
    if (filterType === 'Categorias') {
      return cat.category;
    } else {
      return cat.type;
    }
  });
  const uniqueOptions = Array.from(new Set(options));
  uniqueOptions.push('Todas');
  return uniqueOptions;
};
