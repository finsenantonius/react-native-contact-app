import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Header } from "../components/Header";
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

const Label = styled(Text)`
  font-family: Poppins_600SemiBold;
  font-size: 16px;
  color: #0e4a86;
`;

const Input = styled(TextInput)`
  height: 60px;
  margin-bottom: 12px;
  elevation: 3;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  font-family: Poppins_600SemiBold};
  font-weight: normal;
`;

const Button = styled(TouchableOpacity)`
  height: 60px;
  width: 100%;
  background-color: #0e4a86;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 12px
  margin-bottom: 12px;
`;

const ButtonText = styled(Text)`
  font-family: Poppins_600SemiBold;
  font-size: 16px
  color: #fff;
`;

export const UpdateContactScreen = ({ route, navigation }) => {
  const { updateContact } = useContext(ContactContext);
  const { contactDetail } = route.params;
  const id = contactDetail.id;

  const [firstName, setfirstName] = useState(contactDetail.firstName);
  const [lastName, setLastName] = useState(contactDetail.lastName);
  const [age, setAge] = useState(contactDetail.age);
  const [photo, setPhoto] = useState(contactDetail.photo);

  const navigate = () => {
    navigation.navigate("ContactList");
  };

  return (
    <SafeArea>
      <Header navigate={() => navigation.goBack()} title="Update Contact" />
      <Container>
        <Label>First Name</Label>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="First Name"
          placeholder="Input first name"
          value={firstName}
          onChangeText={setfirstName}
        />
        <Label>Last Name</Label>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Last Name"
          placeholder="Input last name"
          value={lastName}
          onChangeText={setLastName}
        />
        <Label>Age</Label>
        <Input
          keyboardType="numeric"
          autoCapitalize="none"
          autoCorrect={false}
          label="Age"
          placeholder="Input age"
          value={age.toString()}
          onChangeText={setAge}
        />
        <Label>Photo</Label>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Photo"
          placeholder="Input photo"
          value={photo}
          onChangeText={setPhoto}
        />
        <Button
          onPress={() =>
            updateContact({ id, firstName, lastName, age, photo, navigate })
          }
        >
          <ButtonText>Update</ButtonText>
        </Button>
      </Container>
    </SafeArea>
  );
};
