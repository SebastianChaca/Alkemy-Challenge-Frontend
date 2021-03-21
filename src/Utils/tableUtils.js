export const getDate = newDate => {
  return new Date(parseInt(newDate)).toLocaleDateString();
};

export const options = ['TIPO', 'CONCEPTO', 'MONTO', 'CATEGORIA', 'FECHA'];

export const home = 'home';
export const abm = 'abm';

export const limitArray = (data, page) => {
  if (page === home) {
    return data.slice(0, 10);
  } else {
    return data;
  }
};
