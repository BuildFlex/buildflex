export interface Table {
  tableId: string;
  name: string;
  order: number;
  frozenColumnId: null | string;
  primaryColumnId: null | string;
  updatedAt: string;
  createdAt: string;
  deletedAt: null | string;
}
