import React, { useState, useRef, useEffect } from 'react';
import { team } from '../components/teamData'
import { CiCircleRemove } from "react-icons/ci";

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [visibleMembers, setVisibleMembers] = useState([]);
  const popupRef = useRef(null);

  const handleLearnMore = (member) => {
    setSelectedMember(member);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedMember]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleMembers((prev) => [...prev, entry.target.dataset.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const elements = document.querySelectorAll('.team-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      <div className="bg-gray-50 pb-10">
        <p id="ourTeam"></p>
      </div>
      <div className="flex items-center justify-center bg-gray-50">
        <strong className="text-3xl font-extrabold text-red-600">Meet Our Team</strong>
      </div>

      <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-50">
        {team.map((member) => (
          <div
            key={member.id}
            data-id={member.id}
            onDoubleClick={() => handleLearnMore(member)}
            className={`team-card bg-white rounded-lg shadow-sm shadow-red-500 p-4 w-full max-w-[320px] sm:max-w-[300px] md:max-w-[340px] text-center transition-transform duration-500 ease-in-out
              ${visibleMembers.includes(member.id.toString()) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              hover:shadow-md hover:shadow-red-600 flex flex-col justify-between`}
          >
            <div>
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full mx-auto mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover"
              />
              <p className="text-lg sm:text-xl font-bold text-red-600">{member.name}</p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{member.description}</p>
            </div>
            <button
              onClick={() => handleLearnMore(member)}
              className="bg-red-600 text-white py-2 rounded mt-4 hover:bg-red-700"
            >
              Learn More
            </button>
          </div>
        ))}

        {selectedMember && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div
              ref={popupRef}
              className="bg-white rounded-lg p-6 w-full max-w-[850px] h-auto md:h-[500px] relative flex flex-col md:flex-row"
            >
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 text-gray-950 hover:text-red-600 text-3xl transition-colors duration-300"
              >
                <CiCircleRemove size={35} />
              </button>
              <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-md"
                />
                <p className="text-lg font-extrabold text-red-600 mt-4 text-center mr-20">
                  {selectedMember.name}
                </p>
              </div>
              <div className="md:ml-6 flex-grow mt-4 md:mt-0">
                <p className="text-red-600 mb-4 font-extrabold text-lg md:text-xl">
                  {selectedMember.description}
                </p>
                <p className="text-red-950 text-justify text-xs sm:text-sm md:text-sm">
                  {selectedMember.learnMore}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurTeam;

