import { IoIosColorPalette } from "react-icons/io";
import { useTheme } from './ThemeContext'; 

import css from './ThemeContext.module.css';

export default function ThemeContext() {
  const { isClicked } = useTheme();

  return (
    <button className={isClicked ? css.clicked : css.button}>
<IoIosColorPalette />
</button>
  );
}