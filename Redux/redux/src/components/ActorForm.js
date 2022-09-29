import React from "react";

const ActorForm = () => {
    const actorInput = React.createRef()

    const addActor = (event) => {
        event.preventDefault()
        console.log('form', actorInput.current.value)
    }

    return(
        <form>
            <input ref={actorInput}/>
            <button type='submit'>Add actor</button>
        </form>
    )
}

export default ActorForm
