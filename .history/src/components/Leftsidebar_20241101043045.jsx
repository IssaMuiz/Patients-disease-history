const Leftsidebar = () => {
  const indexBackground = 3;
  const patients = [
    {
      id: "1",
      image: "assets/images/Layer 8.png",
      name: "Emily Williams",
      gender: "Female",
      age: 18,
    },
    {
      id: "2",
      image: "assets/images/Layer 1.png",
      name: "Ryan Johnson",
      gender: "Male",
      age: 45,
    },
    {
      id: "3",
      image: "assets/images/Layer 3.png",
      name: "Brandon Mitchell",
      gender: "Male",
      age: 36,
    },
    {
      id: "4",
      image: "assets/images/Layer 2.png",
      name: "Jessica Taylor",
      gender: "Female",
      age: 28,
    },
    {
      id: "5",
      image: "assets/images/Layer 6.png",
      name: "Samantha Johnson",
      gender: "Female",
      age: 56,
    },
    {
      id: "6",
      image: "assets/images/Layer 12.png",
      name: "Ashley Martinez",
      gender: "Female",
      age: 54,
    },
    {
      id: "7",
      image: "assets/images/Layer 10.png",
      name: "Olivia Brown",
      gender: "Female",
      age: 32,
    },
    {
      id: "8",
      image: "assets/images/Layer 9.png",
      name: "Tyler Davis",
      gender: "Male",
      age: 19,
    },
    {
      id: "9",
      image: "assets/images/Layer 4.png",
      name: "Kevin Anderson",
      gender: "Male",
      age: 30,
    },
    {
      id: "10",
      image: "assets/images/Layer 5.png",
      name: "Dyian Thompson",
      gender: "Male",
      age: 36,
    },
    {
      id: "11",
      image: "assets/images/Layer 7.png",
      name: "Nathan Evans",
      gender: "Male",
      age: 58,
    },
    {
      id: "12",
      image: "assets/images/pexels-photo-1222271.png",
      name: "Mike Nolan",
      gender: "Male",
      age: 31,
    },
  ];
  return (
    <aside className="fixed hidden lg:flex bg-white left-0 top-0 bottom-0 w-[300px] mt-24 rounded-xl overflow-scroll ml-10 overflow-x-hidden scrollbar z-10">
      <div className="flex font-semibold text-lg ml-10 p-4 items-center pt-52 flex-col justify-center">
        <div className="">
          <p>Patients</p>
          <img
            src="assets/icons/search_FILL0_wght300_GRAD0_opsz24.svg"
            alt="search-icon"
          />
        </div>
        <div>
          {patients.map((patient, index) => (
            <div
              className={`flex items-center justify-between   mt-5  ${
                index === indexBackground && "bg-[#01F0D0] w-[265px] px-2"
              } `}
              key={index}
            >
              <div className="flex gap-2 items-center ">
                <img src={patient.image} alt="" />
                <div className="text-sm mr-4">
                  <p className="font-semibold">{patient.name}</p>
                  <p className="text-gray-400 ">
                    {patient.gender} <span className="ml-1">{patient.age}</span>
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="assets/icons/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Leftsidebar;
