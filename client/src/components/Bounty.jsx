import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import BountyFront from './BountyFront'
import AddBounty from './AddBounty'


function Bounty() {
  const [bountiesList,setBountiesList] = useState([])


//get all bounties
  function getBounties(){
    console.log('test fire')
    axios.get('/api/bountiesList')
      .then(res => setBountiesList(res.data))
      .catch(err => console.log(err.response.data.errMsg))
  }
// add new bounty
  function addBounties(newBountyAdded){
    axios.post('/api/bountiesList',newBountyAdded)
    .then(res => {
        setBountiesList(prevbounties => [...prevbounties, res.data])
    })
    .catch(err => console.log(err))
}

// delete function
function deleteBounty(bountyId){
axios.delete(`/api/bountiesList/${bountyId}`)
.then(res => {
    setBountiesList(prevbounties => prevbounties.filter(bounty => bounty._id !== bountyId))
})
.catch(err => console.log(err))
}

// edit function
function editBounty(updates,bountyId){
    axios.put(`/api/bountiesList/${bountyId}`,updates)
    .then(res => {
        setBountiesList(prevbounties => prevbounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
}
// filter
function handleFilter(e){
  if(e.target.value === 'reset'){
    getBounties()
  } else{
  axios.get(`/api/bountiesList/search/type?type=${e.target.value}`)
  .then(res => setBountiesList(res.data))
  .catch(err => console.log(err))
  }
}
  useEffect(() => {
    getBounties()
  },[])
  

  return (
<div className="cardContainer">

<h4>Filter by Type</h4>
  <select onChange={handleFilter}>
  <option>-- Select a Type --</option>
  <option value="Jedi">Jedi</option>
  <option value="Sith">Sith</option>
  <option value="reset">All types</option>
  </select>

    <AddBounty
        //here is for editing and add button on the form 
        submit={addBounties}
        btnText ='Add Bounty'
    />
    {bountiesList?.map(bounty => 
        <BountyFront 
            {...bounty} 
            key={bounty._id} 
            deleteBounty={deleteBounty}
            editBounty={editBounty}    
        />)}  
</div>
 
 )}

export default Bounty
