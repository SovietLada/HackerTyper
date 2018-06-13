import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const line1 = 'import HackSuite from \'FBINetworkPkg\''
const line2 = '<View>\n    { parseBankPin }\n</View>'
const line3 = '<Container>\n    <BreachTool>\n        { illegalExpression }\n    </BreachTool>\n    {activateBotnet}\n</Container>'
const line4 = 'componentDidMount() {\n    this.displayAnonLogo()\n    HackSuite.disableAlarm()\n}'
const line5 = 'import Heartbleed from \'BelarusNetworkPack\''
const line6 = 'serializeData() {\n    buffer = 00<<bitstream\n    commit(inout buffer)\n    return buffer.clear()\n}'

export const App = () => (
  <View style={styles.container}>
    <Button
      onPress={handlePress}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    <Text style={{ color: 'green' }}>
      {line1}
      {'\n'}
      {line2}
      {'\n'}
      {line3}
      {'\n'}
      {line4}
      {'\n'}
      {line5}
      {'\n'}
      {line6}
    </Text>
  </View>
)

function handlePress() {
}

export default App
