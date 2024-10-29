import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const ComponentA = () => {

  const context = useContext(UserContext)

  if(!context) throw new Error('コンテキストを読み込めておりません')

  const {user,setUser} = context
  return (
    <View>
      <Text>Hello {user}</Text>
    </View>
  )
}

export default ComponentA
