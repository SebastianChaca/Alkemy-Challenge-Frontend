export const filterOptions = (filterType, filterValue, data) => {
  switch (filterType) {
    case 'Categorias':
      if (filterValue !== 'Todas') {
        const filter = data.filter(item => {
          return item.category === filterValue;
        });
        return filter;
      } else {
        return data;
      }
    case 'Tipo':
      if (filterValue !== 'Todas') {
        const filter = data.filter(item => {
          return item.type === filterValue;
        });
        return filter;
      } else {
        return data;
      }

    default:
      return data;
  }
};
