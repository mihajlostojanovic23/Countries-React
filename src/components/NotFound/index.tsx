function NotFound() {
  return (
    <div className="not-found flex min-h-[100vh] w-full flex-col items-center bg-[white]  text-lg dark:bg-[#202c37]  ">
      <h1 className=" my-[50px] block text-[120px] text-[black] dark:text-[white]">
        404
      </h1>
      <span className="my-[50px] block text-[40px] dark:text-[white]">
        Ooops! Something wrong...
      </span>
    </div>
  );
}

export default NotFound;
