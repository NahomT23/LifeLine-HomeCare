// import React from 'react';
// import { FaFacebook, FaTelegram, FaInstagram, FaTiktok } from 'react-icons/fa';
// import { BiMap, BiEnvelope, BiPhone } from 'react-icons/bi';
// import { Link } from 'react-scroll';
// import logoFooter from '../assets/images/logoFooter.jpg';

// function Footer() {
//   return (
//     <div className="footer-container bg-white py-4">
//       <footer>
//         <div className="footer-info flex flex-col md:flex-row justify-between px-4 md:px-10">
//           {/* About Section */}
//           <div className="footer-width fabout mb-6 md:mb-0 text-left">
//             <h2 className="text-xl font-bold mb-3">About</h2>
//             <h3 className="text-lg mb-3">
//               <em>
//                 <strong>Lifeline Adiss Homecare</strong>
//               </em>
//             </h3>
//             <div className="social-media mt-2 mb-0">
//               <ul className="flex gap-x-4">
//                 <li>
//                   <a href="#" className="hover:text-red-600">
//                     <FaFacebook size={24} />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-red-600">
//                     <FaTelegram size={24} />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-red-600">
//                     <FaInstagram size={24} />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-red-600">
//                     <FaTiktok size={24} />
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <img src={logoFooter} alt="logo" className="mt-0" style={{ width: '180px', height: '160px' }} />
//           </div>

//           {/* Quick Links Section */}
//           <div className="footer-width flink mb-6 md:mb-0 text-left">
//             <h2 className="text-xl font-bold mb-3">Quick Links</h2>
//             <ul className="flex flex-col gap-y-2">
//               <li>
//                 <Link
//                   to="home"
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className="cursor-pointer hover:text-red-600"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="aboutUs"
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className="cursor-pointer hover:text-red-600"
//                 >
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="services"
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className="cursor-pointer hover:text-red-600"
//                 >
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="testimonials"
//                   spy={true}
//                   smooth={true}
//                   offset={-70}
//                   duration={500}
//                   className="cursor-pointer hover:text-red-600"
//                 >
//                   Testimonials
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div className="footer-width fcontact text-left">
//             <h2 className="text-xl font-bold mb-4">Contact</h2>
//             <ul className="flex flex-col gap-y-3">
//               <li className="flex items-center gap-x-2">
//                 <BiMap size={24} className="cursor-pointer" />
//                 <p className="cursor-pointer">Ethiopia, Addis Ababa, Gabon St</p>
//               </li>
//               <li className="flex items-center gap-x-2">
//                 <BiEnvelope size={24} />
//                 <a href="mailto:lifeline@gmail.com" className="hover:text-red-600">
//                   lifelineadiss@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-x-2">
//                 <BiPhone size={24} />
//                 <a href="tel:+251921333221" className="hover:text-red-600">
//                   +251 321 465 897
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="copy-right text-center mt-2 text-sm text-gray-400">
//           <p>© COPYRIGHT 2024 LIFELINE ALL RIGHTS RESERVED.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';
import { FaFacebook, FaTelegram, FaInstagram, FaTiktok } from 'react-icons/fa';
import { BiMap, BiEnvelope, BiPhone } from 'react-icons/bi';
import { Link } from 'react-scroll';
import logoFooter from '../assets/images/logoFooter.jpg';

