import "./styles.css";
import { ExplorePost } from "../../ExplorePost";
import { Footer } from "../../Footer";

export const ExplorePage = () => {
 
  return (
     <div className="explore-page">
      <div className="explore-post-container">
        <ExplorePost photo="https://i.pinimg.com/736x/21/42/ea/2142eae91488767c651e24a42e00fd5e.jpg" likes="800" comments="43"></ExplorePost>
        <ExplorePost photo="https://i.pinimg.com/originals/0d/89/75/0d89750ad5780f6fefcf0c67f2455838.jpg" likes="800" comments="43"></ExplorePost>
        <ExplorePost photo="https://i.pinimg.com/564x/d9/de/3d/d9de3ddd30c9928c17392b84c9a1c6c7.jpg" likes="800" comments="43"></ExplorePost>
      </div>

      <Footer></Footer>
     </div>
  );

};