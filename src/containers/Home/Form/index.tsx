import Search from './Search';
import SelectArea from './Select';

function Form() {
  return (
    <div className="flex w-full flex-col  items-center justify-between py-[40px] px-6 sm:flex-col sm:justify-center  md:flex-row md:justify-between  ">
      <Search />
      <SelectArea />
    </div>
  );
}

export default Form;
