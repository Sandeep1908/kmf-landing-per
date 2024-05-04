import homeIco from '../images/icons/home.svg';
 
import ourproductIco from '../images/icons/ourproducts.svg';
 
import milkUnionIco from '../images/icons/milk-union.svg';
import { IoHomeOutline } from 'react-icons/io5';
 



export const mobileHeader = {
  en: [
    {
      title: <IoHomeOutline size={20} />,
      link: '/',
      imgUrl: homeIco.src
    },

    {
      title: 'ABOUT US',
      link:'/en/about/company-profile',
      subItems: [
        {
          title: 'Company Profile',
          link: '/en/about/company-profile'
        },

        {
          title:'Our Purpose',
          link:'/en/about/mission-vision'
        },
       
        {
          title: 'Organization Chart',
          link: '/en/about/organization-chart'
        },
        {
          title: 'Mile Stones',
          link: '/en/about/mile-stones'
        },
        
        {
          title: 'Board of Directors',
          link: '/en/directors'
        },
        {
          title: 'KMF Executives',
          link: '/en/executive'
        },
  
      ]
    },

    {
      title: 'KMF PORTFOLIO',
      link: '/en/portfolio',
      imgUrl: homeIco.src
    },

    {
      title: 'MILK UNIONS',
      
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
      link: '/en/milk-union',
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
      title: 'OUR PRODUCTS',
      link: '/en/our-product',
      subItems: [
        {
          title: "Products",
          link: '/en/our-product'
        },
        {
          title: "Nandini Recipes",
          link: '/en/nandini-recipes'
        },
        {
          title: "Bulk Order",
          link: '/en/comingsoon'
        },
       

        
      ],
      imgUrl: homeIco.src
    },


    {
      title: 'QUALITY AND FOOD SAFETY',
      link: '/en/about/quality-food'
    },
    {
      title: 'ANIMAL HUSBANDARY',
      link: '/en/animal-husbandery/procurement',
      subItems: [
        {
          title: "Procurement",
          link: '/en/animal-husbandery/procurement'
        },
        {
          title: "Animal Health",
          link: '/en/animal-husbandery/animal-health'
        },
        {
          title: "Animal Breeding Program",
          link: '/en/animal-husbandery/animal-breeding'
        },
        {
          title: "Fodder Activities",
          link: '/en/animal-husbandery/feed-and-fodder'
        },
  
        {
          title: "Schemes/Grants",
          link: '/en/animal-husbandery/scheme'
        },
        {
          title: "STEP",
          link: '/en/women-empowerment'
        },

      
        
        

       

        
      ],
      imgUrl: homeIco.src
    },

    
    {
      title: 'GALLERY',
      link: '/en/blog/gallery'
    },
 


 
    {
      title: 'SOCIAL RESPONSIBILITY',
      link: '',
      subItems: [
        {
          title: "Nandini Hostels",
          link: '/en/social-responsibility/nandini-hostels/'
        },
        {
          title: "Awarness For Children",
          link: '/en/portfolio/ksheerabhagaya'
        },
        {
          title: "Incentives to Farmers",
          link: '/en/portfolio/ksheeradhare'
        },
        {
          title: "Veterinary Services",
          link: '/en/animal-husbandery/animal-health'
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
      link: '/kn',
      imgUrl: homeIco.src
    },

    {
      title: 'ಕಹಾಮ ಬಗ್ಗೆ',
      link:'/kn/about/company-profile',
      subItems: [
        {
          title: 'ಕಹಾಮ ಪರಿಚಯ',
          link: '/kn/about/company-profile'
        },
        {
          title: 'ಕಹಾಮ ಉದ್ದೇಶ',
          link: '/kn/about/mission-vision'
        },
 
        {
          title: 'ಸಾಂಸ್ಥಿಕ ರಚನೆ',
          link: '/kn/about/organization-chart'
        },
        {
          title: 'ಮೈಲಿಗಲ್ಲುಗಳು',
          link: '/kn/about/mile-stones'
        },
    
        {
          title: 'ಮಂಡಳಿ ನಿರ್ದೇಶಕರುಗಳು',
          link: '/kn/directors'
        },
        {
          title: 'ಕಹಾಮ ಅಧಿಕಾರಿಗಳು',
          link: '/kn/executive'
        },
      ]
    },

    {
      title: 'KMF ಪೋರ್ಟ್ಫೋಲಿಯೋ',
      link: '/kn/portfolio',
      imgUrl: homeIco.src
    },

    {
      title: 'ಹಾಲು ಒಕ್ಕೂಟಗಳು',
       link:'/kn/milk-union',

      imgUrl: milkUnionIco.src
    },

    {
      title: 'ಕಹಾಮ ಘಟಕಗಳು',
       
      
    },

    {
      title: 'ನಮ್ಮ ಉತ್ಪನ್ನಗಳು',
      link: '/kn/our-product',
      subItems: [
        {
          title: "ಉತ್ಪನ್ನಗಳು",
          link: '/kn/our-product'
        },
        {
          title: "ನಂದಿನಿ ಪಾಕವಿಧಾನಗಳು",
          link: '/kn/nandini-recipes'
        },
        {
          title: "ಸಗಟು ಮಾರಾಟ",
          link: '/kn/comingsoon'
        },
       

        
      ],
     
    },




 








     
    {
      title: 'ಗುಣಮಟ್ಟ ಮತ್ತು ಆಹಾರ ಸುರಕ್ಷತೆ',
      link: '/kn/about/quality-food'
    },




    {
      title: 'ಪಶುಸಂಗೋಪನೆ ವಿಭಾಗ',
      link: '/kn/animal-husbandery/procurement',
      subItems: [
        {
          title: " ಹಾಲು ಶೇಖರಣೆ",
          link: '/kn/animal-husbandery/procurement'
        },
        {
          title: "ಪಶು ಆರೋಗ",
          link: '/kn/animal-husbandery/animal-health'
        },
        {
          title: "ಪಶು ಸಂತಾನೋತ್ಪತ್ತಿ ಕಾರ್ಯಕ",
          link: '/kn/animal-husbandery/animal-breeding'
        },
        {
          title: "ಮೇವು ಚಟುವಟಿಕೆಗಳು",
          link: '/kn/animal-husbandery/feed-and-fodder'
        },
  
        {
          title: "ಯೋಜನೆಗಳು/ ಅನುದಾನಗಳು",
          link: '/kn/animal-husbandery/scheme'
        },
        {
          title: "ಸ್ಟೆಪ್ ಯೋಜನೆ",
          link: '/kn/women-empowerment'
        },

      
        
        

       

        
      ],
      imgUrl: homeIco.src
    },

    {
      title: 'ಸುದ್ದಿ/ಬ್ಲಾಗ್‌ಗಳು',
      link: '/kn/blog/gallery'
    },
    


    {
      title: 'ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿಗಳ',
      link: '',
      subItems: [
        {
          title: "Nandini Hostels",
          link: ''
        },
        {
          title: "Awarness For Children",
          link: ''
        },
        {
          title: "Incentives to Farmers",
          link: ''
        },
        {
          title: "Veterinary Services",
          link: ''
        },
       
        
      ],
    },
     
     
    {
      title: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      link: '/kn/contact',
      imgUrl: homeIco.src
    }
  ]
};
