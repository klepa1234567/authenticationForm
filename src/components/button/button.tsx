import  style from './index.module.scss';
import {FC, MouseEvent, PropsWithChildren} from 'react';

type ButtonProps = PropsWithChildren<{
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}>;

const Button: FC<ButtonProps> = ({children, onClick}) => {
    return <button onClick={onClick} className={style.button}>{children}</button>
};

export default Button;