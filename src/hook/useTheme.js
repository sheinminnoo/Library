import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

export default function useTheme() {
    let contexts = useContext(ThemeContext);
    if(contexts === undefined) {
        new Error('theme context should be only used in ThemeContextProvider')
    }
    return  contexts;// {theme : 'dark'}
}