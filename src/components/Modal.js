import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import styled from "styled-components/native";

const Container = styled(View)`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  align-self: center;
  padding: 22px;
  align-items: center;
`;

const HeaderText = styled(Text)`
  font-family: Poppins_600SemiBold;
  font-size: 20px;
  color: #0e4a86;
  margin-bottom: 12px;
`;

const SubText = styled(Text)`
  font-family: Poppins_400Regular;
  font-size: 14px;
  color: grey;
  margin-bottom: 16px;
`;

const ButtonContainer = styled(View)`
  flex-direction: row;
  margin-top: 16px;
`;

const SubmitButton = styled(TouchableOpacity)`
  height: 40px;
  width: 150px;
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  border-color: #0e4a86
  justify-content: center;
  align-items: center;
`;

const CancelButton = styled(TouchableOpacity)`
  height: 40px;
  width: 150px;
  background-color: #0e4a86;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const SubmitButtonText = styled(Text)`
  font-family: Poppins_600SemiBold;
  color: #0e4a86;
`;

const CancelButtonText = styled(Text)`
  font-family: Poppins_600SemiBold;
  color: #fff;
`;

export const DeleteModal = ({ visible, closeModal, deleteUser }) => {
  return (
    <Modal isVisible={visible} animationIn="fadeIn" animationOut="fadeOut">
      <Container>
        <HeaderText>Delete Contact</HeaderText>
        <SubText>Are you sure want to delete this contact ?</SubText>
        <ButtonContainer>
          <CancelButton onPress={closeModal}>
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
          <SubmitButton onPress={deleteUser}>
            <SubmitButtonText>Delete</SubmitButtonText>
          </SubmitButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};
