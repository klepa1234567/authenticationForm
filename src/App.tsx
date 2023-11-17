import Button from "./components/button/button";
import {useState} from "react";
import ModalWindow from "./components/modalWindow/ModalWindow";
import style from "./app.module.scss"

function App() {
    const [stateAuthenticationForm, setStateAuthenticationForm] = useState(false)
    console.log('1',stateAuthenticationForm)
    const onClick = () => {
        setStateAuthenticationForm(!stateAuthenticationForm)
    }

  return (
    <div className={style.block}>
        <Button onClick={onClick}>Войти</Button>
        {stateAuthenticationForm && (
            <ModalWindow onClick={onClick}/>
        )}
    </div>
  )
}

export default App
