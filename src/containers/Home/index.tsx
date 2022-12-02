// Components

import Cards from './CardSection';
import Form from './Form';

function Home() {
  return (
    <div className="min-h-[100vh] dark:bg-[#202c37]">
      <Form />
      <Cards />
      {/* <div className="h-36 w-36 bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-yellow-400"></div> */}
    </div>
  );
}

export default Home;
