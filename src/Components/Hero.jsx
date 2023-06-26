const Hero = () => {
  return (
    <div className="h-[500px] bg-slate-200">
      <h1>Find great places to work</h1>
      <p>Get access to millions of Enginer reviews</p>
      <div>
        <div>
          <label htmlFor="">Engniar name or job title</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-outline btn-primary">Primary</button>
      </div>
    </div>
  );
};

export default Hero;
