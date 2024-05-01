import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface ButtonComponentProps {
    onPress ?:()=> void,
    title: string,
    buttonContainerStyle: any
}

const ButtonComponent: React.FC<ButtonComponentProps> =({onPress, title, buttonContainerStyle})=> {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={buttonContainerStyle}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;