import { create } from "zustand";

const useLinks = create((set) => ({
  input: "",
  loading: false,
  modalVisible: false,
  shortedLink: "",
  longUrl: "",
  isCopied: false,
  setInput: (text) => set((state) => ({ input: text })),
  setLoading: (condition) => set((state) => ({ loading: condition })),
  setModalVisible: (boolean) => set((state) => ({ modalVisible: boolean })),
  setShortedLink: (link) => set((state) => ({ shortedLink: link })),
  setLongUrl: (link) => set((state) => ({ longUrl: link })),
  setIsCopied: (boolean) => set((state) => ({ isCopied: boolean })),
}));

export default useLinks;
