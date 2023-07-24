import React from 'react'
import { useNavigate } from 'react-router-dom';

function Delete({ id }) {
  const navigate = useNavigate()
  function handleDelete() {
    fetch(`/api/v1/employees/${id}.json`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          navigate('/')
        } else {
          console.error('Delete request failed with status:', res.status);
        }
      })
  }

  return (<div>
    <button className='btn btn-red bold' onClick={handleDelete}>Delete</button>
  </div>)
}

export default Delete
