import React, { Component } from 'react'
import { Text, Button, View, StatusBar } from 'react-native'

const line1 = 'import HackSuite from \'FBINetworkPkg\''
const line2 = '<View>\n    { parseBankPin }\n</View>'
const line3 = '<Container>\n    <BreachTool>\n        { illegalExpression }\n    </BreachTool>\n    {activateBotnet}\n</Container>'
const line4 = 'componentDidMount() {\n    this.displayAnonLogo()\n    HackSuite.disableAlarm()\n}'
const line5 = 'import Heartbleed from \'BelarusNetworkPack\''
const line6 = 'serializeData() {\n    buffer = 00<<bitstream\n    commit(inout buffer)\n    return buffer.clear()\n}'
const line7 = 'setDelta() {\n    this.step += hackbits\n}'

const firstLine = '<init hacker prompt>\n'
const hacks = [line1, line2, line3, line4, line5, line6, line7]
const kFontSize = 9
const kRed = '#d43535'
const kViolet = '#7113b9'

class TextDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textData: firstLine
    }
    this.appendText = this.appendText.bind(this)
    this.clearText = this.clearText.bind(this)
  }

  appendText() {
    const randText = hacks[Math.floor(Math.random() * hacks.length)]
    this.setState((prevState) => (
      { textData: `${prevState.textData}\n${randText}` }
    ))
  }

  clearText() {
    this.setState(
      { textData: firstLine }
    )
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <StatusBar hidden />
        <Button
          onPress={this.clearText}
          title="Clear"
          color={kRed}
          accessibilityLabel=""
        />
        <Button
          onPress={this.appendText}
          title="Tap and hack!"
          color={kViolet}
          accessibilityLabel=""
        />
        <Text style={{ color: 'green', fontSize: kFontSize }}>
          {this.state.textData}
        </Text>
      </View>
    )
  }
}

export default TextDisplay
