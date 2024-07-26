import React from 'react';
import { WebView } from 'react-native-webview';

export default function PostScreen(props) {
    const {
        navigation,
        route: { params }
    } = props;
    return (
        <WebView
            onLoadStart={() => navigation.setOptions({ title: params.postTitle })}
            source={{ uri: params.url }}
        />
    );
}