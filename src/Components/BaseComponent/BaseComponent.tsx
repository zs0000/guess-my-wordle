import { useUserContext } from "../../Context/UserContext";
import s from "./BaseComponent.module.css"  

export default function BaseComponent() {
    const {username, setUsername} = useUserContext();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
  return (
    <div className={s.container}>
        <span className={s.username}>
            {username}
        </span>
        <input type="text" className={s.input} value={username} onChange={handleChange} />
    </div>
  )
}
