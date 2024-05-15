import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <div className='w-full py-20'>
    <div className="container">
        <div className='text-center'>
            <h2 className='text-3xl mb-0'>Have a project in mind?</h2>
            <p>Feel free to talk about your project</p>
           <Link to ="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDXmbBQWlWcVBwKKtpGWhqZrVtnjgxnbVGCRbxxpSfKRDkjJPzHvvQhSBjhQTqrWwknGxWP"><button className='btn btn-dark mt-10'>Contact Me</button></Link> 
        </div>
    </div>
</div>
  )
}

export default Cta