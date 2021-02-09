import { createContext } from 'react';

const ModeContext = createContext({ dark: false, toggleDark: () => {} });

export default ModeContext;
