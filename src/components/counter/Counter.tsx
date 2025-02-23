import S from './Counter.module.css'

type Props = {
    count: number
    maxValue: number
}
export const Counter = ({count, maxValue}: Props) => {
    return (
        <span className={S.counter} style={count >= maxValue ? {color: 'red'} : {color: ''}}>
            {count}
        </span>
    );
};
