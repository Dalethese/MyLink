import { TouchableWithoutFeedback, View } from "react-native";
import * as Clipboard from "expo-clipboard";
import {
  Button,
  Container,
  Header,
  LinkArea,
  LongUrl,
  ModalContainer,
  ShortLinkArea,
  ShortLinkUrl,
  Title,
} from "./styles";
import { Feather } from "@expo/vector-icons";

export function ModalLink({ closeModal }) {
  const copyLink = async () => {
    await Clipboard.setStringAsync("link encurtado");
    alert("link copiado");
  };

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={() => closeModal()}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <Button onPress={closeModal}>
            <Feather name="x" color="#212743" size={30} />
          </Button>
          <Button>
            <Feather name="share" color="#212743" size={30} />
          </Button>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>
            https://github.com/Dalethese/react-native
          </LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>https://bit.ly/276fv</ShortLinkUrl>
            <Button onPress={copyLink}>
              <Feather name="copy" color="#fff" size={25} />
            </Button>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}
