// ** React Imports
import { useState, createContext } from "react";

// ** Intl Provider Import
import { IntlProvider } from "react-intl";

// ** User Language Data
// import userMessagesEn from "src/assets/locales/en.json";
import userMessagesVi from "../assets/locales/vi";
// import { Storage, STORAGE_KEYS } from "@utility/storage";
// import { updateDeviceTokenAPI } from "@api/main";

// ** Menu msg obj
const menuMessages = {
  vi: { ...userMessagesVi },
};

// ** Create Context
const Context = createContext();

const IntlProviderWrapper = ({ children }) => {
  const initLang = localStorage.getItem("language") || "vi";
  // ** States
  const [locale, setLocale] = useState(initLang);
  const [messages, setMessages] = useState(menuMessages[initLang]);

  // ** Switches Language
  const switchLanguage = (language) => {
    setLocale(language);
    setMessages(menuMessages[language]);
    localStorage.setItem("language", language);
  };

  return (
    <Context.Provider value={{ locale, switchLanguage }}>
      <IntlProvider
        key={locale}
        locale={locale}
        messages={messages}
        defaultLocale="vi"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export { IntlProviderWrapper, Context as IntlContext };
