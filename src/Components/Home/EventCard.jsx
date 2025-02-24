const EventCard = ({ title, description, date, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
        <p className="event-date">{date}</p>
        <button className="register-button">REGISTER</button>
      </div>
    </div>
  );
};

export default EventCard;
