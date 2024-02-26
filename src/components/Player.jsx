import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing){
        onChangeName(symbol, playerName);
    }
}

function handleChangeName(event) {
    setPlayerName(event.target.value);
}

let editablePlayerName = <span className='player-name'>{playerName}</span>;
// let btnCaption = 'Edit'

if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChangeName}></input>;

    // btnCaption = 'Save'
}

return (
    <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className='player-symbol'>{symbol}</span>
        </span>
        <button onClick={() => (playerName && handleEditClick())}>{isEditing ? 'Save' : 'Edit'}</button>



        {/* Alternative for conditioning display */}

        {/* function handleEditClick(state) {
            setIsEditing(state);
        } */}

        {/* <span className="player">
            {!isEditing && <span className='player-name'>{name}</span>}
            {isEditing && <input type="text" required></input>}
            <span className='player-symbol'>{symbol}</span>
        </span> */}
        {/* {!isEditing && <button onClick={() => handleEditClick(true)}>Edit</button>}
        {isEditing && <button onClick={() => handleEditClick(false)}>Save</button>} */}
    </li>
)
}