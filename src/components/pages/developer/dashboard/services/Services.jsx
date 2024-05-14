import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { FiPlus } from 'react-icons/fi'
import PortfolioTable from '../portfolio/PortfolioTable'
import ModalAddPortfolio from '../portfolio/ModalAddPortfolio'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'
import ServicesTable from './ServicesTable'
import ModalAddServices from './ModalAddServices'

const Services = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSeach] = React.useState(false)
    const [keyword, setKeyword] = React.useState('')
    const [itemEdit, setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: services,
      } = useQueryData(
        isSearch ? "/v1/services/search" : "/v1/services", // endpoint
        isSearch ? "post" : "get", // method
        "services", // key
        {
            searchValue: keyword
        }
      );
     
      const handleAdd = () => {
        dispatch(setIsAdd(true));
        setItemEdit(null)
        
      }

  return (
    <>
    <section className='flex overflow-x-hidden'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>

            <div className='flex relative'>
                <div className={`main-wrapper  px-4 py-3 w-full`}>
                    <div>
                        <h1 className='mb-0'>Dashboard</h1>
                        <p className='text-content text-sm'>Home Services Database</p>
                        {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                        
                    </div>


                     <div className='tab flex justify-end items-center mt-8 border-b border-line pb-5 mb-10'>
                        
                         <button className='btn btn--content flex gap-1 items-center'onClick={handleAdd}>
                             <FiPlus/>New 
                         </button>
                     </div>

                    <ServicesTable isLoading={isLoading} services={services} isFetching={isFetching} setItemEdit={setItemEdit}/>

                    </div>

                  {store.isAdd &&  <ModalAddServices itemEdit={itemEdit}/>}
                  {store.error && <ModalError position="center"/>}
                  {store.success && <Toast position="center"/>}

                  
            </div>
        </main>
    </section>
    </>
  )
}

export default Services