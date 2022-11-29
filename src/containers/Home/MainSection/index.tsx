import Cards from './Cards';
import Form from './Form';

function MainSection() {
  return (
    <div className="main_section min-h-[100vh] dark:bg-[#202c37]">
      <Form />
      <Cards />
    </div>
  );
}

export default MainSection;
