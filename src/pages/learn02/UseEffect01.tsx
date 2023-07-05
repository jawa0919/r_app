import { useEffect, useState } from "react";

export const UseEffect01 = () => {
  const [count, setCount] = useState(1);
  const [countObj, setCountObj] = useState({ count: 1 });
  const [countList, setCountList] = useState([1]);
  const [countListObj, setCountListObj] = useState([{ count: 1 }]);

  useEffect(() => {
    console.log("useEffect");
  });

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
    </>
  );
};
