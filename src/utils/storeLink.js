import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @param {String} key storage key
 * @returns {Promise<[{id: string, link: string}] || []>} an array with storageLinks or an empty array
 */
export async function getSavedLinks(key) {
  const myLinks = await AsyncStorage.getItem(key);

  const savedLinks = JSON.parse(myLinks) || [];
  return savedLinks;
}

/**
 *
 * @param {string} key Storage key
 * @param {{id: string, link: string}} newLink
 */
export async function saveLinks(key, newLink) {
  const savedLinks = await getSavedLinks(key);
  const hasLink = savedLinks.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log('Este link já está salvo');
    return;
  }

  savedLinks.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(savedLinks));
  console.log('link salvo');
}

export async function deleteLinks(link, id) {}
