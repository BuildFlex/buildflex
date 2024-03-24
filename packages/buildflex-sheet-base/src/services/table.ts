import client from '../services/client';

export async function getTableApi() {
  return client.get('/table');
}

export async function createTableApi(nameTable: any) {
  return client.post('/table', {
    name: nameTable,
  });
}
