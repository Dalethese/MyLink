import { LinearGradient } from "expo-linear-gradient";
import { StatusBarPage } from "../../components/StatusBarPage";
import { Menu } from "../../components/Menu";
import { Feather } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import {
  BoxErase,
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
  ActivityIndicator,
} from "react-native";
import { ModalLink } from "../../components/ModalLink";
import { api } from "../../services/api";
import useLinks from "../../hooks/useLinks";

export const Home = () => {
  const { input, loading, modalVisible } = useLinks((state) => ({
    input: state.input,
    loading: state.loading,
    modalVisible: state.modalVisible,
  }));

  const { setInput, setLoading, setModalVisible, setShortedLink, setLongUrl } =
    useLinks((state) => ({
      setInput: state.setInput,
      setLoading: state.setLoading,
      setModalVisible: state.setModalVisible,
      setShortedLink: state.setShortedLink,
      setLongUrl: state.setLongUrl,
    }));

  const handleShortLink = async () => {
    setLoading(true);

    try {
      const response = await api.post("/encurtamentos", {
        url: input,
      });

      setLongUrl(input);
      setShortedLink(response.data.urlEncurtada);
      setInput("");
      Keyboard.dismiss();
      setModalVisible(true);
    } catch (error) {
      alert("Ocorreu um erro, tente novamente!");
      Keyboard.dismiss();
      setInput("");
    } finally {
      setLoading(false);
    }
  };

  const handlePaste = async () => {
    try {
      const content = await Clipboard.getStringAsync();
      setInput(content);
    } catch (error) {
      alert("Ocorreu um erro, tente novamente !");
    }
  };

  const handleErase = () => {
    if (!Keyboard.isVisible()) {
      Keyboard.dismiss();
    }

    setInput("");
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
        <StatusBarPage backgroundColor='#1ddbb9' barStyle='light-content' />

        <Menu />
        {/* forma de subir o design junto com o teclado do dispositivo */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/Logo.png")}
              resizeMode='contain'
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>MyLink</Title>
            <Subtitle>Cole seu link para encurtar</Subtitle>

            <ContainerInput>
              <BoxIcon onPress={handlePaste}>
                <Feather name='link' size={22} color='#fff' />
              </BoxIcon>
              <Input
                placeholder='cole seu link aqui...'
                placeholderTextColor='rgba(255, 255, 255, 0.5)'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='url'
                value={input}
                onChangeText={(text) => setInput(text)}
              />
              <BoxErase onPress={handleErase}>
                {input && <Feather name='delete' size={20} color='#fff' />}
              </BoxErase>
            </ContainerInput>

            <ButtonLink onPress={handleShortLink}>
              {loading ? (
                <ActivityIndicator color='#121212' size={24} />
              ) : (
                <ButtonLinkText>Gerar Link</ButtonLinkText>
              )}
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisible} transparent animationType='slide'>
          <ModalLink />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
