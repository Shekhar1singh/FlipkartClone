import { createContext, useState } from "react";
export const ContextData = createContext({
  isOTPSended: false,
  onOTPSend: () => {},
  onOTPnotSend: () => {},
});

const DataProviderComp = (props) => {
  const [showLoggedIn, setShowLoggedIn] = useState(false);

  const OnSend = () => {
    setShowLoggedIn(true);
  };

  const OnNotSend = () => {
    setShowLoggedIn(false);
  };

  const CreateDataValue = {
    isOTPSended: showLoggedIn,
    onOTPSend: OnSend,
    onOTPnotSend: OnNotSend,
  };

  return (
    <ContextData.Provider value={CreateDataValue}>
      {props.children}
    </ContextData.Provider>
  );
};
export default DataProviderComp;
