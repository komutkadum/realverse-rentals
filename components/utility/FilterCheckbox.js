function FilterCheckbox({
  id,
  text,
  value,
  setValue,
  dbValue,
  updateFilterAndSubmit,
}) {
  const insertItem = (targetValue) => {
    let temp = value;
    if (temp.indexOf(targetValue) < 0) temp.push(targetValue);
    else temp = temp.filter((item) => item !== targetValue);
    setValue([...temp]);
    console.log(value);
    updateFilterAndSubmit();
  };
  return (
    <div className="flex">
      <input
        type="checkbox"
        id={id}
        className="peer hidden"
        value={dbValue}
        checked={value.indexOf(dbValue) >= 0}
        onChange={(e) => insertItem(e.target.value)}
      />
      <label
        htmlFor={id}
        className="peer-checked:bg-indigo-500 peer-active:bg-indigo-400 peer-active:text-white peer-checked:border-white px-4 py-2 border-b border-gray-400 hover:bg-gray-100 cursor-pointer peer-checked:text-white w-full"
      >
        {text}
      </label>
    </div>
  );
}

export default FilterCheckbox;
