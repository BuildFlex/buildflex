import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import {
  ArrowCircleDown,
  CloseCircle,
  DocumentText,
  Maximize4,
  Paperclip2,
  TextalignJustifycenter,
} from 'iconsax-react';
import React, { useState } from 'react';
import Draggable from 'react-draggable';

const AttachmentCellModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [attachment, setAttachment] = useState<File[]>([]);
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const DROP_FILE_LIMIT = 5;

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingImage(true);
  };

  const handleDragLeave = () => {
    setIsDraggingImage(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingImage(false);
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
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="size-5 p-0 m-0  bg-transparent border-none cursor-pointer"
      >
        <Maximize4
          className="absolute top-2 right-2 z-[11]"
          size={20}
          color="#087AAF"
        />
      </button>
      {isOpen && (
        <Draggable
          onStart={() => setIsDragging(true)}
          onStop={() => setIsDragging(false)}
        >
          <div
            className={cn(
              'min-w-[490px] max-w-[570px]  w-full cursor-grab bg-white rounded-lg p-4 fixed  z-[100] h-auto boxShadowSecondary',
              isDragging ? 'cursor-grabbing' : 'cursor-grab',
            )}
          >
            <div
              className="flex flex-col gap-6 h-full cursor-default"
              draggable={false}
            >
              <div className="w-full gap-1 flex flex-col">
                <div className="flex items-center h-10 px-2 gap-2 text-neutral-dark-300">
                  <DocumentText size={16} />
                  <Text as="span" variant="B2-Regular">
                    Attachment
                  </Text>
                </div>
                <label
                  htmlFor="attachment-cell-modal-input"
                  className="flex rounded w-fit min-w-[112px] items-center bg-[#E0F2FE] text-theme-ocean-blue h-10 px-2 gap-2  border-none cursor-pointer"
                >
                  <Paperclip2 size={16} />
                  <Text as="span" variant="B2-Regular">
                    Attachment
                  </Text>
                </label>
              </div>
              {/* Image display */}
              <div className="flex flex-wrap gap-2 max-h-[316px] overflow-auto customScrollBar">
                {attachment.length !== 0 ? (
                  attachment.map((file, index) => (
                    <div className="flex basis-[260px]  flex-col gap-2 rounded-lg w-fit overflow-hidden">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="attachment"
                        className="object-cover w-[260px] h-[290px]"
                      />
                      <Text
                        as="span"
                        variant="B2-Regular"
                        className=" whitespace-nowrap  truncate max-w-[240px]"
                      >
                        {file.name}
                      </Text>
                    </div>
                  ))
                ) : (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={cn(
                      'flex rounded w-fit min-h-10 min-w-[112px] items-center  h-10 px-2 gap-2  border-none cursor-pointer',
                      isDraggingImage ? 'bg-neutral-100' : 'bg-transparent ',
                    )}
                  >
                    <ArrowCircleDown
                      size={16}
                      className="text-neutral-dark-500"
                    />
                    <Text
                      as="span"
                      variant="B2-Regular"
                      className="text-neutral-dark-300"
                    >
                      Drop files here
                    </Text>
                  </div>
                )}
              </div>
            </div>
            <input
              accept="image/*"
              onChange={(e) => handleImageChoose(e)}
              name="attachment-cell-modal-input"
              type="file"
              multiple
              className="hidden"
              id="attachment-cell-modal-input"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="size-5 p-0 m-0 after:size-3  after:absolute after:rounded-full after:-z-[1]  after:bg-[#6A758B] flex items-center justify-center absolute -top-2 -right-2 rounded-full  border-none cursor-pointer"
            >
              <CloseCircle
                size={24}
                className="text-[#101828] z-1"
                variant="Bold"
              />
            </button>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default AttachmentCellModal;
