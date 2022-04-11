export const isCodeCorrect = passCode => {
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  let correctPassCode = currentDate * currentMonth * currentYear + '';

  const appendZeroes = new Array(6 - correctPassCode.length).fill('0').join('');
  const finalPassCode = appendZeroes + correctPassCode;

  return passCode === finalPassCode;
};
