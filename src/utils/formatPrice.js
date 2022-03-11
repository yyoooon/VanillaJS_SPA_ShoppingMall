const formatPriceAddComma = input => {
  const formatedValue = String(input)
          .split('')
          .reverse()
          .map((str, index) => (index > 0 && index % 3 === 0 ? `${str},` : str))
          .reverse()
          .join('');
  return formatedValue;
};

export default formatPriceAddComma
