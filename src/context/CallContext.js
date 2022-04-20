import React, {
  useContext,
  createContext,
  useState,
  useRef,
  useEffect,
} from "react";
import fetchInstance from "../services/fetchInstance";

const CallContext = createContext();

export function useData() {
  return useContext(CallContext);
}

export function CallProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (mounted) {
      getCalls();
    }
    return () => {
      mounted.current = false;
    };
  }, []);

  let getCalls = async () => {
    setLoading(true);
    let { data } = await fetchInstance("/calls");
    let { nodes } = data;
    setData(nodes);
    setLoading(false);
  };

  let call = { data, setData, loading };

  return <CallContext.Provider value={call}>{children}</CallContext.Provider>;
}
