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

function AranaIndividual3() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "100%", height: 200, marginBottom: 10 }}>
          <ImageCarousel data={DATA[2].images} />
        </View>
        <Text style={[defaultStyles.text, styles.title]}>{DATA[2].title}</Text>
        <View style={styles.factBox}>
          <View style={styles.factBox__textBox}>
          <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
            Características Morfológicas:
            </Text>
            <Text style={[defaultStyles.text, styles.info__text]}>
            Este ejemplar en estado adulto mide entre 8 y 15 mm de longitud, con sus extremidades puede llegar a 30 mm, presenta un color pardusco y está cubierto por abundantes pelos largos, erectos o de pelos acostados y ramificados desde la base hasta la mitad de su longitud, posee tres pares de ojos simples distribuidos en forma de triángulo
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
            Esta araña es lucífuga se alimenta de moscas, polillas y pequeños artrópodos, los cuales caza en oscuridad o atrapa en tela, solo muerde en situación accidental cuando es presionada contra la piel de la víctima
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
            onPress={() => navigation.navigate(routes.CATEGORIA_ARAÑAR)}
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

export default AranaIndividual3;

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
