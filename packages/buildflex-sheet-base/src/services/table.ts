import client from '../services/client';
import { SuccessResponse } from '../interfaces/reponse';
import { Table } from '../interfaces/table';

const resource = '/table';

export async function getTableApi(): Promise<SuccessResponse<Table[]>> {
  return client.get(resource);
}

export async function createTableApi(data: {
  name: string;
  order: number;
}): Promise<SuccessResponse<Table>> {
  return client.post(resource, data);
}

export async function updateTableApi(
  tableId: string,
  data: { name: string; order: number }
): Promise<SuccessResponse<NonNullable<unknown>>> {
  return client.put(`${resource}/${tableId}`, data);
}

export async function deleteTableApi(
  tableId: string
): Promise<SuccessResponse<NonNullable<unknown>>> {
  return client.delete(`${resource}/${tableId}`);
}
