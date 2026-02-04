'use client';
import { useEffect, useState } from 'react';
import AuthDescriptionOnLeft from './AuthDescriptionOnLeft';
import AuthFormBlock from './AuthFormBlock';


const AuthenticateUser = () => {
  const RESEND_TIME = 30; // seconds

  const [timeLeft, setTimeLeft] = useState<number>(RESEND_TIME);
  const [canResend, setCanResend] = useState<boolean>(false);
  const [step, setStep] = useState<number>(4);

  const handleStep1 = () => {
    setStep(2);
  }

  const handleStep2 = () => {
    setStep(4);
  }

  const handleStep3 = () => {
    setStep(4);
  }

  const handleStep4 = () => {
    setStep(1);
  }
  
  useEffect(() => {
    if(timeLeft === 0) {
      setCanResend(true);
      return;
    } else {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  return (
    <div className="flex justify-between mx-32 h-[90vh] items-center gap-28">
        <AuthDescriptionOnLeft/>

        {step === 1 && <AuthFormBlock
          onSubmit={() => handleStep1()}
          title="Create an account"
          descriptionElement={
            <span className="my-4"/>
          }
          inputArr={[
            {
              inputName: "email",
              placeHolder: "Email address",
            },
          ]}
          anyExtraComponent={
            <span className="my-2"/>
          }
          submitButtonText="Continue"
        />
        }
        {step === 2 && <AuthFormBlock title = "Recruiter"
          descriptionElement =  {
            <span className="flex flex-col items-center mb-8">
              <div className="text-gray-500 mb-2 text-sm">
                <span className="text-blue-500 mr-1">
                  bsharshith1808@gmail.com
                </span>
                <span>
                  (account exists)
                </span>
              </div>
              <button className="text-gray-500 text-sm underline cursor-pointer hover:text-gray-400"
                onClick={() => setStep(1)}>
                to login with other email id, click here
              </button>
          </span>}
          inputArr = {[
              {
                inputName:"enter password",
                placeHolder: "password",
              },
            ]}
          anyExtraComponent = {<div className="flex items-end justify-between mb-6">
                <span className="text-sm text-blue-500 cursor-pointer hover:underline ml-70">
                  forgot password?
                </span>
              </div>}
          submitButtonText = "Login"
          onSubmit={() => handleStep2()}
            
        />
        }
        {step === 3 && <AuthFormBlock title = "Recruiter"
          descriptionElement =  {
            <span className="flex flex-col items-center mb-8">
              <div className="text-gray-500 mb-2 text-sm">
                <span className="text-blue-500 mr-1 underline">
                  bsharshith1808@gmail.com
                </span>
              </div>
          </span>}
          inputArr = {[
              {
                inputName:"enter otp",
                placeHolder: "******",
              },
            ]}
          anyExtraComponent = {<div className="flex items-end justify-end mb-6">
                <span className={`text-sm text-blue-500 ml-64 ${canResend ? "hover:underline cursor-pointer" : "pointer-events-none text-gray-400"}`}>
                  resend otp {canResend? "now" : `in ${timeLeft}s`}
                </span>
              </div>}
          submitButtonText = "Verify"
          onSubmit={() => handleStep3()}
        />
        }
        {step === 4 && <AuthFormBlock
          title="Create an account"
          descriptionElement =  {
            <span className="flex flex-col items-center mb-8">
              <div className="text-gray-500 mb-2 text-sm">
                <span className="text-blue-500 mr-1 underline">
                  bsharshith1808@gmail.com
                </span>
              </div>
              <p className="text-green-600 font-semibold">
                OTP verified
              </p>
          </span>}
          inputArr={[
            {
              inputName: "set password",
              placeHolder: "Set Password",
            },
            {
              inputName: "confirm password",
              placeHolder: "Confirm Password",
            },
          ]}
          anyExtraComponent={
            <span className="m-2"/>
          }
          submitButtonText="Register"
        />
        }
    </div>
  )
};

export default AuthenticateUser;