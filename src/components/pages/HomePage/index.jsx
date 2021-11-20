import "./styles.css";
import { Stories } from "../../Stories";
import { Post } from "../../Post";

export const HomePage = () => {

  return (
      <div className="mainColumn">
        <div className="mainPosts">
          <Stories></Stories>
          <Post username="tasia.m.s" profilePhoto="https://pbs.twimg.com/media/EbUf5RhWAAIIkYA.jpg"
          photo="https://i.pinimg.com/originals/f6/f0/91/f6f09138a5dce9e5ca1c28e066e8f7d1.jpg"
          likes={360} caption="mandy from totally spies" time="4 min ago"></Post>
          <Post username="rossdraws" profilePhoto="https://i.pinimg.com/474x/61/d0/fa/61d0fa1f5c98f42283935f213b22d556.jpg"
          photo="https://i.pinimg.com/736x/11/5f/71/115f71389027be1fe8ce9ae401e8203e.jpg"
          likes={1000} caption="princess series - Belle" time="2 hrs ago"></Post>
          <Post username="samdoesart" profilePhoto="https://i.pinimg.com/280x280_RS/f9/08/b5/f908b5e09c1028d2beaf99792790efdf.jpg"
          photo="https://i.pinimg.com/736x/67/9a/d0/679ad03b207b1dfd9dd7ec6614313fb2.jpg"
          likes={3600} caption="Was gonna do a simple light study but turned it into a portrait of Linn (1h 40m) the embers in the air are from the bodies of her ✨ enemies ✨ full sized wallpaper over on my patreon 💛 luv u guys" time="3 days ago"></Post>
          <Post username="ohprcr" profilePhoto="https://64.media.tumblr.com/85af343f61425dee6b99a5102d244344/tumblr_pakolt0GCM1qfq1ino2_r1_1280.jpg"
          photo="https://i.pinimg.com/originals/8e/ec/c9/8eecc9a60d50c5c99cf299cf7be69528.jpg"
          likes={8242} caption="💀 #oc" time="4 days ago"></Post>
        </div>   
      </div>
    

  );
};
