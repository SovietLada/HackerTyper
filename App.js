import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import TextDisplay from './TextDisplay'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d'
  }
})

export const App = () => (
  <View style={styles.container}>
    <ScrollView>
      <TextDisplay />
    </ScrollView>
  </View>
)

export default App
