const JobsCard = ({ category }) => {
  return (
    <div className="bg-[#E2E8F0] shadow-lg rounded-lg p-8">
      <img
        className="w-12 bg-gray-300 mt-3 p-2 rounded-md"
        src={category.img}
        alt=""
      />
      <h1 className="text-xl font-bold my-4">{category.title}</h1>
      <h2 className="font-semibold py-3">
        {category.availableNumber}+ Jobs Available
      </h2>
    </div>
  );
};

export default JobsCard;
