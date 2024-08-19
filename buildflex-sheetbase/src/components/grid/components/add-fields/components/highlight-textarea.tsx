import React, { useEffect, useRef, useState } from 'react';
import './highlight-textarea.css';
import { Example } from './expample';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface HighlightTextareaProps {
  keywords: string[];
  initialValue?: string;
}

const HighlightTextarea = ({
  keywords,
  initialValue,
}: HighlightTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightingRef = useRef<HTMLPreElement>(null);
  const highlightingContentRef = useRef<HTMLElement>(null);
  const [isExampleShow, setIsExampleShow] = useState<boolean>(false);
  const ref = useOutsideClick(() => {
    console.log('isExampleShow', isExampleShow);
    isExampleShow && setIsExampleShow(false);
  });

  const update = (text: string) => {
    const resultElement = highlightingContentRef.current;
    if (resultElement) {
      // Handle final newlines
      if (text[text.length - 1] === '\n') {
        text += ' ';
      }
      // Escape HTML
      text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;');

      // Highlight keywords
      keywords.forEach((keyword) => {
        const regex = new RegExp(`\\${keyword}`, 'g');
        text = text.replace(
          regex,
          `<span class="text-success-600">${keyword}</span>`,
        );
      });

      // Update code
      resultElement.innerHTML = text;
    }
  };
  useEffect(() => {
    initialValue && update(initialValue);
  }, []);
  const syncScroll = () => {
    const textarea = textareaRef.current;
    const highlighting = highlightingRef.current;
    if (textarea && highlighting) {
      highlighting.scrollTop = textarea.scrollTop;
      highlighting.scrollLeft = textarea.scrollLeft;
    }
  };

  const checkTab = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea && event.key === 'Tab') {
      event.preventDefault();
      const code = textarea.value;
      const beforeTab = code.slice(0, textarea.selectionStart);
      const afterTab = code.slice(textarea.selectionEnd);
      const cursorPos = textarea.selectionStart + 1;
      textarea.value = beforeTab + '\t' + afterTab;
      textarea.selectionStart = cursorPos;
      textarea.selectionEnd = cursorPos;
      update(textarea.value);
    }
  };

  return (
    <div ref={ref} style={{ height: '140px', position: 'relative' }}>
      <textarea
        placeholder="Enter HTML Source Code"
        id="editing"
        spellCheck="false"
        defaultValue={initialValue}
        ref={textareaRef}
        onInput={(e) => update(e.currentTarget.value)}
        onFocusCapture={() => setIsExampleShow(true)}
        onScroll={syncScroll}
        onKeyDown={checkTab}
      />
      <pre id="highlighting" aria-hidden="true" ref={highlightingRef}>
        <code
          className="language-html"
          id="highlighting-content"
          ref={highlightingContentRef}
        >
          {initialValue}
        </code>
      </pre>
      {isExampleShow && (
        <div className="absolute bottom-[110%] left-0 z-[10]">
          <Example className="" textClassName="text-success-600" />
        </div>
      )}
    </div>
  );
};

export default HighlightTextarea;
