import { View, Text, Image } from 'react-native'


const ImageComponent = () => {
  return (
    <View>
      <Text>ImageComponent</Text>
      <Image source={require("../assets/bg.png")} style={{ width:200,height:200 }}/>
      <Image source={{ uri:"https://reactjs.org/logo-og.png" }} style={{ width:200,height:200 }}/>
    </View>
  )
}

export default ImageComponent
