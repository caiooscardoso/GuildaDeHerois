import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useState } from "react";

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (name: string, className: string) => void;
};

export default function CustomModal({
  visible,
  onClose,
  onSave,
}: CustomModalProps) {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  function handleSave() {
    if (!name.trim() || !className.trim()) {
      Alert.alert(
        "Atenção",
        "Preencha o nome e a classe do herói antes de salvar."
      );
      return;
    }

    onSave(name.trim(), className.trim());

    setName("");
    setClassName("");
  }

  function handleClose() {
    setName("");
    setClassName("");
    onClose();
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>

          <Image
            source={require("../../assets/avatar.png")}
            style={styles.avatar}
          />

          <Text style={styles.title}>Novo Herói</Text>

          <Text style={styles.label}>Nome</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o nome do herói"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Classe</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Guerreiro, Mago..."
            placeholderTextColor="#888"
            value={className}
            onChangeText={setClassName}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveText}>Salvar Herói</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClose}>
            <Text style={styles.cancelText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modal: {
    width: "100%",
    backgroundColor: "#151522",
    borderRadius: 20,
    padding: 24,
  },

  closeButton: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 10,
  },

  closeText: {
    color: "#FFFFFF",
    fontSize: 32,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 15,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Poppins_600SemiBold",
  },

  label: {
    color: "#FFFFFF",
    fontSize: 14,
    marginBottom: 6,
    fontFamily: "Poppins_500Medium",
  },

  input: {
    backgroundColor: "#252538",
    color: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontFamily: "Poppins_400Regular",
  },

  saveButton: {
    backgroundColor: "#7C3AED",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  saveText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },

  cancelText: {
    color: "#AAAAAA",
    textAlign: "center",
    marginTop: 15,
    fontFamily: "Poppins_400Regular",
  },
});