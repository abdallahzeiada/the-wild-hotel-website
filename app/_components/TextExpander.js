"use client"
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span className="inline"> 
      <span className={`transition-all duration-300 ${isExpanded ? 'inline' : 'inline'}`}>
        {displayText}
      </span>{' '}
      <button
        className="group inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-300 font-semibold transition-all duration-300 underline decoration-accent-500/30 underline-offset-4 hover:decoration-accent-400 hover:gap-2"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUpIcon className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </>
        ) : (
          <>
            <span>Read more</span>
            <ChevronDownIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
          </>
        )}
      </button>
    </span>
  );
}

export default TextExpander;
