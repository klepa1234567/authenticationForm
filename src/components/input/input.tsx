import style from './index.module.scss'
import {FC, ChangeEventHandler} from 'react';

type InputType = {
     type?: 'text' | 'email' | 'password';
     onChange: ChangeEventHandler<HTMLInputElement>;
     value: string;
}

const Input: FC<InputType> = ({type = 'text', onChange, value}) => {
    return <input value={value} onChange={onChange} type={type} className={style.input} />
}

export default Input;