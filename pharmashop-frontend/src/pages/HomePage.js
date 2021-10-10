import { useEffect, useState } from "react";
import Category from "../components/Categories/Category/Category";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../assets/sass/slider.scss";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import Loader from "../components/ui/svg/Loader/Loader";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [isPending,setIsPending]= useState(true);


 
  useEffect(()=>{
    async function fetchCategories(){
      try {
        const data = await fetch("http://localhost:8000/api/categories");
        const res = await data.json();
        setCategories(res);
        setIsPending(false);
      } catch (e) {
        console.log("sorry");
      }
    }
    fetchCategories();
  },[]);


  return (
    <>

    {isPending && <Loader/>}
    
    <div className="slider">
    
 
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        
        navigation={true}
        className="mySwiper"
      >
       {categories.map((category) => {
          return (
            <SwiperSlide key={category.id}>
               <img src={category.image} alt={category.name} className="swiperimage" />

            </SwiperSlide>
           
          );
        })}
      </Swiper>
      </div>
      <div>
        {categories.map((category) => {
          return (
            <Category
              name={category.name}
              image={category.image}
              key={category.id}
              id={category.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
