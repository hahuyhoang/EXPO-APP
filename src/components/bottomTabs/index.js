import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bankaccount from "../../screens/bankaccount";
import Expensive from "../../screens/expensive";
import Home from "../../screens/home";
import More from "../../screens/more";
import Portfolio from "../../screens/portfolio";

const Tab = createBottomTabNavigator();

export default function  MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Expensive" component={Expensive} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
      <Tab.Screen name="Bankaccount" component={Bankaccount} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}

