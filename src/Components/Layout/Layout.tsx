import TopBar from "../TopBar/TopBar"
import s from "./Layout.module.css"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className={s.container}>
        <div className={s.topBar}>
            <TopBar />
        </div>
        <div className={s.content}>
            {children}
        </div>
    </div>
  )
}
