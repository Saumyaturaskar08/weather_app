import './App.css';
import Weathercard from "./components/Weathercard.js"
function App() {
  return (
    <>
   
  <header class="text-white body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a>
  <img
    src="https://weatherstack.com/site_images/weatherstack_logo_white.png"
    alt="Logo"
    class="w-10 h-10"
    style={{ width: '90%', height: '50px' }} // Use double curly braces for style
  />
</a>

    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-white">Pricing</a>
      <a class="mr-5 hover:text-white">Documentation</a>
      <a class="mr-5 hover:text-white">FAQ</a>
      <a class="mr-5 hover:text-white">Blog</a>
      <a class="mr-5 hover:text-white">Status</a>
    
    </nav>
    <div class="flex space-x-4">
  <button class="button-styles inline-flex items-center bg-transparent border border-gray-100 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    Log In
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
  <button class="button-styles inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-white text-base mt-4 md:mt-0">
    SIGN UP FREE
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  </button>
</div>
  </div>
  </header>

  <section
        className="text-white body-font" 
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Real-Time & Historical
              <br className="hidden lg:inline-block" />
              World Weather Data API
            </h1>
            <p className="mb-8 leading-relaxed">
            Retrieve instant, accurate weather information for
any location in the world in lightweight JSON format
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
                START USING THE API!
              </button>
              <h3>----It's free!</h3>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></div>
        </div>
      </section>

{/* // card */}

<Weathercard/>

</>
  );
}

export default App;

// //nuuu

