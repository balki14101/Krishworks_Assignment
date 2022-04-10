import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
//constant
import Colors from '../constants/colors';
//component
import CodeValue from './CodeValue';
import {isCodeCorrect} from '../helpers/codeHelper';

const PassCodeModal = ({navigation}) => {
  useEffect(() => {
    // code1.current.focus();
  }, []);
  var correctValue = CodeValue();
  var passcode = '';
  var currentState = '';
  var checkvalue1 = '080880';
  var checkvalue2 = '589715';
  console.log('correct value from another component ', correctValue);

  //state
  const [number1, onChangeNumber1] = useState('');
  const [number2, onChangeNumber2] = useState('');
  const [number3, onChangeNumber3] = useState('');
  const [number4, onChangeNumber4] = useState('');
  const [number5, onChangeNumber5] = useState('');
  const [number6, onChangeNumber6] = useState('');
  const [otpCode, setOtpCode] = useState('');

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

  const Inputs = [
    {state: number1, setState: onChangeNumber1, ref: code1},
    {state: number2, setState: onChangeNumber2, ref: code2},
    {state: number3, setState: onChangeNumber3, ref: code3},
    {state: number4, setState: onChangeNumber4, ref: code4},
    {state: number5, setState: onChangeNumber5, ref: code5},
    {state: number6, setState: onChangeNumber6, ref: code6},
  ];

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 64}
    //   style={styles.modalContainer}>
    <View style={styles.modalContainer}>
      {/* <View style={styles.modalContainer}> */}
      <Text style={styles.passCodeTitle}>{'Developer Passcode'}</Text>
      <OTPInputView
        style={{height: 50}}
        pinCount={6}
        code={otpCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={code => {
          setOtpCode(code);
        }}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          if (isCodeCorrect(code)) {
            navigation.navigate('SettingStack');
          } else {
            alert('incorrect value');
          }
        }}
      />
      {/* <View style={styles.textInputView}>
        <TextInput
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
        />
      </View> */}

      {/*<View style={styles.textInputView}>
        {Inputs.map((item, index) => {
          return (
            <TextInput
              onKeyPress={
                index > 0 &&
                (({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    // const input = item.ref.current[index - 1];
                    console.log(
                      'backspace cheacking',
                      item.ref.current[index - 1],
                    );
                    // input.focus();
                  }
                })
              }
              ref={item.ref}
              key={String(index)}
              style={styles.input}
              onChangeText={() => {
                item.setState;
                if (!item.state) {
                  passcode = passcode + item.state;
                  console.log(passcode);
                  if (index != 5) Inputs[index + 1].ref.current.focus();
                  if (index == 5 && item.state != null && item.state != '') {
                    item.ref.current.focus();
                  }
                }
              }}
              value={item.state}
              keyboardType="number-pad"
              maxLength={1}
            />
          );
        })}
      </View>
      */}

      {/* </View> */}
    </View>
    // </KeyboardAvoidingView>
  );
};

export default PassCodeModal;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'lightgrey',
  },

  underlineStyleBase: {
    height: 56,
    width: 44,
    borderWidth: 1,
    borderRadius: 8,
    color: Colors.BLACK,
  },

  underlineStyleHighLighted: {
    borderColor: 'lightgrey',
  },
  modalContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  passCodeTitle: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
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
  container: {
    // flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
