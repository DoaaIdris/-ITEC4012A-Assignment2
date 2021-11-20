import "./styles.css";
import PropTypes from 'prop-types';
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import { useState } from "react";

export const ExplorePost = (props) => {

const {likes, comments, photo} = props;

const [isOverlay, setIsOverlay]  = useState(false);

  return (
    <div className="explore-post" 
        onMouseEnter={() => setIsOverlay(true)}
        onMouseLeave={() => setIsOverlay(false)}>
    
        <img src={photo}/>
        {isOverlay && (
          <div className="explore-post-overlay"> 
          <p className="explore-post-likes">
            <AiFillHeart className="icon"/>{likes}
          </p>
          <p className="explore-post-comments">
          <FaComment className="icon"/>{comments}
          </p>
        </div>
        )}   
    </div>

  );
};

ExplorePost.propType = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
}