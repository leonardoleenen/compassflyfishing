import React from 'react'

export const view = ({history}) => (
    <div>
        este es el splash 
        <button onClick={e => history.push('explore')}>Navegar</button>
    </div>
)
