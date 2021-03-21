export const sortData = data =>
  data.slice().sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt));
