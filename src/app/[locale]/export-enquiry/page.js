'use client';
import React from 'react';
import AboutHeroImg from '@/images/about/mission/about-hero.png';
import Footer from '@/components/Footer';
import Input from '@/components/Input';
import { useParams } from 'next/navigation';
function ExportEnquiry() {
  const locale = useParams().locale;
  return (
    <div className="w-full h-full absolute top-36 z-[-1] bg-[#F6F6F6] ">
      <section className={`w-full h-80 pt-28 relative  grid place-items-center company-bg`}>
        <img src={AboutHeroImg.src} className="w-full h-full object-cover absolute top-0 z-[-1]" />
      </section>

      <section className="w-full h-auto p-10 flex flex-col justify-center items-center    space-y-6 bg-[#F6F6F6]  ">
        <h1 className="text-xl text-primary-main font-heading ">
          {locale === 'en'
            ? `Export Enquiry`
            : `
ರಫ್ತು ವಿಚಾರಣೆ`}
        </h1>
        <div className="w-full   flex flex-col justify-center items-start   rounded-tl-3xl  rounded-br-3xl  bg-white space-y-6 p-5 ">
          <h1 className="text-lg font-black font-heading">
            {locale === 'en'
              ? `NANDINI invites export inquiries`
              : `

ನಂದಿನಿ ರಫ್ತು ವಿಚಾರಣೆಗಳನ್ನು ಆಹ್ವಾನಿಸಿದ್ದಾರೆ`}
          </h1>
          <div className="flex flex-col justify-start items-start  space-y-6">
            <p>
              {locale === 'en'
                ? `            Nandini has, over the years, grown to have now become the 2nd largest brand in the co-operative dairy industry in India and the undisputed leader in the South India. Karnataka Milk Federation (KMF) and the milk Unions affiliated to it are handling, on an average, over 5.2 million kgs. of milk PER DAY. A very wide range of milk products- of short and long life- are made in well equipped hygienic manufacturing facilities (ISO certified/HACCP compliant) managed by highly qualified and experienced professionals and skilled workmen. `
                : `

ನಂದಿನಿಯು ವರ್ಷಗಳಲ್ಲಿ, ಭಾರತದಲ್ಲಿ ಸಹಕಾರಿ ಡೇರಿ ಉದ್ಯಮದಲ್ಲಿ 2 ನೇ ಅತಿದೊಡ್ಡ ಬ್ರ್ಯಾಂಡ್ ಮತ್ತು ದಕ್ಷಿಣ ಭಾರತದಲ್ಲಿ ನಿರ್ವಿವಾದ ನಾಯಕನಾಗಿ ಬೆಳೆದಿದೆ. ಕರ್ನಾಟಕ ಹಾಲು ಮಹಾಮಂಡಳ (ಕೆಎಂಎಫ್) ಮತ್ತು ಅದಕ್ಕೆ ಸಂಯೋಜಿತವಾಗಿರುವ ಹಾಲು ಒಕ್ಕೂಟಗಳು ಸರಾಸರಿ 5.2 ಮಿಲಿಯನ್ ಕೆ.ಜಿ.ಗೂ ಹೆಚ್ಚು ನಿರ್ವಹಣೆ ಮಾಡುತ್ತಿವೆ. ದಿನಕ್ಕೆ ಹಾಲು. ಅತ್ಯಂತ ವ್ಯಾಪಕ ಶ್ರೇಣಿಯ ಹಾಲಿನ ಉತ್ಪನ್ನಗಳು- ಕಡಿಮೆ ಮತ್ತು ದೀರ್ಘಾವಧಿಯ- ಸುಸಜ್ಜಿತ ನೈರ್ಮಲ್ಯ ಉತ್ಪಾದನಾ ಸೌಲಭ್ಯಗಳಲ್ಲಿ (ISO ಪ್ರಮಾಣೀಕೃತ/HACCP ಕಂಪ್ಲೈಂಟ್) ಹೆಚ್ಚು ಅರ್ಹ ಮತ್ತು ಅನುಭವಿ ವೃತ್ತಿಪರರು ಮತ್ತು ನುರಿತ ಕೆಲಸಗಾರರಿಂದ ನಿರ್ವಹಿಸಲ್ಪಡುತ್ತವೆ.`}
            </p>

            <p>
              {locale === 'en'
                ? `      Within the framework of the export policy laid down by Government of India from time to time, KMF has resolved to undertake export of its products after the completion of all the required export formalities. KMF is planning to export the following products, they are.`
                : `


ಭಾರತ ಸರ್ಕಾರವು ಕಾಲಕಾಲಕ್ಕೆ ನಿಗದಿಪಡಿಸಿದ ರಫ್ತು ನೀತಿಯ ಚೌಕಟ್ಟಿನೊಳಗೆ, ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ರಫ್ತು ವಿಧಿವಿಧಾನಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ KMF ತನ್ನ ಉತ್ಪನ್ನಗಳ ರಫ್ತು ಕೈಗೊಳ್ಳಲು ನಿರ್ಧರಿಸಿದೆ. ಕೆಎಂಎಫ್ ಈ ಕೆಳಗಿನ ಉತ್ಪನ್ನಗಳನ್ನು ರಫ್ತು ಮಾಡಲು ಯೋಜಿಸುತ್ತಿದೆ.`}
            </p>

            <ul className="flex flex-col justify-start items-start list-disc p-3">
              <li>
                {' '}
                {locale === 'en'
                  ? `Butter (Salted and Unsalted).`
                  : `


ಬೆಣ್ಣೆ (ಉಪ್ಪು ಮತ್ತು ಉಪ್ಪುರಹಿತ).`}
              </li>
              <li>
                {' '}
                {locale === 'en'
                  ? `Ghee (Clarified Butter).`
                  : `


ತುಪ್ಪ (ಸ್ಪಷ್ಟಗೊಳಿಸಿದ ಬೆಣ್ಣೆ).`}
              </li>
              <li>
                {locale === 'en'
                  ? ` UHT Milk in Tetrapak containers`
                  : `



ಟೆಟ್ರಾಪ್ಯಾಕ್ ಕಂಟೈನರ್‌ಗಳಲ್ಲಿ UHT ಹಾಲು`}
                .
              </li>
              <li>
                {locale === 'en'
                  ? `    Ethnic Indian Sweets with long Shelf-life in frozen format.`
                  : `




ಹೆಪ್ಪುಗಟ್ಟಿದ ರೂಪದಲ್ಲಿ ದೀರ್ಘ ಶೆಲ್ಫ್-ಲೈಫ್ ಹೊಂದಿರುವ ಎಥ್ನಿಕ್ ಇಂಡಿಯನ್ ಸ್ವೀಟ್ಸ್.`}
              </li>
              <li>
                {' '}
                {locale === 'en'
                  ? `   Milk Powders.`
                  : `





ಹಾಲಿನ ಪುಡಿಗಳು.`}
              </li>
            </ul>

            <p>
              {locale === 'en'
                ? `   Information in respect of product specifications, pack sizes, wholesale pack configuration details, dimensions of shippers, shelf life marking details etc will be conveyed to the prospective importers against specific request.`
                : `





ಉತ್ಪನ್ನದ ವಿಶೇಷಣಗಳು, ಪ್ಯಾಕ್ ಗಾತ್ರಗಳು, ಸಗಟು ಪ್ಯಾಕ್ ಕಾನ್ಫಿಗರೇಶನ್ ವಿವರಗಳು, ಸಾಗಣೆದಾರರ ಆಯಾಮಗಳು, ಶೆಲ್ಫ್ ಲೈಫ್ ಗುರುತು ವಿವರಗಳು ಇತ್ಯಾದಿಗಳಿಗೆ ಸಂಬಂಧಿಸಿದಂತೆ ಮಾಹಿತಿಯನ್ನು ನಿರ್ದಿಷ್ಟ ವಿನಂತಿಯ ವಿರುದ್ಧ ನಿರೀಕ್ಷಿತ ಆಮದುದಾರರಿಗೆ ತಿಳಿಸಲಾಗುತ್ತದೆ..`}
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-auto p-10 space-y-6 bg-[#F6F6F6]  ">
        <div className=" col-span-2  border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl">
          <div className="w-full p-12">
            <p className="text-xl text-primary-darker font-semibold">
              {' '}
              {locale === 'en'
                ? `   For Enquiry.`
                : `

                



ವಿಚಾರಣೆಗಾಗಿ`}
            </p>

            <p className=" mt-6 text-base font-semibold text-neutral-dark1">
              {locale === 'en'
                ? `   KMF invites proposals directly from importers from different countries, who may convey the following  details to us:`
                : `








KMF ವಿವಿಧ ದೇಶಗಳ ಆಮದುದಾರರಿಂದ ನೇರವಾಗಿ ಪ್ರಸ್ತಾಪಗಳನ್ನು ಆಹ್ವಾನಿಸುತ್ತದೆ, ಅವರು ಈ ಕೆಳಗಿನ ವಿವರಗಳನ್ನು ನಮಗೆ ತಿಳಿಸಬಹುದು:`}
            </p>

            <div className="mt-3 w-full lg:grid grid-cols-1 md:grid-cols-2 gap-3 ">
              <Input title="Name *" type="text" style="mt-7  md:col-span-2" />
              <Input title="Street Address *" type="text" style="mt-7 md:col-span-2" />
              <Input title="City *" type="text" style="mt-7" />
              <Input title="State" type="text" style="mt-7" />
              <Input title="Postal Code or Zip" type="number" style="mt-7" />
              <Input title="Country *" type="text" style="mt-7" />
              <Input title="Mobile No *" type="number" style="mt-7" />
              <Input title="E-mail *" type="email" style="mt-7" />
              <Input
                title="Enquiry "
                type="text"
                style="mt-7 col-span-2"
                inputStyle="h-32  lg:h-64"
              />
            </div>

            <div className="mt-10 md:mt-16 lg:mt-28 flex justify-center md:justify-end">
              <button className="w-48 h-14 flex justify-center items-center bg-primary-main rounded-full">
                <p className="text-base text-neutral-light4 font-semibold">Submit</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ExportEnquiry;
