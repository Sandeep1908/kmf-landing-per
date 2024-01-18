'use client';

import React,{useState,useEffect} from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';
import newsImg1 from '@/images/blog/newImg.png';
import NewsCard from './NewsCard';
import Footer from '@/components/Footer';
import useApi from '@/hooks/useApi';
import useLocale from '@/hooks/useLocale';

function Blog() {

  const axios = useApi();
  const[blogs,setBlogs]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = blogs?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/blog-posts');
 
      setBlogs(data.data);
 
    })();
  }, []);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="w-full h-full absolute top-36 z-[-1] ">
      <section className={`w-full  h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>

      <section className="w-full h-auto pt-10  ">
        <div className="w-4/5 m-auto flex flex-wrap justify-evenly items-center gap-6 p-3  ">
          {currentProducts?.map((blog,id)=>{
            return(
              <NewsCard
              key={id}
              title={blog?.attributes?.title}
              image={blog?.attributes?.image?.data?.attributes?.url}
              date={blog?.attributes?.date}
              createdBy="Admin"
              description={blog?.attributes?.content}
              link={`/${blog?.attributes?.locale}/blog/${blog?.id}`}
            />
            )
          })}
      

          
        </div>

        <div className="flex justify-center mt-10 mb-10">
          {Array.from({ length: Math.ceil(blogs.length / itemsPerPage) })?.map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}>
              {index + 1}
            </button>
          ))}
        </div>
      </section>
       
      <Footer />
    </div>
  );
}

export default Blog;
