import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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
    <Text style={{ color: 'green' }}>
      Happy hacking!
    </Text>
  </View>
)

export default App
