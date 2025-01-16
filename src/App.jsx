import { useEffect, useReducer, useState } from "react";

import MoonToggleButton from './assets/moon-dark-theme.png';
// import SearchIcon from './assets/search.png';
import { IoSearchSharp } from 'react-icons/io5';


const initialState = {
    loading: true,
    data: [],
};

const Reducer = (state, action) => {
    switch (action.type) {
        case "data":
            return {
                ...state,
                data: action.payload,
            };
        case "load":
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(Reducer, initialState);


    useEffect(() => {
        (async () => {
            try {
                const fetchedCountries = await fetch("https://restcountries.com/v3.1/all");
                const results = await fetchedCountries.json();

                dispatch({ type: "data", payload: results });
                dispatch({ type: "load", payload: false });
            } catch (e) {
                console.error(e);
            }
        })();
    }, [])

  return (
    <div
      style={{
        height: 'auto',
        width: '100vw',
        backgroundColor: '#202c37',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Header />
      <Main />
      <Countries countries={state?.data} loading={state?.loading}/>
    </div>
  );
}

function Header() {
  return (
    <header className='flex justify-between bg-[#2b3945] text-white py-6 sm:py-8 px-6 sm:px-16 lg:px-20'>
      <h1 className='text-base sm:text-lg lg:text-xl font-bold font-pathway'>
        GlobeFinder
      </h1>
      <ThemeToggle />
    </header>
  );
}

function ThemeToggle() {
  return (
    <nav className='flex gap-3 h-auto items-center'>
      <img
        src={MoonToggleButton}
        alt='Moon for dark theme'
        className='w-4 h-4 cursor-pointer'
      />
      <button className='text-base font-medium text-white font-pathway cursor-pointer hidden sm:block'>
        Dark Mode
      </button>
    </nav>
  );
}

function Main() {
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between py-6 sm:py-10 px-6 sm:px-16 lg:px-20'>
      <SearchByCountry />
      <FilterByRegion />
    </div>
  );
}

function SearchByCountry() {
  return (
    <div className='bg-[#2b3945] flex items-center gap-1 font-nunito w-full sm:w-[300px] lg:w-[400px] px-8 rounded-md'>
      <IoSearchSharp className='text-white text-xl' />
      <input
        type='text'
        placeholder='Search for a country'
        className='bg-[#2b3945] py-3 px-2 w-96 rounded-r-md outline-none caret-white text-white'
      />
    </div>
  );
}

function FilterByRegion() {
  return (
    <div className='relative flex gap-3 font-nunito w-full sm:w-[220px] lg:w-[280px] rounded-md bg-gray-800'>
      <select className='bg-[#2b3945] py-3 w-full px-3 rounded-md outline-none border-none text-white appearance-none'>
        <option value='' disabled selected className='hidden'>
          Filter By Region
        </option>
        <option value='Asia'>Asia</option>
        <option value='Africa'>Africa</option>
        <option value='Europe'>Europe</option>
        <option value='North America'>North America</option>
        <option value='South America'>South America</option>
      </select>

      <div className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-white'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Countries({ countries, loading }){
    return(
       <>
           {
               loading ? <h1>Loading</h1> : <section
                   className="text-white pb-20 px-6 sm:px-16 lg:px-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-10 xl:gap-12 overflow-hidden">
                   {countries.map((country, index) => {
                       return (
                           <div key={index} className="bg-[#2b3945] h-96 sm:h-80 xl:h-96 rounded-md overflow-hidden">
                               <div className="h-[50%]">
                                   <img src={countries[index]?.flags?.png} alt={country.name}
                                        className={"h-full w-full object-cover object-center"}/>
                               </div>
                               <div className={"p-6 font-pathway"}>
                                   <h1 className="font-semibold pb-5">{countries[index]?.name?.common}</h1>
                                   <h3>Population: {countries[index]?.population}</h3>
                                   <h3>Region: {countries[index]?.region}</h3>
                                   <h3>Capital: {countries[index]?.capital}</h3>
                               </div>
                           </div>
                       )
                   })}

               </section>
           }
       </>
    )
}


export default App;
