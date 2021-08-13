import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DAT from "../../../assets/json/listescporpiones";
import { useNavigation } from "@react-navigation/native";
import ImageCarousel from "../../../components/categorias/image-carousel";
import NextButton from "../../../components/buttons/arac-indiv-siguiente";
import BackButton from "../../../components/buttons/arac-indiv-anterior";
import AvistButton from "../../../components/buttons/arac-indiv-avist";
import PicadaButton from "../../../components/buttons/arac-indiv-picada";
import colors from "../../../config/colors";
import defaultStyles from "../../../config/styles";
import routes from "../../../navigation/routes";

function EscoprionIndividual1() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: "100%", height: 200, marginBottom: 10 }}>
          <ImageCarousel data={DAT[0].images} />
        </View>
        <Text style={[defaultStyles.text, styles.title]}>{DAT[0].title}</Text>
        <View style={styles.factBox}>
          <View style={styles.factBox__textBox}>
          <Text style={[defaultStyles.text, styles.factBox__textBox_title]}>
              Características Morfológicas:
            </Text>         
            <Text style={[defaultStyles.text, styles.info__text]}>
              El tamaño de estos oscila entre 60 - 120 mm de longitud, esta especie 
              presenta los pedipalpos rojizos y los dos últimos segmentos del postabdomen o metasoma  (4º y 5º) más gruesos y oscuros (Barona et al., 2004), el número de peines es igual o superior a 16, el telson es una vesícula robusta, apéndice subacular agudo con dos granos, aguijón curvo y largo;  en los quelíceros el dedo móvil presenta un diente subdistal y dos dientes basales.
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
              Se encuentra distribuido en la región andina entre los 100 y los 1.300 m de altitud en el alto magdalena en Boyacá, Caldas, Cundinamarca, Antioquia, Tolima y Huila, Estos escorpiones han modificado su etología adaptándose a los cambios antrópicos, de esta manera son frecuentes en malezas, cultivos, caños y viviendas (Gómez & Otero, 2007) no hay ninguna especie conocida que sea capaz de construir madrigueras, debido a sus hábitos errantes que les hacen buscar cada noche su alimento
            </Text>
        </View>
        <View style={styles.navigationBox}>
          <View style={styles.backBox}>
            <BackButton 
              onPress={() => navigation.navigate(routes.TAB_CATEGORIAS_ESCORPIONES)}
            />
          </View>
          <View style={styles.nextBox}>
            <NextButton
             onPress={() => navigation.navigate(routes.CATEGORIA_ESCORPION1)}
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

export default EscoprionIndividual1;

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
