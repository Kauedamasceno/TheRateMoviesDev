type handleClickArray = {
  num1: number,
  num2: number,
}

export const handleClickAddArray = ({num1,num2}:handleClickArray) => {
  num1 = num1 + 1
  num2 = num2 + 1
  console.log(num1,num2)
  return [num1, num2]
}

export const handleClickDecreaseArray = ({num1,num2}:handleClickArray) => {
  num1 = num1 - 1
  num2 = num2 - 1
  console.log(num1,num2)
  return [num1, num2]
}