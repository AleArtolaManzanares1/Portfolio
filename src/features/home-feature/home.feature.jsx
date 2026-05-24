import './home.feature.css';
import headerImage from './imgs/header-img.png';
import headerImageFaro from './imgs/image-header-about-home.jpg';
import ButtonAction from './components/button-action/button-action.component';
const Home = () => {
  return (
    <div>
      <div className="container-image-header-home">
        <img src={headerImage} alt="" />
        <ButtonAction body={'My Works'} />
      </div>
      <div className="container-information-about">
        <div className="container-information-about-home">
          <div className="title-information-about-home">
            <h3>Let’s get know about me closer</h3>
          </div>
          <p>
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters and web design.
          </p>
          <ButtonAction body={'About Me'} />
        </div>
        <div className="container-image-about-home">
          <img src={headerImageFaro} alt="" />
        </div>
      </div>
      <div className="container-project-home">
        <div className="my-projects-highlight">
          <h2>My Projects Highligth</h2>
          <ButtonAction body={'Explore More'} />
        </div>
      </div>
    </div>
  );
};

export default Home;
