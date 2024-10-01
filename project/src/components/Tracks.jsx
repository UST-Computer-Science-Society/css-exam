import Track from "./Track";
import ds from "../assets/datascience.png";
import gd from "../assets/gd.jpeg";
import ccs from "../assets/ccs.png";

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula.";

const Tracks = () => {
  return (
    <div className="flex flex-col items-center my-6 sm:my-[100px]" id="tracks">
      <h3>Tracks</h3>
      <div className="flex flex-col lg:flex-row sm:justify-center sm:place-content-center sm:gap-[35px]">
        <Track
          trackName={"Data Science"}
          trackDescription={loremIpsum}
          trackImage={ds}
        />
        <Track
          trackName={"Core Computer Science"}
          trackDescription={loremIpsum}
          trackImage={ccs}
        />
        <Track
          trackName={"Game Development"}
          trackDescription={loremIpsum}
          trackImage={gd}
        />
      </div>
    </div>
  );
};

export default Tracks;
