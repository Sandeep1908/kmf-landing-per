import homeIco from '../images/icons/home.svg';
import aboutIco from '../images/icons/about.svg';
import ourproductIco from '../images/icons/ourproducts.svg';
import contactIco from '../images/icons/contact.svg';
import kfmUnitIco from '../images/icons/kmf-unit.svg';
import womenIco from '../images/icons/women-empowerment.svg';
import milkUnionIco from '../images/icons/milk-union.svg';
import { IoHomeOutline } from 'react-icons/io5';
import useApi from '@/hooks/useApi';



export const mobileHeader = {
  en: [
    {
      title: <IoHomeOutline size={20} />,
      link: '/en',
      imgUrl: homeIco.src
    },

    {
      title: 'ABOUT US',
      subItems: [
        {
          title: 'Company Profile',
          link: '/en/about/company-profile'
        },

        {
          title:'Our Purpose',
          link:'/en/about/mission-vision'
        },
        // {
        //   title: 'Vision & Mission',
        //   link: '/en/about/mission-vision'
        // },
        // {
        //   title: 'Objectives',
        //   link: '/en/about/mission-vision'
        // },

        // {
        //   title: 'Evolution',
        //   link: '/en/about/mission-vision'
        // },
        {
          title: 'Organization Chart',
          link: '/en/about/organization-chart'
        },
        {
          title: 'Mile Stones',
          link: '/en/about/mile-stones'
        },
        {
          title: 'Quality and Food Safety',
          link: '/en/about/quality-food'
        },
        {
          title: 'Board of Directors',
          link: '/en/directors'
        },
  
      ]
    },

    {
      title: 'KMF PORTFOLIO',
      link: '/en/portfolio',
      imgUrl: homeIco.src
    },

    {
      title: 'MILK UNION',
 
      // subItems: [
      //   {
      //     title: 'Bangalore Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Haveri Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Belagavi Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Ballari Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Vijayapura Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Chamranjanagra Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'D.K Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Dharwad Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Hassan Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'KalaburgiMilk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Kolar Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'MandyaMilk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Mysuru Milk Union',
      //     link: ''
      //   },
      //   {
      //     title: 'Shivamogga Union',
      //     link: ''
      //   },

      //   {
      //     title: 'Tumakuru Milk Union',
      //     link: ''
      //   },

      //   {
      //     title: 'Chikkaballapura Milk Union',
      //     link: ''
      //   }
      // ],
      link: '',
      imgUrl: milkUnionIco.src
    },

    {
      title: 'KMF UNITS',
      // subItems: [
      //   {
      //     title: 'KMF Corporate Office',
      //     link: ''
      //   },
      //   {
      //     title: 'Training Centers',
      //     link: ''
      //   },
      //   {
      //     title: 'Mother Dairy',
      //     link: ''
      //   },
      //   {
      //     title: 'Nandhini Hi Tech',
      //     link: ''
      //   },
      //   {
      //     title: 'Nandhini Milk Products',
      //     link: ''
      //   },
      //   {
      //     title: 'Cattle Feed Plants',
      //     link: ''
      //   },
      //   {
      //     title: 'Nandhini Packaging Film Plant',
      //     link: ''
      //   },
      //   {
      //     title: 'KMR Dempo Dairy Limited',
      //     link: ''
      //   },
      //   {
      //     title: 'Ice Cream Plant Ballari',
      //     link: ''
      //   },
      //   {
      //     title: 'KMF Depots',
      //     link: ''
      //   },
      //   {
      //     title: 'Nandhini Mega HI-Tech Plant',
      //     link: ''
      //   }
      // ]
    },

    {
      title: 'OUR PRODUCT',

      // subItems: [
      //   {
      //     title: 'Milk',
      //     link: '/en/our-product/milk'
      //   },
      //   {
      //     title: 'UHT Milk',
      //     link: ''
      //   },
      //   {
      //     title: 'Flexipack Milk',
      //     link: ''
      //   },
      //   {
      //     title: 'Curd & Fermented Products',
      //     link: ''
      //   },
      //   {
      //     title: 'Ghee & Butter',
      //     link: ''
      //   },
      //   {
      //     title: 'Milk Powder',
      //     link: ''
      //   },
      //   {
      //     title: 'Ice Cream & Frozen Dessert',
      //     link: ''
      //   },
      //   {
      //     title: 'Milk Sweets',
      //     link: ''
      //   },
      //   {
      //     title: 'Chocolate',
      //     link: ''
      //   },
      //   {
      //     title: 'Other Products',
      //     link: ''
      //   }
      // ],
      imgUrl: ourproductIco.src
    },

    {
      title: 'WOMEN EMPOWERMENT',
      link: '/en/women-empowerment',
      imgUrl: homeIco.src
    },

    {
      title: 'NEWS/BLOGS',

      subItems: [
        {
          title: "Latest New's",
          link: '/en/blog/'
        },
        {
          title: "Tender Notificaiton",
          link: '/en/blog/notification'
        },
        {
          title: 'Gallery',
          link: '/en/blog/gallery'
        },
      ],
 
    },
 


 
 

    {
      title: 'CONTACT US',
      link: '/en/contact',
      imgUrl: homeIco.src
    }
  ],
  kn: [
    {
      title: <IoHomeOutline size={20} />,
      link: '/',
      imgUrl: homeIco.src
    },

    {
      title: 'ನಮ್ಮ ಬಗ್ಗೆ',
      subItems: [
        {
          title: 'ಕಂಪನಿ ಪ್ರೊಫೈಲ್',
          link: '/kn/about/company-profile'
        },
        {
          title: 'ನಮ್ಮ ಉದ್ದೇಶ',
          link: '/kn/about/mission-vision'
        },
 
        {
          title: 'ಸಂಸ್ಥೆಯ ಚಾರ್ಟ್',
          link: '/kn/about/organization-chart'
        },
        {
          title: 'ಮೈಲಿಗಲ್ಲುಗಳು',
          link: '/kn/about/mile-stones'
        },
        {
          title: 'ಗುಣಮಟ್ಟ ಮತ್ತು ಆಹಾರ ಸುರಕ್ಷತೆ',
          link: '/kn/about/quality-food'
        },
        {
          title: 'ನಿರ್ದೇಶಕರ ಮಂಡಳಿ',
          link: '/kn/directors'
        },
   
      ]
    },

    {
      title: 'KMF ಪೋರ್ಟ್ಫೋಲಿಯೋ',
      link: '/kn/portfolio',
      imgUrl: homeIco.src
    },

    {
      title: 'ಹಾಲು ಒಕ್ಕೂಟ',
       

      imgUrl: milkUnionIco.src
    },

    {
      title: 'KMF ಘಟಕಗಳು',
      
    },

    {
      title: 'ನಮ್ಮ ಉತ್ಪನ್ನ',
      link: '',
  
      imgUrl: ourproductIco.src
    },

    {
      title: ' ಮಹಿಳಾ ಸಬಲೀಕರಣ',
      link: '/kn/women-empowerment',
      imgUrl: homeIco.src
    },

    {
      title: 'ಸುದ್ದಿ/ಬ್ಲಾಗ್‌ಗಳು',
     
      subItems: [
        {
          title: "ಇತ್ತೀಚಿನ ಸುದ್ದಿ",
          link: '/kn/blog/'
        },
        {
          title: "ಟೆಂಡರ್ ಅಧಿಸೂಚನೆ",
          link: '/kn/blog/notification'
        },
        {
          title: 'ಗ್ಯಾಲರಿ',
          link: '/kn/blog/gallery'
        },
      ],
      imgUrl: homeIco.src
    },

    {
      title: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      link: '/kn/contact',
      imgUrl: homeIco.src
    }
  ]
};
