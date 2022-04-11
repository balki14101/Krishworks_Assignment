import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//constants
import {Height, Width} from '../constants/Dimension';
import Colors from '../constants/Colors';
import {ContactPageUrl, GalleryPageUrl} from '../constants/Url';

//component
import Webview from '../components/WebView';

//ButtonData
const DrawerButtonData = [{title: 'Gallery'}, {title: 'Contact Us'}];

const SettingsScreen = ({navigation}) => {
  //state
  const [buttonindex, setButtonIndexndex] = useState(0);

  //Button styles
  const buttonBackGorundStyles = index => [
    styles.drawerButtonStyles,
    {
      backgroundColor: buttonindex == index ? Colors.PRIMARY : Colors.WHITE,
    },
  ];

  const buttonTextStyles = index => [
    styles.drawerButtonTextStyles,
    {
      color: buttonindex == index ? Colors.Yellow : Colors.PRIMARY,
    },
  ];

  return (
    <View style={{backgroundColor: Colors.WHITE}}>
      {/**=================<Header View>===============*/}
      <View style={styles.headerView}>
        <View style={styles.headerButtonView}>
          <TouchableOpacity style={{paddingLeft: 8}}>
            <Text
              style={styles.closeText}
              onPress={() => {
                navigation.goBack();
              }}>
              {'Close'}
            </Text>
          </TouchableOpacity>

          <Text style={styles.settingText}>{'Setting'}</Text>
        </View>
      </View>
      {/**=================<Header View>===============*/}

      <View style={styles.row}>
        {/**=================<Left Panel>===============*/}
        <View style={styles.drawerView}>
          {DrawerButtonData.map((item, index) => {
            return (
              <TouchableOpacity
                key={String(index)}
                style={buttonBackGorundStyles(index)}
                onPress={() => {
                  setButtonIndexndex(index);
                }}>
                <Text style={buttonTextStyles(index)}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/**=================</Left Panel>===============*/}

        {/**=================<WebView View>===============*/}
        {buttonindex == 0 ? (
          <Webview uri={GalleryPageUrl} />
        ) : (
          <Webview uri={ContactPageUrl} />
        )}
        {/**=================</WebView View>===============*/}
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    paddingVertical: 4,
    height: 48,
  },
  headerButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Width / 6.4,
  },
  row: {flexDirection: 'row'},
  closeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: Colors.WHITE,
  },
  settingText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: Colors.WHITE,
  },
  drawerView: {
    width: Width / 6.4,
    borderRightColor: Colors.PRIMARY,
    borderRightWidth: 1,
    height: Height,
  },
  drawerButtonStyles: {
    padding: 8,
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 1,
  },
  drawerButtonTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
