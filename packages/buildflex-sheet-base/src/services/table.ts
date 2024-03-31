import client from '../services/client';
import { SuccessResponse } from '../interfaces/reponse';
import { Table } from '../interfaces/table';

const resource = '/table';

export async function getTableApi(): Promise<SuccessResponse<Table[]>> {
  return client.get(resource);
}

export async function createTableApi(
  nameTable: string
): Promise<SuccessResponse<{ tableId: string }>> {
  return client.post(resource, {
    name: nameTable,
  });
}

export async function updateTableApi(
  tableId: string,
  nameTable: string
): Promise<SuccessResponse<NonNullable<unknown>>> {
  return client.put(`${resource}/${tableId}`, {
    name: nameTable,
  });
}

export async function deleteTableApi(
  tableId: string
): Promise<SuccessResponse<NonNullable<unknown>>> {
  return client.delete(`${resource}/${tableId}`);
}
