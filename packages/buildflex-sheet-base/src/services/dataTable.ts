import client from '../services/client';
import { SuccessResponse } from '../interfaces/reponse';

const resource = '/dataTable';

export async function getDataTableApi(
  id: string,
): Promise<SuccessResponse<any>> {
  return client.get(`${resource}/${id}`);
}
