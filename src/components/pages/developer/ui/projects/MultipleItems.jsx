import React from "react";
import Slider from "react-slick";
import useQueryData from "../../../../custom-hook/useQueryData";
import { setIsShow } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { devBaseImgUrl } from "../../../../helpers/functions-general";
import ModalProject from "./ModalProject";

function MultipleItems() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false
  };

  return (
   
    <div className="slider-container">
       <h2 className="text-center text-4xl text-black">RECENT PROJECTS</h2>
      <Slider {...settings}>
       
      {portfolio?.data.map((item,key) => (
       <div className="p-10 ">
       <div className='w-[400px] h-[350px] bg-whzite rounded-3xl shadow-xl cursor-pointer hover:scale-[1.1] transition-all' key={key} onClick={()=>handleShowMore(item)}>
                         <div className='flex flex-col gap-3 justify-center items-center text-center w-full h-full'>
                         <img src={`${devBaseImgUrl}/${item.portfolio_image}`} alt=""  className='w-[400px] h-[350px] overflow-hidden rounded-t-3xl'/>
                         <h3 className='py-4 px-3 text-balance text-black '>{item.portfolio_title}</h3>

                        
                        
                         </div>
                     </div>
                     </div>   
                ))} 

    
        
      </Slider>
      {store.isShow && <ModalProject  position="center" info={info} /> }
    </div>
  );
}

export default MultipleItems;