import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Modal} from 'react-native-paper';

//constants
import {Height, Width} from '../constants/Dimension';
import Colors from '../constants/Colors';
import {HomePageUrl, AboutUsPageUrl, UpdatesPageUrl} from '../constants/Url';

//components
import Webview from '../components/WebView';

//Setting Icon
import Icon from 'react-native-vector-icons/EvilIcons';
import {isCodeCorrect} from '../helpers/codeHelper';

const TabButton = [{Title: 'Home'}, {Title: 'About Us'}, {Title: 'Updates'}];

//for Keyboard input elements
const keyboardValues = [...Array(10).keys()];
keyboardValues.shift();
keyboardValues.push(0);

const MainScreen = ({navigation}) => {
  const [buttonIndex, setButtonIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(0);
  const [otpCode, setOtpCode] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);

  //for Code input boxes
  const otpBoxs = [...Array(6).fill('')];

  //modal functions
  const showModal = () => setModalVisible(true);
  const hideModal = () => {
    setModalVisible(false);
    setOtpCode('');
    setShowKeyboard(false);
  };
  const containerStyle = {
    backgroundColor: Colors.TRANSPARENT,
    flex: 1,
    borderRadius: 4,
  };
  const codeBoxStyles = index => [
    styles.input,
    {
      borderColor:
        otpCode.length === index && showKeyboard ? 'blue' : Colors.LIGHT_GREY,
    },
  ];

  const updateStateCheckPasscode = (item = '') => {
    if (otpCode.length <= 5) {
      setOtpCode(otpCode + item + '');
    }
    if (otpCode.length === 6) {
      if (isCodeCorrect(otpCode)) {
        ToastAndroid.show('Code verified!', ToastAndroid.LONG);
        navigation.navigate('SettingStack');
        setOtpCode('');
        setShowKeyboard(false);
        setModalVisible(false);
      } else {
        ToastAndroid.show('Invalid Password!', ToastAndroid.LONG);
        setOtpCode('');
      }
    }
  };

  useEffect(() => {
    updateStateCheckPasscode();
  }, [otpCode]);
  console.log(otpCode);

  return (
    <View style={styles.container}>
      {/**=================<Header View>===============*/}
      <View style={styles.headerView}>
        <Icon
          name="gear"
          size={32}
          color={Colors.WHITE}
          onPress={() => {
            showModal();
          }}
        />

        {/**=================<Tab View>===============*/}
        <View style={styles.tabView}>
          {TabButton.map((item, index) => {
            const tabBarButtonStyle = [
              styles.TabBarButtonStyles,
              {
                backgroundColor:
                  buttonIndex == index ? Colors.WHITE : Colors.BLUE,
              },
            ];
            const tabBarButtonTextStyles = [
              styles.TabBarButtonTextStyles,
              {
                color: buttonIndex == index ? Colors.BLUE : Colors.WHITE,
              },
            ];

            return (
              <TouchableOpacity
                style={tabBarButtonStyle}
                key={String(index)}
                onPress={() => {
                  setButtonIndex(index);
                }}>
                <Text style={tabBarButtonTextStyles}>{item.Title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/**=================</Tab View>===============*/}
      </View>
      {/**=================</Header View>===============*/}

      {/**=================<Web View>===============*/}
      {buttonIndex == 0 ? (
        <Webview uri={HomePageUrl} />
      ) : buttonIndex == 1 ? (
        <Webview uri={AboutUsPageUrl} />
      ) : (
        <Webview uri={UpdatesPageUrl} />
      )}
      {/**=================</Web View>===============*/}

      {/**=================<Passcode Popup>===============*/}

      <Modal
        visible={modalVisible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <View style={styles.passCodeView}>
          <View style={styles.modalContainer}>
            <Text style={styles.passCodeTitle}>{'Developer Passcode'}</Text>
            <View style={styles.textInputView}>
              {otpBoxs.map((item, index) => {
                const displayText = otpCode[index];

                return (
                  <TouchableOpacity
                    key={String(index)}
                    style={codeBoxStyles(index)}
                    onPress={() => {
                      setShowKeyboard(true);
                    }}>
                    <Text style={styles.codeBoxText}>{displayText}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.keyboardView}>
          {showKeyboard && (
            <View style={styles.KeyboardBgView}>
              {keyboardValues.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={String(index)}
                    onPress={() => updateStateCheckPasscode(item)}
                    style={styles.keyboardButtonStyles}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      </Modal>
      {/**=================</Passcode popup>===============*/}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  headerView: {
    backgroundColor: Colors.PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  tabView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.BLUE,
    marginHorizontal: Width / 8,
    paddingHorizontal: 24,
    height: Height / 8,
    borderRadius: 8,
  },
  TabBarButtonStyles: {
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderRadius: 8,
  },
  TabBarButtonTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  modalContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 4,
    marginHorizontal: Width / 5,
  },
  passCodeView: {
    flex: 2,
    justifyContent: 'center',
  },

  passCodeTitle: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    alignSelf: 'center',
  },
  keyboardView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  codeBoxText: {
    color: 'red',
    color: Colors.PRIMARY,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  KeyboardBgView: {
    backgroundColor: Colors.DARK_THEME,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
  keyboardButtonStyles: {
    height: 40,
    width: Width / 14,
    backgroundColor: 'grey',
    borderRadius: 8,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
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
    // textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    width: 44,
    marginVertical: 8,
    borderWidth: 1.4,
    borderColor: 'lightgrey',
    padding: 10,
    borderRadius: 8,
  },
});
