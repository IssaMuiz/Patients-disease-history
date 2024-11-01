/* eslint-disable react/prop-types */
import UserChart from "./UserChart";

const Mainpage = ({ data }) => {
  return (
    <main
      className="fixed top-0 bottom-0 xl:left-[350px] xl:right-[350px] mt-24 rounded-2xl overflow-scroll overflow-x-hidden scrollbar bg-white mx-32
    "
    >
      <div className="mx-auto p-5 flex flex-col">
        <div className="p-4 ">
          <div className="mb-5 font-semibold">
            <h1 className="mb-5">Diagnosis History</h1>
          </div>
          <div className="bg-[#c8c4d4] rounded-2xl">
            <UserChart />
          </div>
          <div className="flex gap-4 mt-5 text-base ">
            <div className="bg-[#E0F3FA] rounded-2xl w-[200px] p-2">
              <img src="assets/icons/respiratory rate.svg" alt="" />
              <p className="text-lg font-semibold">Respiratory Rate</p>
              <h2 className="font-bold text-xl mb-3">20 bpm</h2>
              <p>Normal</p>
            </div>
            <div className="bg-[#FFE6F1]  rounded-2xl w-[200px] p-2">
              <img src="assets/icons/temperature.svg" alt="" />
              <p className="text-lg font-semibold">Temperature</p>
              <h2 className="font-bold text-xl mb-3">98.6 &deg;F</h2>
              <p>Normal</p>
            </div>
            <div className="bg-[#E0F3FA]  rounded-2xl w-[200px] p-2">
              <img src="assets/icons/HeartBPM.svg" alt="" />
              <p className="text-lg font-semibold">Heart Rate</p>
              <h2 className="font-bold text-xl mb-3">78 bpm</h2>
              <div className="flex gap-2">
                <img src="assets/icons/ArrowDown.svg" alt="" />
                <p>Lower than Average</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-white p-3  rounded-2xl">
          <h1 className="mb-5">Diagnostic List</h1>

          <div>
            {data.map((item, index) => {
              const diagnosisName = item.diagnostic_list.map(
                (item) => item.name
              );
              const diagnosisDescription = item.diagnostic_list.map(
                (item) => item.description
              );
              const diagnosisStatus = item.diagnostic_list.map(
                (item) => item.status
              );

              if (diagnosisName) {
                return (
                  <div key={index}>
                    <table className="text-base">
                      <thead className="bg-gray-200 rounded-full">
                        <tr>
                          <th className="px-6">Problem/Diagnosis</th>
                          <th className="px-6">Description</th>
                          <th className="px-6">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-6">{diagnosisName[0]}</td>
                          <td className="px-6">{diagnosisDescription[0]}</td>
                          <td className="px-6">{diagnosisStatus[0]}</td>
                        </tr>
                        <tr>
                          <td className="px-6">{diagnosisName[1]}</td>
                          <td className="px-6">{diagnosisDescription[1]}</td>
                          <td className="px-6">{diagnosisStatus[1]}</td>
                        </tr>
                        <tr>
                          <td className="px-6">{diagnosisName[2]}</td>
                          <td className="px-6">{diagnosisDescription[2]}</td>
                          <td className="px-6">{diagnosisStatus[2]}</td>
                        </tr>
                        <tr>
                          <td className="px-6">{diagnosisName[3]}</td>
                          <td className="px-6">{diagnosisDescription[3]}</td>
                          <td className="px-6">{diagnosisStatus[3]}</td>
                        </tr>
                      </tbody>
                    </table>

                    <p></p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Mainpage;
