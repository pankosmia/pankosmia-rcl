import React, { useRef } from "react";
import { i18nContext as I18nContext, debugContext as DebugContext } from "pithekos-lib"
import i18nData from "./i18n";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
  decorators: [
    (Story) => {
      const i18nRef = useRef(i18nData);
      return (
        <I18nContext.Provider
          value={{
            i18nRef,
          }}
        >
          <DebugContext.Provider
            value={{ debugRef: { current: { debug: true } } }}
          >
            <Story />
          </DebugContext.Provider>
        </I18nContext.Provider>
      )
    },
  ],
};

export default preview;