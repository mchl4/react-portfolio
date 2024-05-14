import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputFileUpload, InputText,InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { useMutation, useQueryClient  } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'
import { devBaseImgUrl } from '../../../../helpers/functions-general'


const ModalAddPortfolio = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false))

    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      );

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/portfolio/${itemEdit.portfolio_aid}` :`/v1/portfolio`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["portfolio"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } else {
            dispatch(setError(true))
            dispatch(setMessage(data.error));
        }
        },
    });

    const initialVal = {
        portfolio_title:itemEdit ? itemEdit.portfolio_title : "",
        portfolio_image:itemEdit ? itemEdit.portfolio_image : "",
        portfolio_description:itemEdit ? itemEdit.portfolio_description : "",
        portfolio_link:itemEdit ? itemEdit.portfolio_link : ""
    }

    const yupSchema = Yup.object({
        portfolio_title: Yup.string().required("Required"),
        portfolio_link: Yup.string().required("Required"),
    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-content text-primary h-full">
              <div className="modal-header p-4 relative">
                  <h2>New Project</h2>
                  <button className='absolute top-[25px] right-4'onClick={handleClose} ><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                      initialValues={initialVal}
                      validationSchema={yupSchema}
                      onSubmit={async (values) => {
                        uploadPhoto()
                        mutation.mutate({...values, 
                            portfolio_image:
                            (itemEdit && itemEdit.portfolio_image === "") || photo
                              ? photo === null
                                ? itemEdit.portfolio_image
                                : photo.name
                              : values.portfolio_image,})
                      }}
                  >
                    
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                      <div className='grow overflow-y-auto'>

                      <div className="input-wrap">
                          <InputText
                              label="Title"
                              type="text"
                              name="portfolio_title"
                          />
                      </div>

                      <div className="input-wrap">
                          <InputTextArea
                              label="Description"
                              type="text"
                              name="portfolio_description"
                              className='h-[200px] resize-none'
                          />
                      </div>

                      <div className="input-wrap">
                          <InputText
                              label="Link"
                              type="text"
                              name="portfolio_link"
                          />
                      </div>

                      <div className="input-wrap">
                        {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                    <InputFileUpload
                    label="Photo"
                    name="photo"
                    type="file"
                    id="myFile"
                    accept="image/*"
                    title="Upload photo"
                    onChange={(e) => handleChangePhoto(e)}
                    onDrop={(e) => handleChangePhoto(e)}
                    className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full "
                    />

                    {photo || (itemEdit && itemEdit.portfolio_image !== "") ? (
                    <img
                    src={
                    photo
                      ? URL.createObjectURL(photo) // preview
                      : itemEdit.portfolio_image // check db
                      ? devBaseImgUrl + "/" + itemEdit.portfolio_image
                      : null
                    }
                    alt="Photo"
                    className="rounded-tr-md rounded-tl-md h-[200px] max-h-[200px] w-full object-cover object-center m-auto"
                    />
                    ) : (
                    <span className="min-h-[200px] flex items-center justify-center text-sm border border-dashed mb-2">
                    <span className="text-accent mr-1">Drag & Drop</span>{" "}
                    Photo here or{" "}
                    <span className="text-accent ml-1">Browse</span>
                    </span>
                    )}
                    
                    {(photo !== null ||
                    (itemEdit && itemEdit.portfolio_image !== "")) && (
                    <span className="min-h-10 flex items-center justify-center text-sm">
                    <span className="text-accent mr-1">Drag & Drop</span>{" "}
                    photo here or{" "}
                    <span className="text-accent ml-1">Browse</span>
                    </span>
                    )}
                    
                    
                    
                    
                    
                    </div>
                          
                 
                                      
                      </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add" }</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose} >Cancel</button>
                      </div>

                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
  </ModalWrapper>

  )
}

export default ModalAddPortfolio