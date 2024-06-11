'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FcCustomerSupport, FcCallback } from 'react-icons/fc';
import { ImWhatsapp } from 'react-icons/im';
import { Fade } from 'react-reveal';
import Input from '@/components/Input';
import Footer from '@/components/Footer';
import Confirmation from './Confirmation';

const Contact = () => {
  const locale = useParams().locale;
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    profession: '',
    streetAdd: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    telephone: '',
    fax: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      'name',
      'streetAdd',
      'city',
      'state',
      'country',
      'mobile',
      'email',
      'message'
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = true;
      }
    });

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert(locale === 'en' ? 'Please fill the details' : 'ದಯವಿಟ್ಟು ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ');
      return;
    }

    setErrors({});

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data?.status === 200) {
      setIsOpen(true);
    }
  };

  const handleReset = () => {
    setIsOpen(false);
    setFormData({
      name: '',
      organization: '',
      profession: '',
      streetAdd: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      telephone: '',
      fax: '',
      mobile: '',
      email: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="w-full h-full absolute top-36 z-[-1] bg-[#F6F6F6]">
      <section className="w-full h-80 pt-14 relative grid place-items-center company-bg">
        <iframe
          align="middle"
          allowFullScreen
          frameBorder="0"
          height="100%"
          scrolling="true"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.518745456276!2d77.60279164133709!3d12.938623223603017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ef1a5c4365%3A0xf0eb81ef4c8cd455!2sKMF!5e0!3m2!1sen!2sin!4v1456068635330"
          width="100%"
          className="z-[100]"></iframe>
      </section>

      {isOpen && <Confirmation handleReset={handleReset} />}

      <div className="w-full bg-[#F6F6F6]">
        <div className="mb-10 pt-10 relative w-full flex justify-center items-center">
          <h1 className="text-primary-main relative z-10 font-heading text-5xl font-extrabold uppercase">
            {locale === 'en' ? 'CONTACT US' : 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'}
          </h1>
        </div>

        <div className="w-full grid md:grid-cols-3 md:p-9">
          <div className="m-4 col-span-2 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl">
            <div className="w-full p-12">
              <p className="text-xl text-primary-darker font-heading">
                {locale === 'en' ? 'Get in Touch' : 'ಸಂಪರ್ಕಿಸಿ'}
              </p>
              <p className="mt-6 text-base font-semibold text-neutral-dark1">
                {locale === 'en'
                  ? 'Kindly fill in the particulars given below. We will be pleased to revert back to you'
                  : 'ಕೆಳಗೆ ನೀಡಿರುವ ವಿವರಗಳನ್ನು ದಯವಿಟ್ಟು ಭರ್ತಿ ಮಾಡಿ. ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ ದಯಮಾಡಿ ನಿರೀಕ್ಷಣೆಯಲ್ಲಿರಿ'}
              </p>

              <div className="mt-3 w-full lg:grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: 'Name', name: 'name', type: 'text', required: true, astrix: '*' },
                  { title: 'Organisation', name: 'organization', type: 'text' },
                  { title: 'Profession', name: 'profession', type: 'text' },
                  {
                    title: 'Street Address',
                    name: 'streetAdd',
                    type: 'text',
                    required: true,
                    astrix: '*'
                  },
                  { title: 'City', name: 'city', type: 'text', required: true, astrix: '*' },
                  { title: 'State', name: 'state', type: 'text', required: true, astrix: '*' },
                  { title: 'Postal Code or Zip', name: 'pincode', type: 'number', astrix: '*' },
                  { title: 'Country', name: 'country', type: 'text', required: true, astrix: '*' },
                  {
                    title: 'Mobile No',
                    name: 'mobile',
                    type: 'number',
                    required: true,
                    astrix: '*'
                  },
                  { title: 'E-mail', name: 'email', type: 'email', required: true, astrix: '*' }
                ].map((input, index) => (
                  <Input
                    key={index}
                    title={input.title}
                    type={input.type}
                    style="mt-7"
                    name={input.name}
                    value={formData[input.name]}
                    setInfo={handleChange}
                    required={input.required}
                    astrik={input.astrix}
                  />
                ))}

                <div className="w-full md:col-span-2">
                  <Fade bottom>
                    <label htmlFor="message" className="text-base">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                      className="mt-4 w-full h-[200px] rounded-xl border border-neutral-dark4 p-2 bg-neutral-light4"
                    />
                  </Fade>
                </div>
              </div>

              <div className="mt-10 md:mt-16 lg:mt-28 flex justify-center md:justify-end">
                <button
                  onClick={handleSubmit}
                  className="w-48 h-14 flex justify-center items-center bg-primary-main rounded-full">
                  <p className="text-base text-neutral-light4 font-heading font-semibold">
                    {locale === 'kn' ? 'ಸಲ್ಲಿಸಿ' : 'Submit'}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="md:m-4 p-4 md:p-0 w-full space-y-9">
            <ContactInfo
              icon={<MdLocationOn size={40} color="red" />}
              title={locale === 'en' ? 'Address' : 'ವಿಳಾಸ'}
              content={
                locale === 'en'
                  ? 'Karnataka Co-operative Milk Producers Federation Ltd\n#2915, KMF Complex,D.R.College Post,Dr.M.H.Marigowda Road,BENGALURU - 560 029. Karnataka.'
                  : 'ಕರ್ನಾಟಕ ಸಹಕಾರಿ ಹಾಲು ಉತ್ಪಾದಕರ ಮಹಾಮಂಡಳ ನಿಯಮಿತ, ಕಹಾಮ ಸಂಕೀರ್ಣ,\nಅಂಚೆ ಪೆಟ್ಟಿಗೆ ಸಂಖ್ಯೆ- 2915, ಡಿ.ಆರ್. ಕಾಲೇಜು ಪೋಸ್ಟ್, ಡಾ.ಎಂ.ಹೆಚ್.ಮರಿಗೌಡ ರಸ್ತೆ, ಬೆಂಗಳೂರು-560029, ಕರ್ನಾಟಕ'
              }
            />
            <ContactInfo
              icon={<FcCustomerSupport size={40} />}
              title={locale === 'en' ? 'Toll Free' : 'ಶುಲ್ಕರಹಿತ'}
              content={
                locale === 'en'
                  ? '1800 425 8030 10.00AM - 5.30PM Except on Second Saturday, Sunday & GOVT. Holidays'
                  : '080-260 96800 ಸಹಾಯವಾಣಿ: 1800 425 8030 ಟೋಲ್ ಫ್ರೀ 10.00AM - 5.45PM (ಎರಡನೇ ಮತ್ತು ನಾಲ್ಕನೇ ಶನಿವಾರ, ಭಾನುವಾರ ಮತ್ತು ಇತರ ರಾಜ್ಯ ಸರ್ಕಾರಿ ರಜಾದಿನಗಳನ್ನು ಹೊರತುಪಡಿಸಿ'
              }
            />
            <ContactInfo
              icon={<FcCallback size={40} />}
              title={locale === 'en' ? 'Phone' : 'ದೂರವಾಣಿ'}
              content="080-260 96800"
            />
            <ContactInfo
              icon={<ImWhatsapp size={40} color="green" />}
              title={locale === 'en' ? 'Whatsapp' : 'ವಾಟ್ಸ್ ಆ್ಯಪ್'}
              content="7899683696"
            />
            <ContactInfo
              icon={<MdEmail size={40} color="red" />}
              title={locale === 'en' ? 'Email' : 'ಮಿಂಚಂಚೆ'}
              content="customercare.nandini@kmf.coop"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ContactInfo = ({ icon, title, content }) => (
  <div className="p-6 border border-neutral-light1 bg-neutral-light4 rounded-tl-3xl rounded-br-3xl max-w-100">
    <div className="space-y-3 mt-4 mb-4 w-full">
      <p className="text-xl font-semibold text-primary-darker">{title}</p>
      <div className="flex flex-col lg:flex-row items-start w-full">
        <div className="w-1/5">{icon}</div>
        <div className="ml-2 w-full">
          <p className="text-base font-semibold text-neutral-dark1">{content}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
