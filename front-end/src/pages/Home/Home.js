import React, { Component } from 'react';
// internal components
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import './Home.css';

const IMAGES = [
  'https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
  'https://images.unsplash.com/photo-1493540554008-8e3008329feb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
];

class Home extends Component {
  state = {
    index: 0,
  };

  // Tracks the interval
  autoRotateTimer = undefined;

  componentDidMount() {
    this.startAutoRotate();
  }

  componentWillUnmount() {
    // Always cleanup timers, handlers, etc.
    clearInterval(this.autoRotateTimer);
  }

  startAutoRotate = () => {
    this.autoRotateTimer = setInterval(this.incrementCarousel, 3000);
  };

  incrementCarousel = () => {
    const nextIndex = this.state.index + 1;
    const isWrappingToFirst = nextIndex >= IMAGES.length;

    this.setState({
      index: isWrappingToFirst ? 0 : nextIndex,
    });
  };

  decrementCarousel = () => {
    const nextIndex = this.state.index - 1;
    const isWrappingToLast = nextIndex < 0;

    this.setState({
      index: isWrappingToLast ? IMAGES.length - 1 : nextIndex,
    });
  };

  // This is a little helper that kills the old interval, executes a function, then restarts the interval.
  // This might be a bit over-engineering on my part.
  handleNav = func => () => {
    clearInterval(this.autoRotateTimer);
    func();
    this.startAutoRotate();
  };

  render() {
    return (
      <div className="home-body">
        <section className="home-carousel">
          <div className="carousel-image-container">
            <img className="carousel-image" src={IMAGES[this.state.index]} alt="picture of city" />
            <button onClick={this.handleNav(this.decrementCarousel)}>Prev</button>
            <button onClick={this.handleNav(this.incrementCarousel)}>Next</button>
          </div>
        </section>
        {this.props.login ? <Login /> : null}
        {this.props.register && <Register />}
        <div className="main">
          <h3>Wayfarer is..</h3>
          <section className="home-content">
            <div className="home-card">
              <h4>Topic</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus facilis
                nostrum vero ipsum unde, odit magni consequatur in sed tempora vitae nulla
                laudantium ullam accusamus sit optio corporis et.
              </p>
            </div>
            <div className="home-card">
              <h4>Topic</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus facilis
                nostrum vero ipsum unde, odit magni consequatur in sed tempora vitae nulla
                laudantium ullam accusamus sit optio corporis et.
              </p>
            </div>
            <div className="home-card">
              <h4>Topic</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatibus facilis
                nostrum vero ipsum unde, odit magni consequatur in sed tempora vitae nulla
                laudantium ullam accusamus sit optio corporis et.
              </p>
            </div>
          </section>
        </div>

        <section className="home-footer"></section>
      </div>
    );
  }
}

export default Home;
