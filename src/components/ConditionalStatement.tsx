import { View, Text } from 'react-native'
import React from 'react'

const ValidPassword = ()=><Text>Valid Password</Text>
const InValidPassword = ()=><Text>InValid Password</Text>

const PassWord = ({isValid}:{isValid:boolean})=>{
  if(isValid){
    return <ValidPassword />
  }
  return <InValidPassword />
}

const ConditionalStatement = () => {
  return (
    <View>
      <PassWord isValid={true} />
    </View>
  )
}

export default ConditionalStatement
