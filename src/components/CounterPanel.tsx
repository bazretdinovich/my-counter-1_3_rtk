import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Counter} from "./counter/Counter.tsx";
import {Button} from "./button/Button.tsx";
import { useSelector} from "react-redux";
import { RootState} from "../store/store.ts";
import {incrementAC, resetAC, toggleSettingsAC} from "../store/counterReducer.ts";
import {useAppDispatch} from "../store/useAppDispatch.ts";


export const CounterPanel = () => {

    const { count, maxValueGl } = useSelector((state: RootState) => state.counter);
    const dispatch = useAppDispatch()

    function inc ()  {
        dispatch(incrementAC())
    }

    function resetCounter ()  {
        dispatch(resetAC())
    }

    function goToSettings ()  {
        dispatch(toggleSettingsAC())
    }

    return (
        <>
            <Wrapper className='display'>
                <Counter/>
            </Wrapper>
            <Wrapper className='button'>
                <Button callback={inc} title='inc' disabled={count >= maxValueGl}/>
                <Button callback={resetCounter} title='reset'/>
                <Button callback={goToSettings} title='set'/>
            </Wrapper>
        </>
    );
};
