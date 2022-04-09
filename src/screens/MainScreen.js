import React, {useState} from 'react';

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
} from 'react-native';
import {Modal} from 'react-native-paper';
// import {useNavigation} from '@react-navigation/native';

//constants
import {Height, Width} from '../constants/Dimension';
import Colors from '../constants/colors';
import {HomePageUrl, AboutUsPageUrl, UpdatesPageUrl} from '../constants/Url';

//components
import Webview from '../components/WebView';
import PassCodeModal from '../components/PassCodeModal';

//Setting Icon
import Icon from 'react-native-vector-icons/EvilIcons';

const TabButton = [{Title: 'Home'}, {Title: 'About Us'}, {Title: 'Updates'}];
const MainScreen = ({navigation}) => {
  //   const navigation = useNavigation();
  const [buttonIndex, setButtonIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(0);

  //modal functions
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const containerStyle = {backgroundColor: 'white', marginHorizontal: 40};

  return (
    <View style={styles.container}>
      {/**=================<Header View>===============*/}
      <View style={styles.headerView}>
        <Icon
          name="gear"
          size={32}
          color={Colors.WHITE}
          onPress={() => {
            // setModalVisible(true);
            navigation.navigate('SettingStack');
          }}
        />

        {/**=================<Tab View>===============*/}
        <View style={styles.tabView}>
          {TabButton.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.TabBarButtonStyles,
                  {
                    backgroundColor:
                      buttonIndex == index ? Colors.WHITE : Colors.BLUE,
                  },
                ]}
                key={String(index)}
                onPress={() => {
                  setButtonIndex(index);
                }}>
                <Text
                  style={[
                    styles.TabBarButtonTextStyles,
                    {
                      color: buttonIndex == index ? Colors.BLUE : Colors.WHITE,
                    },
                  ]}>
                  {item.Title}
                </Text>
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
      <Modal
        visible={modalVisible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <PassCodeModal />
        </KeyboardAvoidingView>
      </Modal>
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
});
