import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Advertencias from "../screens/advertencias";
import Araña1 from "../screens/categorias/arañas/arana-individual1";
import Araña2 from "../screens/categorias/arañas/arana-individual2";
import Araña3 from "../screens/categorias/arañas/arana-individual3";
import Araña4 from "../screens/categorias/arañas/arana-individual4";
import Araña5 from "../screens/categorias/arañas/arana-individual5";
import Araña6 from "../screens/categorias/arañas/arana-individual6";
import Araña7 from "../screens/categorias/arañas/arana-individual7";
import escorpion1 from "../screens/categorias/escorpiones/escorpion-individual1";
import escorpion2 from "../screens/categorias/escorpiones/escorpion-individual2";
import escorpion3 from "../screens/categorias/escorpiones/escorpion-individual3";
import AvistCategoria from "../screens/formularios/avist-categoria";
import colors from "../config/colors";
import Categorias from "../screens/categorias/categorias-menu";
import Menu from "../screens/menu";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: colors.verdeOscuro,
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name="Advertencias"
      component={Advertencias}
      options={{ headerShown: false }}
    ></Stack.Screen>
    <Stack.Screen
      name="Menu"
      component={Menu}
      options={{ headerShown: false, gestureEnabled: false }}
    ></Stack.Screen>
    <Stack.Screen name="Categorias" component={Categorias}></Stack.Screen>
    <Stack.Screen name="Araña1" component={Araña1}></Stack.Screen>
    <Stack.Screen name="Araña2" component={Araña2}></Stack.Screen>
    <Stack.Screen name="Araña3" component={Araña3}></Stack.Screen>
    <Stack.Screen name="Araña4" component={Araña4}></Stack.Screen>
    <Stack.Screen name="Araña5" component={Araña5}></Stack.Screen>
    <Stack.Screen name="Araña6" component={Araña6}></Stack.Screen>
    <Stack.Screen name="Araña7" component={Araña7}></Stack.Screen>
    <Stack.Screen name="escorpion1" component={escorpion1}></Stack.Screen>
    <Stack.Screen name="escorpion2" component={escorpion2}></Stack.Screen>
    <Stack.Screen name="escorpion3" component={escorpion3}></Stack.Screen>


    
    <Stack.Screen
      name="AvistCategoria"
      component={AvistCategoria}
      options={{ headerTitle: "Avistamiento" }}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default AppNavigator;
