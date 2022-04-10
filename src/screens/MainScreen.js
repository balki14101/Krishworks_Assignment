import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import {Modal} from 'react-native-paper';

//constants
import {Height, Width} from '../constants/Dimension';
import Colors from '../constants/colors';
import {HomePageUrl, AboutUsPageUrl, UpdatesPageUrl} from '../constants/Url';

//components
import Webview from '../components/WebView';
import PassCodeModal from '../components/PassCodeModal';

//Setting Icon
import Icon from 'react-native-vector-icons/EvilIcons';
import {isCodeCorrect} from '../helpers/codeHelper';

const TabButton = [{Title: 'Home'}, {Title: 'About Us'}, {Title: 'Updates'}];
//
const keyboardValues = [...Array(10).keys()];
keyboardValues.shift();
keyboardValues.push(0);
const MainScreen = ({navigation}) => {
  const [buttonIndex, setButtonIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(0);
  const [otpCode, setOtpCode] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);

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
    // marginHorizontal: Width / 5,
    // justifyContent: 'center',
    flex: 1,
    borderRadius: 4,
  };

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
            setModalVisible(true);
            // navigation.navigate('SettingStack');
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
        <View
          style={{
            flex: 2,
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
            // alignItems: 'center',
          }}>
          {/* <PassCodeModal
            navigation={navigation}
            setModalVisible={setModalVisible}
          /> */}
          <View style={styles.modalContainer}>
            <Text style={styles.passCodeTitle}>{'Developer Passcode'}</Text>
            <View style={styles.textInputView}>
              {otpBoxs.map((item, index) => {
                const displayText = otpCode[index];

                return (
                  <TouchableOpacity
                    key={String(index)}
                    style={[
                      styles.input,
                      {
                        borderColor:
                          otpCode.length === index && showKeyboard
                            ? 'blue'
                            : Colors.LIGHT_GREY,
                      },
                    ]}
                    onPress={() => {
                      setShowKeyboard(true);
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        color: Colors.PRIMARY,
                        fontSize: 20,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      {displayText}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'yellow',
            justifyContent: 'flex-end',
            // alignItems: 'center',
            // alignContent: 'center',
            // alignItems: 'center',
          }}>
          {showKeyboard && (
            <View
              style={{
                backgroundColor: '#121212',
                // height: Height / 16,
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 8,

                // paddingBottom: 8,
              }}>
              {keyboardValues.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={String(index)}
                    onPress={() => updateStateCheckPasscode(item)}
                    style={{
                      height: 40,
                      width: Width / 14,
                      backgroundColor: 'grey',
                      borderRadius: 8,
                      marginBottom: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>

        {/* <PassCodeModal
          navigation={navigation}
          setModalVisible={setModalVisible}
        /> */}
        {/* <View
          style={{
            justifyContent: 'flex-end',
            // alignItems: 'flex-end',
            flex: 0.5,
            backgroundColor: 'green',
            // height: 20,
          }}>
          <View
            style={{
              backgroundColor: 'red',
              padding: 8,
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: Colors.LIGHT_GREY,
                width: Width / 12,
                height: 24,
              }}></View> 
          </View>
        </View>*/}
        {/* </KeyboardAvoidingView> */}
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
  //==============
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
