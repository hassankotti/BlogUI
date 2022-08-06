
// X Icon
<svg
  className='h-6 w-6'
  viewBox='0 0 24 24'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'>
  <path
    d='M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z'
    fill='currentColor'></path>
</svg>;


//Search Icon

<svg
  className='h-6 w-6'
  viewBox='0 0 24 24'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'>
  <path
    d='M18.677 19.607L12.962 13.891C10.4196 15.6985 6.91642 15.2564 4.90285 12.8739C2.88929 10.4915 3.03714 6.96361 5.24298 4.75802C7.44824 2.55147 10.9765 2.40298 13.3594 4.41644C15.7422 6.42989 16.1846 9.93347 14.377 12.476L20.092 18.192L18.678 19.606L18.677 19.607ZM9.48498 5.00001C7.58868 4.99958 5.95267 6.3307 5.56745 8.18745C5.18224 10.0442 6.15369 11.9163 7.89366 12.6703C9.63362 13.4242 11.6639 12.8529 12.7552 11.3021C13.8466 9.75129 13.699 7.64734 12.402 6.26402L13.007 6.86402L12.325 6.18402L12.313 6.17202C11.5648 5.4192 10.5464 4.99715 9.48498 5.00001Z'
    fill='currentColor'></path>
</svg>;

// Sun Icon


// Moon Icon


//old mark donw
<div dangerouslySetInnerHTML={{ __html: html }} />;
 
 //old menu

 <div
   className={`${
     isMenuOpen ? "hidden" : "hidden"
   }  'hidden  absolute top-20  bg-white border dark:border-heavy-metal-400 rounded inset-x-0 '`}>
   <ul className='flex-col  divide-y'>
     <li>
       <a
         href=''
         className='border-teal-300 border-r block pl-3 pr-4 py-2 border-l-4  text-base font-normal text-teal-50 bg-teal-500 focus:outline-none focus:text-teal-50 focus:bg-teal-500 focus:border-teal-700 transition duration-150 ease-in-out'>
         الرئيسية
       </a>
     </li>
     <li>
       <a
         href=''
         className=' border-r block pl-3 pr-4 py-2 border-l-4  text-base font-normal  focus:outline-none focus:text-teal-50 focus:bg-teal-500 focus:border-teal-700 transition duration-150 ease-in-out'>
         المقالات
       </a>
     </li>
     <li>
       <a
         href=''
         className=' border-r block pl-3 pr-4 py-2 border-l-4  text-base font-normal  focus:outline-none focus:text-teal-50 focus:bg-teal-500 focus:border-teal-700 transition duration-150 ease-in-out'>
         الدراسات والتقارير
       </a>
     </li>
   </ul>
 </div>;



//navigator
              <button
                aria-label='Menu'
                className='p-2  text-heavy-metal-700 rounded-md lg:hidden dark:text-heavy-metal-300 focus:outline-none' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon className='w-6 h-6' />
              </button>
              <a
                href='https://kotticrm.test/dashboard'
                className='flex items-center flex-shrink-0 '>
                <span className='ml-1 text-heavy-metal-700 capitalize text-xl font-medium  dark:text-white'>
                  مدونة | Blog
                </span>
              </a>
            </div>
            <div className='flex-1'>
              <ul className='lg:flex hidden justify-start space-x-reverse space-x-12'>
                {navlist.map((item, index) => {
                  return <NavItem key={index} item={item} />;
                })}

              </ul>
            </div>
            <div className='flex items-center justify-end -ml-2 lg:w-1/5'>
              <div className="relative flex items-center space-x-2 space-x-reverse text-heavy-metal-700 dark:text-heavy-metal-200">
                <Search />
                <ThemeToggle />

                {/* responsice menu */}
                <ResponsiveMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

              </div>
            </div>

              const [articles, setArticles] = useState();
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  async function getAllData() {
    try {
      const res = await getdata("/posts/1");

      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      console.log('-----');
      console.log(result);
      console.log('-----');

      setArticles(result.data);
    } catch (err) {
      console.log("error");
    }
  }
    useEffect(() => {
      getAllData();
    }, []);