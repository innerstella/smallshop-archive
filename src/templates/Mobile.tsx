import { ReactNode } from "react";

import DisplayAds from "../components/adsense";
import { Appbar } from "../components/appbar";
import {
  contentStyle,
  templateStyle,
} from "./MobileStyles.css";


interface TemplateProps {
  children: ReactNode;
}

const Template = ({ children }: TemplateProps) => {
  return (
    <div className={templateStyle}>
      <div className={contentStyle}>
        <DisplayAds />
        {children}
        <Appbar />
      </div>
    </div>
  );
};

export default Template;
