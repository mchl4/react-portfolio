import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { FiPlus } from 'react-icons/fi'
import PortfolioTable from './PortfolioTable'
import { Link } from 'react-router-dom'
import ModalAddPortfolio from './ModalAddPortfolio'
import useQueryData from '../../../../custom-hook/useQueryData'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'

const Portfolio = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isSearch, setIsSeach] = React.useState(false)
    const [keyword, setKeyword] = React.useState('')
    const [itemEdit, setItemEdit] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: portfolio,
      } = useQueryData(
        isSearch ? "/v1/portfolio/search" : "/v1/portfolio", // endpoint
        isSearch ? "post" : "get", // method
        "portfolio", // key
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
                        <p className='text-content text-sm'>Home Projects Database</p>
                        {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                        
                    </div>


                     <div className='tab flex justify-end items-center mt-8 border-b border-line pb-5 mb-10'>
                        
                         <button className='btn btn--content flex gap-1 items-center'onClick={handleAdd}>
                             <FiPlus/>New 
                         </button>
                     </div>

                    <PortfolioTable isLoading={isLoading} portfolio={portfolio} isFetching={isFetching} setItemEdit={setItemEdit}/>

                    </div>

                  {store.isAdd &&  <ModalAddPortfolio itemEdit={itemEdit}/>}
                  {store.error && <ModalError position="center"/>}
                  {store.success && <Toast position="center"/>}

                  
            </div>
        </main>
    </section>
    </>
  )
}

export default Portfolio