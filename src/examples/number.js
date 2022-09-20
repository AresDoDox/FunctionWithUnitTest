export const number = (n) => {
  if (n < 10) return false;

  const numberString = n .toString()
  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;    
  }

  return true;
};
