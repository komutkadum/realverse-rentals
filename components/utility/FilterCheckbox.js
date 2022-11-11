function FilterCheckbox({ id, text }) {
  return (
    <div className="flex">
      <input type="checkbox" id={id} className="peer hidden" />
      <label
        htmlFor={id}
        className="peer-checked:bg-gray-500 peer-active:bg-gray-400 peer-active:text-white peer-checked:border-white px-4 py-2 border-b border-gray-400 hover:bg-gray-100 cursor-pointer peer-checked:text-white w-full"
      >
        {text}
      </label>
    </div>
  );
}

export default FilterCheckbox;
