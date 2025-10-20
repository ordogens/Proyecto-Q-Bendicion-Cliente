import carne from "../../assets/carne.png"


export const ContenedorRight = () => {
  return (
    <div className=" w-1/2 h-full flex items-center justify-center">
      <img src={carne} alt="" className="w-[35rem] h-[30rem] rounded-lg box"/>

      <div>
        <style>{
            `
            .box{
              box-shadow: 0 0 8px 2px ;
            }
            
            `}

        </style>
      </div>
    </div>
  )
}

