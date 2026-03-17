import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native";

export default function App() {
  const [pontos, setPontos] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>
      <Text style={styles.pontuacao}>{pontos}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setPontos(pontos + 1)}
      >
        <Text style={styles.btnTxt}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setPontos(pontos - 1)}
      >
        <Text style={styles.btnTxt}>-</Text>
      </TouchableOpacity>
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
  pontuacao: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#2ecc71",
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
    width: 60,
    alignItems: "center",
  },
  btnTxt: { fontSize: 24, color: "#fff", fontWeight: "bold" },
});
