import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative mb-80">
      <div className="bg-[#9538E2] min-h-[600px] text-center rounded-b-2xl">
        <div className="text-center">
          <div className="w-10/12 mx-auto text-center pt-12">
            <h1 className="text-5xl font-bold text-white text-center">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-white text-center">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white border py-2 px-5 text-purple-600 text-lg rounded-3xl text-center font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-2/4 left-64">
        <img
          className="w-[1062px] h-[563px] rounded-2xl"
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
