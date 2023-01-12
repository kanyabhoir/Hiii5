import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store'
import { PersistGate } from 'redux-persist/integration/react';
import Routers from './routers';


export default function App() {
  return (
    <View style={styles.container}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Routers />
      </PersistGate>
    </Provider>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


