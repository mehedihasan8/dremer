const Hero = () => {
  return (
    <div className="bg-slate-200 px-4  py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className=" md:py-20 md:pl-48 ">
        <h1 className="text-5xl font-semibold">Find great engineer to work</h1>
        <p className="text-xl my-3">
          Get access to millions of engineer reviews
        </p>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <label htmlFor="">
              <span className="text-lg font-semibold mb-4">
                Engineer name or job title
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered mt-1 md:w-[600px]"
            />
          </div>
          <button className="btn2 mt-9 md:w-[200px]">Find Engineer</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
