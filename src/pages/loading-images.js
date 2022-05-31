import Header from "../components/header";
import { images } from "../images/images";

export default function LoadingImages() {
  const list = images.map((item) => (
    <div key={item.image} className="image-wrap">
      <img src={item.image} alt={item} />
    </div>
  ));

  return (
    <div>
      <Header
        title="Loading Images"
        link="Good Performance"
        href="/loading-images-opt"
      />
      <ul className="image-list">{list}</ul>
    </div>
  );
}
