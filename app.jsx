import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
  const [nossos, setNossos] = useState(0);
  const [eles, setEles] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>

      <View style={styles.placar}>
        <View style={styles.time}>
          <Text style={styles.nomeTime}>Nos</Text>
          <Text style={styles.pontuacao}>{nossos}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setNossos(nossos + 1)}
          >
            <Text style={styles.btnTxt}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divisor} />

        <View style={styles.time}>
          <Text style={styles.nomeTime}>Eles</Text>
          <Text style={styles.pontuacao}>{eles}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setEles(eles + 1)}
          >
            <Text style={styles.btnTxt}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#f1c40f",
    marginBottom: 20,
  },
  placar: { flexDirection: "row", alignItems: "flex-start" },
  time: { alignItems: "center", padding: 10, flex: 1 },
  nomeTime: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  pontuacao: { fontSize: 64, fontWeight: "bold", color: "#f1c40f" },
  btn: {
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
    width: 60,
    alignItems: "center",
  },
  btnTxt: { fontSize: 24, color: "#fff", fontWeight: "bold" },
  divisor: {
    width: 1,
    backgroundColor: "#444",
    alignSelf: "stretch",
    marginHorizontal: 5,
  },
});
