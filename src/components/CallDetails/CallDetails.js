import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useData } from "../../context/CallContext";

import Details from "./Details";

const CallDetails = ({ data }) => {
  const { loading } = useData();
  const [details, setDetails] = useState(false);
  const [node, setNode] = useState([]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  function handler(node1) {
    setNode(node1);
    setDetails(true);
    if (details) {
      setDetails(false);
    }
  }

  return (
    <div className="container mt-3  col-sm-6">
      <ul className="list-group mb-4">
        {data.map((node1, index) => (
          <Button
            className="list-group-item"
            onClick={() => handler(node1)}
            style={{ marginRight: "1rem", marginTop: "1rem" }}
            key={node1.id}
          >
            Call Id. <strong>{node1.id}</strong>
          </Button>
        ))}
      </ul>
      {details && <Details node={node} />}
    </div>
  );
};

export default CallDetails;
