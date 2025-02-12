import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {

    const handleNavigate = () => {
        window.location.href = 'https://chat.whatsapp.com/Cmt24g0JEGmAB9SZCaPIfr'; // Replace with your actual WhatsApp group link
      };

      const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to top
      };

  return (
    <div>
            <div className="font-lora w-full bg-dark">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            
                        <a href="#" className="flex items-center">
                            <img 
                            src="https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vydb6bzd2vennrzyf2so" // Replace with the correct logo path
                             alt="Logo" 
                                className="h-8 w-8 mr-2 rounded-full" // Adjust the height, width, and spacing as needed
                            />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                FOOTPRINTS
                            </span>
                            </a>                            
                            
                            <div className="mt-1 pl-1 pt-2 text-s text-gray-400">
                              <p><Link to="/">Alumni Association</Link></p>
                              <p><Link to="/">Pondicherry University</Link></p>
                              <p><Link to="https://www.pondiuni.edu.in/">Department of Computer Science</Link></p>
                            </div>

                            <p className="py-8 text-sm text-gray-200 lg:max-w-xs text-center lg:text-left">Join now to become part of the growing TechRoots alumni community and stay engaged with the university.</p>
                            <button type='button' onClick={handleNavigate} className="py-2.5 px-5 h-9 block w-fit bg-primary rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-primary-hover lg:mx-0">
                                Join Now
                            </button>
                        </div>
    
                        <div className="lg:mx-auto text-left  ">
                            <h4 className="font-playfair font-extrabold text-lg text-white mb-7">General Information</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6" onClick={scrollToTop}><Link to="/"  className="text-gray-400 hover:text-light  ">Home</Link></li>
                                <li className="mb-6" onClick={scrollToTop}><Link to="/About"  className=" text-gray-400 hover:text-light   ">About Us</Link></li>
                                <li className="mb-6" onClick={scrollToTop}><Link to=""  className=" text-gray-400 hover:text-light   ">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="lg:mx-auto text-left ">
                            <h4 className="text-lg text-white font-playfair font-extrabold  mb-7">Alumni & Engagement</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6" onClick={scrollToTop}><Link to="/Events"  className="text-gray-400 hover:text-light  ">Events</Link></li>
                                <li className="mb-6" onClick={scrollToTop}><Link to="/News"  className=" text-gray-400 hover:text-light  ">News</Link></li>
                                <li className="mb-6" onClick={scrollToTop}><Link to="/AlumniLogin"  className=" text-gray-400 hover:text-light  ">Alumni Login</Link></li>
                            </ul>
                        </div>
                        <div className="lg:mx-auto text-left">
                            <h4 className="text-lg text-white font-playfair font-extrabold  mb-7">Legal & Support</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6" onClick={scrollToTop}><Link to=""  className="text-gray-400 hover:text-light  ">Privacy Policy</Link></li>
                                <li className="mb-6" onClick={scrollToTop}><Link to=""  className=" text-gray-400 hover:text-light  ">Terms & Conditions</Link></li>
                                <li className="mb-6" onClick={scrollToTop}><Link to=""  className=" text-gray-400 hover:text-light  ">FAQs</Link></li>
                            </ul>
                        </div>
                        <div className="lg:mx-auto text-left">
                            <h4 className="text-lg text-white font-playfair font-extrabold  mb-7">Donate</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6"><a href="javascript:;"  className="text-gray-400 hover:text-light ">Donate</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="py-7 border-t border-gray-400">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-light ">©<a href="https://pagedone.io/">FootPrints</a> 2024. All rights reserved.</span>
                            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                                
                                
                                
                                <a href="" target='blank' className="w-9 h-9 rounded-full bg-gray-900 flex justify-center items-center hover:bg-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g id="Social Media">
                                    <path id="Vector" d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" fill="white"/>
                                    </g>
                                </svg>
                                </a>

                                <a href="https://www.youtube.com/@footprints_PUDoCS" target='blank' className="w-9 h-9 rounded-full bg-gray-900 flex justify-center items-center hover:bg-primary text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M23.498 6.186c-.284-1.06-1.118-1.895-2.18-2.18C19.79 3.5 12 3.5 12 3.5s-7.79 0-9.318.506c-1.06.284-1.895 1.118-2.18 2.18C.998 7.714.998 12 .998 12s0 4.286.504 5.814c.284 1.06 1.118 1.895 2.18 2.18C4.21 20.5 12 20.5 12 20.5s7.79 0 9.318-.506c1.06-.284 1.895-1.118 2.18-2.18.504-1.528.504-5.814.504-5.814s0-4.286-.504-5.814zM9.798 15.429V8.571l6.36 3.429-6.36 3.429z" />
                                    </svg>
                                </a>


                                
                                <a href="https://www.instagram.com/footprints_pudocs?igsh=cTdicnRnYmc0MzFy" target='blank'  className="w-9 h-9 rounded-full bg-gray-900 flex justify-center items-center hover:bg-primary">
                                    <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1509 2.42713 3.52442 2.31435 4.21142 2.28358C4.95417 2.24991 5.17729 2.24319 7.0582 2.24319C8.9391 2.24319 9.16244 2.25047 9.90582 2.28358C10.5928 2.31441 10.9656 2.42802 11.2144 2.52247C11.5434 2.64813 11.7781 2.79902 12.0249 3.04191C12.2717 3.2848 12.4239 3.51647 12.552 3.84069C12.6487 4.08513 12.7631 4.45324 12.7944 5.1303C12.8285 5.86291 12.8354 6.08219 12.8354 7.93669C12.8354 9.79119 12.8285 10.0105 12.7944 10.7431C12.7631 11.4201 12.6481 11.7881 12.552 12.0327C12.4239 12.3569 12.2714 12.5882 12.0249 12.8309C11.7784 13.0736 11.5434 13.2241 11.2144 13.3504C10.9663 13.4457 10.5928 13.5585 9.90582 13.5892C9.16306 13.6229 8.93994 13.6296 7.0582 13.6296C5.17645 13.6296 4.95395 13.6229 4.21142 13.5892ZM4.15307 1.03424C3.40294 1.06791 2.89035 1.18513 2.4427 1.3568C1.9791 1.53408 1.58663 1.77191 1.19446 2.1578C0.802277 2.54369 0.56157 2.93108 0.381687 3.38797C0.207498 3.82941 0.0885535 4.3343 0.0543922 5.07358C0.0196672 5.81402 0.0117188 6.05074 0.0117188 7.93663C0.0117188 9.82252 0.0196672 10.0592 0.0543922 10.7997C0.0885535 11.539 0.207498 12.0439 0.381687 12.4853C0.56157 12.9419 0.802334 13.3297 1.19446 13.7155C1.58658 14.1012 1.9791 14.3387 2.4427 14.5165C2.89119 14.6881 3.40294 14.8054 4.15307 14.839C4.90479 14.8727 5.1446 14.8811 7.0582 14.8811C8.9718 14.8811 9.212 14.8732 9.96332 14.839C10.7135 14.8054 11.2258 14.6881 11.6737 14.5165C12.137 14.3387 12.5298 14.1014 12.9219 13.7155C13.3141 13.3296 13.5543 12.9419 13.7347 12.4853C13.9089 12.0439 14.0284 11.539 14.062 10.7997C14.0962 10.0587 14.1041 9.82252 14.1041 7.93663C14.1041 6.05074 14.0962 5.81402 14.062 5.07358C14.0278 4.33424 13.9089 3.82913 13.7347 3.38797C13.5543 2.93135 13.3135 2.5443 12.9219 2.1578C12.5304 1.7713 12.137 1.53408 11.6743 1.3568C11.2258 1.18513 10.7135 1.06735 9.96388 1.03424C9.21256 1.00058 8.97236 0.992188 7.05876 0.992188C5.14516 0.992188 4.90479 1.00002 4.15307 1.03424Z" fill="currentColor"/>
                                        </svg>
                                        
                                </a>
                                <a href="https://in.linkedin.com/in/footprints-pudocs-b1a021305?original_referer=https%3A%2F%2Fwww.google.com%2F" target='blank' className="w-9 h-9 rounded-full bg-gray-900 flex justify-center items-center hover:bg-primary">
                                    <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.8794 11.5527V3.86835H0.318893V11.5527H2.87967H2.8794ZM1.59968 2.81936C2.4924 2.81936 3.04817 2.2293 3.04817 1.49188C3.03146 0.737661 2.4924 0.164062 1.61666 0.164062C0.74032 0.164062 0.167969 0.737661 0.167969 1.49181C0.167969 2.22923 0.723543 2.8193 1.5829 2.8193H1.59948L1.59968 2.81936ZM4.29668 11.5527H6.85698V7.26187C6.85698 7.03251 6.87369 6.80255 6.94134 6.63873C7.12635 6.17968 7.54764 5.70449 8.25514 5.70449C9.18141 5.70449 9.55217 6.4091 9.55217 7.44222V11.5527H12.1124V7.14672C12.1124 4.78652 10.8494 3.68819 9.16483 3.68819C7.78372 3.68819 7.17715 4.45822 6.84014 4.98267H6.85718V3.86862H4.29681C4.33023 4.5895 4.29661 11.553 4.29661 11.553L4.29668 11.5527Z" fill="currentColor"/>
                                        </svg>
                                        
                                </a>
                                <a href="https://www.facebook.com/footprintspucsalumni/" target='blank' className="w-9 h-9 rounded-full bg-gray-900 flex justify-center items-center hover:bg-primary">
                                    <svg className="w-[1rem] h-[1rem] text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.675 0h-21.35C.797 0 0 .797 0 1.775v20.45c0 .978.797 1.775 1.775 1.775h11.488v-9.304H9.691V10.27h3.572V7.405c0-4.064 2.45-6.342 6.078-6.342 1.75 0 3.59.335 3.59.335v3.97h-2.02c-1.626 0-2.112.902-2.112 1.832v2.42h3.705l-.593 3.421h-3.112v9.304h5.921c.978 0 1.775-.797 1.775-1.775V1.775C24 .797 23.203 0 22.675 0z" fill="currentColor"/>
                                    </svg>
                                    </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )         
}

export default Footer
