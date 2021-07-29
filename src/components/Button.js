import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const Button = styled(TouchableOpacity)`
  height: 60px;
  width: 100%;
  background-color: #0e4a86;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-vertical: 12px;
`;

const ButtonText = styled(Text)`
  font-family: Poppins_600SemiBold;
  font-size: 16px
  color: #fff;
`;

const CancelButton = styled(TouchableOpacity)`
  height: 60px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  border-color: #0e4a86
  justify-content: center;
  align-items: center;
`;

const CancelButtonText = styled(Text)`
  font-family: Poppins_600SemiBold;
  font-size: 16px
  color: #0e4a86;
`;

export const PrimaryButton = ({ text, handleSubmit }) => {
  return (
    <Button onPress={handleSubmit}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export const AlertButton = ({ text, handleModal }) => {
  return (
    <CancelButton onPress={handleModal}>
      <CancelButtonText>{text}</CancelButtonText>
    </CancelButton>
  );
};
