import PropTypes from 'prop-types';
import { IndividualStory } from '../IndividualStory';
import "./styles.css"

export const Stories = (props) => {


    return(
        <div className="storiesContainer">
            <div className="storyItems">
                <IndividualStory username="cats artdiary" photo="https://pbs.twimg.com/media/E_Hh1BmWQAko3H1.jpg"></IndividualStory>
                <IndividualStory username="samdoesart" photo="https://i.pinimg.com/736x/c9/ce/aa/c9ceaad07c84a22507d1e65aec228692.jpg"></IndividualStory>
                <IndividualStory username="heikala" photo="https://i.pinimg.com/originals/b2/9f/a9/b29fa913720119f23ece64414d023c54.jpg"></IndividualStory>
                <IndividualStory username="ghada__" photo="https://i.pinimg.com/736x/85/0b/a7/850ba78760e89822c9e913f297bb7c27.jpg"></IndividualStory>
                <IndividualStory username="kuvshinov_ilya" photo="https://i.pinimg.com/736x/07/56/3e/07563e2daaca90f06cb1205d3af5abfd--cool-art-awesome-art.jpg"></IndividualStory>
                <IndividualStory username="maruti_bitamin" photo="https://i.pinimg.com/originals/c0/a0/64/c0a064206bd5e00a8add79adfcf11ae6.jpg"></IndividualStory>
                <IndividualStory username="gyung_studio" photo="https://i.pinimg.com/236x/f9/5f/54/f95f544853fe39541c19922c4dae5fc4.jpg"></IndividualStory>
                <IndividualStory username="nanniimo" photo="https://i.pinimg.com/originals/d2/52/ff/d252ffc37754652646dea5949eb7bbd1.jpg"></IndividualStory>
                <IndividualStory username="lord_gris" photo="https://i.pinimg.com/736x/3a/75/1d/3a751d82524a4a576e62290581f80796.jpg"></IndividualStory>

            </div>

        </div>
    );
}

