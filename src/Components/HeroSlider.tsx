import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const publicUrl = process.env.PUBLIC_URL || '';

const HeroSlider: React.FC = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    fade: false
  };

  const slides = [
    {
      bg: `${publicUrl}/assets/img/hero/h1_hero.jpg`,
      img: `${publicUrl}/assets/img/hero/hero_man.png`,
      title: 'Winter Collection',
      subtitle: '60% Discount',
      text: 'Best Cloth Collection By 2020!',
      btnLink: '#'
    },
    {
      bg: `${publicUrl}/assets/img/hero/h1_hero.jpg`,
      img: `${publicUrl}/assets/img/hero/hero_man.png`,
      title: 'Spring Collection',
      subtitle: 'New Arrivals',
      text: 'Discover the latest styles',
      btnLink: '#'
    }
  ];

  return (
    <section className="slider-area">
      <Slider {...settings} className="slider-active">
        {slides.map((s, i) => (
          <div
            key={i}
            className="single-slider slider-height"
            style={{
              backgroundImage: `url('${s.bg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                  <div className="hero__img">
                    <img src={s.img} alt="" />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                  <div className="hero__caption">
                    <span className="hero-sub">{s.subtitle}</span>
                    <h1>{s.title}</h1>
                    <p>{s.text}</p>
                    <div className="hero__btn">
                      <a href={s.btnLink} className="btn hero-btn">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;