'use client'

import useApi from '@/hooks/useApi';
import React, { useState ,useEffect} from 'react'
import { useParams } from 'next/navigation';
import ShowCard from '../ShowCard';
import useLocale from '@/hooks/useLocale';
import Footer from '@/components/Footer';

function Images() {
    const axios=useApi()
    const [product ,setProducts]=useState([])
    const param =useParams()
    const [loading,setLoading]=useState(true)
    const [title,setTitle]=useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const locale=useLocale().locale
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = product?.slice(indexOfFirstItem, indexOfLastItem);
    const pagesToShow = 4; // Number of pagination numbers to show

    useEffect(() => {
        (async () => {
     
          const { data } = await axios.get(`/api/galleries`);
          const { data:category } = await axios.get('/api/imagecategories');
            
            console.log("data",data)
     
         const categoryName=category?.data?.filter(item=>item?.id===parseInt(param?.slug))
           
          const product=data?.data?.filter((item)=>item?.attributes?.imagecategory?.data?.id === parseInt(param?.slug) )

         
          console.log(categoryName[0].attributes)
          setTitle(categoryName[0])
           
       
         
          setProducts(product)
          setLoading(false)
    
          
        })();
      }, []);


      const renderPaginationNumbers = () => {
        const totalPages = Math.ceil(product?.length / itemsPerPage);
        const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
    
        const paginationNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
          paginationNumbers.push(
            <button
              key={i}
              onClick={() => paginate(i)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
            >
              {i}
            </button>
          );
        }
    
        if (startPage > 1) {
          paginationNumbers.unshift(<span key="ellipsis-start">...</span>);
        }
    
        if (endPage < totalPages) {
          paginationNumbers.push(<span key="ellipsis-end">...</span>);
        }
    
        return paginationNumbers;
      };
    
      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
  return (
    <div className="w-full h-full absolute top-36 z-[-1]  ">

    <section className="w-full m-auto pt-10 relative h-full milk-bg  ">
    <div className="w-full space-y-5 p-4 ">
      <h1 className="text-center text-2xl text-primary-main uppercase">{title?.attributes?.name}</h1>
    </div>


    <div className="w-full max-w-7xl m-auto   grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   pt-10 p-4  gap-5  ">
            {currentProducts?.map((item,idx)=>{
                
                if(item?.attributes?.images?.data){
                  return(
                    <ShowCard 
                    key={idx}
                    imgUrl={item?.attributes?.images?.data?.attributes?.url}
                    title={item?.attributes?.title}
                    />
                )
                }
              
            })}
  </div>



  <div className="flex justify-center items-center mt-10 pb-10 space-x-2 ">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800"
          >
            Previous
          </button>

          {renderPaginationNumbers()}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(product?.length / itemsPerPage)}
            className="mx-1 px-3 py-1 rounded bg-gray-300 text-gray-800"
          >
            Next
          </button>
        </div>
   
  </section>

  <Footer/>
 
</div>



  )
}

export default Images