import React, { useState, useEffect } from "react";
import Stars from "../../assets/stars.jpg";
import { BsFillLightningChargeFill } from "react-icons/bs";

const AnnouncementTicker = ({ announcements }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [announcements]);

  const getAnimationDuration = () => {
    const averageWidth =
      announcements.reduce((total, announcement) => {
        const textWidth = announcement.text.length * 1.5;
        return total + textWidth;
      }, 0) / announcements.length;

    const baseDuration = averageWidth * 0.3;
    return window.innerWidth <= 768 ? baseDuration * 0.5 : baseDuration;
  };

  return (
    <div
      className="sticky relative overflow-hidden justify-center text-white p-2 announcement-container"
      style={{
        backgroundImage: `url(${Stars})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div
        className={`announcement-text ${
          window.innerWidth < 768 ? "gap-12" : "lg:gap-32 gap-56"
        }`}
        style={{
          animation: `scroll ${getAnimationDuration()}s linear infinite`,
        }}
      >
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="w-full text-center  flex items-center justify-center"
          >
            {announcement.icon && (
              <announcement.icon className="mr-2 text-yellow-200" />
            )}
            <p className="lg:text-md text-sm font-quicksand whitespace-nowrap">
              {announcement.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const announcements = [
    {
      id: 2,
      text: " 🚚 Free Shipping Weekend! Enjoy free shipping on all orders this Saturday and Sunday.",
      rate: "$1",
    },
    {
      id: 3,
      text: "🔔 New Arrivals! Explore the latest trends and styles in our collection. Shop now!",
      rate: "$1",
    },
    {
      id: 4,
      text: "💳 Double Reward Points: Earn double reward points on every purchase this week. Don't miss out!",
      rate: "$1",
    },
  ];

  return (
    <div>
      <AnnouncementTicker announcements={announcements} />
    </div>
  );
};

export default App;
