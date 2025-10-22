import carne from "../../assets/carne.png";

export const ContenedorRight = () => {
  return (
    <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4">
      <img
        src={carne}
        alt=""
        className="w-[18rem] sm:w-[25rem] lg:w-[35rem] h-auto rounded-lg box"
      />

      <div>
        <style>{`
          .box {
            box-shadow: 0 0 8px 2px;
          }
        `}</style>
      </div>
    </div>
  );
};
