import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const ToggleButton = () => {
  const [isOn,setIsOn] = useState(false);
  return (
    <View>
    <Text>{isOn ? 'On' : 'Off'}</Text>
    <Button title="toggle" onPress={()=>setIsOn(!isOn)} />
    </View>
  )
}

export default ToggleButton
