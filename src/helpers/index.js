export const dateFormat = actualDate => {
  const options = {dateStyle: 'short', timeStyle: 'short', hour12: true};
  return new Intl.DateTimeFormat('pe', options).format(actualDate);
};
