import PropTypes from 'prop-types';
import { useState } from 'react';
import "./styles.css"


export const IndividualStory = (props) => {

    const {photo, username} = props;

    const [isViewed, setIsViewed] = useState(false);

    const handleStoryViewing = () => {
        
        setIsViewed(true);
        console.log(isViewed);
    }

    return(
            <li className="story">
               <img  className={isViewed ? 'storyImg' : 'storyImgViewed'} onClick={handleStoryViewing}
                src={photo}/>    
                    <div className="username">{username}</div>
            </li>
          
    );
}

IndividualStory.propTypes = {
    photo: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
}