const Breadcrumb = ({ bread, pTitle }) => {
  return (
    <div className="container mx-auto mt-9 mb-6 lg:mb-[130px]">
      <div className="breadcrumbs bg-[url('/assets/images/banner/4.jpg')] bg-cover bg-center flex flex-col justify-center p-11 lg:p-[100px]">
        <h2 className="text-2xl xl:text-[45px] text-white font-bold">
          {pTitle || bread}
        </h2>
        <div className="brad-shape hidden md:block">
          <h2>Home / {bread}</h2>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
