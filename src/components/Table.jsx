import React from "react";

const Table = ({ score, scoreStyles }) => {
  return (
    <div>
      <p className="mb-10 bg-white text-3xl w-32 mr-auto ml-auto rounded-md">{score}</p>
      <table className="mr-auto ml-auto text-2xl border-spacing-2 border-separate">
        <tr>
          <th className="bg-gray-400 text-white">点数</th>
          <th className="bg-gray-400 text-white">症状</th>
        </tr>
        <tr>
          <td>0-14点</td>
          <td style={scoreStyles.style04}>正常</td>
        </tr>
        <tr>
          <td>15-29点</td>
          <td style={scoreStyles.style03}>軽度うつ</td>
        </tr>
        <tr>
          <td>30-44点</td>
          <td style={scoreStyles.style02}>中程度うつ</td>
        </tr>
        <tr>
          <td>45-60点</td>
          <td style={scoreStyles.style01}>重度うつ</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
