import "./styles.css";
import { Stories } from "../../Stories";
import { Post } from "../../Posts";

export const HomePage = () => {

  return (
      <div className="mainColumn">
        <div className="mainPosts">
          <Stories></Stories>
          <Post username="tasia.m.s" profilePhoto="https://pbs.twimg.com/media/EbUf5RhWAAIIkYA.jpg"
          photo="https://i.pinimg.com/originals/f6/f0/91/f6f09138a5dce9e5ca1c28e066e8f7d1.jpg"></Post>
        </div>   
      </div>
    

  );
};
