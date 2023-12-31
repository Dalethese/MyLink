import { create } from 'zustand';
import {} from '../utils/storeLink.js';

const useLinks = create((set) => ({
  input: '',
  loading: false,
  modalVisible: false,
  shortedLink: '',
  longUrl: '',
  isCopied: false,
  storageLinks: [],
  setInput: (text) => set((state) => ({ input: text })),
  setLoading: (condition) => set((state) => ({ loading: condition })),
  setModalVisible: (boolean) => set((state) => ({ modalVisible: boolean })),
  setShortedLink: (link) => set((state) => ({ shortedLink: link })),
  setLongUrl: (link) => set((state) => ({ longUrl: link })),
  setIsCopied: (boolean) => set((state) => ({ isCopied: boolean })),
  setStorageLinks: (item) => set((state) => ({ storageLinks: item })),
}));

export default useLinks;
