import React from 'react';
import { Header } from '@/components/Header';

function SecretInfo() {
  const milkData = [
    {
      SlNo: 1,
      Code: 'BE',
      Name: 'Bengaluru Co-operative Milk Union Limited',
      Address: 'Bengaluru Dairy, Dr.M.H.Marigowda Road, D.R.College Post, Bengaluru – 560 029, Karnataka',
      LicNo: '10014043000721',
    },
    {
      SlNo: 2,
      Code: 'BH',
      Name: 'Bengaluru Co-operative Milk Union Limited, Hosakote Dairy',
      Address: 'Bengaluru rural – 562 114, Karnataka',
      LicNo: '10014043000701',
    },
    {
      SlNo: 3,
      Code: 'BK',
      Name: 'Bengaluru Co-operative Milk Union Limited, Nandini Milk Products Complex',
      Address: 'A Unit of BAMUL, Survey No. 275/1, Shivanahally, Kanakapura Taluk, Ramanagara – 562 117, Karnataka',
      LicNo: '10018043002112',
    },
    {
      SlNo: 4,
      Code: 'BG',
      Name: 'Belagavi Co-operative Milk Union Limited',
      Address: 'Mahantesh Nagar, Belagavi – 590 017, Karnataka',
      LicNo: '10015043001268',
    },
    {
      SlNo: 5,
      Code: 'CH',
      Name: 'Chamarajanagara Co-operative Milk Union Limited',
      Address: 'Kuderu Village, Santhemarahalli Hobli, Chamarajanagara – 571 316, Karnataka',
      LicNo: '10018043002160',
    },
    {
      SlNo: 6,
      Code: 'KC',
      Name: 'Kolar – Chikkaballapura Co-operative Milk Union Limited',
      Address: 'Mega Dairy, Nandi Cross, Doddamarali Post, Chikkaballapura – 562 101, Karnataka',
      LicNo: '10017043001879',
    },
    {
      SlNo: 7,
      Code: 'DM',
      Name: 'Dakshina Kannada Co-operative Milk Union Limited, Mangalore dairy',
      Address: 'Kulashekar, Mangalore – 575 005, Karnataka',
      LicNo: '10012043000216',
    },
    {
      SlNo: 8,
      Code: 'DU',
      Name: 'Dakshina Kannada Co-operative Milk Union Limited, Udupi Dairy',
      Address: 'Uggelbettu, Uppooru – 576 105, Udupi, Karnataka',
      LicNo: '10020043003096',
    },
    {
      SlNo: 9,
      Code: 'DA',
      Name: 'Dharwad, Gadag & Uttarkannada Co-operative Milk Union Limited',
      Address: 'Product Dairy, KIADB Lakkamanahalli, Industrial Area, Dharwad – 580 004, Karnataka',
      LicNo: '10014043000750',
    },
    {
      SlNo: 10,
      Code: 'DD',
      Name: 'KMF Dempo Dairy Limited',
      Address: 'Asangi Village, Rabakavi- Banahatti, Bagalkote – 587 311, Karnataka',
      LicNo: '10012043000255',
    },
    {
      SlNo: 11,
      Code: 'HA',
      Name: 'Hassan Co-operative Milk Union Limited',
      Address: 'Main Dairy, Industrial Estate, B.M Road, Hassan – 573 201, Karnataka',
      LicNo: '10013043000493',
    },
    {
      SlNo: 12,
      Code: 'HK',
      Name: 'Hassan Co-operative Milk Union Limited',
      Address: 'Kudige Dairy, Somwarpet Taluk, Kodagu – 571 232, Karnataka',
      LicNo: '11215319000064',
    },
    {
      SlNo: 13,
      Code: 'HD',
      Name: 'Haveri District Co-operative Milk Producers Societies Union Limited',
      Address: 'Administrative office, Veterinary Hospital compound, PB Road, Haveri – 581 110, Karnataka',
      LicNo: '11223999000033',
    },
    {
      SlNo: 14,
      Code: 'SH',
      Name: 'SKA Foods Speciality Private Limited',
      Address: 'Dairy Plant with UHT Milk Plant, Survey No. 5/2, Jangamanakoppa Village, Karajagi Hobli, Agadi Post, Haveri – 581 128, Karnataka',
      LicNo: '11223999000010',
    },
    {
      SlNo: 15,
      Code: 'KK',
      Name: 'Kalaburagi – Bidar & Yadgir Co-operative Milk Union Limited',
      Address: 'Humnabad, Kalaburagi – 585 104, Karnataka',
      LicNo: '10013043000520',
    },
    {
      SlNo: 16,
      Code: 'KB',
      Name: 'Kalaburagi – Bidar & Yadgir Co-operative Milk Union Limited',
      Address: 'Bidar Dairy, Janawada Road, Bidar – 585 401, Karnataka',
      LicNo: '11215306000817',
    },
    {
      SlNo: 17,
      Code: 'KD',
      Name: 'Kolar Co-operative Milk Union Limited',
      Address: 'Kolar Dairy, NH 75, Huttur Post, Kolar – 563 102, Karnataka',
      LicNo: '10012043000195',
    },
    {
      SlNo: 18,
      Code: 'MYD',
      Name: 'Mysore Co-operative Milk Union Limited',
      Address: 'Allanahalli Village, Mysore – 570 028, Karnataka',
      LicNo: '10019043002527',
    },
    {
      SlNo: 19,
      Code: 'MY',
      Name: 'Mysore District Co-operative Milk Producers Societies Union Limited',
      Address: 'Main Dairy Complex, Male Mahadeshwara road, Siddarthanagara, Mysuru-570 011, Karnataka',
      LicNo: '11224999000439',
    },
    {
      SlNo: 20,
      Code: 'MA',
      Name: 'Mandya Co-operative Milk Union Limited',
      Address: 'Product Dairy, Gejjalagere – 571 428, Mandya, Karnataka',
      LicNo: '10012043000208',
    },
    {
      SlNo: 21,
      Code: 'MK',
      Name: 'Mandya Co-operative Milk Union Limited',
      Address: 'UHT Milk Plant, Kumbalagodu, Plot No. 13 A&B. KIADB Industrial Area, Kengeri Hobli, Bengaluru – 560 074, Karnataka',
      LicNo: '10013043000511',
    },
    {
      SlNo: 22,
      Code: 'MD',
      Name: 'Mother Dairy, A Unit of KMF',
      Address: 'GKVK Post, Yelahanka, Bengaluru – 560 065, Karnataka',
      LicNo: '10012043000211',
    },
    {
      SlNo: 23,
      Code: 'NMP',
      Name: 'Nandini Milk Products, A Unit of KMF',
      Address: 'KMF Complex, Dr.M.H.Marigowda Road, Bengaluru – 560 029, Karnataka',
      LicNo: '10014043000707',
    },
    {
      SlNo: 24,
      Code: 'NC',
      Name: 'Nandini Hi-Tech Product Plant, A Unit of KMF',
      Address: 'Shettihalli Village, Janivara (Post), Channarayapatna Taluk, Hassan – 573 116, Karnataka',
      LicNo: '10013043000517',
    },
    {
      SlNo: 25,
      Code: 'NR',
      Name: 'Nandini Hi-Tech Mega Powder Plant, A Unit of KMF',
      Address: 'Kannamangala village, Kasaba Hobli, Kanva Post, Channapatna Taluk, Ramanagara – 562 108, Karnataka',
      LicNo: '10019043002926',
    },
    {
      SlNo: 26,
      Code: 'RB',
      Name: 'Raichur, Ballari, Koppal & Vijayanagara Co-operative Milk Union Limited',
      Address: 'Ballari Dairy, Sanjay Gandhinagar, Cantonment, Ballari – 583 104, Karnataka',
      LicNo: '10013043000643',
    },
    {
      SlNo: 27,
      Code: 'RR',
      Name: 'Raichur, Ballari, Koppal & Vijayanagara Co-operative Milk Union Limited',
      Address: 'Raichur Dairy, Raichur – 584 134, Karnataka',
      LicNo: '11219324000117',
    },
    {
      SlNo: 28,
      Code: 'BU',
      Name: 'Raichur, Ballari, Koppal & Vijayanagara Co-operative Milk Union Limited',
      Address: 'Budgumpa dairy, Koppal – 583 228, Karnataka',
      LicNo: '10018043002051',
    },
    {
      SlNo: 29,
      Code: 'SS',
      Name: 'Shivamogga, Davanagere & Chitradurga Co-operative Milk Union Limited',
      Address: 'Shivamogga Dairy, Machenahalli , Nidige Post, Shivamogga – 577 222, Karnataka',
      LicNo: '10012043000196',
    },
    {
      SlNo: 30,
      Code: 'SD',
      Name: 'Shivamogga, Davanagere & Chitradurga Co-operative Milk Union Limited',
      Address: 'Davanagere Dairy, Doddabathi Post, Davanagere – 577 566, Karnataka',
      LicNo: '10012043000202',
    },
    {
      SlNo: 31,
      Code: 'SI/DS',
      Name: 'Sirsi Dairy Private Limited',
      Address: 'Survey No. 41, Hanumanti Village, Kumata Road, Sirsi – 581 450, Karnataka',
      LicNo: '11221329000351',
    },
    {
      SlNo: 32,
      Code: 'TD',
      Name: 'Tumkur Co-operative Milk Union Limited',
      Address: 'B.H Road, Mallasandra, Tumkur – 572 107, Karnataka',
      LicNo: '10012043000242',
    },
    {
      SlNo: 33,
      Code: 'VV',
      Name: 'Vijayapur & Bagalkot Co-operative Milk Union Limited',
      Address: 'Vijayapur Dairy, Butanal, Vijayapur – 586 103, Karnataka',
      LicNo: '10020043003402',
    },
    {
      SlNo: 34,
      Code: 'VB',
      Name: 'Vijayapur & Bagalkot Co-operative Milk Union Limited',
      Address: 'Bagalkot Dairy, Vijayapur – 587 102, Karnataka',
      LicNo: '11215301000249',
    },
    {
      SlNo: 35,
      Code: 'BI',
      Name: 'Nandini Ice Cream Plant, A Unit of KMF',
      Address: 'Sanjay Gandhi Nagar, Cantonment, Ballari – 583 104, Karnataka',
      LicNo: '11214305000123',
    },
    
  ];
  return (
    <div className="w-full h-full">
     <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-4">Milk Union Data</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Sl. No</th>
              <th className="px-4 py-2 border border-gray-300">Code</th>
              <th className="px-4 py-2 border border-gray-300">Manufacturing Address</th>
            </tr>
          </thead>
          <tbody>
            {milkData.map((data) => (
              <tr key={data.SlNo}>
                <td className="px-4 py-2 border border-gray-300 text-center">{data.SlNo}</td>
                <td className="px-4 py-2 border border-gray-300 text-center">{data.Code}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <strong>{data.Name}</strong>
                  <br />
                  {data.Address}
                  <br />
                  <strong>Lic. No. {data.LicNo}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default SecretInfo;
