import Client from './Client';

export const PEOPLE_ENDPOINT = '/people';

export async function addPersonInfo(item) {
  Client.post(PEOPLE_ENDPOINT, item)
    .then((res) => {
      return true;
    })
    .catch((e) => {
      return false;
    });
}

export async function fetchPeople() {
  const promise = await Client.get(PEOPLE_ENDPOINT);
  return promise;
}
