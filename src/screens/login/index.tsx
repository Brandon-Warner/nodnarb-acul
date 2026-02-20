import { useEffect, useState } from "react";

import { applyAuth0Theme } from "@/utils/theme/themeEngine";
import { extractTokenValue } from "@/utils/helpers/tokenUtils";
import ULThemeCard from "@/components/ULThemeCard";
import ULThemePageLayout from "@/components/ULThemePageLayout";
import ULThemeSeparator from "@/components/ULThemeSeparator";

import AlternativeLogins from "./components/AlternativeLogins";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import { useLoginManager } from "./hooks/useLoginManager";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function LoginScreen() {
  // Extracting attributes from hook made out of LoginInstance class of Auth0 React ACUL SDK
  const { login, texts, locales, alternateConnections } = useLoginManager();

  const showSeparator = alternateConnections && alternateConnections.length > 0;

  const separatorText = texts?.separatorText || locales?.page?.orText;
  document.title = texts?.pageTitle || locales?.page?.title;

  applyAuth0Theme(login);

  const socialLoginAlignment = extractTokenValue(
    "--ul-theme-widget-social-buttons-layout"
  );

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const releaseDate = new Date("2026-07-04T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = releaseDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderSocialLogins = (alignment: "top" | "bottom") => (
    <>
      {alignment === "bottom" && showSeparator && (
        <ULThemeSeparator text={separatorText} />
      )}
      <AlternativeLogins />
      {alignment === "top" && showSeparator && (
        <ULThemeSeparator text={separatorText} />
      )}
    </>
  );

  return (
    // Applying UDS theme overrides using the "theme-universal" class
    <ULThemePageLayout className="theme-universal">
      <div className="flex w-full h-full max-w-[1200px] mx-auto gap-8 items-center">
        {/* Left Side - Promotional Content */}
        <div className="flex-1 flex flex-col gap-6 p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Our Platform
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Product Release Date
            </h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-4xl font-bold text-black">
                  {String(timeRemaining.days).padStart(2, "0")}
                </div>
                <div className="text-sm text-black uppercase">Days</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-4xl font-bold text-black">
                  {String(timeRemaining.hours).padStart(2, "0")}
                </div>
                <div className="text-sm text-black uppercase">Hours</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-4xl font-bold text-black">
                  {String(timeRemaining.minutes).padStart(2, "0")}
                </div>
                <div className="text-sm text-black uppercase">Minutes</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-4xl font-bold text-black">
                  {String(timeRemaining.seconds).padStart(2, "0")}
                </div>
                <div className="text-sm text-black uppercase">Seconds</div>
              </div>
            </div>
            <p className="text-center text-white mt-4 text-sm">
              July 4th, 2026
            </p>
          </div>
        </div>

        {/* Right Side - Login Widget */}
        <div className="w-full max-w-[400px]">
          <ULThemeCard className="w-full gap-0">
            <Header />
            {socialLoginAlignment === "top" && renderSocialLogins("top")}
            <LoginForm />
            <Footer />
            {socialLoginAlignment !== "top" && renderSocialLogins("bottom")}
          </ULThemeCard>
        </div>
      </div>
    </ULThemePageLayout>
  );
}

export default LoginScreen;
