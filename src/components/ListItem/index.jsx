import { View } from 'react-native';
import { ActionBtn, ContainerBtn, Link } from './styles';
import { Feather } from '@expo/vector-icons';
import useLinks from '../../hooks/useLinks';
import { Swipeable } from 'react-native-gesture-handler';
import { deleteLinks } from '../../utils/storeLink';

export default function ListItem({ data }) {
  const [
    storageLinks,
    setStorageLinks,
    setLongUrl,
    setShortedLink,
    setModalVisible,
  ] = useLinks((state) => [
    state.storageLinks,
    state.setStorageLinks,
    state.setLongUrl,
    state.setShortedLink,
    state.setModalVisible,
  ]);

  const handlePress = () => {
    setLongUrl(data.long_url);
    setShortedLink(data.link);
    setModalVisible(true);
  };

  const handleDelete = async () => {
    const actualLinks = await deleteLinks(storageLinks, data.id);
    setStorageLinks(actualLinks);
  };

  const rightActions = () => (
    <ActionBtn onPress={handleDelete}>
      <Feather name="trash" color="#fff" size={24} />
    </ActionBtn>
  );

  return (
    <View>
      <Swipeable renderRightActions={rightActions}>
        <ContainerBtn activeOpacity={0.9} onPress={handlePress}>
          <Feather name="link" color="#fff" size={24} />
          <Link numberOfLines={1}>{data.long_url}</Link>
        </ContainerBtn>
      </Swipeable>
    </View>
  );
}
