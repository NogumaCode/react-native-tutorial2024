import { View, Text } from 'react-native'
import React from 'react'

interface user{
  name:string;
  age:number;
  hobbies:string[]
}
const ChildComponent = (props:user) => {
  return (
    <View>
      <Text>{props.name}</Text>
      <Text>{props.age}</Text>
      <Text>{props.hobbies}</Text>
    </View>
  )
}

export default ChildComponent
