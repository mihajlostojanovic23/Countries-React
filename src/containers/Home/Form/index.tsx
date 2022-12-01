import Search from './Search';
import SelectArea from './Select';

function Form() {
  return (
    <div className="py-[40px] w-full flex max-[658px]:block justify-between items-center px-6  ">
      <Search />
      <SelectArea />
    </div>
  );
}

export default Form;
