import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SocialIcon } from "react-social-icons";

import QRCode from "react-qr-code";

import Me from "../assets/darkMe.svg";
import LightMe from "../assets/lightMe.png";
import HouseInRwanda from "../assets/houseinrwanda.png";
import Eshuri from "../assets/eshuri.png";
import RraEtax from "../assets/rra.png";

import SocialIcons from "../components/SocialIcon";
import ActionButton from "../components/ActionButton";

import {
  EMAIL_ME,
  ESHURI,
  GITHUB_ME,
  HOUSEINRWANDA,
  I_18_BASE_URL,
  INSTAGRAM_ME,
  LINKEDIN_ME,
  RESUME,
  RRA_ETAX,
  WHATSAPP_ME,
} from "../utils/constants";

enum Theme {
  dark,
  light,
}

const Home = () => {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(Theme.dark);
  const { t, i18n } = useTranslation();

  const handleOpenMessageLinks = (link: string) =>
    window.open(link, "_blank", "noopener noreferrer");

  const fetchLocationLanguage = async (): Promise<string> => {
    try {
      const response = await fetch(I_18_BASE_URL);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: { languages: string } = await response.json();
      return data.languages.split(",")[0];
    } catch (error) {
      console.error("Error fetching location language:", error);
      return "en";
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (theme === Theme.light) {
        setTheme(Theme.dark);
      } else {
        setTheme(Theme.light);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [theme]);

  useEffect(() => {
    const setLanguageFromLocation = async () => {
      const language = await fetchLocationLanguage();
      void i18n.changeLanguage(language);
    };

    void setLanguageFromLocation();
  }, [i18n]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div
        className={`min-h-screen w-screen sm:w-1/2 flex flex-col justify-around items-start bg-primary text-white md:text-2xl  ${
          !showAbout ? "flex sm:flex" : "hidden sm:flex"
        }`}
      >
        <span className="mt-12 ml-6 font-bold">{t("welcome")} 👋,</span>
        <div className="w-[16rem] lg:w-[32rem] h-[16rem] lg:h-[32rem] self-center">
          <img src={theme === Theme.dark ? Me : LightMe} className="w-full" />
        </div>

        <span className="self-end mb-3 md:mb-12 mr-6">
          {t("intro")} <span className="font-bold">Emmanuel Dushime</span>
        </span>
        <ActionButton
          label="Next →"
          onClick={() => setShowAbout(true)}
          classes="sm:hidden"
        />
      </div>

      <div
        className={`sm:min-h-screen w-screen sm:w-1/2 flex flex-col justify-start md:justify-center bg-white text-primary p-6 md:p-24 ${
          showAbout ? "flex sm:flex" : "hidden sm:flex"
        }`}
      >
        <span className="font-bold my-3">{t("scan")}</span>
        <div className="w-[24rem]">
          <QRCode value={RESUME} />
        </div>

        <div className="my-6 flex flex-col">
          <span className="font-bold my-3">{t("reachout")}</span>
          <div className="flex">
            <SocialIcon
              network="email"
              onClick={() => handleOpenMessageLinks(EMAIL_ME)}
              className="mr-3 cursor-pointer"
            />
            <div />
            <SocialIcon
              network="whatsapp"
              onClick={() => handleOpenMessageLinks(WHATSAPP_ME)}
              className="mx-3 cursor-pointer"
            />

            <SocialIcon
              network="instagram"
              onClick={() => handleOpenMessageLinks(INSTAGRAM_ME)}
              className="mx-3 cursor-pointer"
            />
            <SocialIcon
              network="linkedin"
              onClick={() => handleOpenMessageLinks(LINKEDIN_ME)}
              className="mx-3 cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col">
          <span className="font-bold my-3">{t("experience")}</span>
          <div className="flex">
            <SocialIcon
              network="linkedin"
              onClick={() => handleOpenMessageLinks(LINKEDIN_ME)}
              className="mr-3 cursor-pointer"
            />
            <SocialIcon
              network="github"
              onClick={() => handleOpenMessageLinks(GITHUB_ME)}
              className="mx-3 cursor-pointer"
            />
          </div>
        </div>
        <div className="mb-6 flex flex-col">
          <span className="font-bold my-3">{t("projects")}</span>
          <div className="flex">
            <SocialIcons
              icon={HouseInRwanda}
              classes="mr-3"
              onClick={() => handleOpenMessageLinks(HOUSEINRWANDA)}
            />
            <SocialIcons
              icon={Eshuri}
              classes="mx-3"
              onClick={() => handleOpenMessageLinks(ESHURI)}
            />
            <SocialIcons
              icon={RraEtax}
              classes="mx-3"
              onClick={() => handleOpenMessageLinks(RRA_ETAX)}
            />
          </div>
        </div>
        <ActionButton
          label="← Prev"
          onClick={() => setShowAbout(false)}
          classes="sm:hidden"
        />
      </div>
    </div>
  );
};

export default Home;
