import React from 'react'
import PdfPreview from './PdfPreview'
// import pdf1 from  '@/images/portfolio/pdfM.pdf'


const KsheeraSagara = () => {
  return (
    <div className='flex flex-col md:flex-row gap-6'>
      <PdfPreview  pdfUrl="/pdfM.pdf"/>
      <PdfPreview  pdfUrl="/pdfMay.pdf"/>
    </div>
  )
}

export default KsheeraSagara
