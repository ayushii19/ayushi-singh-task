import React from "react";

const Venue = () => {
  const cardArray = [
    {
      title: "OREA Banquet Hall, Haridwar (UK)",
      imgUrl: "https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-1.jpg",
    },
    {
      title: "OREA Spa & Resort, Gaya (BR)",
      imgUrl: "https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-2.jpg",
    },
    {
      title: "OREA Green Golf, Rajgir (BR)",
      imgUrl: "https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-3.jpg",
    },
    {
      title: "OREA Continental, Hyderabad (AP)",
      imgUrl: "https://www.jaypeehotels.com/images/wedding-page/blog-3.jpg",
    },
    {
      title: "OREA Atlantic, Delhi (NCR)",
      imgUrl: "https://www.jaypeehotels.com/images/wedding-page/other-service-1.jpg",
    },
    {
        title: "OREA Siddharth, Mussorrie (UK)",
        imgUrl: "https://www.jaypeehotels.com/images/wedding-page/our%20venus%20-5.jpg"
    }
  ];

  return (
    <div>
      <div className="venues">
        <h1>
          <u>Our Venues</u>
        </h1>
        <div className="row1">
          {cardArray.map((value) => {
            return (
              <div className="card">
                    <img src={value.imgUrl}></img>
                    <div className="container">
                        <span>{value.title}</span>
                    
                        <div className="btn">
                            <button className="detbtn">Details</button>
                            <button className="bookbtn">Book</button>
                        </div>
                    </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="services">
        <h1>
          <u>Services</u>
        </h1>
        <div className="row2">
          <img className="pic" src="https://www.jaypeehotels.com/images/wedding-page/facilities-1.png"></img>
          <div className="text">
            <h4>Beauty Rituals</h4>
            <p>
              Get that golden glow for your big day with our tailor-made spa
              experiences and journeys. With handpicked, highly trained
              therapists and best of the industry products featuring only the
              purest extracts of natural ingredients, the experience is both
              holistically therapeutic and is very personal thus helping you
              relax before the D-Day as well.
            </p>
          </div>
        </div>
        <div className="row3">
          <div className="text">
            <h4>Creative Catering</h4>
            <p>
              The wedding feasts are as legendary as the Executive chefs across
              all the Jaypee properties. The creative menus take you on a
              culinary journey with an array of options ranging from local to
              international cuisines.
            </p>
          </div>
          <img className="pic" src="https://www.jaypeehotels.com/images/wedding-page/facilities-2.png"></img>
        </div>
        <div className="row4">
          <img className="pic" src="https://www.jaypeehotels.com/images/wedding-page/facilities-3.png"></img>
          <div className="text">
            <h4>Wedding Boutique</h4>
            <p>
              We believe in creating the most wonderful foundation for what we
              hope turns out to be the most beautiful journey of your life. We
              have a team of specialist wedding planners with years of
              experience, to guide you at every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
