import { FunctionComponent } from "react";

const Slide: FunctionComponent = () => {
  return (
    <div className="w-full h-[1360px] relative bg-[url('/public/image-1@2x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
        alt=""
        src="/image-1@2x.png"
      />
    </div>
  );
};

export default Slide;
