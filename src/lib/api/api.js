// /lib/api.js




export async function fetchBanners() {
    const res = await fetch('http://3.7.252.48:1337/api/home-banners?populate=*');
    const data = await res.json();
    return data.data;
  }
  
  export async function fetchCardDetails() {
    const res = await fetch('http://3.7.252.48:1337/api/home-cards?populate=*');
    const data = await res.json();
    return data.data;
  }
  
  export async function fetchHomeAboutDetails() {
    const res = await fetch('http://3.7.252.48:1337/api/home-about-kmfs?populate=*');
    const data = await res.json();
    return data.data;
  }
  
  export async function fetchAllTenders() {
    const res = await fetch('http://3.7.252.48:1337/api/home-tenders?populate=*');
    const data = await res.json();
    return data.data;
  }
  
  export async function fetchNewArrivals() {
    const res = await fetch('http://3.7.252.48:1337/api/home-new-arrivals?populate=*');
    const data = await res.json();
    return data.data;
  }
  
  export async function fetchCertificate() {
    const res = await fetch('http://3.7.252.48:1337/api/home-certificates?populate=*');
    const data = await res.json();
    return data.data;
  }
  
  export async function fetchKnowMilk() {
    const res = await fetch('http://3.7.252.48:1337/api/home-know-milk?populate=*');
    const data = await res.json();
    return data.data;
  }
  