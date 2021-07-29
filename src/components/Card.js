import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styled from "styled-components";

const Container = styled(TouchableOpacity)`
  height: 82px;
  width: 100%;
  border-radius: 10px;
  background-color: #FFF
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  elevation: 2;
  margin-vertical: 4px;
`;

const Wrapper = styled(View)`
  flex-direction: row;
`;

const TitleContainer = styled(View)`
  justify-content: center;
`;

const Name = styled(Text)`
  font-size: 18px
  font-family: Poppins_400Regular;
  color: black;
`;

const Photo = styled(Image)`
  height: 50px;
  width: 50px;
  margin-right: 12px;
  border-radius: 10px;
`;

export const Contact = ({ data, navigate }) => {
  const fullName = data.firstName + " " + data.lastName;
  return (
    <Container onPress={navigate}>
      <Wrapper>
        <Photo source={{ uri: data.photo }} />
        <TitleContainer>
          <Name>{fullName}</Name>
        </TitleContainer>
      </Wrapper>
    </Container>
  );
};
