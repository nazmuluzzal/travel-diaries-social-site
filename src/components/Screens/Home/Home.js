import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Filipp</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div className="card-content">
          <h6>title </h6>
          <p>amaizing photo</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
