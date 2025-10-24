"use client"
import { useState } from 'react';

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + '...';

  return (
    <span> 
      {displayText}{' '}
      <button
        className='inline-flex items-center gap-1 text-accent-400 hover:text-accent-300 font-bold transition-colors duration-300 underline decoration-accent-500/30 underline-offset-4 hover:decoration-accent-400'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <>Show less <span className="text-sm">↑</span></>
        ) : (
          <>Read more <span className="text-sm">→</span></>
        )}
      </button>
    </span>
  );
}

export default TextExpander;
