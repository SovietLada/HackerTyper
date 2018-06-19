import React from 'react'
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native'
import TextDisplay from './TextDisplay'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d'
  }
})

export const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#d43535' }}>
    <View style={styles.container}>
      <ScrollView>
        <TextDisplay />
      </ScrollView>
    </View>
  </SafeAreaView>
)

export default App
