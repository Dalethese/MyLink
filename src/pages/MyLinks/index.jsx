import { Modal, Platform, SafeAreaView, Text, View } from 'react-native';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Container, ListLinks, Title } from './style';
import { Menu } from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { ModalLink } from '../../components/ModalLink';
import useLinks from '../../hooks/useLinks';

export const MyLinks = () => {
  const modalVisible = useLinks((state) => state.modalVisible);

  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />

      <Menu />

      <Title>Meus Links</Title>

      <ListLinks
        data={[
          { id: 1, link: 'test.com' },
          { id: 2, link: 'test2.com' },
          {
            id: 3,
            link: 'https://www.youtube.com/watch?v=liyLYthCyTU&list=PLAF5G8rnMmBZ3-XaaXXQcCUYj6IJCdb2J&index=5',
          },
        ]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink />
      </Modal>
    </Container>
  );
};
