import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Header } from "../components/Header";
import { AlertButton, PrimaryButton } from "../components/Button";
import { DeleteModal } from "../components/Modal";
import { ContactContext } from "../context/ContactContext";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  background-color: #fff;
`;

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Name = styled(Text)`
  font-size: 18px
  font-family: Poppins_600SemiBold;
  color: black;
`;

const ProfileContainer = styled(View)`
  flex-direction: row;
`;

const Photo = styled(Image)`
  height: 120px;
  width: 120px;
  margin-right: 12px;
  border-radius: 10px;
`;

const Detail = styled(Text)`
  font-size: 14px
  font-family: Poppins_600SemiBold;
  color: #305f72;
`;

const AlertText = styled(Text)`
  font-size: 16px
  font-family: Poppins_600SemiBold;
  color: red;
`;

export const ContactDetailScreen = ({ route, navigation }) => {
  const { deleteContact, alertDelete } = useContext(ContactContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const { contactDetail } = route.params;
  const fullName = contactDetail.firstName + " " + contactDetail.lastName;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateUpdate = (contactDetail) => {
    navigation.navigate("UpdateContact", {
      contactDetail,
    });
  };

  const navigateDelete = () => {
    navigation.navigate("ContactList");
  };

  const deleteUser = (id, navigateDelete) => {
    deleteContact(id, navigateDelete);
    setModalVisible(false);
  };

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Profile" />
      <ScrollView>
        <Container>
          <ProfileContainer>
            <Photo source={{ uri: contactDetail.photo }} />
            <View>
              <Name>{fullName}</Name>
              <Detail>08xxxxxxx</Detail>
            </View>
          </ProfileContainer>
          <PrimaryButton
            text="Update"
            handleSubmit={() => navigateUpdate(contactDetail)}
          />
          <AlertButton text="Delete" handleModal={toggleModal} />
          <DeleteModal
            visible={isModalVisible}
            closeModal={toggleModal}
            deleteUser={() => deleteUser(contactDetail.id, navigateDelete)}
          />
          {alertDelete ? <AlertText>{alertDelete}</AlertText> : null}
        </Container>
      </ScrollView>
    </SafeArea>
  );
};
