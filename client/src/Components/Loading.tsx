import { Circles } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white font-roboto_italic font-bold text-xl md:text-3xl m-3">Loading...</div>
      <Circles
        height="80"
        width="80"
        color="#634f3d"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default Loading;
