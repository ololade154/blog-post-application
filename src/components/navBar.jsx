export const NavBar = () => {
  return (
    <div>
      <nav className="flex w-full md:max-w-5xl items-center justify-between">
        <h1 className="text-[#f1356d] font-bold md:text-[25px] text-[18px]">
          The dojo Blog
        </h1>
        <div className=" flex gap-2.5 md:gap-4 items-center ">
          <a
            href="/"
            className="hover:text-[#f1356d] text-[16px] md:text-[15px] "
          >
            Home
          </a>
          <a
            href="/create"
            className="text-white bg-[#f1356d] rounded-sm px-2 py-1 text-[16px] md:text-[15px]"
          >
            New Blog
          </a>
        </div>
      </nav>
    </div>
  );
};
