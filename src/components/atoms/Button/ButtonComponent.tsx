import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './buttonStyles';

interface ButtonComponentProps {
    onPress ?:()=> void,
    title: string,
    buttonContainerStyle: any;
    textStyle:any;
}

const ButtonComponent: React.FC<ButtonComponentProps> =({onPress, title, buttonContainerStyle, textStyle})=> {

  const {mainContainer, btnContainerStyle} = styles;

  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={[ btnContainerStyle,buttonContainerStyle]}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;