import React, { useEffect, useState } from 'react';
import { Dropdown, Input, Button } from 'antd';

interface Props {
  tableInfo: {
    name: string;
    tableId: string;
  };
  handleChangeName: (tableId: string, tableName: string) => Promise<void>;
}

const TabLabel: React.FC<Props> = ({ tableInfo, handleChangeName }) => {
  const [newName, setNewName] = useState(tableInfo.name);

  const handleSave = () => {
    handleChangeName(tableInfo.tableId, newName);
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
          <Button type="primary" onClick={handleSave}>
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
