import React from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { updateDispName } from '../redux/action'

const Profile = () => {
    const name = useSelector(state => state.name)
    const dispatch = useDispatch();
    const [newName, setNewName] = useState('');

    const handleUpdate = () => {
        dispatch(updateDispName(newName))
    }

    const inputStyle = {
        padding: '10px 15px',
        margin: '0px 20px'
    }

    const divStyle = {
        margin: '-200px 0px' 
    }

  return (
    <div style={divStyle}>
        <h2>Profile</h2>
        <p><b>Current Display Name: </b>{name}</p>

        <input style={inputStyle} type="text" name="name" id="name" value={newName} onChange={e => setNewName(e.target.value)} placeholder='Enter new name' />
        <button onClick={handleUpdate}>Update Name</button>
    </div>
  )
}

export default Profile