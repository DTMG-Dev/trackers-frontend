import { useEffect, useState } from "react";
import { getTrackers } from "../api/api";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTrackers().then(setData);
  }, []);

  return (
    <div>
      <h1>Trackers</h1>
      {data.map(item => (
        <p key={item._id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Home;
