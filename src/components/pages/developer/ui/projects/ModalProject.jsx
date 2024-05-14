import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { setIsShow } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import { info } from 'autoprefixer'
import { devBaseImgUrl } from '../../../../helpers/functions-general'
import { Link } from 'react-router-dom'

const ModalProject = ({position,info}) => {
    const {dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsShow(false))

  return (
    <ModalWrapper position={position}>
        <div className='bg-secondary p-5 max-w-[900px] w-full shadow-sm relative rounded-3xl cursor-pointer '>
            <button className='absolute top-4 right-4'><LiaTimesSolid className='text-xl' onClick={handleClose}/></button>
            <div className='grid grid-cols-2 gap-8'>
                <img src={`${devBaseImgUrl}/${info.portfolio_image}`}  alt="" className='w-full h-[400px] object-cover rounded-lg'/>

                <div className='content'>
                    <h3>{info.portfolio_title}</h3>
                    <p className='h-[330px] '>{info.portfolio_description}</p>

                    <div className='flex justify-end'>
                    <Link to={info.portfolio_link}><button className='btn btn--accent '>Go to Project</button></Link>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </ModalWrapper>
  )
}

export default ModalProject