import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./styles.css"

export const Post = (props) => {

    const {username, photo, caption, time, likes, profilePhoto} = props;

    const [isLiked, setIsLiked] = useState(true);
    const [totalLikes, setLikes] = useState(likes);

    const toggleLike = () => {
        setIsLiked(!isLiked);

        setLikes(isLiked ? totalLikes + 1 : totalLikes - 1);

        console.log(isLiked);
    }

    return(
        <div className="postMain">
            <div className= "postHeader">
                <img className="profile-photo" src={profilePhoto}></img>
                <p className="post-user"> {username}</p>
            </div>
            <img className="post-image" src={photo}>
            </img>
            <div className="post-icons">
                <svg className="like-btn" onClick={toggleLike} fill={isLiked ? 'black' : 'red'} style={{}} viewBox="0 0 48 48">
                    { !isLiked &&  <path  d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>}
                    { isLiked && <path className="unliked-heart" d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>}
                </svg>
            </div>
            <p className="post-likes" > {totalLikes} Likes </p>
            <p className="post-caption"> <b>{username}</b> {caption} </p>
            <p className="post-time"> {time} </p>
        </div>
    );
}

Post.propType = {
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    profilePhoto: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
}