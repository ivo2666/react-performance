import Header from "../components/header";
import { images } from "../images/images";
import ImageRenderer from "../components/image-render";

export default function LoadingImagesOpt() {
  const list = images.map((item, index) => {
    return <ImageRenderer item={item} index={index} key={item?.image} />;
  });

  return (
    <div>
      <Header
        title="Loading Images (lazy)"
        link="Bad Performance"
        href="/loading-images"
      />
      <ul className="image-list">{list}</ul>
    </div>
  );
}
