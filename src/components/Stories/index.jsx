import PropTypes from 'prop-types';
import "./styles.css"


export const Stories = (props) => {

    const {photo1, user1, photo2, user2, photo3, user3, post4, user4, post5, user5, post6, user6, post7, user7, post8, user8} = props;
    return(
        <div className="storiesContainer">
            <div className="storyItems">
                <li className="story1">
                <img alt="cats_artdiary's profile picture" className="firstStoryImg" crossorigin="anonymous" data-testid="user-avatar" draggable="false" 
                    src="https://pbs.twimg.com/media/E_Hh1BmWQAko3H1.jpg"/>
                    <div className="username">cats artdiary</div>
                </li>
                <li>
                    
                </li>
                <li></li>
            </div>

        </div>
    );
}

Stories.propTypes = {
    photo1: PropTypes.string.isRequired,
    user1: PropTypes.string.isRequired,
    photo2: PropTypes.string.isRequired,
    user2: PropTypes.string.isRequired,
    photo3: PropTypes.string.isRequired,
    user3: PropTypes.string.isRequired,
    photo4: PropTypes.string.isRequired,
    user4: PropTypes.string.isRequired,
    photo5: PropTypes.string.isRequired,
    user5: PropTypes.string.isRequired,
    photo6: PropTypes.string.isRequired,
    user6: PropTypes.string.isRequired,
    photo7: PropTypes.string.isRequired,
    user7: PropTypes.string.isRequired,
    photo8: PropTypes.string.isRequired,
    user8: PropTypes.string.isRequired,
}