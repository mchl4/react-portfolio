import React from 'react'
import useQueryData from '../../../../custom-hook/useQueryData';
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import ModalProject from './ModalProject';
import { StoreContext } from '../../../../../store/StoreContext';
import { setIsShow } from '../../../../../store/StoreAction';

const Projects = () => {
const {store,dispatch} = React.useContext(StoreContext)
const [info, setInfo] = React.useState(null)
    const {
        isLoading,
        isFetching,
        error,
        data: portfolio,
      } = useQueryData(
       "/v1/portfolio", // endpoint
        "get",  // method
        "portfolio", // key
        {
            // searchValue: keyword
        }
      );
      const handleShowMore =(item) => {
        dispatch(setIsShow(true))
        setInfo(item)
      }

  return (
    <>
      <section>
        <div className='max-w-[1200px] mx-auto px-1'>
            <h3 className='text-center mb-5 text-content'>My Projects</h3>
            <div className='relative'>
                        {isLoading ? <SpinnerFetching/> : (
             <div className='grid grid-cols-3 gap-5'>
            {portfolio?.data.map((item,key) => (
                 <div className="project_card" key={key}>
                 <img src="https://via.placeholder.com/300x300" alt="" className='w-full h-[300px] object-cover' />
                 <h4 className='text-center pt-5 pb-2 mb-0'>{item.portfolio_title}</h4>
                 <ul className='flex justify-between opacity-55 mb-10'>
                     <li><small>{item.portfolio_category}</small></li>
                     <li><small>{item.publish_date}</small></li>
                 </ul>
                        
                 <p className='line-clamp-2'>{item.portfolio_description}</p>
                        
                 <button className='btn btn--accent w-full justify-center py-2' onClick={()=>handleShowMore(item)}>View</button>
             </div>
            ))}
                      
                        
            </div>


            )}
           </div>
        </div>
        
    </section>
    {store.isShow && <ModalProject  position="center" info={info} /> }
  
    
    </>
  
  )
}

export default Projects