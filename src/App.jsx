import MoonToggleButton from './assets/moon-dark-theme.png';
import SearchIcon from './assets/search.png';
import { IoSearchSharp } from 'react-icons/io5';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header className='flex justify-between bg-gray-800 text-white py-6 sm:py-8 px-6 sm:px-16 lg:px-20'>
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
    <div className='flex justify-between py-6 sm:py-10 px-6 sm:px-16 lg:px-20'>
      <SearchByCountry />
      <FilterByRegion />
    </div>
  );
}

function SearchByCountry() {
  return (
    <div className='bg-gray-800 flex items-center gap-1 font-nunito w-[400px] px-8 rounded-md'>
      <IoSearchSharp className='text-white text-xl' />
      <input
        type='text'
        placeholder='Search for a country'
        className='bg-gray-800 py-3 px-2 w-96 rounded-r-md outline-none caret-white text-white'
      />
    </div>
  );
}

function FilterByRegion() {
  return (
    <div className='relative flex gap-3 font-nunito w-[280px] rounded-md bg-gray-800'>
      <select className='bg-gray-800 py-3 w-full px-3 rounded-md outline-none border-none text-white appearance-none'>
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

export default App;
