import Button from "./components/button/button";
import {useState} from "react";
import ModalWindow from "./components/modalWindow/ModalWindow";



function App() {
    const [stateAuthenticationForm, setStateAuthenticationForm] = useState(false)
    console.log('1',stateAuthenticationForm)
    const onClick = () => {
        setStateAuthenticationForm(!stateAuthenticationForm)
    }

  return (
    <>
        <Button onClick={onClick}>Войти</Button>
        {stateAuthenticationForm && (
            <ModalWindow onClick={onClick}/>
        )}
    </>
  )
}

export default App
