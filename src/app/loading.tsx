import React from 'react';

export default function Loading(): React.JSX.Element {
  return (
    <div className="bg-az-black min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-az-green rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-az-green rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-az-green rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}
