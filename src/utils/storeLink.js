import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param {String} key storage key
 * @returns {Promise<[{id: string, url: string}] || []>} an array with storageLinks or an empty array
 */
export async function getStorageLinks(key) {
  const myLinks = await AsyncStorage.getItem(key);

  const storageLinks = JSON.parse(myLinks) || [];
  return storageLinks;
}

/**
 *
 * @param {string} key Storage key
 * @param {{id: string, url: string, long_url }} newLink
 */
export async function saveLinks(key, newLink) {
  const storageLinks = await getStorageLinks(key);
  const hasLink = storageLinks.some((link) => link.long_url === newLink.long_url);

  if (hasLink) {
    return;
  }

  storageLinks.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(storageLinks));
}

/**
 *
 * @param {[{id: string, url: string }]} links
 * @param {string} id
 */
export async function deleteLinks(links, id) {
  const myLinks = links.filter((item) => item.id !== id);
  await AsyncStorage.setItem('sLinks', JSON.stringify(myLinks));
  return myLinks;
}
