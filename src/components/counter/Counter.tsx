import S from './Counter.module.css'
import {useSelector} from "react-redux";

export const Counter = () => {

    const {count, maxValueGl} = useSelector((state: any) => state.counter);

    return (
        <span className={S.counter} style={count >= maxValueGl ? {color: 'red'} : {color: ''}}>
            {count}
        </span>
    );
};
