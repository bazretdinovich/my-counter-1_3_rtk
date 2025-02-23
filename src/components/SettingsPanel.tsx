import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Button} from "./button/Button.tsx";
import {Input} from "./input/Input.tsx";
import {useState} from "react";
import {setValuesAC} from "../store/counterReducer.ts";
import {useAppDispatch} from "../store/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";


export const SettingsPanel = () => {

    const { maxValueGl, startValueGl } = useSelector((state: RootState) => state.counter);
    const dispatch = useAppDispatch()


    const [maxValue, setMaxValue] = useState<number>(maxValueGl)
    const [startValue, setStartValue] = useState<number>(startValueGl)

    const errorMaxValueLabel = maxValue <= startValue || maxValue < 0
    const errorStartValueLabel = startValue >= maxValue || startValue < 0
    const ButtonErr = errorMaxValueLabel || errorStartValueLabel

    const setValueHandler = () => {
        if (!errorMaxValueLabel && !errorStartValueLabel) {
            dispatch(setValuesAC({startValue: startValue, maxValue: maxValue}))
        }

    }

    const setMaxValueHandler = (value: number) => {
        setMaxValue(value)
    }

    const setStartValueHandler = (value: number) => {
        setStartValue(value)
    }

    return (
        <>
            <Wrapper className='display'>
                <Input value={maxValue} labelname='max value:' callback={setMaxValueHandler} error={errorMaxValueLabel}/>
                <Input value={startValue} labelname='start value:' callback={setStartValueHandler} error={errorStartValueLabel}/>
            </Wrapper>
            <Wrapper className='button'>
                <Button callback={setValueHandler} title='set' disabled={ButtonErr}/>
            </Wrapper>

        </>
    );
};
