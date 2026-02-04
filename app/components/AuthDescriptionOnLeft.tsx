import React from 'react'
import { ShowcaseForCandidate, ShowcaseForRecruiter} from '../utils/SomethingData'
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'], style: ['italic'] });


const AuthDescriptionOnLeft = () => {
  const role = "recruiter";

  const showCaseData = (role == "recruiter"?ShowcaseForRecruiter:ShowcaseForCandidate);

  return (
    <span className="">
      <div className="text-4xl mb-10">
        {showCaseData.heading}
      </div>
      <div>
        {showCaseData.points.map((point, index) => (
          <p className={`mt-6 text-2xl italic text-[#FFD941] ${lora.className}`} key={index}>
            • {point}
          </p>
        ))}
      </div>
    </span>
  )
}

export default AuthDescriptionOnLeft;