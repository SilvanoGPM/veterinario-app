import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { NewRecord } from "./screens/NewRecord";
import { AllRecords } from "./screens/AllRecords";

import { RecordHeader } from "./components/RecordHeader";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="NewRecord"
            component={NewRecord}
            options={{ header: RecordHeader }}
          />

          <Stack.Screen
            name="AllRecords"
            component={AllRecords}
            options={{
              header: RecordHeader,
              headerTitle: "Todos os registros",
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
