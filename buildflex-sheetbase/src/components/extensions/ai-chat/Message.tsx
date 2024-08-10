import { cn } from '@/utils/cn';
import React from 'react';
interface MessageProps {
  type: 'user' | 'ai';
  children: React.ReactNode;
}
const Message = ({ type, children }: MessageProps) => {
  return (
    <div
      className={cn(
        'p-3 flex flex-col gap-3 text-xs leading-[15.6px] rounded-lg ',
        {
          ' ml-auto bg-[#E0F2FE] max-w-[220px]': type === 'user',
          ' bg-white': type === 'ai',
        },
      )}
    >
      {children}
    </div>
  );
};

export default Message;
