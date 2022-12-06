import React from 'react';

export const ThemeContext = React.createContext({
    theme: "",
    setTheme: () => {},
});

export const ThemeProvider = props => {
    const [theme, setTheme] = React.useState('');

    React.useEffect(() => {
        switch (theme) {
            case 'dark':
                document.body.classList.add('dark');
                break;
            default:
                document.body.classList.remove('dark');
                break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, setTheme: theme => setTheme(theme) }}>
            {props.children}
        </ThemeContext.Provider>
    );
}