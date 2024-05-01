import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonComponentProps {
    onPress ?:()=> void
}

const ButtonComponent: React.FC<ButtonComponentProps> =({onPress})=> {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Text>ButtonComponent</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;