import { useState } from "react"

function Background(){
    const [color,setColor]=useState("olive");
    return(
        <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
            <div className="fixed flex flex-wrap justify-center px-2 bottom-12 inset-x-0 ">
                <div className="flex flex-wrap justify bg-red">

                </div>
            </div>
        </div>
    )
}

export default Background