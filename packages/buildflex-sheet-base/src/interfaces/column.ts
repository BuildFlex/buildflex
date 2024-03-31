export interface Column {
  updatedAt: string;
  createdAt: string;
  deletedAt: null | string;
}

export interface IUpdateColumn {
  idColumn: string;
  columns: {
    type?: number;
    name?: string;
    order?: number;
    width?: number;
    description?: string;
  };
}
