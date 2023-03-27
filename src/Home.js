import React from "react";
const Home = () => {
  return (
    <div>
      <span className="greet">OREA GROUP'S WELCOME YOU....</span>
      <div className="special">
        <h1>
          <u>Things make us special</u>
        </h1>
        <img
          className="spe_pic"
          src="https://i.pinimg.com/originals/3e/23/f4/3e23f4dcc1f33ab51083b6ddcbf9a995.jpg"
        ></img>
      </div>
      <div className="highlights">
        <h1>
          <u>Some Highlights</u>
        </h1>
        <div className="high_content">
          <div className="image">
            <img src="https://th.bing.com/th/id/Rfbdae49e5b530d8aa9a183b6f07237c3?rik=218Gvva9VJH4mQ&riu=http%3a%2f%2fwww.bvv.cz%2fpublic%2fgalleries%2f44%2f43599%2forea-hotel-voronez-vor_1_04.jpg%3ffd9f308811b68197cd6fb36edda41dcb&ehk=BC17KMCpcvTLURCzKJ1xHjOfyGyXWdFDZHJgqIFsLzc%3d&risl=&pid=ImgRaw" />
          </div>
          <div className="high_para">
            <p>
              What makes a wedding truly special at Jaypee Hotels and Resorts is
              the range of specialized services on offer. With so much to
              organize, you can relax in the knowledge that we will take care of
              your every need, ensuring that your wedding day is everything you
              want it to be. Jaypee Hotels and Resorts offer a perfect
              destination that ensures a blend of traditional and exquisite
              modern luxuries, making your wedding a memorable one. Choose
              Jaypee Hotels and Resorts as your wedding destination and be rest
              assured that your wedding will be extra special.
            </p>
            <button className="explore">Explore More</button>
          </div>
        </div>
      </div>
      <div className="memories">
        <h1>
          <u>Sweet Memories</u>
        </h1>
        <div className="memo_content">
          <div className="contentslide1">
            <img
              className="mem1"
              src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
            <img
              className="mem1"
              src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
            <img
              className="mem1"
              src="https://images.pexels.com/photos/2060240/pexels-photo-2060240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
          </div>
          <div className="contentslide2">
            <img
              className="mem2"
              src="https://th.bing.com/th/id/OIP.r32N-_6ERD9lzfe1uXMjsAHaE8?w=241&h=180&c=7&o=5&pid=1.7"
            ></img>
            <img
              className="mem2"
              src="https://th.bing.com/th/id/OIP.mNaWQn_hscPVjUuFKiBFJgHaEr?w=309&h=195&c=7&o=5&pid=1.7"
            ></img>
          </div>
        </div>
      </div>
      <div className="destination">
        <h1>
          <u>Our Destinations</u>
        </h1>
        <div className="dest">
          <div className="column1">
            <button className="destbtn">Delhi NCR</button>
            <button className="destbtn">Patna</button>
            <button className="destbtn">Lucknow</button>
            <button className="destbtn">Bikaner</button>
            <button className="destbtn">Manali</button>
          </div>
          <div className="column2">
            <button className="destbtn">Varanasi</button>
            <button className="destbtn">Bhagalpur</button>
            <button className="destbtn">Gaya</button>
            <button className="destbtn">Rajgir</button>
            <button className="destbtn">Nalanda</button>
          </div>
          <div className="column3">
            <button className="destbtn">Hyderabad</button>
            <button className="destbtn">Nainital</button>
            <button className="destbtn">Haridwar</button>
            <button className="destbtn">Amritsar</button>
            <button className="destbtn">Jaipur</button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="exp">
          <p className="foot"><u>Experience</u></p>
          <ul className="one">
            <li>Picnic in Mussorrie</li>
            <li>Dine in the city Nawabs</li>
            <li>Visit Red city</li>
            <li>The royal table</li>
            <li>The city of lakes</li>
            <li>The land of Budha</li>
          </ul>
        </div>
        <div className="Follow">
        <p className="foot"><u>Follow us</u></p>
          <ul className="one">
            <li>facebook</li>
            <li>instagram</li>
            <li>whatsapp</li>
          </ul>
        </div>
        <div className="discovery">
        <p className="foot"><u>Discover</u></p>
          <ul className="one">
            <li>About us</li>
            <li>Our new letter</li>
            <li>Blogs</li>
            <li>PF enquiry</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
