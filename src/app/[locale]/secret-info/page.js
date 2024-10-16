import React from 'react';
import { Header } from '@/components/Header';

function SecretInfo() {
  return (
    <div className="w-full h-full">
      <div className="w-full  relative">
        <iframe
          allowfullscreen="allowfullscreen"
          scrolling="no"
          className="fp-iframe object-contain"
          src="https://heyzine.com/flip-book/a4d70474a9.html"
          style={{ border: '1px solid lightgray', width: '100%', height: '100vh' }}></iframe>
      </div>
    </div>
  );
}

export default SecretInfo;
