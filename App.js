import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ContactProvider } from "./src/context/ContactContext";

import {
  useFonts as usePoppins,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { ContactListScreen } from "./src/screens/ContactList";
import { ContactDetailScreen } from "./src/screens/ContactDetail";
import { AddContactScreen } from "./src/screens/AddContact";
import { UpdateContactScreen } from "./src/screens/UpdateContact";

const Stack = createStackNavigator();

export default function App() {
  let [poppinsLoaded] = usePoppins({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!poppinsLoaded) {
    return null;
  }

  return (
    <>
      <ContactProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="ContactList" component={ContactListScreen} />
            <Stack.Screen
              name="ContactDetail"
              component={ContactDetailScreen}
            />
            <Stack.Screen name="AddContact" component={AddContactScreen} />
            <Stack.Screen
              name="UpdateContact"
              component={UpdateContactScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ContactProvider>
      <StatusBar style="auto" />
    </>
  );
}
