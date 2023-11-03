import React from "react";
import { useTranslation } from "react-i18next";

const Trans = ({Translate}) => {
  const { t } = useTranslation();
  return <>{t(Translate)}</>;
};
export default Trans;
