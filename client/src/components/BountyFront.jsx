import React,{useState} from 'react'
import AddBounty from './AddBounty'


function BountyFront(props) {
    const {firstName, lastName, age, type, status, _id } = props
    const[editToggle, setEditToggle] = useState(false)

      return (
    <div>
        
        {!editToggle ?
        <>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <p>Age:{age}</p>
            <p>Type:{type}</p>
            <p>Status:{status}</p>
            <p>Id number:{_id}</p>
        <button 
        className  ='delete-btn'
        onClick={() => props.deleteBounty(_id)}
        >Delete
        </button>
        <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
        >Edit</button>
        </>
        :
        <>
        <AddBounty
            firstName={firstName}
            lastName={lastName}
            age={age}
            type={type}
            status={status}
            _id={_id}
            btnText= 'Submit Edit'
            submit={props.editBounty}
        />
        <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
        >Close</button>
        </>
    }
    </div>
  )
}

export default BountyFront