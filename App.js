import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import qs from 'qs';

const isLogin = `
    (function() { 
        return document.querySelector("h1").innerHTML === "output";
    })()
`;

export default class App extends Component {

    _onNavigationStateChange = (event) => {
        console.log('-- _onNavigationStateChange --');
        console.log(event);
    }

    render() {
        let sourceObj = {
            uri: 'https://testwebview.free.beeceptor.com/post',
            method: 'POST'
        };

        return (
            <WebView
                source={sourceObj}
                style={{ marginTop: 20 }}
                onLoadProgress={e => console.log(e.nativeEvent.progress)}

                ref={node => { this.webView = node; }}

                injectedJavaScript={
                    isLogin
                }

                onNavigationStateChange={this._onNavigationStateChange}
            />
        );
    }
}
