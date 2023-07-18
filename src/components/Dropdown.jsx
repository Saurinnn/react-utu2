import React from "react";

const Dropdown = ({ text, addCount }) => {
  return (
    <div>
      <p className="pt-5 pb-7 text-3xl sm:w-6/12 md:w-9/12 lg:w-1/3 mr-auto ml-auto rounded-lg bg-blue-100 text-gray-700">{text}</p>
      <select className="mt-7 mb-7 h-10 w-80" id="freq" onChange={addCount}>
        <option value="" selected>以下から選択してください</option>
        <option value="0">滅多にない～全くない（週0-1日）</option>
        <option value="1">いくらか～少しある（週1-2日）</option>
        <option value="2">ときどき～かなりある（週3-4日）</option>
        <option value="3">たいてい～いつもある（週5-7日）</option>
      </select>
    </div>
  );
};

export default Dropdown;
