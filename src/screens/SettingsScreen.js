import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

//constants
import {Height, Width} from '../constants/Dimension';
import Colors from '../constants/colors';
import {ContactPageUrl, GalleryPageUrl} from '../constants/Url';

//component
import Webview from '../components/WebView';

const DrawerButtonData = [{title: 'Gallery'}, {title: 'Contact Us'}];

const SettingsScreen = ({navigation}) => {
  const [buttonindex, setButtonIndexndex] = useState(0);
  return (
    <View style={{backgroundColor: Colors.WHITE}}>
      {/**=================<Header View>===============*/}
      <View style={styles.headerView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: Width / 6.4,
          }}>
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
      <View style={{flexDirection: 'row'}}>
        <View style={styles.drawerView}>
          {DrawerButtonData.map((item, index) => {
            return (
              <TouchableOpacity
                key={String(index)}
                style={[
                  styles.drawerButtonStyles,
                  {
                    backgroundColor:
                      buttonindex == index ? Colors.PRIMARY : Colors.WHITE,
                  },
                ]}
                onPress={() => {
                  setButtonIndexndex(index);
                }}>
                <Text
                  style={[
                    styles.drawerButtonTextStyles,
                    {
                      color:
                        buttonindex == index ? Colors.Yellow : Colors.PRIMARY,
                    },
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {buttonindex == 0 ? (
          <Webview uri={GalleryPageUrl} />
        ) : (
          <Webview uri={ContactPageUrl} />
        )}
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.PRIMARY,
    // flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 4,
    // paddingHorizontal: 8,
    height: 48,
  },
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
    // backgroundColor: Colors.PRIMARY,
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 1,
    // paddingHorizontal: 8,
  },
  drawerButtonTextStyles: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',

    // marginLeft: 8,
  },
});
