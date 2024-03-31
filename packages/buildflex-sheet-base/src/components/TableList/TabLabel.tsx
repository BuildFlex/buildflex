import React, { useEffect, useState } from 'react';
import { Dropdown, Input, Button } from 'antd';

interface Props {
  tableInfo: {
    name: string;
    tableId: string;
    order: number;
  };
  handleChangeName: (
    tableId: string,
    data: { name: string; order: number }
  ) => Promise<void>;
}

const TabLabel: React.FC<Props> = ({ tableInfo, handleChangeName }) => {
  const [newName, setNewName] = useState(tableInfo.name);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);
    handleChangeName(tableInfo.tableId, {
      ...tableInfo,
      name: newName,
    }).then(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    setNewName(tableInfo.name);
  }, [tableInfo.name]);

  return (
    <Dropdown
      destroyPopupOnHide={true}
      trigger={['contextMenu']}
      placement="bottom"
      dropdownRender={() => (
        <div className="flex flex-col rounded-md items-end gap-4 bg-gray-300 p-4">
          <Input
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <Button loading={loading} type="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
      )}
    >
      <span>{tableInfo.name}</span>
    </Dropdown>
  );
};

export default TabLabel;
