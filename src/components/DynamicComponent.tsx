import { View, Text } from 'react-native'
import React from 'react'

const DynamicComponent = () => {

  const username = "Nogma";
  const multiply = (a:number,b:number) =>a+b
  return (
    <View>
      <Text>Hello {username}</Text>
      <Text>2*2={multiply(2,2)}</Text>
    </View>
  )
}

export default DynamicComponent
