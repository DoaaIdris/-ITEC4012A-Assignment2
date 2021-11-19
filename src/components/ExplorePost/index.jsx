import "./styles.css";
import PropTypes from 'prop-types';

export const ExplorePost = (props) => {
 
const {likes, comments, photo} = props;

  return (
     <div className="explore-post">
         <img src={photo}/>
     </div>
   
  );
};

ExplorePost.propType = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
}