import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

const PassCodeModal = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <View style={styles.modalContainer}>
      <Text style={styles.passCodeTitle}>{'Developer Passcode'}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
    // </KeyboardAvoidingView>
  );
};

export default PassCodeModal;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 16,
  },
  passCodeTitle: {
    color: Colors.BLACK,
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
});
