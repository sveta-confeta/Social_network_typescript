import React from "react";
/*import './Profile.css';*/

const Profile = () => {
    return (

        <div className="content">
            <img className="main-img" src="https://pbs.twimg.com/profile_banners/2862249501/1415359067/1500x500" width="1000" height="250" />
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
