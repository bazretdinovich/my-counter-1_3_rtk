import {createAction, createReducer } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
    settingsOpen: boolean;
    maxValueGl: number;
    startValueGl: number;
}

const initialState: CounterState = {
    count: 0,
    settingsOpen: false,
    maxValueGl: 5,
    startValueGl: 0,
}

export const incrementAC = createAction('counter/increment')
export const resetAC = createAction('counter/reset')
export const toggleSettingsAC = createAction('counter/toggleSettings')
export const setValuesAC = createAction<{maxValue: number; startValue: number}>('counter/setValues')


export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(incrementAC, (state) => {
            if (state.maxValueGl > state.startValueGl && (state.maxValueGl > -1 && state.startValueGl > -1)) {
                state.count += 1
            }
        })
        .addCase(resetAC, (state) => {
            state.count = state.startValueGl
        })
        .addCase(toggleSettingsAC, (state) => {
            state.settingsOpen = !state.settingsOpen;
        })
        .addCase(setValuesAC, (state, action) => {
            state.maxValueGl = action.payload.maxValue;
            state.startValueGl = action.payload.startValue;
            state.settingsOpen = false;
            state.count = action.payload.startValue;
        })
})



// const counterReducer = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment(state) {
//             if (state.maxValueGl > state.startValueGl && (state.maxValueGl > -1 && state.startValueGl > -1)) {
//                 state.count += 1
//         }
//     },
//         reset(state) {
//             state.count = state.startValueGl
//         },
//         toggleSettings(state) {
//             state.settingsOpen = !state.settingsOpen;
//         },
//         setValues(state, action: PayloadAction<{ maxValue: number; startValue: number }>) {
//             state.maxValueGl = action.payload.maxValue;
//             state.startValueGl = action.payload.startValue;
//             state.settingsOpen = false;
//             state.count = action.payload.startValue;
//         },
//     },
// })

