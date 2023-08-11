import React, { useRef } from "react";

const Dropdown = ({ order ,text, addCount }) => {
  const selectRef = useRef(null);

  const handleSelectClick = () => {
    selectRef.current.focus();
  };

  return (
    <div>
      <h3>あと{20-order}問/全20問</h3>
      <p className="pt-5 pb-7 text-3xl sm:w-6/12 md:w-9/12 lg:w-1/3 mr-auto ml-auto rounded-lg bg-blue-100 text-gray-700">{text}</p>
      <div className="relative">
        <select
          ref={selectRef}
          className="mt-7 mb-7 h-10 w-80 dropdown-select"
          id="freq"
          onChange={addCount}
        >
          <option value="">以下から選択してください</option>
          <option value="0">滅多にない～全くない（週0-1日）</option>
          <option value="1">いくらか～少しある（週1-2日）</option>
          <option value="2">ときどき～かなりある（週3-4日）</option>
          <option value="3">たいてい～いつもある（週5-7日）</option>
        </select>
        <div
          className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
          onClick={handleSelectClick}
        >
          <svg
            className="w-5 h-5 text-gray-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
