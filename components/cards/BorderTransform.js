function BorderTransform({ size = 100, width, color }) {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 duration-300 origin-left transform scale-x-0 ${color} group-hover:scale-x-${size}`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-0.5 h-full duration-300 origin-bottom transform scale-y-0 ${color} group-hover:scale-y-${size}`}
      ></div>
      <div
        className={`absolute top-0 left-0 w-full h-0.5 duration-300 origin-right transform scale-x-0 ${color} group-hover:scale-x-${size}`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-0.5 h-full duration-300 origin-top transform scale-y-0 ${color} group-hover:scale-y-${size}`}
      ></div>
    </>
  );
}

export default BorderTransform;
