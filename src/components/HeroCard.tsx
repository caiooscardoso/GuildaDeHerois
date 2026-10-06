import { StyleSheet, Text, View } from "react-native";

type HeroCardProps = {
  name: string;
  className: string;
};

export default function HeroCard({ name, className }: HeroCardProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.className}>Classe: {className}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E2E",
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },

  className: {
    color: "#B8B8C8",
    fontSize: 14,
    marginTop: 4,
    fontFamily: "Poppins_400Regular",
  },
});