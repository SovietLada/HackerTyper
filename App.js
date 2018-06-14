import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import TextDisplay from './TextDisplay'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const App = () => (
  <View style={styles.container}>
    <Button
      onPress={handlePress}
      title="Tap and hack!"
      color="#fff"
      accessibilityLabel=""
    />
    <TextDisplay />
  </View>
)

function handlePress() {
  // ...
}

export default App
