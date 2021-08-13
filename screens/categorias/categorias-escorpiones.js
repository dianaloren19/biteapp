import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import FlatlistCategoria from "../../components/categorias/flatlist-categoria";
import colors from "../../config/colors";
import routes from "../../navigation/routes";
import DAT from "../../assets/json/listescporpiones";

function CategoriasEscorpiones({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>

      <FlatlistCategoria
          peligroso={DAT[0].peligroso}
          title={DAT[0].title}
          image={require("../../assets/categorias/escorpiones/Pachyurus.png")}
          description={DAT[0].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ESCORPION);
          }}
          />
        <FlatlistCategoria
          peligroso={DAT[1].peligroso}
          title={DAT[1].title}
          image={require("../../assets/categorias/escorpiones/gracilis.png")}
          description={DAT[1].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ESCORPION1);
          }}
          />
       <FlatlistCategoria
          peligroso={DAT[2].peligroso}
          title={DAT[2].title}
          image={require("../../assets/categorias/escorpiones/meijdeni.png")}
          description={DAT[2].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ESCORPION2);
          }}
          />
        </View>
    </ScrollView>
  );
}

export default CategoriasEscorpiones;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
