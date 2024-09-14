import { Chat1 } from '@/components/icons';
import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { Add } from 'iconsax-react';
import React from 'react';

const RecommendContent = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Start from scratch */}
      <button className="flex flex-col gap-1 items-center justify-center border border-borderColor rounded-lg h-[254px] w-[254px]">
        <Add size={40} className="mb-5" />
        <Text as="span" variant="B2-Medium" className="text-neutral-dark-500">
          Start from scratch
        </Text>
        <Text
          as="span"
          variant="sub-title"
          className="max-w-[211px] text-neutral-dark-400"
        >
          Create a new black base with custom tables, fields, and view{' '}
        </Text>
      </button>
      {/* Start from AI */}
      <button
        className={cn(
          'relative flex bg-gradient-royal-purple flex-col gap-1 items-center justify-center rounded-lg h-[254px] w-[255px]',
          "before:content-[''] before:size-[200px] before:rounded-full before:bg-white/10 before:absolute before:-top-[100px] before:-right-[100px]  ",
          "after:content-[''] after:size-[240px] after:rounded-full after:bg-white/10 after:absolute after:top-[130px] after:-left-[100px]  ",
        )}
      >
        <Chat1 size={40} className="mb-5" />
        <Text as="span" variant="B2-Medium" className="text-white">
          Start from AI
        </Text>
        <Text
          as="span"
          variant="sub-title"
          className="max-w-[211px] text-white"
        >
          Turn your process into an app with date and interfaces using AI{' '}
        </Text>
      </button>
      {/* Themes */}
      {Array.from({ length: 10 }).map((_, index) => (
        <button
          className={cn(
            ' flex white border relative border-borderColor flex-col gap-1 items-center justify-center rounded-lg size-[255px] overflow-hidden',
          )}
        >
          <img
            src={`/sheetbase-image/sheetbase${index + 1}.png`}
            alt="sheetbase1"
            className=" relative z-[1] w-[255px] h-[160px] shadow-[0px_0px_4px_0px_#6840C429]"
          />
          <div className="p-3 gap-1 z-[1] relative bg-white flex items-start flex-col">
            <Text
              as="span"
              variant="B2-Medium"
              className="h-[18px]  text-neutral-dark-500"
            >
              Text Title
            </Text>
            <Text
              as="span"
              variant="sub-title"
              className=" text-neutral-dark-400 text-start line-clamp-3"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
        </button>
      ))}
    </div>
  );
};

export default RecommendContent;
