import React, { useRef } from "react";

const Dropdown = ({ order ,text, addCount }) => {
  const selectRef = useRef(null);

  return (
    <div>
      <h3>{order === 21 ? "お疲れさまでした" : `あと${21 - order}問/全20問`}</h3>
      <p className="mb-5 pt-5 pb-7 text-3xl sm:w-6/12 md:w-9/12 lg:w-1/3 mr-auto ml-auto rounded-lg bg-blue-100 text-gray-700">{text}</p>
      <div className="relative">
        <select
          id="freq"
          className="mb-5"
          onChange={addCount}
        >
          <option value="">以下から選択してください</option>
          <option value="0">滅多にない～全くない（週0-1日）</option>
          <option value="1">いくらか～少しある（週1-2日）</option>
          <option value="2">ときどき～かなりある（週3-4日）</option>
          <option value="3">たいてい～いつもある（週5-7日）</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
