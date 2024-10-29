import { View, Text, Button } from 'react-native'
import React from 'react'

interface CompTypeProps {
  count :number;
  onClickHandler:() => void;
}

const ComponentOne = ({count,onClickHandler}: CompTypeProps) => {
  return (
    <View>
      <Text>ComponentOne</Text>
      <Text>{count}</Text>
      <Button title="Press" onPress={onClickHandler} />
    </View>
  )
}

export default ComponentOne
