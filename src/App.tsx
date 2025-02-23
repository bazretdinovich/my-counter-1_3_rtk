import './App.css'
import {Wrapper} from "./components/wrapper/Wrapper.tsx";
import {useEffect, useState} from "react";
import {CounterPanel} from "./components/CounterPanel.tsx";
import {SettingsPanel} from "./components/SettingsPanel.tsx";


function App() {

    useEffect(() => {

    }, []);

    const [count, setCount] = useState<number>(0)

    const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

    const [maxValueGl, setMaxValueGl] = useState<number>(0)

    const [startValueGl, setStartValueGl] = useState<number>(0)


    function inc ()  {
        if (maxValueGl > startValueGl && (maxValueGl > -1 && startValueGl > -1)) {
            setCount(count + 1)
        }
    }

    function reset ()  {
        setCount(startValueGl)
    }

    function goToSettings ()  {
        setSettingsOpen(true)
    }

    function set (maxValue: number, startValue: number)  {
        setMaxValueGl(maxValue)
        setStartValueGl(startValue)
        setSettingsOpen(false)
        setCount(startValue)
    }

  return (
      <>
          <Wrapper className='app'>
              {settingsOpen
                            ? <SettingsPanel set={set} startValueGl={startValueGl} maxValueGl={maxValueGl}/>
                            : <CounterPanel count={count} goToSettings={goToSettings} inc={inc} reset={reset} maxValueGl={maxValueGl}/>}
          </Wrapper>
      </>

  )
}

export default App
