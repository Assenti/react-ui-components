import React from "react";

// export const themes = {
//     light: {
//         foreground: '#4d4d4d',
//         background: '#f0f2f5',
//     },
//     dark: {
//         foreground: '#ffffff',
//         background: '#303846',
//     }
// };

const dark = false;

export const ThemeContext = React.createContext(
    dark// default value
);
