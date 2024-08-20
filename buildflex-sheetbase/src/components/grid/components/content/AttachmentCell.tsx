import Text from '@/components/typography/Text';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/utils/cn';
import {
  Add,
  ArrowCircleDown,
  ArrowCircleDown2,
  ArrowDown,
  Maximize4,
} from 'iconsax-react';
import React from 'react';
interface AttachmentCellProps {
  images: string[];
}
const AttachmentCell = ({ images }: AttachmentCellProps) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const ref = useOutsideClick(() => {
    setIsFocus(false);
    setIsActive(false);
  });
  return (
    <div
      onClick={() => setIsFocus(true)}
      onDoubleClick={() => {
        setIsActive(true);
        console.log('im in onDoubleClick');
      }}
      ref={ref}
      className={cn(
        'max-w-[164px] flex items-center gap-1 h-full w-full ',
        !isActive &&
          isFocus &&
          'after:content-[""] after:pointer-events-none after:absolute after:h-[calc(100%+2px)] after:w-[calc(100%+2px)] after:z-[2] after:-top-[1px] after:-left-[1px] after:border-theme-ocean-blue after:border-solid after:border',
        isActive ? '' : 'truncate overflow-hidden',
      )}
    >
      {isFocus ? (
        <>
          {isActive ? (
            <div
              style={{ boxShadow: 'none' }}
              className={cn(
                '  m-0   font-lato text-sm  resize-none  border-none',
                'absolute w-[181px] min-h-[64px] p-2  text-wrap  customScrollBar leading-normal overflow-auto  bg-white z-10 border border-theme-ocean-blue border-solid  -top-[1px] -left-[1px] ',
              )}
            >
              <div className="flex gap-1 items-center pb-1 max-w-[140px] overflow-x-auto customScrollBar">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="attachment"
                    className="object-cover rounded w-12 h-12"
                  />
                ))}
                <label
                  htmlFor="attachment-cell-input"
                  className="bg-gray-100 h-12 min-w-6 justify-center  flex items-center rounded border-none cursor-pointer"
                >
                  <Add size={20} className="text-neutral-dark-500  " />
                  <input
                    type="file"
                    className="hidden"
                    id="attachment-cell-input"
                  />
                </label>
              </div>
            </div>
          ) : (
            <>
              <Add
                size={20}
                className="text-neutral-dark-400 bg-gray-100 rounded"
              />
              <ArrowCircleDown2 size={20} className="text-neutral-dark-300" />
              <Text
                as="span"
                variant="B2-Regular"
                className="text-neutral-dark-300 w-[92px] h-[18px]"
              >
                Drop file here
              </Text>
            </>
          )}

          <Maximize4
            className="absolute top-2 right-2 z-[11]"
            size={20}
            color="#087AAF"
          />
          <div
            className={cn(
              'absolute  bg-white z-[11] size-[10px] rounded-sm',
              isActive
                ? ' -bottom-[28px] -right-[5px] '
                : ' -bottom-[4px] -right-[4px] ',
            )}
            style={{ border: '1px solid #087AAF' }}
          />
        </>
      ) : (
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="attachment"
            className="object-cover rounded w-6 h-6"
          />
        ))
      )}
    </div>
  );
};
export default AttachmentCell;
