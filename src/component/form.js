import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label> Your Name</label>
            <input type="text"></input>
            <label> Email</label>
            <input type="temail"></input>
            <label> Subject</label>
            <input type="text"></input>
            <label> Messages</label>
            <textarea rows="6"placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>

    </div>
  )
}

export default Form;