import React from 'react';
import clsx from 'clsx';

let btnPrimary = true;
let btnSecondary = false;
let btnTertiary = false;
let btnDestruction = false;
let btnLarge = true;
let btnMedium = true;
let btnSmall = true;
let btnExtraSmall = true;

const btnClass = clsx(
  '',
  btnPrimary && 'bg-primary-600 hover:bg-primary-300',
  btnSecondary && 'bg-primary-100',
  btnTertiary && 'bg-primary-TERTIARY',
  btnDestruction && 'bg-danger-400',
  'border-none',
  'text-white font-semibold',
  'hover:bg-primary-300',
  'cursor-pointer',
  'rounded-lg justify-center items-center gap-2 inline-flex',
  btnLarge && 'h-12 text-base py-3 px-6',
  btnMedium && 'h-10 text-base',
  btnSmall && 'h-9 text-sm',
  btnExtraSmall && 'h-7 text-sm',
);

export default function Button() {
  return <button className={btnClass}>Test Button</button>;
}
