import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ContactContext } from "../context/ContactContext";
import { Contact } from "../components/Card";
import { SkeletonContact } from "../components/Skeleton";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: #ffffff;
`;

const Container = styled(View)`
  flex: 1;
  background-color: #ffffff;
`;

const MenuText = styled(Text)`
  font-size: 22px;
  font-family: Poppins_600SemiBold;
  color: #0e4a86;
`;

const HeaderContainer = styled(View)`
  display: flex;
  padding-horizontal: 16px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
`;

const Detail = styled(Text)`
  font-size: 14px
  font-family: Poppins_600SemiBold;
  color: #305f72;
`;

const Button = styled(TouchableOpacity)`
  justify-content: center;
`;

export const ContactListScreen = ({ navigation }) => {
  const { contact, loadContact, getContact, clearAlert } =
    useContext(ContactContext);

  useEffect(() => {
    navigation.addListener("focus", () => {
      getContact();
      clearAlert();
    });
  }, []);

  const navigate = (contactDetail) => {
    navigation.navigate("ContactDetail", {
      contactDetail,
    });
  };

  return (
    <SafeArea>
      <Container>
        <HeaderContainer>
          <MenuText>Contacts</MenuText>
          <Button onPress={() => navigation.navigate("AddContact")}>
            <Detail>Add Contact</Detail>
          </Button>
        </HeaderContainer>
        <SkeletonContact load={loadContact}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={contact}
            keyExtractor={(contact) => contact.firstName}
            renderItem={({ item }) => {
              return <Contact data={item} navigate={() => navigate(item)} />;
            }}
          />
        </SkeletonContact>
      </Container>
    </SafeArea>
  );
};
