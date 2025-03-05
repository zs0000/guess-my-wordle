import s from "./TopBar.module.css"
import { useThemeContext } from "../../Context/ThemeContext"
export default function TopBar() {

  const {toggleTheme, themeColors} = useThemeContext();
  return (
    <div className={`${s.container} ${themeColors.primaryText}`}>
        <span className={s.text}>
            GuessMyWordle!
        </span>
        <div>
          <button className={themeColors.primaryButton} onClick={toggleTheme}>
             Toggle Theme
          </button>
        </div>
    </div>
  )
}
