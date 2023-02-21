import React, { useEffect, useMemo, useState } from "react";

export default function InfinityLoopUseEffect() {
  const [state, set] = useState(1);
  const option = useMemo(() => {
    return {
      id: state,
    };
  }, [state]);

  const handleChange = () => {
    console.log("sdfsdf");
  };
  useFetch(option);

  return <div>InfinityLoopUseEffect</div>;
}

const useFetch = (filterData: any) => {
  const [_, setData] = useState<{ amount: number }>({ amount: 1 });

  useEffect(() => {
    if (filterData) {
      console.log("call api with filterData");
      setData({ amount: Math.random() * 100 });
    }
  }, [filterData]);
};
