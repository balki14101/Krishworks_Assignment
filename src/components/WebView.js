import React from 'react';
import {WebView} from 'react-native-webview';

const Webview = props => {
  var {uri} = props;

  return <WebView source={{uri}} />;
};

export default Webview;
