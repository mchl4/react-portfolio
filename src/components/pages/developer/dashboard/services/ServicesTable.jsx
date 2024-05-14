import React from 'react'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'

const ServicesTable = ({isLoading, isFetching, services, setItemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [isArchiving, setIsArchiving] = React.useState(0);
    const [id, setId] = React.useState('')

    let counter = 1

    const handleArchive = (item) => {
        dispatch(setIsActive(true));
        setId(item.services_aid)
        setIsArchiving(0)
    }
    const handleRestore = (item) => {
        dispatch(setIsActive(true));
        setId(item.services_aid)
        setIsArchiving(1)
    }

    const handleDelete = (item) => {
        dispatch(setIsDelete(true))
        setId(item.services_aid)
    }

    const handleEdit = (item) => {
        dispatch(setIsAdd(true)) 
         setItemEdit(item)
     }




  return (
    <>

<div className="table-wrapper relative">
        {isFetching && <SpinnerFetching/>}
            <table>
                <thead>
                    <tr>
                        <th className='w-[20px]'>#</th>
                        <th className='w-[100px]'>Title</th>
                        <th className='w-[80px]'>Image</th>
                        <th className='w-[100px]'>Description</th>
                        <th className='w-[100px]'>Action</th>
                    </tr>
                </thead>
                <tbody>

                {isLoading && ( 
                    <tr>
                        <td colSpan={9}>
                            <TableLoader count="20" cols="4"/>
                        </td>
                    </tr>)
                    }

        {services?.data.length === 0 && (
            <tr>
                <td colSpan={9}>
                    <NoData/>
                </td>
            </tr>
        )}
            
            {services?.data.map((item, key)=>(
                <tr key={key}>
                    <td>{counter++}</td>
                    <td>{item.services_title}</td>
                    <td>{item.services_image}</td>
                    <td>{item.services_description}</td>
                    <td className='table-action'>
                        <ul>
                            {item.services_is_active ? (
                                <>
                                    <li><button onClick={()=>handleEdit(item)}  className="tooltip" data-tooltip="Edit" ><LiaEdit/></button></li>
                                    <li><button onClick={()=>handleArchive(item)} className="tooltip" data-tooltip="Archive" ><PiArchive /></button></li>
                                </>
                            ) : (
                                <>
                                <li><button onClick={()=>handleRestore(item)} className="tooltip" data-tooltip="Restore" ><LiaHistorySolid/></button></li>
                                <li><button onClick={()=>handleDelete(item)} className="tooltip" data-tooltip="Delete" ><LiaTrashAltSolid/></button></li></>
                            )}
                        </ul>
                    </td>
                </tr> 
            ))}
           
            
            </tbody>
        </table>
    </div>

    {store.isActive && <ModalConfirm position="center"  queryKey="services" endpoint={`/v1/services/active/${id}`} isArchiving={isArchiving}/>}  
    {store.isDelete && <ModalDelete position="center" endpoint={`/v1/services/${id}`} queryKey="services"/>}
    </>
  )
}

export default ServicesTable