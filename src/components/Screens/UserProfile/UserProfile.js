import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
const UserProfile = () => {
  //   const [mypics, setPics] = useState([]);
  const [userProfile, setProfile] = useState(null);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  //   console.log(userid);
  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //   setPics(result.mypost)
        console.log(result);
        setProfile(result);
      });
  }, []);

  const followUser = () => {
    fetch("/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      {userProfile ? (
        <div style={{ maxWidth: "550px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0px",
              borderBottom: "1px solid grey",
            }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1612024638904-bda171b93c66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
                alt=""
              />
            </div>
            <div>
              <h4>{userProfile.user.name}</h4>
              <p>{userProfile.user.email}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <div>{userProfile.posts.length} posts</div>
                <div>20 followers</div>
                <div>20 following</div>
              </div>
              <button
                style={{
                  margin: "10px",
                }}
                className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={() => followUser()}
              >
                Follow
              </button>
            </div>
          </div>

          <div className="gallery">
            {userProfile.posts.map((item) => {
              return (
                <img
                  className="gallery-items"
                  src={item.photo}
                  alt={item.title}
                  key={item._id}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>loading....</h2>
      )}
    </>
  );
};

export default UserProfile;
