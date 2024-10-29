import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ANDOperator = () => {
  const groceries = ["milk", "bread", " eggs", "cheese"];
  return (
    <View>
      {groceries.length > 0 &&(
        <Text>あなたは{groceries.length}個カートにあります</Text>
      )}
      <FlatList data={groceries} renderItem={({item})=> <Text>{item}</Text>} />
    </View>
  )
}

export default ANDOperator
