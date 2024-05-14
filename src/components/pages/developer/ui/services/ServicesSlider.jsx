import React from "react";
import Slider from "react-slick";
import useQueryData from "../../../../custom-hook/useQueryData";
import { setIsShow } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { devBaseImgUrl } from "../../../../helpers/functions-general";

function ServicesSlider() {
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false
  };

  return (
   
    <div className="slider-container">
       <h2 className="text-center text-4xl text-black">MY SERVICES</h2>
      <Slider {...settings}>
       
      
            {services?.data.map((item,key) => (
              <div className="p-10">
                <div className='w-[400px] h-[350px] bg-white/50 p-4  rounded-3xl cursor-pointer hover:scale-[1.1] transition-all' key={key}>
                    <div className='flex flex-col gap-3 px-4 justify-center items-center text-center w-full h-full bg-white rounded-3xl'>
                    <img src={`${devBaseImgUrl}/${item.services_image}`}  alt=""  className='w-[60px]' />
                    <h3 className='text-black mt-2'>{item.services_title}</h3>
                    <p className='text-xs '>{item.services_description}</p>
                    </div>
                </div>
                </div>
                  ))} 
      
        
      </Slider>
    </div>
  );
}

export default ServicesSlider;