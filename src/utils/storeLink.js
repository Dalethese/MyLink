import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param {String} key storage key
 * @returns {Promise<[{id: string, link: string}] || []>} an array with storageLinks or an empty array
 */
export async function getStorageLinks(key) {
  const myLinks = await AsyncStorage.getItem(key);

  const storageLinks = JSON.parse(myLinks) || [];
  return storageLinks;
}

/**
 *
 * @param {string} key Storage key
 * @param {{id: string, link: string, long_url: string}} newLink
 */
export async function saveLinks(key, newLink) {
  const storageLinks = await getStorageLinks(key);
  const hasLink = storageLinks.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log('Este link já está salvo');
    return;
  }

  storageLinks.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(storageLinks));
  console.log('link salvo');
}

/**
 *
 * @param {[{id: string, link: string, long_url: string}]} links asd
 * @param {string} id
 */
export async function deleteLinks(links, id) {
  console.log({ links });
  const myLinks = links.filter((item) => item.id !== id);
  console.log({ myLinks });
  await AsyncStorage.setItem('sLinks', JSON.stringify(myLinks));
  return myLinks;
}
