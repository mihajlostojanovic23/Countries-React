// Components

import Cards from './CardSection';
import Form from './Form';

function Home() {
  return (
    <div className="min-h-[100vh] dark:bg-[#202c37]">
      <Form />
      <Cards />
    </div>
  );
}

export default Home;
