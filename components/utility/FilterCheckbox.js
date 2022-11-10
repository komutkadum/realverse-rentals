function FilterCheckbox() {
  return (
    <>
      <input id="onerk" type="checkbox" className="hidden peer" />
      <label
        htmlFor="onerk"
        className="peer-checked:bg-indigo-600  peer-checked:text-white w-full py-2 px-3 border-b hover:bg-gray-100 cursor-pointer"
      >
        1RK / BHK
      </label>
    </>
  );
}

export default FilterCheckbox;
