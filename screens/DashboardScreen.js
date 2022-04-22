import { WebView } from 'react-native-webview';

export default function DashboardScreen () {
  return (
    <WebView
        source={{
          uri: 'https://mehchange.com/account/dashboard'
        }}
        style={{ marginTop: 0 }}
    />
  )
}

