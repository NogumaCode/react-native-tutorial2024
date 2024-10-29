import { View, Text, FlatList, Button } from 'react-native'
import React, { useState } from 'react'

const UpdateArray = () => {
  const [friends,setFriends] = useState(['Alex','John','Jordan'])
  const addOne = ()=>setFriends([...friends,'Hox'])
    const removeOne = () => {
    setFriends(friends.filter(f => f !== 'John'));
  };
    const updateOne = () => {
    setFriends(friends.map((f) => (f === 'Alex' ? "Alex Smith" : f)));
  };
  return (
    <View>
      <FlatList data={friends} keyExtractor={friend =>friend} renderItem={({item})=><Text>{item}</Text>} />
      <Button title = "add Button" onPress={addOne}/>
      <Button title = "remove Button" onPress={removeOne}/>
      <Button title = "update Button" onPress={updateOne}/>
    </View>
  )
}

export default UpdateArray
