import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timer = setTimeout(() => {
      setText(prev => {
        if (isDeleting) {
          // Deleting text
          if (prev.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
            return '';
          }
          return prev.slice(0, -1);
        } else {
          // Typing text
          if (prev.length === currentWord.length) {
            setTimeout(() => setIsDeleting(true), delayBetweenWords);
            return prev;
          }
          return currentWord.slice(0, prev.length + 1);
        }
      });
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return <span className="text-[#915EFF]">{text}</span>;
};