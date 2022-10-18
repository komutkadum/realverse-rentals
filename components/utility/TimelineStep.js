import React, { useEffect, useState } from 'react';

const stateStyle = [
  // complete
  ['bg-indigo-400  text-white', ''],
  // current
  [
    'bg-white text-indigo-400 border-2 font-semibold border-indigo-400',
    'text-indigo-400',
  ],
  // pending
  [
    'bg-white  font-semibold text-gray-500 border-2 border-gray-400',
    'text-gray-500',
  ],
];
function TimelineStep({ currentStepIndex }) {
  const [timelineStep, setTimelineStep] = useState([
    {
      id: 1,
      text: 'Basic Details',
      state: 'pending',
    },
    {
      id: 2,
      text: 'Address Details',
      state: 'pending',
    },
    {
      id: 3,
      text: 'Photos',
      state: 'pending',
    },
    {
      id: 4,
      text: 'Property Details',
      state: 'pending',
    },
    {
      id: 5,
      text: 'Amenities',
      state: 'pending',
    },
  ]);
  useEffect(() => {
    stateChangeFunction();
  }, [currentStepIndex]);

  function stateChangeFunction() {
    let temp = timelineStep;
    temp = temp.map((item) => {
      let tempState = '';
      if (item.id < currentStepIndex + 1) {
        tempState = 'complete';
      }
      if (item.id === currentStepIndex + 1) {
        tempState = 'current';
      }
      if (item.id > currentStepIndex + 1) {
        tempState = 'pending';
      }
      return { id: item.id, text: item.text, state: tempState };
    });
    setTimelineStep([...temp]);
  }
  function detectStateChange(state) {
    switch (state) {
      case 'current':
        return { first: stateStyle[1][0], second: stateStyle[1][1] };
      case 'complete':
        return { first: stateStyle[0][0], second: stateStyle[0][1] };
      case 'pending':
        return { first: stateStyle[2][0], second: stateStyle[2][1] };
    }
  }

  return (
    <ol className="relative border-l-4 border-indigo-200 ">
      {timelineStep.map((item, index) => (
        <li className="mb-20 ml-6 " key={item.id}>
          <span
            className={`grid absolute font-semibold -left-5  place-items-center rounded-full w-10 h-10 ${
              detectStateChange(item.state).first
            }`}
          >
            {item.state === 'complete' ? (
              <i className="fa-solid fa-check"></i>
            ) : (
              <>0{index + 1}</>
            )}
          </span>
          <h3
            className={`flex items-center pt-1.5 text-lg font-semibold ${
              detectStateChange(item.state).second
            }`}
          >
            {item.text}
          </h3>
        </li>
      ))}
    </ol>
  );
}

export default TimelineStep;
