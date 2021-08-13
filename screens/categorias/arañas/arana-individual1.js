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

function AranaIndividual1() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "100%", height: 200, marginBottom: 10 }}>
          <ImageCarousel data={DATA[0].images} />
        </View>
        <Text style={[defaultStyles.text, styles.title]}>{DATA[0].title}</Text>
        <View style={styles.factBox}>
          <View style={styles.factBox__textBox}>
            
            <Text style={[defaultStyles.text, styles.info__text]}>
              Hembra, vista dorsal y macho en posición defensiva. Se observan los colores amarillo y negro que posee en los dos primeros pares de patas. 
            </Text>
          </View>
           <View style={styles.factBox__textBox}>
            <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Info:
            </Text>
            <Text style={[defaultStyles.text, styles.factBox__textBox_message]}>
              Sed ut perspiciatis unde omnis iste.
            </Text>
          </View>
        </View>
        <View style={styles.info}>
        <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Ecología:
            </Text>
          <Text style={[defaultStyles.text, styles.info__text]}>
            Phoneutria boliviensis es una especie de hábitos nocturnos, asociados a cultivos de plátano, café, pastizales y las orillas de las carreteras (Valenzuela-Rojas et al., 2020), con una amplia distribución; reportada en el departamento del Huila en los municipios de Pitalito, Palestina, Oporapa, La Argentina, Palermo y Neiva (Perdomo-Muñoz et al., 2019; Valenzuela-Roja;s, 2019). Sus hábitos alimenticios incluyen grillos, cucarachas, fásmidos, coleópteros, lepidópteros, geckos, entre otros (Valenzuela-Rojas et al., 2020). Su presencia en las casas puede obedecer a la presencia de plagas que son sus presas o a que se tienen escombros u objetos acumulados que son refugio para la araña.
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
             onPress={() => navigation.navigate(routes.CATEGORIA_ARAC)}
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

export default AranaIndividual1;

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
