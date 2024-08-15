import Text from '@/components/typography/Text';
import React from 'react';
interface AttachmentCellProps {
  images: string[];
}
const AttachmentCell = ({ images }: AttachmentCellProps) => {
  return (
    <div className="max-w-[164px] flex gap-1 w-full truncate overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="attachment"
          className="object-cover rounded w-6 h-6"
        />
      ))}
    </div>
  );
};

export default AttachmentCell;
