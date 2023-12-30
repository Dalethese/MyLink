import { LinearGradient } from "expo-linear-gradient";
import { StatusBarPage } from "../../components/StatusBarPage";
import { Menu } from "../../components/Menu";
import { Feather } from "@expo/vector-icons";
import {
  BoxIcon,
  ButtonLink,
  ButtonLinkText,
  ContainerContent,
  ContainerInput,
  ContainerLogo,
  Input,
  Logo,
  Subtitle,
  Title,
} from "./styles";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
import { ModalLink } from "../../components/ModalLink";

export const Home = () => {
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleShortLink = () => {
    setModalVisible(true);
  };

  return (
    // forma de recolher o teclado ao clicar fora dele
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["#1ddbb9", "#132742"]}
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <StatusBarPage backgroundColor="#1ddbb9" barStyle="light-content" />

        <Menu />
        {/* forma de subir o design junto com o teclado do dispositivo */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/Logo.png")}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>MyLink</Title>
            <Subtitle>Cole seu link para encurtar</Subtitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="cole seu link aqui..."
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
              />
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              <ButtonLinkText>Gerar Link</ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType="slide">
          <ModalLink closeModal={() => setModalVisible(false)} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
