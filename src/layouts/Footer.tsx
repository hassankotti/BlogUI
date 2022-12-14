import React from "react";

const Footer = () => {
  return (
    <footer className='relative w-full'>
      <div className='w-full lg:h-24 py-3 my-auto bg-white border-t dark:border-heavy-metal-900 dark:bg-heavy-metal-900'>
        <div className='container'>
          <div className='text-heavy-metal-700 lg:relative dark:text-heavy-metal-200'>
            <div className='space-y-4 sm:space-y-0 items-center flex lg:flex-row justify-between  px-8 py-4 flex-col'>
              <div className='order-3 sm:order-1 mt-4'>
                <p className='mt-4 text-sm text-center  text-heavy-metal-500 sm:me-2 sm:pe-4  lg:text-left sm:border-heavy-metal-200 sm:mt-0 dark:text-heavy-metal-400 dark:border-heavy-metal-400'>
                  جميع الحقوق محفوظة
                  <a className='font-medium text-heavy-metal-600 dark:text-teal-500'> لشركة مدونة 2022 ©</a>
                </p>
              </div>

              <div className='flex items-center justify-center mt-4 lg:mt-0 sm:ml-2 sm:pl-2 sm:mt-0 lg:order-3 order-2'>
                <a href='#'>الشروط والاحكام</a>
              </div>

              <div className='lg:flex items-center justify-around mt-4 lg:mt-0 sm:me-2 sm:pe-2 sm:mt-0 space-x-4 space-x-reverse lg:order-2'>
                <div className='flex justify-around m-2 space-x-3 space-x-reverse divide-x'>
                  <a
                    href='#'
                    className='border rounded-full px-2 py-2 flex items-center justify-center bg-gray-50 dark:bg-heavy-metal-900 dark:border-heavy-metal-400'>
                    <svg
                      fill='none'
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 17 12'>
                      <path
                        d='M14.431.5H2.569c-.416 0-.815.168-1.109.465-.294.298-.46.701-.46 1.122v7.826c0 .42.166.824.46 1.122.294.297.693.464 1.11.465h11.86c.417 0 .816-.168 1.11-.465.294-.298.46-.701.46-1.122V2.087c0-.42-.166-.824-.46-1.122A1.562 1.562 0 0014.43.5v0zm-2.79 5.498l3.731-2.962v6.625l-3.73-3.663zM2.57 1.135h11.862c.25 0 .489.1.665.279.177.178.276.42.276.673v.142L9.334 7.022a1.245 1.245 0 01-1.545-.001L1.628 2.228v-.141c0-.253.1-.495.276-.673a.937.937 0 01.665-.28v0zm2.9 4.883L1.629 9.674V3.029L5.47 6.018zm8.962 4.847H2.569a.933.933 0 01-.801-.453L5.974 6.41l1.43 1.113a1.868 1.868 0 002.317 0l1.422-1.13 4.091 4.016a.947.947 0 01-.803.456v0z'
                        fill='currentColor'
                        stroke='currentColor'
                        strokeWidth='.3'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='border rounded-full px-2 py-2 flex items-center justify-center bg-gray-50 dark:bg-heavy-metal-900 dark:border-heavy-metal-400'>
                    <svg
                      fill='none'
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 10 16'>
                      <path
                        d='M6 16H3a.494.494 0 01-.36-.156.468.468 0 01-.14-.344V9H1a.522.522 0 01-.36-.14.521.521 0 01-.14-.36V6c0-.135.047-.25.14-.344A.494.494 0 011 5.5h1.5v-2c0-.48.094-.932.281-1.36A3.382 3.382 0 014.641.282C5.068.094 5.52 0 6 0h2c.135 0 .25.052.344.156A.445.445 0 018.5.5V3a.494.494 0 01-.156.36A.468.468 0 018 3.5H7a.494.494 0 00-.36.156A.468.468 0 006.5 4v1.5H9c.135 0 .25.052.344.156A.445.445 0 019.5 6a.295.295 0 01-.016.094.295.295 0 01-.015.093l-1 2.5a.587.587 0 01-.188.235A.52.52 0 018 9H6.5v6.5c0 .135-.052.25-.156.344A.445.445 0 016 16zm-2.5-1h2V8.5c0-.135.047-.25.14-.344A.494.494 0 016 8h1.656l.61-1.5H6a.522.522 0 01-.36-.14A.522.522 0 015.5 6V4c0-.417.146-.77.438-1.063A1.447 1.447 0 017 2.5h.5V1H6c-.688 0-1.276.245-1.766.734A2.407 2.407 0 003.5 3.5V6a.494.494 0 01-.156.36A.468.468 0 013 6.5H1.5V8H3c.135 0 .25.052.344.156A.445.445 0 013.5 8.5V15z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='border rounded-full px-2 py-2 flex items-center justify-center bg-gray-50 dark:bg-heavy-metal-900 dark:border-heavy-metal-400'>
                    <svg
                      fill='none'
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 17 16'>
                      <path
                        d='M12 16H5c-.625 0-1.208-.12-1.75-.36a4.386 4.386 0 01-1.438-.953A4.388 4.388 0 01.86 13.25 4.277 4.277 0 01.5 11.5v-7c0-.625.12-1.208.36-1.75.229-.552.546-1.031.953-1.438A4.388 4.388 0 013.25.36 4.277 4.277 0 015 0h7c.625 0 1.208.12 1.75.36.552.229 1.031.546 1.438.953.406.406.723.885.953 1.437.24.542.359 1.125.359 1.75v7c0 .625-.12 1.208-.36 1.75a4.387 4.387 0 01-.953 1.438 4.387 4.387 0 01-1.437.953c-.542.24-1.125.359-1.75.359zM5 1c-.48 0-.932.094-1.36.281a3.382 3.382 0 00-1.86 1.86c-.186.427-.28.88-.28 1.359v7c0 .48.094.932.281 1.36.177.427.422.802.735 1.124.323.313.698.558 1.125.735.427.187.88.281 1.359.281h7c.48 0 .932-.094 1.36-.281a3.383 3.383 0 001.859-1.86c.187-.427.281-.88.281-1.359v-7c0-.48-.094-.932-.281-1.36a3.266 3.266 0 00-.75-1.109 3.267 3.267 0 00-1.11-.75A3.345 3.345 0 0012 1H5zm3.5 11a3.95 3.95 0 01-1.563-.313 4.064 4.064 0 01-2.125-2.124A3.949 3.949 0 014.5 8c0-.552.104-1.073.313-1.563a4.065 4.065 0 012.125-2.125A3.949 3.949 0 018.5 4c.552 0 1.073.104 1.563.313a4.065 4.065 0 012.124 2.125c.209.49.313 1.01.313 1.562a3.95 3.95 0 01-.313 1.563 4.064 4.064 0 01-2.124 2.124A3.95 3.95 0 018.5 12zm0-7c-.833 0-1.542.292-2.125.875A2.893 2.893 0 005.5 8c0 .833.292 1.542.875 2.125A2.893 2.893 0 008.5 11c.833 0 1.542-.292 2.125-.875A2.893 2.893 0 0011.5 8c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 008.5 5zm4.5-.5c-.281 0-.52-.094-.719-.281A1.007 1.007 0 0112 3.5c0-.281.094-.516.281-.703A.98.98 0 0113 2.5c.281 0 .516.099.703.297A.928.928 0 0114 3.5a.98.98 0 01-.297.719A.954.954 0 0113 4.5z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                  <a
                    href='#'
                    className='border rounded-full px-2 py-2 flex items-center justify-center bg-gray-50 dark:bg-heavy-metal-900 dark:border-heavy-metal-400'>
                    <svg
                      fill='none'
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 17 14'>
                      <path
                        d='M16.234.797a.716.716 0 00-.375-.094.685.685 0 00-.359.094c-.23.167-.48.318-.75.453-.26.135-.52.25-.781.344a3.631 3.631 0 00-1.125-.672 3.265 3.265 0 00-1.25-.25 3.663 3.663 0 00-1.281.203 3.226 3.226 0 00-1.141.656c-.438.365-.771.792-1 1.282a3.47 3.47 0 00-.344 1.515 6.422 6.422 0 01-1.406-.25 7.51 7.51 0 01-1.297-.562 6.24 6.24 0 01-1.14-.829 6.414 6.414 0 01-.954-1.093.531.531 0 00-.25-.203.845.845 0 00-.344-.063.499.499 0 00-.343.125.61.61 0 00-.188.281c-.041.032-.172.401-.39 1.11-.22.698-.313 1.526-.282 2.484.021.417.084.86.188 1.328.104.459.276.922.516 1.39.24.47.562.928.968 1.376.406.448.917.864 1.531 1.25a6.77 6.77 0 01-1.593.5 9.003 9.003 0 01-1.672.156.782.782 0 00-.422.14.516.516 0 00-.25.329.67.67 0 00.047.422c.062.146.156.25.281.312.417.24.844.443 1.281.61.427.177.855.328 1.282.453.437.114.875.198 1.312.25.427.062.85.094 1.266.094a9.323 9.323 0 004.734-1.266A8.303 8.303 0 0014 9.282a9.593 9.593 0 00.875-2.329c.198-.833.297-1.708.297-2.625v-.156V4c.333-.365.61-.76.828-1.188.23-.427.396-.874.5-1.343a.573.573 0 00-.031-.375.666.666 0 00-.235-.297zM13.97 3.328a.619.619 0 00-.156.281 1.245 1.245 0 00-.047.329c.03.062.046.13.046.203.01.062.016.125.016.187 0 .802-.083 1.563-.25 2.281a7.925 7.925 0 01-.75 2 7.268 7.268 0 01-1.187 1.657c-.47.5-1.006.921-1.61 1.265-.469.271-.953.49-1.453.656a8.936 8.936 0 01-1.562.36 8.26 8.26 0 01-1.61.031 9.068 9.068 0 01-1.64-.25 9.337 9.337 0 001.25-.453 8.123 8.123 0 001.156-.672.574.574 0 00.25-.25.793.793 0 00.078-.36.479.479 0 00-.125-.327.575.575 0 00-.281-.204c-.959-.427-1.693-.937-2.203-1.53-.5-.595-.855-1.199-1.063-1.813a5.08 5.08 0 01-.25-1.813c.021-.583.083-1.083.188-1.5a7.21 7.21 0 001.203.969 7.708 7.708 0 002.906 1.172 8.417 8.417 0 001.625.125.627.627 0 00.453-.203c.146-.146.219-.302.219-.469v-.672c0-.333.062-.656.187-.969.136-.312.339-.588.61-.828.469-.427 1.031-.614 1.687-.562.656.041 1.182.297 1.578.765a.745.745 0 00.329.204.64.64 0 00.343 0 .675.675 0 01.219-.063c.094-.02.172-.047.234-.078a1.94 1.94 0 01-.203.281 2.604 2.604 0 00-.187.25z'
                        fill='currentColor'
                      />
                    </svg>
                  </a>
                </div>
                <div className='flex justify-center mx-auto '>
                  <button className='bg-orange-400 px-6 py-2 rounded text-white align-top tracking-wide lg:mt-0 mt-4' aria-label='be-writer'>
                    كن كاتبا معنا
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
