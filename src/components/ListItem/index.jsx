import { View, Text } from 'react-native';
import { ContainerBtn, Link } from './styles';
import { Feather } from '@expo/vector-icons';
import useLinks from '../../hooks/useLinks';
import { ModalLink } from '../ModalLink';
export default function ListItem({ data }) {
  const setModalVisible = useLinks((state) => state.setModalVisible);

  return (
    <View>
      <ContainerBtn activeOpacity={0.9} onPress={() => setModalVisible(true)}>
        <Feather name="link" color="#fff" size={24} />
        <Link numberOfLines={1}>{data.link}</Link>
      </ContainerBtn>
    </View>
  );
}
