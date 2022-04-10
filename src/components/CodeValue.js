import {View, Text} from 'react-native';
import React from 'react';

const CodeValue = () => {
  var currentDate = new Date().getDate();
  var currentMonth = new Date().getMonth() + 1;
  var currentYear = new Date().getFullYear();
  //product of the current date
  var productValue = currentDate * currentMonth * currentYear;

  var stringNumber = productValue.toString();
  var stringLength = stringNumber.length;

  //checking if length is 6
  let extraString = '';
  for (let i = 0; i < stringLength - 6; i++) {
    extraString += '0';
  }

  if (stringLength < 6) {
    stringNumber = extraString + stringNumber;
  }

  return stringNumber;
};

export default CodeValue;
