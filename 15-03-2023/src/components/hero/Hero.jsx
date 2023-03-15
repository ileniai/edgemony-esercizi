import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>M.UP Revolution</h1>
        <h3 className="Hero__subtitle">Your place is here!</h3>
      </div>
      <img className="Hero_img1"
        src="https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="hero image"
      />
      <div className="img2_vuoto">
      <img className="Hero_img2"
        src="https://images.pexels.com/photos/257923/pexels-photo-257923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="hero image"
      />
      </div>
      
      
    </div>
  );
};

export default Hero;