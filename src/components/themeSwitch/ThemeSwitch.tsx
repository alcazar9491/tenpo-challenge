import { useDispatch, useSelector } from 'react-redux';

import darkIcon from "../../assets/dark.svg"
import ligthIcon from "../../assets/ligth.svg"

import { setTheme } from '../../store/slices/theme/themeSlice';
import { useEffect } from 'react';
import type { RootState } from 'store/store';



interface Itheme {
  dark:string,
  ligth:string
}
const ThemeImage:Itheme = {
  dark:darkIcon,
  ligth:ligthIcon
}


export const ThemeSwitch = () => {


  const dispatch = useDispatch();

  const theme = useSelector((state: RootState) => state.theme);


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')

    }
  }, [theme])
  

 

  return (
    <button
    className='absolute right-0'
    type="button"
    onClick={()=>dispatch(setTheme(theme === 'dark' ? 'ligth' : 'dark'))}
    >
        <img className='w-1/2' src={ theme === 'dark' ? ThemeImage.ligth : ThemeImage.dark} alt="theme-switch" />
    </button>
  )
}
