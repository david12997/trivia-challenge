import Button1 from "../components/button"
import LottiePlayer from "../components/lottie.player";
import SectionBg from "../components/section.bg"
import { useNavigate } from "react-router-dom";

const HomePage = ():React.JSX.Element => {

    const router = useNavigate();

    return<>
        <SectionBg>

            <div className="flex flex-col items-center justify-center h-full mt-1">

               <div className="container-lottie w-[200px] h-[200px]">
                    <LottiePlayer
                        src="/assets/trivia-question.json"
                    />
                    
               </div>

                <h1 className="text-[34px] md:text-[40px] font-extrabold text-white max-w-[300px] md:max-w-[360px] text-center">
                    Welcome to the trivia Challenge
                </h1>

                <p className="text-white text-[20px]  max-w-[300px] text-center mt-4">
                    You will be presented with 12 
                    <span className="font-extrabold"> TRUE </span> 
                    or 
                    <span className="font-extrabold"> FALSE </span> questions
                </p>

                <div className="container-button mt-10">
                    <p className="text-white text-[18px]">Can you score 100% ?</p>
                    <Button1
                        width="300px"
                        height="60px"
                        color="white"
                        background="#00BB67"
                        text="Begin"
                        onClick={() => router('/trivia')}
                    />
                </div>

            </div>

        </SectionBg>
    </>
}

export default HomePage