import { Typewriter } from 'react-simple-typewriter';


export default function Hero() {
  return (
    <div className="text-center mt-6 pt-10 her">

      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 via-yellow-400 to-purple-600 bg-clip-text text-transparent mb-4">
        ToxiSense AI
      </h1>
      <h2 className="text-xl font-medium text-yellow-700 anim">
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
