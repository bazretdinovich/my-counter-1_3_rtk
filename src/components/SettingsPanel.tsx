import {Wrapper} from "./wrapper/Wrapper.tsx";
import {Button} from "./button/Button.tsx";
import {Input} from "./input/Input.tsx";
import {useState} from "react";

type Props = {
    set: (maxValue: number, startValue: number) => void
    maxValueGl: number
    startValueGl: number
}
export const SettingsPanel = ({set, maxValueGl, startValueGl}: Props) => {


    const [maxValue, setMaxValue] = useState(maxValueGl)
    const [startValue, setStartValue] = useState(startValueGl)

    const errorMaxValueLabel = maxValue <= startValue || maxValue < 0
    const errorStartValueLabel = startValue >= maxValue || startValue < 0
    const ButtonErr = errorMaxValueLabel || errorStartValueLabel

    const setValueHandler = () => {
        if (!errorMaxValueLabel && !errorStartValueLabel) {
            set(maxValue, startValue)
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
