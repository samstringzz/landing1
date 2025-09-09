import React from "react";
import Link from "next/link";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Ashraf & Sultana",
      category: "Weddings",
      location: "Kano, Nigeria",
      date: "8/8/2024",
      time: "4:00:00 PM",
      image: "/img/portfolio/mas/01.jpg",
    },
    {
      id: 2,
      title: "Salma & Abdul",
      category: "Weddings",
      location: "Kano, Nigeria",
      date: "7/29/2024",
      time: "4:34:00 PM",
      image: "/img/portfolio/mas/02.jpg",
    },
    {
      id: 3,
      title: "Suleiman & Maryam",
      category: "Weddings",
      location: "Kano, Nigeria",
      date: "7/12/2024",
      time: "3:53:00 PM",
      image: "/img/portfolio/mas/03.jpg",
    },
  ];

  return (
    <div className="row">
      {events.map((event) => (
        <div key={event.id} className="col-lg-4">
          <div className="item-box">
            <div className="img">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="cont">
              <div className="info">
                <span className="date">
                  <i className="far fa-calendar-alt"></i> {event.date}
                </span>
                <span className="time">
                  <i className="far fa-clock"></i> {event.time}
                </span>
              </div>
              <h5>
                <Link href={`/events/${event.id}`}>
                  <a>{event.title}</a>
                </Link>
              </h5>
              <div className="location">
                <i className="fas fa-map-marker-alt"></i> {event.location}
              </div>
              <div className="category">{event.category}</div>
              <div className="btn-more">
                <Link href={`/events/${event.id}`}>
                  <a className="btn-curve btn-lit">
                    <span>Buy Now</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
