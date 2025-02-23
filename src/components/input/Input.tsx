
import S from './Input.module.css'

type Props = {
    labelname: string
    value: number
    callback: (value: number) => void
    error: boolean
}
export const Input = ({labelname, value, callback, error}: Props) => {
    return (
        <div className={S.inputWrapper}>
            <label htmlFor="input">{labelname}</label>
            <input value={value} type="number" name="input" id="input" className={error ? S.error : ''} onChange={e => callback(+e.target.value)}/>
        </div>
    );
};
