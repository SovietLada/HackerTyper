import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'

const line1 = 'import HackSuite from \'FBINetworkPkg\''
const line2 = '<View>\n    { parseBankPin }\n</View>'
const line3 = '<Container>\n    <BreachTool>\n        { illegalExpression }\n    </BreachTool>\n    {activateBotnet}\n</Container>'
const line4 = 'componentDidMount() {\n    this.displayAnonLogo()\n    HackSuite.disableAlarm()\n}'
const line5 = 'import Heartbleed from \'BelarusNetworkPack\''
const line6 = 'serializeData() {\n    buffer = 00<<bitstream\n    commit(inout buffer)\n    return buffer.clear()\n}'

const hacks = [line1, line2, line3, line4, line5, line6]

class TextDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textData: '<init hacker prompt>\n'
    }
    this.appendText = this.appendText.bind(this)
  }

  componentDidMount() {
    this.appendText()
    this.appendText()
  }

  appendText() {
    const rand = Math.floor(Math.random() * hacks.length)
    const randText = hacks[rand]
    this.setState((prevState) => (
      { textData: `${prevState.textData}\n${randText}` }
    ))
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.appendText}
          title="Tap and hack!"
          color="#fff"
          accessibilityLabel=""
        />
        <Text style={{ color: 'green' }}>
          {this.state.textData}
        </Text>
      </View>
    )
  }
}

export default TextDisplay
