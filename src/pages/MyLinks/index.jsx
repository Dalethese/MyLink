import { ActivityIndicator, FlatList, Modal } from 'react-native';
import { StatusBarPage } from '../../components/StatusBarPage';
import { Container, EmptyContainer, Title, WarningText } from './style';
import { Menu } from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { ModalLink } from '../../components/ModalLink';
import useLinks from '../../hooks/useLinks';
import { useEffect } from 'react';
import { getStorageLinks } from '../../utils/storeLink';
import { useIsFocused } from '@react-navigation/native';

export const MyLinks = () => {
  const [storageLinks, modalVisible, loading, setStorageLinks, setLoading] =
    useLinks((state) => [
      state.storageLinks,
      state.modalVisible,
      state.loading,
      state.setStorageLinks,
      state.setLoading,
    ]);
  let isFocused = useIsFocused();

  useEffect(() => {
    async function getLinks() {
      setLoading(true);
      const links = await getStorageLinks('sLinks');
      setStorageLinks(links);
      setLoading(false);
    }

    if (isFocused) {
      getLinks();
    }
  }, [isFocused]);

  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />

      <Menu />

      <Title>Meus Links</Title>

      {loading ? (
        <EmptyContainer>
          <ActivityIndicator color="#fff" size={24} />
        </EmptyContainer>
      ) : (
        <FlatList
          data={storageLinks}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      )}

      {!loading && storageLinks.length < 1 && (
        <EmptyContainer>
          <WarningText>Você ainda não tem links salvos</WarningText>
        </EmptyContainer>
      )}

      <Modal visible={modalVisible} transparent animationType="slide">
        <ModalLink />
      </Modal>
    </Container>
  );
};
