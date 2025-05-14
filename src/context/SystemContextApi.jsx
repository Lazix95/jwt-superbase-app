import {createContext, useContext, useMemo, useRef, useState} from 'react';

const SystemContext = createContext({});

export function useSystemContext() {
  return useContext(SystemContext);
}

export function SystemContextProvider({children}) {
  const timeout = useRef(null);
  const [token, setToken] = useState(null);
  const [tokenSavedAt, setTokenSavedAt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    timeout,
    token,
    setToken,
    tokenSavedAt,
    setTokenSavedAt,
    isLoading,
    setIsLoading,
  };

  return <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
}
