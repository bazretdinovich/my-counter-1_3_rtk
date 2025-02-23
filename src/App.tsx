import './App.css'
import {Wrapper} from "./components/wrapper/Wrapper.tsx";
import {CounterPanel} from "./components/CounterPanel.tsx";
import {SettingsPanel} from "./components/SettingsPanel.tsx";
import {useSelector} from "react-redux";
import {RootState} from "./store/store.ts";



function App() {
    const {settingsOpen} = useSelector((state:RootState) => state.counter);
    return (
        <>
            <Wrapper className='app'>
                {settingsOpen
                    ? <SettingsPanel/>
                    : <CounterPanel/>}
            </Wrapper>
        </>

    )
}

export default App
