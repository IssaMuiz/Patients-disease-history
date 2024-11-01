const Navbar = () => {
  return (
    <nav className="fixed rounded-full bg-white items-center  top-0 left-0 right-0">
      <div className="flex text-lg p-4 justify-around">
        <div className="left-nav hidden lg:flex">
          <div>
            <img
              className="h-9"
              src="public/assets/icons/TestLogo.svg"
              alt=""
            />
          </div>
        </div>
        <div className="middle-nav text-sm font-semibold flex gap-3">
          <div className="flex items-center gap-2">
            <img
              className="h-4 w-4"
              src="public/assets/icons/home_FILL0_wght300_GRAD0_opsz24.svg"
              alt="home-icon"
            />
            <p>Overview</p>
          </div>
          <div className="flex items-center gap-2 bg-[#01F0D0] rounded-full p-3">
            <img
              className="h-4 w-4"
              src="public/assets/icons/group_FILL0_wght300_GRAD0_opsz24.svg"
              alt="group-icon"
            />
            <p>Patients</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="h-3 w-3"
              src="public/assets/icons/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
              alt="schedule-icon"
            />
            <p>Schedule</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="h-3 w-3"
              src="public/assets/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"
              alt="chat-bubble-icon"
            />
            <p>Message</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="h-3 w-3"
              src="public/assets/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
              alt="credit-card"
            />
            <p>Transactions</p>
          </div>
        </div>

        <div className="Rightnav flex items-center gap-2 sm:hidden lg:flex">
          <div>
            <img
              height={45}
              width={45}
              src="public/assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
              alt="senior-woman-img"
            />
          </div>
          <div className="text-sm mr-4 border-r px-5 ">
            <p className="font-semibold">Dr. Jose Simmons </p>
            <p className="text-gray-300">General practitioner</p>
          </div>
          <div className="flex gap-3">
            <img
              src="public/assets/icons/settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="setting-icon"
            />
            <img
              src="public/assets/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt="more-vert"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
