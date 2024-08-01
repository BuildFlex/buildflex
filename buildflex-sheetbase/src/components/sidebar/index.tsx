import React, { useState } from 'react';
import { SearchNormal1 } from 'iconsax-react';
import { Input } from 'antd';
import CreateContentPanel from './components/CreateContentPanel';
import ListContentItemsPanel from './components/ListContentItemsPanel';

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={'sidebar max-w-[25rem] p-[1.2rem] flex flex-col box-border'}
    >
      <div className="flex items-center justify-between gap-2 mb-[0.4rem]">
        <div className="relative">
          <Input
            placeholder="Search"
            prefix={<SearchNormal1 size={16} color={'#6A758B'} />}
          />
        </div>
        <button
          className={
            'flex border-none items-center gap-1 text-white text-sm p-1 bg-transparent cursor-pointer rounded-lg'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M5.9875 11.8334C6.15302 11.8343 6.31508 11.786 6.45301 11.6945C6.59095 11.603 6.69851 11.4725 6.76198 11.3196C6.82545 11.1667 6.84196 10.9984 6.8094 10.8361C6.77685 10.6738 6.69669 10.5249 6.57917 10.4084L2.1625 6.00002L6.57917 1.59169C6.71569 1.43227 6.78703 1.22721 6.77893 1.01748C6.77083 0.807748 6.68389 0.608799 6.53547 0.460386C6.38706 0.311974 6.18811 0.225031 5.97838 0.21693C5.76865 0.208829 5.56359 0.280168 5.40417 0.41669L0.40417 5.41669C0.24896 5.57282 0.161843 5.78403 0.161843 6.00419C0.161843 6.22434 0.24896 6.43555 0.40417 6.59169L5.40417 11.5917C5.55939 11.7456 5.76889 11.8324 5.9875 11.8334Z"
              fill="#6A758B"
            />
            <path
              d="M10.9875 11.8334C11.153 11.8344 11.3151 11.786 11.453 11.6945C11.5909 11.603 11.6985 11.4725 11.762 11.3196C11.8255 11.1668 11.842 10.9985 11.8094 10.8362C11.7768 10.6739 11.6967 10.525 11.5792 10.4084L7.1625 6.00007L11.5792 1.59174C11.7361 1.43482 11.8242 1.22199 11.8242 1.00007C11.8242 0.778155 11.7361 0.565326 11.5792 0.408407C11.4223 0.251487 11.2094 0.16333 10.9875 0.16333C10.7656 0.16333 10.5528 0.251487 10.3958 0.408407L5.39584 5.40841C5.24063 5.56454 5.15351 5.77575 5.15351 5.99591C5.15351 6.21606 5.24063 6.42727 5.39584 6.58341L10.3958 11.5834C10.473 11.6621 10.5651 11.7248 10.6666 11.7677C10.7682 11.8106 10.8772 11.8329 10.9875 11.8334Z"
              fill="#6A758B"
            />
          </svg>
        </button>
      </div>
      <ListContentItemsPanel />
      <CreateContentPanel />
    </aside>
  );
}
