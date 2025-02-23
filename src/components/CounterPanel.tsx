import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Counter} from "./counter/Counter.tsx";
import {Button} from "./button/Button.tsx";

type Props = {
    count: number,
    inc: () => void,
    reset: () => void,
    goToSettings: () => void
    maxValueGl: number
}

export const CounterPanel = ({count, inc, reset, goToSettings, maxValueGl}: Props) => {
    return (
        <>
            <Wrapper className='display'>
                <Counter count={count} maxValue={maxValueGl}/>
            </Wrapper>
            <Wrapper className='button'>
                <Button callback={inc} title='inc' disabled={count >= maxValueGl}/>
                <Button callback={reset} title='reset'/>
                <Button callback={goToSettings} title='set'/>
            </Wrapper>
        </>
    );
};
