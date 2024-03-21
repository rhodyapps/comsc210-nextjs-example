import React from 'react';
import '../app/globals.css';

const About = () => {
  return (
    <div className="container">
      <header>
        <div className="container">
          <div id="branding">
            <h1><span class="highlight">Synthetic</span> Systems</h1>
          </div>
          <nav>
            <u1>
              <li><a href="/">Home</a></li>
              <li className="current"><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
            </u1>
          </nav>
        </div>
      </header>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our Newsletter</h1>
          <form>
            <input type="email" placeholder="Enter your Email..." />
            <button type="submit" class="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <article id="main-col">
            <h1 class="page-title">About Us</h1>
            <p>
              In pharetra dolor quis diam ornare sodales. Pellentesque id mauris eu leo mattis ultricies a tincidunt enim. Nunc bibendum ac tellus ut dignissim. Fusce vulputate eros sed turpis venenatis dictum. Ut ultricies, libero id mattis volutpat, purus dui efficitur urna, ac aliquet erat mauris vel quam. Duis ultrices eros non velit suscipit, quis porta ex hendrerit. Duis blandit urna quis molestie vehicula. Fusce lacus mauris, condimentum non pretium a, laoreet imperdiet ipsum. Aenean non lobortis ex. Aenean id est in nunc vehicula eleifend. Suspendisse gravida tempus sodales. Phasellus rutrum diam nec massa egestas euismod. Aenean fringilla posuere magna, vitae posuere mi pellentesque et. Curabitur at ligula id est tincidunt vestibulum. Nulla non lobortis nibh.
            </p>
            <p>
              Integer nibh libero, aliquet eu lorem tincidunt, finibus semper diam. In id tellus nulla. Fusce vitae erat eleifend, ullamcorper nunc non, dapibus neque. Duis consequat dignissim egestas. Maecenas sollicitudin feugiat tristique. Nulla nec mauris ornare nisl gravida egestas. Vestibulum condimentum sapien suscipit nisi vehicula dapibus. In hac habitasse platea dictumst.
            </p>
          </article>

          <aside id="sidebar">
            <div className="dark">
              <h3>What We Do</h3>
              <p>
                Sed euismod lacus bibendum fringilla mollis. Fusce pulvinar blandit sagittis. Donec orci nibh, posuere ac bibendum sed, tempor quis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut augue mauris, laoreet at ex et, viverra hendrerit sapien. Fusce ultrices malesuada feugiat.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer>
        <p>Synthetic Systems, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default About;