import Text from '@/components/typography/Text';
import { cn } from '@/utils/cn';
import { ArrowRight2 } from 'iconsax-react';
import React, { useState } from 'react';

const CategoryFooter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    let pages = [];

    if (currentPage <= 3) {
      pages = [1, 2, 3, '...', totalPage];
    } else if (currentPage >= totalPage - 2) {
      pages = [1, '...', totalPage - 2, totalPage - 1, totalPage];
    } else {
      pages = [1, '...', currentPage, '...', totalPage];
    }

    return pages.map((page, index) => {
      if (typeof page === 'number') {
        return (
          <button
            key={`${page}-${index}`}
            className={cn(
              'size-8 rounded-md flex items-center justify-center',
              page === currentPage
                ? 'bg-brand-PRIMARY text-white'
                : ' text-neutral-dark-400 ',
            )}
            onClick={() => handlePageClick(page)}
          >
            <Text as="span" variant="B2-Regular" className="h-[18px]">
              {page}
            </Text>
          </button>
        );
      } else {
        return (
          <div
            key={`${page}-${index}`}
            className="size-8 flex items-center justify-center"
          >
            <Text
              as="span"
              variant="B2-Regular"
              className="h-[18px] text-gray-500"
            >
              {page}
            </Text>
          </div>
        );
      }
    });
  };

  return (
    <div className="h-8 w-full mt-auto flex items-center justify-center gap-2">
      <button
        className="size-8 flex items-center justify-center"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        <ArrowRight2 size={16} className="text-neutral-dark-300  rotate-180" />
      </button>
      {renderPageNumbers()}
      <button
        className="size-8 flex items-center justify-center"
        onClick={handleNextClick}
        disabled={currentPage === totalPage}
      >
        <ArrowRight2 size={16} className="text-neutral-dark-300" />
      </button>
    </div>
  );
};
export default CategoryFooter;
