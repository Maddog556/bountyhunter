import React,{useState} from 'react'
import AddBounty from './AddBounty'
import './styles/BountyFront.css'


function BountyFront(props) {
    const {firstName, lastName, age, type, status, _id } = props
    const[editToggle, setEditToggle] = useState(false)

      return (
    <div>
        
        {!editToggle ?
        <div id='output-div'>
            <h3 className='outputs'>First Name: {firstName}</h3>
            <h3 className='outputs'>Last Name: {lastName}</h3>
            <p className='outputs'>Age:{age}</p>
            <p className='outputs'>Type:{type}</p>
            <p className='outputs'>Status:{status}</p>
            <p className='outputs'>Id number:{_id}</p>
        <div id='buttons-output'>
        <button 
        className='button-del'
        onClick={() => props.deleteBounty(_id)}
        >Delete
        </button>
        <button
        className='button-edit'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
        >Edit</button>
        </div>
        </div>
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
        id='close-btn'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
        >Close Edit Box</button>
        </>
    }
    </div>
  )
}

export default BountyFront