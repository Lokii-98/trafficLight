import { CHANGE_COLOR, INITIAL_STATE } from "./actions";

const signalColor = {
    0:'red',
    1:'yellow',
    2:'green'
}

const initialState = {color:'red', index:0}

export const signalStatus = (state = initialState, action)=>{
    let {type, signalStatus} = action;
    console.log(signalStatus, action,"Inside reducer")
    switch(type){
        case INITIAL_STATE:
            signalStatus = initialState;
            return signalStatus;
        case CHANGE_COLOR:
            if(signalStatus.index===2){
                signalStatus = initialState;
            }else{
                signalStatus = {color:signalColor[signalStatus.index+1], index: signalStatus.index+1};
            }
            return signalStatus;
        default:
            return state;
    }
}