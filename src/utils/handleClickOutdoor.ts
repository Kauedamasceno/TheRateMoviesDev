export const handleClickAdd = (number:number) => {
  if (number <= 5) {
  return number + 1

  }
  return number
};

export const handleClickDescrease = (number:number) => {
  if (number > 0) {
    return number - 1;

  }
  return number
};