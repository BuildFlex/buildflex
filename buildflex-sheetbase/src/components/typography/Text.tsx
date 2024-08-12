import React from 'react';

export type TextVariant =
  | 'B1-Bold'
  | 'B1-Medium'
  | 'B1-Regular'
  | 'B2-Bold'
  | 'B2-SemiBold'
  | 'B2-Medium'
  | 'B2-Regular'
  | 'sub-title'
  | 'B3-Bold'
  | 'B3-Medium'
  | 'B3-Regular'
  | 'B4-Bold'
  | 'B4-Medium'
  | 'Link-Body'
  | 'Link-Subtitle-Large'
  | 'Link-Subtitle-Small'
  | 'sub-title-medium';

type TextTag = 'p' | 'span';

interface TextProps {
  variant: TextVariant;
  children: React.ReactNode;
  className?: string;
  as?: TextTag;
}

const Text: React.FC<TextProps> = ({
  variant,
  children,
  className = '',
  as,
}) => {
  const baseStyle = 'font-lato leading-[130%]';

  const variantStyles: Record<TextVariant, string> = {
    'B1-Bold': 'text-[16px] font-bold',
    'B1-Medium': 'text-[16px] font-medium',
    'B1-Regular': 'text-[16px] font-normal',
    'B2-Bold': 'text-[14px] font-bold',
    'B2-SemiBold': 'text-[14px] font-semibold',
    'B2-Medium': 'text-[14px] font-medium',
    'B2-Regular': 'text-[14px] font-normal',
    'sub-title': 'text-[12px] font-normal',
    'sub-title-medium': 'text-[12px] font-medium',
    'B3-Bold': 'text-[10px] font-bold',
    'B3-Medium': 'text-[10px] font-medium',
    'B3-Regular': 'text-[10px] font-normal',
    'B4-Bold': 'text-[10px] font-bold',
    'B4-Medium': 'text-[10px] font-medium',
    'Link-Body': 'text-[16px] font-medium text-blue-500 underline',
    'Link-Subtitle-Large': 'text-[14px] font-medium text-blue-500 underline',
    'Link-Subtitle-Small': 'text-[12px] font-medium text-blue-500 underline',
  };

  const style = `${baseStyle} ${variantStyles[variant]} ${className}`;

  let Tag: TextTag;
  if (as) {
    Tag = as;
  } else {
    Tag = variant.startsWith('B3') || variant.startsWith('B4') ? 'span' : 'p';
  }

  return <Tag className={style}>{children}</Tag>;
};

export default Text;
