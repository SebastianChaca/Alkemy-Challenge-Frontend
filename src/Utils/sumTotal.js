export const sumTotal = data => {
  const ingreso = data.filter(category => category.type === 'Ingreso');
  const ingresoArray = ingreso.map(ing => ing.amount);
  const ingresoTotal = ingresoArray.reduce((a, b) => a + b, 0);
  const egreso = data.filter(category => category.type === 'Egreso');
  const egresoArray = egreso.map(ing => ing.amount);
  const egresoTotal = egresoArray.reduce((a, b) => a + b, 0);

  return ingresoTotal - egresoTotal;
};
