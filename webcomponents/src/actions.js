export const openProgramCard = programId =>  {
    return dispatch => {
        dispatch({ type: 'OPEN PROGRAM CARD', payload: {
            programId,
            operationType: 'OPEN PROGRAM CARD'
        } })
    }
}

export const callBack = (callBackId,payload) => {
    return dispatch => {
        dispatch({ type: callBackId, payload:{
            operationType: callBackId
        }})
    }
}

export const openPreReserve = (programId) => { 
    return dispatch => {
        dispatch({
            type: 'OPEN PRE RESERVE',
            payload: {
                programId,
                operationType: 'OPEN PRE RESERVE'
            }
        })
    }
}