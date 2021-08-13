import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import FlatlistCategoria from "../../components/categorias/flatlist-categoria";
import routes from "../../navigation/routes";
import DATA from "../../assets/json/aracnidos";

function CategoriasAraña({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatlistCategoria
          peligroso={DATA[0].peligroso}
          title={DATA[0].title}
          image={require("../../assets/categorias/arañas/boliviensis.png")}
          description={DATA[0].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARACNIDO);
          }}
        />
        <FlatlistCategoria
          peligroso={DATA[1].peligroso}
          title={DATA[1].title}
          image={require("../../assets/categorias/arañas/geometricus.png")}
          description={DATA[1].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARAC);
          }}
        />
        <FlatlistCategoria
          peligroso={DATA[2].peligroso}
          title={DATA[2].title}
          image={require("../../assets/categorias/arañas/laeta.png")}
          description={DATA[2].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARAÑA);
          }}
        />
        <FlatlistCategoria
          peligroso={DATA[3].peligroso}
          title={DATA[3].title}
          image={require("../../assets/categorias/arañas/rufines.png")}
          description={DATA[3].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARAÑAR);
          }}
        />
         <FlatlistCategoria
          peligroso={DATA[4].peligroso}
          title={DATA[4].title}
          image={require("../../assets/categorias/arañas/Scytodidae.png")}
          description={DATA[4].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARAÑAS);
          }}
        />
        <FlatlistCategoria
          peligroso={DATA[5].peligroso}
          title={DATA[5].title}
          image={require("../../assets/categorias/arañas/spp.png")}
          description={DATA[5].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARAÑAP);
          }}
        />
        <FlatlistCategoria
          peligroso={DATA[6].peligroso}
          title={DATA[6].title}
          image={require("../../assets/categorias/arañas/Dolomede.png")}
          description={DATA[6].peqDescri}
          onPress={() => {
            navigation.navigate(routes.CATEGORIA_ARAÑAD);
          }}
        />
        </View>
    </ScrollView>
  );
}

export default CategoriasAraña;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
