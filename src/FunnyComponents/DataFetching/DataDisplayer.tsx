import React, { useEffect, useState } from "react";

export default function DataDisplayer({ id }: { id: string }) {
  const [data, setData] = useState<any>(null);
  const [fetchedId, setFetchedId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const newData = await response.json();

        setFetchedId(id);
        setData(newData);
      }, Math.round(Math.random() * 12000));
    };

    fetchData();
  }, [id]);

  if (data) {
    return (
      <div>
        <p style={{ color: fetchedId === id ? "green" : "red" }}>
          Displaying Data for: {fetchedId}
        </p>
        <p>{data.name}</p>
      </div>
    );
  } else {
    return null;
  }
}
