import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { ArrowCircleDown, DocumentText, Paperclip2 } from 'iconsax-react';
import React, { useState } from 'react';

const ExpandAttachment = () => {
  const [attachment, setAttachment] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const DROP_FILE_LIMIT = 5;
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files);
    if (files.length === 0) return;

    const limitedFiles = files.slice(0, DROP_FILE_LIMIT);
    setAttachment((prev) => [...prev, ...limitedFiles]);
  };

  const handleImageChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      if (files.length === 0) return;
      const limitedFiles = files.slice(0, DROP_FILE_LIMIT);
      setAttachment((prev) => [...prev, ...limitedFiles]);
    }
    e.target.value = '';
    e.target.files = null;
  };
  return (
    <div className="flex justify-between items-start">
      {/* Attachment Title */}
      <div className="flex items-center gap-2 text-neutral-dark-300">
        <DocumentText size={16} />
        <Text as="span" variant="B2-Regular">
          Attachment
        </Text>
      </div>
      {/* Attachment content */}
      {attachment.length === 0 ? (
        <div
          className={cn(
            `w-[430px] h-[60px] flex items-center justify-center rounded-lg`,
            isDragging ? 'bg-neutral-100' : 'bg-white',
          )}
          style={{ border: '1px solid #EDEDED' }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex items-center gap-2">
            <ArrowCircleDown size={16} />
            <div className="flex items-center gap-1">
              <Text
                as="span"
                variant="B2-Regular"
                className="text-neutral-dark-300 h-[18px]"
              >
                Drop files here or
              </Text>
              <label
                className="cursor-pointer text-theme-ocean-blue h-[18px]"
                htmlFor="expand-attachment"
              >
                <Text as="span" variant="B2-Regular">
                  browse
                </Text>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[430px] h-fit flex flex-col gap-2">
          {/* Attachment button */}

          <label
            className="bg-white cursor-pointer rounded-lg w-fit px-2 flex gap-2 items-center h-9 box-border"
            style={{
              border: '1px solid #EDEDED',
            }}
            htmlFor="expand-attachment"
          >
            <Paperclip2 size={16} />
            <Text
              as="span"
              variant="B2-Regular"
              className="text-neutral-dark-300"
            >
              Attach file
            </Text>
          </label>
          {/* Attachment Image */}
          <div className="flex flex-wrap gap-2">
            {attachment.map((file) => (
              <div
                key={file.name}
                className="flex basis-[200px] flex-col rounded-lg w-fit overflow-hidden"
                style={{ border: '1px solid #EDEDED' }}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt="attachment"
                  className="object-cover w-[200px] h-[220px]"
                />
                <Text as="span" variant="B2-Regular" className="p-2">
                  {file.name}
                </Text>
              </div>
            ))}
          </div>
        </div>
      )}
      <input
        accept="image/*"
        onChange={(e) => handleImageChoose(e)}
        name="expand-attachment"
        type="file"
        multiple
        className="hidden"
        id="expand-attachment"
      />
    </div>
  );
};

export default ExpandAttachment;
