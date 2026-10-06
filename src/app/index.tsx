import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";

import CustomModal from "../components/CustomModal";
import HeroCard from "../components/HeroCard";

type Hero = {
  id: string;
  name: string;
  className: string;
};

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const [heroes, setHeroes] = useState<Hero[]>([]);

  function handleSaveHero(name: string, className: string) {
    const newHero: Hero = {
      id: Date.now().toString(),
      name: name,
      className: className,
    };

    setHeroes((oldHeroes) => [...oldHeroes, newHero]);

    setModalVisible(false);
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.title}>Guilda de Heróis</Text>

        <Text style={styles.subtitle}>
          Cadastre seus heróis e monte sua equipe!
        </Text>
      </View>

      {/* LISTA DE HERÓIS */}
      {heroes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            Nenhum herói cadastrado
          </Text>

          <Text style={styles.emptyText}>
            Clique no botão abaixo para cadastrar seu primeiro herói.
          </Text>
        </View>
      ) : (
        <FlatList
          data={heroes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HeroCard
              name={item.name}
              className={item.className}
            />
          )}
          contentContainerStyle={styles.list}
        />
      )}

      {/* BOTÃO DE CADASTRO */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>
          + Cadastrar Herói
        </Text>
      </TouchableOpacity>

      {/* MODAL */}
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveHero}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F18",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 30,
    marginBottom: 20,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },

  subtitle: {
    color: "#A5A5B5",
    fontSize: 14,
    marginTop: 5,
    fontFamily: "Poppins_400Regular",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  emptyTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
  },

  emptyText: {
    color: "#A5A5B5",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    fontFamily: "Poppins_400Regular",
  },

  list: {
    paddingBottom: 20,
  },

  addButton: {
    backgroundColor: "#7C3AED",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});