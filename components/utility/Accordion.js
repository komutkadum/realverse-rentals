import React from 'react';

function Accordion({ question = 'hello', answer = 'iam' }) {
  return (
    <details className="open:border open:border-slate-400 open:rounded-md">
      <summary className=" rounded  cursor-pointer flex items-center justify-between w-full p-4 focus:outline-none">
        <p className="text-lg font-medium font-header">{question}</p>
        <div className="flex items-center  justify-center w-8 h-8 border rounded-full">
          <svg viewBox="0 0 24 24" className="w-3 text-gray-600 ">
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            ></polyline>
          </svg>
        </div>
      </summary>
      <div className="p-4 pt-0 font-para text-sm">
        <p className="text-gray-700">{answer}</p>
      </div>
    </details>
  );
}

export default Accordion;
