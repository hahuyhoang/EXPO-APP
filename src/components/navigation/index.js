import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "../bottomTabs";
import Allcategories from "../../screens/allcategories";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="BottomTab" component={MyTabs} />
        <Stack.Screen name="Allcategories" component={Allcategories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


