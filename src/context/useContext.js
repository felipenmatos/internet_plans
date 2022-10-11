import { useState } from "react";

export function UserContext() {
  const [dataList, setDataList] = useState([]);

  return {
    dataList,
    setDataList,
  };
}
