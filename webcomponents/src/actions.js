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

export const openSendEmailInfo = (programId) => { 
    return dispatch => {
        dispatch({
            type: 'OPEN SEND EMAIL INFO',
            payload: {
                programId,
                operationType: 'OPEN SEND EMAIL INFO'
            }
        })
    }
}

export const openReserveNow = (programId) => { 
    return dispatch => {
        dispatch({
            type: 'OPEN RESERVE NOW',
            payload: {
                programId,
                operationType: 'OPEN RESERVE NOW'
            }
        })
    }
}

export const showConfirmation = () => {
    return dispatch => {
        dispatch({
            type: 'SHOW CONFIRMATION',
            payload: {
                operationType: 'SHOW CONFIRMATION'
            }
        })
    }
}

export const sendInfoByEmail = (programId) => {
    return dispatch => {
        dispatch({
            type: 'INFO EMAIL WAS SEND',
            payload: {
                programId,
                operationType: 'INFO EMAIL WAS SEND'
            }
        })
    }
} 