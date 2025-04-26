import { Typewriter } from 'react-simple-typewriter';
import Logo from '../assets/logo.jpg';

export default function Hero() {
  return (
    <div className="text-center mt-6 pt-10 her">

      <div className="flex justify-center mb-4 logo">
        <img src={Logo} alt="SafeSeek Logo" className="w-[150px] h-[150px] rounded-full" />
      </div>

      <h1 className="text-4xl  font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-yellow-500 to-purple-800">
          SafeSeek
      </h1>
      <h2 className="text-xl font-medium text-Blue-700 anim">
        <span className="mr-2">We help you detect:</span>
        <span className="bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent font-semibold ">
          <Typewriter
            words={['Toxic comments', 'Hate Speech', 'Offensive Text', 'Abuse Detection']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>
    </div>
  );
}
