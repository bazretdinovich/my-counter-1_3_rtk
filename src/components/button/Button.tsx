
import S from './Button.module.css'

type Props = {
    callback: () => void
    title: string
    disabled?: boolean
}


export const Button = ({callback, title, disabled}: Props) => {



    return (
        <>
            <button disabled={!!disabled} className={S.button} onClick={callback}>{title}</button>
        </>
    );
};