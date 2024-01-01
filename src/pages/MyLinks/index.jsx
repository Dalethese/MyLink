import { Platform, SafeAreaView, Text, View } from "react-native";
import { StatusBarPage } from "../../components/StatusBarPage";
import { Container, ListLinks, Title } from "./style";
import { Menu } from "../../components/Menu";
import ListItem from "../../components/ListItem";

export const MyLinks = () => {
  return (
    <Container>
      <SafeAreaView>
        <StatusBarPage backgroundColor='#132742' barStyle='light-content' />

        <Menu />

        <Title>Meus Links</Title>

        <ListLinks
          data={[
            { id: 1, link: "test.com" },
            { id: 2, link: "test2.com" },
          ]}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </SafeAreaView>
    </Container>
  );
};
