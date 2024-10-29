import { View, Text } from 'react-native'
import ImageComponent from '../components/ImageComponent'
import ButtonComponent from '../components/ButtonComponent'
import DynamicComponent from '../components/DynamicComponent'
import InternalStyle from '../components/InternalStyle'
import ListData from '../components/ListData'
import ExternalStyle from '../components/ExternalStyle'
import ArrayOfObject from '../components/ArrayOfObject'
import ParentComponent from '../components/ParentComponent'
import ConditionalStatement from '../components/ConditionalStatement'
import ANDOperator from '../components/ANDOperator'
import TernaryOperator from '../components/TernaryOperator'
import WithState from '../components/hooks/WithState'
import UpdateArray from '../components/hooks/UpdateArray'
import UpdateObject from '../components/hooks/UpdateObject'
import SharingState from '../components/hooks/SharingState/SharingState'
import ToggleButton from '../components/hooks/ToggleButton'
import WeatherApp from '../components/hooks/WeatherApp'
import ColorPicker from '../components/hooks/ColorPicker'
import TodoList from '../components/hooks/TodoList'
import MyEffect from '../components/useEffect/MyEffect'
import Counter from '../components/reducer/Counter'
import Todo from '../components/reducer/Todo'
import ComponentA from '../components/useContext/ComponentA'
import { UserProvider } from '../components/useContext/UserContext'



const Index = () => {
  return (
    <View>
      {/* NormalComponent */}
      <Text className="bg-teal-300 text-red-400">Hello world</Text>
      {/* <ImageComponent />
      <ButtonComponent />
      <DynamicComponent />
      <InternalStyle />
      <ExternalStyle /> */}

      {/* List Component */}
      {/* <ListData />
      <ArrayOfObject /> */}

      {/* Props Component */}
      {/* <ParentComponent /> */}

      {/* ConditionalStatement */}
      {/* <ConditionalStatement />
      <ANDOperator />
      <TernaryOperator /> */}

      {/* Hooks */}
      {/* <WithState />
      <UpdateArray />
      <UpdateObject />
      <SharingState /> */}

        {/* useStateChallenge */}
      {/* <ToggleButton />
      <WeatherApp/>
      <ColorPicker />
      <TodoList /> */}

        {/* useEffect Challenge */}
        {/* <MyEffect /> */}

        {/* useReducer  */}
        {/* <Counter />
        <Todo/> */}
        {/* useContext  */}
        {/* <UserProvider>
          <ComponentA />
        </UserProvider> */}
    </View>
  )
}

export default Index
