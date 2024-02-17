import { Player } from "@lottiefiles/react-lottie-player";

export type LottiePlayerProps = {
    src: string;
}

const LottiePlayer = (props:LottiePlayerProps):JSX.Element => {

    return<>
        <Player
            src={props.src}
            loop
            style={{ width: '150%', height: '150%',marginLeft:'-50px',marginTop:'-36px' }}
            autoplay
        />
    </>
}

export default LottiePlayer;