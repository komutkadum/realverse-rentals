function CustomInput() {
  return (
    <>
      <div className="px-4">
        <div className="">
          <input
            type="text"
            name=""
            required
            className="
         focus:ring-0 focus:outline-none focus-within:outline-none px-0 focus:border-b-white
        relative w-full border-b-white bg-transparent outline-none border-0 peer border-b border-transparent text-white mb-8"
          />
          <label
            className="relative  left-0 -top-16 py-2.5 text-white pointer-events-none duration-500 
       peer-focus:-top-24 peer-focus:left-0 peer-focus:text-blue-400 peer-focus:text-xs peer-valid:-top-24 peer-valid:left-0 peer-valid:text-blue-400 peer-valid:text-xs"
          >
            phone number
          </label>
        </div>
      </div>
    </>
  );
}

export default CustomInput;
