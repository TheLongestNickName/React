import React, { useEffect, useState } from "react";



let ProfileStatusWithHook = React.memo ( (props) => {
    console.log('render')
    
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status) 
    
    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = ()=>{
        setEditMode(true)
    }
    const deactivateEditMode = ()=>{
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e)=>{
        setStatus(e.currentTarget.value)
    }

    return(
         <div>            
            {!editMode &&
                <div>
                    <span onDoubleClick ={activateEditMode}>{status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value = {status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}></input>
                </div>
            }
        </div>
            
    )
})

export default ProfileStatusWithHook;
