import React from 'react'
import { StoreContext } from '../../../../../store/StoreContext';
import useQueryData from '../../../../custom-hook/useQueryData';
import { setIsShow } from '../../../../../store/StoreAction';
import ServicesSlider from './ServicesSlider';

const Services = () => {
const {store,dispatch} = React.useContext(StoreContext)
const [info, setInfo] = React.useState(null)
        const {
            isLoading,
            isFetching,
            error,
            data: services,
          } = useQueryData(
           "/v1/services", // endpoint
            "get",  // method
            "services", // key
            {
                // searchValue: keyword
            }
          );
          const handleShowMore =(item) => {
            dispatch(setIsShow(true))
            setInfo(item)
          }

  return (
    <section className='py-20'>
    <div className="container">
       

        

        
          <ServicesSlider/>
       

      
    </div>
</section>
  )
}

export default Services