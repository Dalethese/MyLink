import { TouchableWithoutFeedback, View, Share } from "react-native";
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
import useLinks from "../../hooks/useLinks";

export function ModalLink() {
  const [shortedLink, longUrl, isCopied, setIsCopied, setModalVisible] =
    useLinks((state) => [
      state.shortedLink,
      state.longUrl,
      state.isCopied,
      state.setIsCopied,
      state.setModalVisible,
    ]);

  const copyLink = async () => {
    await Clipboard.setStringAsync(shortedLink);
    setIsCopied(true);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Link: ${shortedLink}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("activityType");
        } else {
          console.log("compartilhado com sucesso");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Modal fechado");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCloseModal = () => {
    setIsCopied(false);
    setModalVisible(false);
  };

  return (
    <ModalContainer>
      <TouchableWithoutFeedback onPress={handleCloseModal}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <Button onPress={handleCloseModal}>
            <Feather name='x' color='#212743' size={30} />
          </Button>
          <Button onPress={handleShare}>
            <Feather name='share' color='#212743' size={30} />
          </Button>
        </Header>

        <LinkArea>
          <Title>Link encurtado</Title>
          <LongUrl numberOfLines={1}>{longUrl}</LongUrl>

          <ShortLinkArea activeOpacity={1} onPress={copyLink}>
            <ShortLinkUrl numberOfLines={1}>{shortedLink}</ShortLinkUrl>
            <Button onPress={copyLink}>
              {!isCopied ? (
                <Feather name='copy' color='#fff' size={25} />
              ) : (
                <Feather name='check' color='#1bc949' size={25} />
              )}
            </Button>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
  );
}
