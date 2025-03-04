import s from "./TopBar.module.css"
export default function TopBar() {
  return (
    <div className={s.container}>
        <span className={s.text}>
            TheBarText
        </span>
        <div className={s.links}>
            <a className={s.link} href="#">Link1</a>
            <a className={s.link} href="#">Link2</a>
            <a className={s.link} href="#">Link3</a>
        </div>
    </div>
  )
}
