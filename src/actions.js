export const CHANGE_COLOR = 'CHANGE_COLOR';
export const INITIAL_STATE = 'INITIAL_STATE';

export const setInitialState = ()=>({
    type:INITIAL_STATE
})

export const changeLightColor = signalStatus => ({
    type:CHANGE_COLOR,
    signalStatus:signalStatus
})
