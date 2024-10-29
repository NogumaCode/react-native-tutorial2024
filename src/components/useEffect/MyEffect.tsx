import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"


const MyEffect = () => {
  const [value,setValue] = useState(0)

  useEffect(()=>{
    // console.warn("useEffect called")
  })
  return (
    <View>
      <Text>{value}</Text>
      <Button title="Increment" onPress={()=>setValue(value+1)}/>
    </View>
  )
}

export default MyEffect
