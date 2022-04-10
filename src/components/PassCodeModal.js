import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
//constant
import Colors from '../constants/colors';
//component
import {isCodeCorrect} from '../helpers/codeHelper';
import {Width} from '../constants/Dimension';

const PassCodeModal = ({navigation, setModalVisible}) => {
  //state
  const [number1, onChangeNumber1] = useState('');
  const [number2, onChangeNumber2] = useState('');
  const [number3, onChangeNumber3] = useState('');
  const [number4, onChangeNumber4] = useState('');
  const [number5, onChangeNumber5] = useState('');
  const [number6, onChangeNumber6] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const otpBoxs = [...Array(6).fill('')];

  // useEffect(() => {
  //   code1.current.focus();
  // }, []);

  // console.log(typeof number1);
  // let passcode = number1 + number2 + number3 + number4 + number5 + number6;
  // console.log(passcode);

  //ref
  const code1 = useRef('');
  const code2 = useRef('');
  const code3 = useRef('');
  const code4 = useRef('');
  const code5 = useRef('');
  const code6 = useRef('');
  return (
    <View style={styles.modalContainer}>
      <Text style={styles.passCodeTitle}>{'Developer Passcode'}</Text>
      {/* <OTPInputView
        style={styles.passCodeInput}
        pinCount={6}
        code={otpCode}
        onCodeChanged={code => {
          setOtpCode(code);
        }}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          if (isCodeCorrect(code)) {
            navigation.navigate('SettingStack');
            setModalVisible(false);
          } else {
            alert('incorrect value');
          }
        }}
      /> */}
      <View style={styles.textInputView}>
        {otpBoxs.map((item, index) => {
          const displayText = otpCode[index] || '';
          return (
            <TouchableOpacity key={String(index)} style={styles.input}>
              <Text>{displayText}</Text>
            </TouchableOpacity>
          );
        })}

        {/* <TextInput
          ref={code1}
          style={styles.input}
          onChangeText={text => {
            text && code2.current.focus();
            return onChangeNumber1(text);
          }}
          value={number1}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          ref={code2}
          style={styles.input}
          onChangeText={text => {
            text && code3.current.focus();
            return onChangeNumber2(text);
          }}
          value={number2}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          ref={code3}
          style={styles.input}
          onChangeText={text => {
            text && code4.current.focus();
            return onChangeNumber3(text);
          }}
          value={number3}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          ref={code4}
          style={styles.input}
          onChangeText={text => {
            text && code5.current.focus();
            return onChangeNumber4(text);
          }}
          value={number4}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          ref={code5}
          style={styles.input}
          onChangeText={text => {
            text && code6.current.focus();
            return onChangeNumber5(text);
          }}
          value={number5}
          keyboardType="number-pad"
          maxLength={1}
        />
        <TextInput
          ref={code6}
          style={styles.input}
          onChangeText={text => {
            text && code6.current.focus();
            return onChangeNumber6(text);
          }}
          value={number6}
          keyboardType="number-pad"
          maxLength={1}
        /> */}
      </View>
    </View>
  );
};

export default PassCodeModal;

const styles = StyleSheet.create({
  underlineStyleBase: {
    height: 56,
    width: 44,
    borderWidth: 1,
    borderColor: Colors.LIGHT_GREY,
    borderRadius: 8,
    color: Colors.BLACK,
  },
  passCodeInput: {height: 50, marginVertical: 8},

  underlineStyleHighLighted: {
    borderColor: Colors.LIGHT_GREY,
  },
  modalContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
    marginHorizontal: Width / 5,
  },
  passCodeTitle: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    color: Colors.PRIMARY,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    height: 56,
    width: 44,
    marginVertical: 8,
    borderWidth: 1.4,
    borderColor: 'lightgrey',
    padding: 10,
    borderRadius: 8,
  },
});
