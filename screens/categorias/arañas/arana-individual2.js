import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DATA from "../../../assets/json/aracnidos";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../../../components/categorias/image-carousel";
import NextButton from "../../../components/buttons/arac-indiv-siguiente";
import BackButton from "../../../components/buttons/arac-indiv-anterior";
import AvistButton from "../../../components/buttons/arac-indiv-avist";
import PicadaButton from "../../../components/buttons/arac-indiv-picada";
import colors from "../../../config/colors";
import defaultStyles from "../../../config/styles";
import routes from "../../../navigation/routes";

function AranaIndividual2() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "100%", height: 200, marginBottom: 10 }}>
          <ImageCarousel data={DATA[1].images} />
        </View>
        <Text style={[defaultStyles.text, styles.title]}>{DATA[1].title}</Text>
        <View style={styles.factBox}>
          <View style={styles.factBox__textBox}>
          <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
            Características Morfológicas:
            </Text>
            <Text style={[defaultStyles.text, styles.info__text]}>
             Esta especie es conocida como “araña viuda marrón” se relaciona con la viuda negra. Las arañas de este género son de abdomen globuloso y cefalotórax pequeño, según la especie presentan colores de negro a pardo con manchas rojizas en el dorso del abdomen, El cuerpo de la hembra mide cerca de 8 a 13 mm y los machos 3 mm; y hasta 4 cm de longitud total con las patas extendidas.
            </Text>
          </View>
           <View style={styles.factBox__textBox}>
          </View>
        </View>
        <View style={styles.info}>
        <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
          Ecología:
            </Text>
          <Text style={[defaultStyles.text, styles.info__text]}>
          Latrodectus geometricus  es una especie cosmopolita en Colombia, se asocian a sitios secos, cultivos, cercas y cavernas donde tejen telarañas para atrapar insectos que les servirán de alimento, la hembra es la que muerde al ser comprimida contra el cuerpo, Se han reportado casos de Lactrodectismo fatales en Tolima y Atlántico.
          </Text>
        </View>
        <View style={styles.navigationBox}>
          <View style={styles.backBox}>
            <BackButton 
              onPress={() => navigation.navigate(routes.TAB_CATEGORIAS_ARAÑAS)}
            />
          </View>
          <View style={styles.nextBox}>
            <NextButton 
            onPress={() => navigation.navigate(routes.CATEGORIA_ARAÑA)}
            />
          </View>
        </View>
        <View style={styles.reportBox}>
          <PicadaButton />
          <AvistButton
            onPress={() => navigation.navigate(routes.AVIST_CATEGORIA)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default AranaIndividual2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
  },
  title: { marginTop: 10, fontSize: 25, fontWeight: "500" },
  factBox: {
    width: "95 %",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 5,
  },
  factBox__textBox: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 3,
  },
  factBox__textBox_title: { fontSize: 15, fontWeight: "bold", marginRight: 5 },
  factBox__textBox_message: { fontSize: 15, color: "gray" },
  info: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  info__text: { fontSize: 13, textAlign: "justify" },
  navigationBox: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  backBox: {
    flex: 1 / 2,
    width: "100%",
    paddingLeft: 15,
  },
  nextBox: {
    flex: 1 / 2,
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 15,
  },
  reportBox: {
    width: "100%",
    height: 50,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
