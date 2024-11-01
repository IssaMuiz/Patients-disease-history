/* eslint-disable react/prop-types */
const Rightsidebar = ({ data }) => {
  return (
    <div className="fixed hidden xl:flex right-0 top-0 bottom-0 w-[300px]  mr-10 mt-24 rounded-xl overflow-auto">
      <div className="bg-white p-4">
        <div>
          <div>
            {data.map((user, index) => {
              return (
                <div key={index} className="text-xl">
                  <div className=" flex flex-col pt-5 mb-6 items-center">
                    <img
                      className="mb-3 h-40 w-40"
                      src={user.profile_picture}
                      alt=""
                    />
                    <p className="font-semibold">{user.name}</p>
                  </div>
                  <div className="flex gap-5 items-center pl-4 mb-4">
                    <div>
                      <img
                        className="h-7 w-7"
                        src="assets/icons/BirthIcon.svg"
                        alt=""
                      />
                    </div>

                    <div className="text-sm">
                      <p className="font-semibold text-gray-500">
                        Date Of Birth
                      </p>
                      <p className="font-semibold">{user.date_of_birth}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center pl-4 mb-4">
                    <div>
                      <img
                        className="h-7 w-7"
                        src="assets/icons/FemaleIcon.svg"
                        alt=""
                      />
                    </div>

                    <div className="text-sm">
                      <p className="font-semibold text-gray-500">Gender</p>
                      <p className="font-semibold">{user.gender}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center pl-4 mb-4">
                    <div>
                      <img
                        className="h-7 w-7"
                        src="assets/icons/PhoneIcon.svg"
                        alt=""
                      />
                    </div>

                    <div className="text-sm">
                      <p className="font-semibold text-gray-500">
                        Contact info.
                      </p>
                      <p className="font-semibold">{user.phone_number}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center pl-4 mb-4">
                    <div>
                      <img
                        className="h-7 w-7"
                        src="assets/icons/PhoneIcon.svg"
                        alt=""
                      />
                    </div>

                    <div className="text-sm">
                      <p className="font-semibold text-gray-500">
                        Emergency Contacts
                      </p>
                      <p className="font-semibold">{user.emergency_contact}</p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center pl-4 mb-4">
                    <div>
                      <img
                        className="h-7 w-7"
                        src="assets/icons/InsuranceIcon.svg"
                        alt=""
                      />
                    </div>

                    <div className="text-sm">
                      <p className="font-semibold text-gray-500">
                        Insurance Provider
                      </p>
                      <p className="font-semibold">{user.insurance_type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <button
            type="button"
            className="rounded-full bg-[#01F0D0] w-60 font-semibold p-2 text-sm ml-4 mt-5"
          >
            Show All Information
          </button>
        </div>
      </div>
      <div className="bg-white mt-5 rounded-xl p-7">
        <h2 className="mb-8">Lab Results</h2>
        {data.map((user, index) => (
          <div key={index}>
            <div className="text-sm flex justify-between mb-3">
              <p>{user.lab_results[0]}</p>
              <img
                className="h-4 w-4"
                src="assets/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt=""
              />
            </div>
            <div className="text-sm flex h-8 ] pt-2 px-1 w-[230px] bg-gray-300 justify-between mb-3">
              <p>{user.lab_results[1]}</p>
              <img
                className="h-4 w-4"
                src="assets/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt=""
              />
            </div>

            <div className="text-sm flex justify-between mb-3">
              <p>{user.lab_results[2]}</p>
              <img
                className="h-4 w-4"
                src="assets/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt=""
              />
            </div>
            <div className="text-sm flex justify-between mb-3">
              <p>{user.lab_results[3]}</p>
              <img
                className="h-4 w-4"
                src="assets/icons/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rightsidebar;
