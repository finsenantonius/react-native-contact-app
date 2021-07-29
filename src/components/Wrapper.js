import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";

const Container = styled(View)`
  display: flex;
  padding-horizontal: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};