function Footer() {
  return (
    <div className="footer-container bg-white py-4">
      <footer>
        <div className="footer-info flex flex-col md:flex-row justify-between px-4 md:px-10">
          {/* About Section */}
          <div className="footer-width fabout mb-6 md:mb-0 text-left">
            <h2 className="text-xl font-bold mb-3">About</h2>
            <h3 className="text-lg mb-3">
              <em>
                <strong>Lifeline Adiss Homecare</strong>
              </em>
            </h3>
            <div className="social-media mt-2 mb-0">
              <ul className="flex gap-x-4">
                <li>
                  <a
                    href="https://www.facebook.com/Lifelineaddis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600"
                  >
                    <FaFacebook size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/lifelinehomebasedhealthcare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600"
                  >
                    <FaTelegram size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lifelineaddis_homecare?igsh=NTgzbzN3aTV4d3hw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600"
                  >
                    <FaInstagram size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@lifelineaddis?_r=1&_d=ed89l0bki5b79b&sec_uid=MS4wLjABAAAA4dzmj7yd4Jog9tJrehnjDe70s99wm0WGGcN1m-wxZv2gYZT90qbgweyUfAD_Cov-&share_author_id=7022287780811588613&sharer_language=en&source=h5_m&u_code=dcgj881c6m9j75&timestamp=1726044906&user_id=6831495299133326341&sec_user_id=MS4wLjABAAAAed_qf_1WWqlJrZO1BVAgJDOSoVHodl9qLjaxOtmmF0MmouwAi5wxize4FgJ6Dgp-&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7411471545317836550&share_link_id=a6fb9c09-3355-4bbf-9344-b7b7c7f41362&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b6880%2Cb5836&social_share_type=5&enable_checksum=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-600"
                  >
                    <FaTiktok size={24} />
                  </a>
                </li>
              </ul>
            </div>
            <img src={logoFooter} alt="logo" className="mt-0" style={{ width: '180px', height: '160px' }} />
          </div>

          {/* Quick Links Section */}
          <div className="footer-width flink mb-6 md:mb-0 text-left">
            <h2 className="text-xl font-bold mb-3">Quick Links</h2>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-red-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-red-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-red-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer hover:text-red-600"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-width fcontact text-left">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="flex flex-col gap-y-3">
              <li className="flex items-center gap-x-2">
                <BiMap size={24} className="cursor-pointer" />
                <a
                  href="https://www.bing.com/ck/a?!&&p=3964fa170ebe91deJmltdHM9MTcyNjAxMjgwMCZpZ3VpZD0zZjNkMjQ4ZC1jYTdkLTZjOWYtMzFmZi0zNzRhY2IwYTZkM2QmaW5zaWQ9NTQzNQ&ptn=3&ver=2&hsh=3&fclid=3f3d248d-ca7d-6c9f-31ff-374acb0a6d3d&u=a1L21hcHM_Jm1lcGk9MTA5fn5Ub3BPZlBhZ2V-QWRkcmVzc19MaW5rJnR5PTE4JnE9TGlmZWxpbmUlMjBBZGRpcyUyMGhvbWViYXNlZCUyMEhlYWx0aGNhcmUlMjglRTElODglOEIlRTElOEIlQUQlRTElOEQlOEQlRTElODglOEIlRTElOEIlQUQlRTElOEElOTUlMjAlRTElOEElQTAlRTElOEIlQjIlRTElODglQjUlMjAlRTElOEIlQTglRTElODklQTQlRTElODklQjUlRTElODglODglRTElODklQTQlRTElODklQjUlMjAlRTElODglODUlRTElOEElQUQlRTElODglOUQlRTElOEElOTMlMjkmc3M9eXBpZC5ZTjgwNTV4NjE0OTQ5ODY1MDI4NzIxODczOCZwcG9pcz05LjAwMzM2NjQ3MDMzNjkxNF8zOC43NzE1Mzc3ODA3NjE3Ml9MaWZlbGluZSUyMEFkZGlzJTIwaG9tZWJhc2VkJTIwSGVhbHRoY2FyZSUyOCVFMSU4OCU4QiVFMSU4QiVBRCVFMSU4RCU4RCVFMSU4OCU4QiVFMSU4QiVBRCVFMSU4QSU5NSUyMCVFMSU4QSVBMCVFMSU4QiVCMiVFMSU4OCVCNSUyMCVFMSU4QiVBOCVFMSU4OSVBNCVFMSU4OSVCNSVFMSU4OCU4OCVFMSU4OSVBNCVFMSU4OSVCNSUyMCVFMSU4OCU4NSVFMSU4QSVBRCVFMSU4OCU5RCVFMSU4QSU5MyUyOV9ZTjgwNTV4NjE0OTQ5ODY1MDI4NzIxODczOH4mY3A9OS4wMDMzNjZ-MzguNzcxNTM4JnY9MiZzVj0xJkZPUk09TVBTUlBM&ntb=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Ethiopia, Addis Ababa, Gabon St
                </a>
              </li>
              <li className="flex items-center gap-x-2">
                <BiEnvelope size={24} />
                <a href="mailto:lifeline@gmail.com" className="hover:text-red-600">
                  lifelineadiss@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-x-2">
                <BiPhone size={24} />
                <a href="tel:+251921333221" className="hover:text-red-600">
                  +251 321 465 897
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
