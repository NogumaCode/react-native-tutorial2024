import { View, Text, Button, Pressable } from 'react-native'


const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>
      <Button title="クリック" color="teal" onPress={()=>{console.log("Pressed");alert("Pressed")}} />
        <Pressable onPress={()=>console.log("Pressed")}>
          <Text style={{ color:"teal" }}>Press me </Text>
        </Pressable>
        <Pressable onPressOut={()=>console.log("PressedOut")}>
        <Text style={{ color:"magenta" }}>Press me </Text>
        </Pressable>
        <Pressable onLongPress={()=>console.log("LongPressed")}>
        <Text style={{ color:"crimson" }}>Press me </Text>
        </Pressable>
        <Pressable onPressIn={()=>console.log("PressedIn")}>
        <Text style={{ color:"coral" }}>Press me </Text>
        </Pressable>
    </View>
  )
}

export default ButtonComponent
