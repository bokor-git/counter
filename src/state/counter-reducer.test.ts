import {
    counterReducer,
    increaseCountAC,
    initStateType,
    resetCountAC,
    setMaxValueAC,
    setStartValueAC
} from "./counter-reducer";

let startState: initStateType

beforeEach(() => {
    startState = {
        count: 3,
        startValue: 2,
        maxValue: 5
    }
})

test('count should increase by 1', () => {
    const action = increaseCountAC();
    const endState = counterReducer(startState, action)
    expect(endState.count).toBe(4);
    expect(endState.startValue).toBe(2);

})

test('count should be reset to start value', () => {
    const action = resetCountAC();
    const endState = counterReducer(startState, action)
    expect(endState.count).toBe(startState.startValue);
    expect(endState.maxValue).toBe(startState.maxValue);

})

test('max value should be set', () => {
    const action = setMaxValueAC(10);
    const endState = counterReducer(startState, action)
    expect(endState.count).toBe(startState.count);
    expect(endState.startValue).toBe(startState.startValue);
    expect(endState.maxValue).toBe(10);

})


test('start value and count should be set', () => {
    const action = setStartValueAC(4);
    const endState = counterReducer(startState, action)
    expect(endState.count).toBe(4);
    expect(endState.startValue).toBe(4);
    expect(endState.maxValue).toBe(5);

})