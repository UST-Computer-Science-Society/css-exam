import Button from "./Button";

const Track = ({ trackName, trackDescription, trackImage }) => {
  return (
    <div className="flex flex-col items-center max-h-[455px] max-w-[372px] m-5">
      <div className="max-w-[372px] h-[372px]">
        <img
          className="rounded-[35px] h-full object-cover"
          src={trackImage}
          alt={trackName}
        />
      </div>
      <div className="my-4 mb-7">
        <h5 className="p-[6.5px]">{trackName}</h5>
        <div>
          <p className="b2 text-center line-clamp-5 text-ellipsis overflow-hidden">
            {trackDescription}
          </p>
        </div>
      </div>
      <Button text={"Learn More"} />
    </div>
  );
};

export default Track;
