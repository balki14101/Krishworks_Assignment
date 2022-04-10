export const isCodeCorrect = passCode => {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  let correctPassCode = currentDate * currentMonth * currentYear + '';

  const stringLength = correctPassCode.length;

  let extraString = '';
  for (let i = 0; i < 6 - stringLength; i++) {
    extraString += '0';
  }

  if (stringLength < 6) {
    correctPassCode = extraString + correctPassCode;
  }
  console.log({extraString});
  console.log({passCode, correctPassCode});
  return passCode === correctPassCode;
};
