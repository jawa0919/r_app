import { useState } from "react";

export const UseState01 = () => {
  const [count, setCount] = useState(1);
  const [countObj, setCountObj] = useState({ count: 1 });
  const [countList, setCountList] = useState([1]);
  const [countListObj, setCountListObj] = useState([
    { count: 1 },
    { count: 2 },
    { count: 3 },
    { count: 4 },
  ]);

  function changeNone() {
    // count1 = count1 + 1;
    countObj.count = countObj.count + 1;
    countList[0] = countList[0] + 1;
    countListObj[0].count = countListObj[0].count + 1;
  }

  function change1() {
    setCount((res) => res + 1);
    setCountObj((res) => {
      return { ...res, count: res.count + 1 };
    });
    setCountList((res) => {
      return res.map((r, i) => (i === 0 ? r + 1 : r));
    });
    setCountListObj((res) => {
      return res.map((r, i) => (i === 0 ? { ...r, count: r.count + 1 } : r));
    });
  }
  function change2() {
    setCount(5);
    setCountObj((res) => {
      return { ...res, count: 5 };
    });
    setCountList((res) => {
      return res.map((r, i) => (i === 0 ? 5 : r));
    });
    setCountListObj((res) => {
      return res.map((r, i) => (i === 0 ? { ...r, count: 5 } : r));
    });
  }
  return (
    <>
      <h1>count</h1>
      <div>{count}</div>
      <h1>countObj</h1>
      <div>{countObj.count}</div>
      <h1>countList</h1>
      <div>{countList[0]}</div>
      <h1>countListObj</h1>
      <div>{countListObj[0].count}</div>
      {countListObj.map((r, i) => (
        <div key={i}> {r.count}</div>
      ))}
      <button onClick={changeNone}>修改无刷新</button>
      <button onClick={change1}>修改刷新1</button>
      <button onClick={change2}>修改刷新2</button>
    </>
  );
};
