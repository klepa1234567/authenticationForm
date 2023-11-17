import style from './index.module.scss';
import crossImg from './cross.svg'
import {ChangeEventHandler, FC, MouseEvent, useState} from 'react'
import Input from "../input/input";
import Button from "../button/button";

type ModalWindowProps = {
    onClick: (event: MouseEvent<HTMLElement>) => void;
}

type MackData = {
    name?: string;
    age?: number;
}



const ModalWindow: FC<ModalWindowProps> = ({onClick}) => {


    const [meaningInputText, setMeaningInputText] = useState('');
    const [meaningInputPassword, setMeaningInputPassword] = useState('')
    const [dataCatcn, setDataCatcn] = useState<MackData>({})

    console.log('meaningInputText',meaningInputText);
    console.log('meaningInputPassword',meaningInputPassword)

    const onchangeText: ChangeEventHandler<HTMLInputElement> = (e) => {
        setMeaningInputText(e.target.value)
    }

    const onchangePassword: ChangeEventHandler<HTMLInputElement> = (e) => {
        setMeaningInputPassword(e.target.value)
    }

    const sendForm = () => {
        fetch('google.com', {
            method: 'POST',
            body: JSON.stringify({
                login: meaningInputText,
                password: meaningInputPassword
            })
        })
            .then((response) => response.json()) // Сюда не попадем, тк мы отправляем POST запрос к google.com
            .catch(() => {
                const mackData = {
                    name: "Alex",
                    age: 20
                };
                setDataCatcn(mackData )


            });

        setMeaningInputText('');
        setMeaningInputPassword('');
    }

    return(
        <div className={style.block}>
            <div className={style.informationBlock}>
                <button className={style.buttonCross} onClick={onClick}>
                    <img src={crossImg} width="30" height="30" />
                </button>
               <div className={style.form}>
                   {Object.keys(dataCatcn).length !== 0? <p>Hello, {dataCatcn.name}</p>
                       :<>
                           <Input placeholder="Email" value={meaningInputText} onChange={onchangeText} type="email" />
                           <Input placeholder="Password"  value={meaningInputPassword} onChange={onchangePassword} type="password" />
                           <Button onClick={sendForm}>Войти</Button>
                       </>}
                </div>
            </div>
            <div onClick={onClick} className={style.blockBackground} />
        </div>
    )
}

export default ModalWindow;