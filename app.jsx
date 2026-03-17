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

  const addPontos = (time, pontos) => {
    if (time === "nos") setNossos(nossos + pontos);
    else setEles(eles + pontos);
  };

  const BotoesAposta = ({ time }) => (
    <View style={styles.apostas}>
      {[3, 6, 9, 12].map((p) => (
        <TouchableOpacity
          key={p}
          style={styles.btnAposta}
          onPress={() => addPontos(time, p)}
        >
          <Text style={styles.txtAposta}>
            {p === 3 ? "Truco" : p === 6 ? "Seis" : p === 9 ? "Nove" : "Doze"}
          </Text>
          <Text style={styles.txtApostaNum}>+{p}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Marcador</Text>

      <View style={styles.placar}>
        <View style={styles.time}>
          <Text style={styles.nomeTime}>Nos</Text>
          <Text style={styles.pontuacao}>{nossos}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => addPontos("nos", 1)}
          >
            <Text style={styles.btnTxt}>+</Text>
          </TouchableOpacity>
          <BotoesAposta time="nos" />
        </View>

        <View style={styles.divisor} />

        <View style={styles.time}>
          <Text style={styles.nomeTime}>Eles</Text>
          <Text style={styles.pontuacao}>{eles}</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => addPontos("eles", 1)}
          >
            <Text style={styles.btnTxt}>+</Text>
          </TouchableOpacity>
          <BotoesAposta time="eles" />
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
  apostas: { marginTop: 8, gap: 6 },
  btnAposta: {
    backgroundColor: "#16213e",
    borderWidth: 1,
    borderColor: "#f1c40f",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    width: 90,
  },
  txtAposta: { color: "#f1c40f", fontWeight: "bold", fontSize: 13 },
  txtApostaNum: { color: "#aaa", fontSize: 11 },
  divisor: {
    width: 1,
    backgroundColor: "#444",
    alignSelf: "stretch",
    marginHorizontal: 5,
  },
});
