import React, { useContext, useEffect, useState } from 'react';
import {PiContext} from '../Contexts/PIArray';

const Monitor = () => {
  const { getCurrentPINode } = useContext(PiContext);
  const [selectedPINode, setSelectedPINode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const node = await getCurrentPINode();
    //   console.log("Data fetched, CurrentPI:", node);
      setSelectedPINode(node);
      setLoading(false);
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [getCurrentPINode]);

  useEffect(() => {
    // console.log("Selected PINode updated:", selectedPINode);
  }, [selectedPINode]);

  if (loading || !selectedPINode || !selectedPINode.ipAddress) {
    return <div>Loading...</div>;
  }

  return <div>Selected PINode: {selectedPINode.ipAddress}</div>;
};

export default Monitor;
