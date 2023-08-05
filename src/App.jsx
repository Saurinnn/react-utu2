import React from "react";
import { useEffect, useState } from "react";
import './index.css';
import background from "./img/candy201701.jpg";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import Table from "./components/Table";


export const App = () =>{
  const [num,setNum] = useState(0);
  const [count,setCount] = useState([]);

    let order = 0;
    let text ="";
    const message = [
    "Q1.普段は何でもないことが煩わしいと思う",
    "Q2.食べたくない、食欲が落ちたと思う",
    "Q3.家族や友達から励まされても気が晴れない",
    "Q4.他人ほどには能力がないと思う",
    "Q5.物事に集中できない",
    "Q6.ゆううつだと感じる",
    "Q7.何をするのも面倒だと感じる",
    "Q8.これからのことを積極的に考えられない",
    "Q9.過去のことについてくよくよ考える",
    "Q10.何か恐ろしい気持ちがする",
    "Q11.なかなか眠れない",
    "Q12.生活について不満だ",
    "Q13.普段より口数が少ない",
    "Q14.ひとりぼっちで寂しい",
    "Q15.みながよそよそしいと感じる",
    "Q16.毎日が楽しいと感じられない",
    "Q17.急に泣き出したくなる",
    "Q18.悲しいと感じる",
    "Q19.みなが自分を嫌っていると感じる",
    "Q20.仕事や勉強が手につかない",
    ];

    const addNum = () =>{
      if(num === 19){
        return;
      };
      setNum(num + 1);
      document.getElementById("freq").selectedIndex = 0;
    };

    const decreaseNum = () =>{
      if(num === 0){
        return;
      };
      
      if(num === count.length){
        count.splice(num-1,1);
      }
      
      setNum(num - 1);
    };
    
    order = num + 1;
    text = message[num];
    
    const addCount = (e) =>{
      const selectedValue= Number(e.target.value);
      if(num === 19){
        return;
      }
      setCount([
        ...count,
          selectedValue,
      ]);
      addNum();
      };

      useEffect(()=>{console.log("now count",count)},[count]);

      let score = count.reduce(function(sum, element){
        return sum + element;
      }, 0);
      
      const reset = () =>{
        setCount([]);
        setNum(0);
      }

      const scoreStyles = {
          style01: { backgroundColor: score >= 45 ? "red" : "" },
          style02: { backgroundColor: score >= 30 && score < 45 ? "pink" : "" },
          style03: { backgroundColor: score >= 15 && score < 30 ? "yellow" : "" },
          style04: { backgroundColor: score < 15 ? "white" : "" },
        };
        
  return(
    <>
    <h1 class="text-3xl font-bold pt-7 pb-7 bg-gray-400 text-white">　うつ病セルフチェック</h1>
    <div class="bg-cover bg-center text-center h-screen" style={{ backgroundImage:`url(${background})`}}>
    <div class="pt-7"></div>
    <Dropdown text={text} order={order} addCount={addCount} />
    <div class="mb-10">
  <Button text="戻る" onClick={decreaseNum} />
  <Button text="次へ" onClick={addNum} />
  <Button text="リセット" onClick={reset} />
</div>
<Table score={score} scoreStyles={scoreStyles} />
    </div>
    </>
  );
};