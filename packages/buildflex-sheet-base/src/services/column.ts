import { SuccessResponse } from '../interfaces/reponse';
import { Column } from '../interfaces/column';
import client from './client';

const resource = '/column';

export async function getColumnApi(
  id: string
): Promise<SuccessResponse<Column[]>> {
  return client.get(`${resource}/${id}`);
}

export async function updateColumnApi(
  id: string,
  body: any
): Promise<SuccessResponse<Column[]>> {
  return client.patch(`${resource}/${id}`, body);
}
