import React from "react";
import { Pressable, Text, View } from "react-native";

const CustomButton = ({
  title,
  buttonContainer,
  buttonStyles,
  buttonTextStyles,
  onPressHandler,
  rippleEffect,
}) => {
  return (
    <View style={buttonContainer}>
      <Pressable
        style={({ pressed }) => pressed && rippleEffect}
        onPress={onPressHandler}
      >
        <View style={buttonStyles}>
          <Text style={buttonTextStyles}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CustomButton;
