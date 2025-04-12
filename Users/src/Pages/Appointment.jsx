import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/App Context";
import { assets } from "../Assets/assets";
import RelatedDoc from "../Components/RelatedDoc";

function Appointment() {
  const { docId } = useParams();

  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [doctorInfo, setDoctorInfo] = React.useState(null);

  // states and function for dr.appointment slot booking
  const [docSlot, setDocSlot] = React.useState([]);
  const [slotIndex, setSlotIndex] = React.useState(0);
  const [slotTime, setSlotTime] = React.useState("");

  const getAvailableSlots = async () => {
    //Temporary data for available slots
    let allSlots = [];

    //getting the current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //getting the date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting the end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0);

      //setting hours and minutes
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      //setting the time slots
      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        //pushing the time slots
        timeSlots.push({
          date: new Date(currentDate),
          time: formattedTime,
        });
        //incrementing the time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 60);
      }
      //pushing the time slots to allSlots
      allSlots.push(timeSlots);
    }
    //setting the time slots to docSlot
    setDocSlot(allSlots);
  };
  // to view the slote data
  // useEffect(() => {
  //   console.log(docSlot);
  // }, [docSlot]);

  // Call the function to fetch available slots when the component mounts
  React.useEffect(() => {
    getAvailableSlots();
  }, [doctorInfo]);

  // Find the doctor with the matching docId
  const fatchDocinfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDoctorInfo(docInfo);
  };

  // Call the function to fetch doctor information when the component mounts
  React.useEffect(() => {
    fatchDocinfo();
  }, [docId, doctors]);

  // Display the doctor's information

  return (
    doctorInfo && (
      <div>
        {/* ----------Dr details ---------- */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-16">
          <div>
            <img
              className="bg-blue-300 w-full sm:max-w-72  rounded-lg"
              src={doctorInfo.image}
              alt=""
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-5 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {doctorInfo.name}
              <img className="w-3" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 ">
              <p>
                {doctorInfo.degree} - {doctorInfo.speciality}
              </p>
              <p className="py-0.5 px-2 border text-xs rounded-4xl">
                {doctorInfo.experience}
              </p>
            </div>
            <div>
              <p className="flex item-center gap-2 text-sm font-medium text-gray-900 mt-3">
                About
                <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {doctorInfo.about}
              </p>
            </div>
            <p>
              Appointment Fee:{" "}
              <span className="text-lg font-semibold text-gray-900">
                {currencySymbol}
                {doctorInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* ----------Appointment slot booking ---------- */}
        <div className="sm:ml-5 sm:pl-4 mt-4 font-mediumtext-gray-700">
          <p className="text-2xl font-semibold text-gray-900">Booking slote</p>
          <div className="flex gap-4 mt-4 w-full items-center overflow-x-scroll ">
            {docSlot.length &&
              docSlot.map((item, index) => (
                <div
                  key={index}
                  className={`text-center py-2 min-w-20 rounded-2xl cursor-pointer ${
                    index === slotIndex
                      ? "bg-blue-500 text-white"
                      : "border-1 text-gray-700"
                  }`}
                  onClick={() => {
                    setSlotIndex(index);
                  }}
                >
                  <p>{item[0] && daysOfWeek[item[0].date.getDay()]}</p>
                  <p>{item[0] && item[0].date.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex gap-4 mt-4 w-full items-center overflow-x-scroll scrollbar-visible ">
            {docSlot.length &&
              docSlot[slotIndex].map((item, index) => (
                <div
                  key={index}
                  className={`text-center py-2 min-w-20 rounded-xl cursor-pointer ${
                    item.time === slotTime
                      ? "bg-blue-500 text-white"
                      : " border-2 text-gray-700"
                  }`}
                  onClick={() => {
                    setSlotTime(item.time);
                  }}
                >
                  <p>{item.time}</p>
                </div>
              ))}
          </div>
          <div className=" mt-5 ">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">
              Book Appointment
            </button>
          </div>
        </div>
        {/* --------- Related Doctors list ----------- */}
        <div className="mt-20 sm:ml-5 sm:pl-4 mb-8">
          <p className="text-2xl font-semibold text-gray-900 ">
            Related Doctors list
          </p>
          <RelatedDoc docId={docId} speciality={doctorInfo.speciality} />
        </div>
      </div>
    )
  );
}

export default Appointment;
