import React from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";

const langs = [
  {
    id: "ru",
    title: "Русский",
  },
  {
    id: "en",
    title: "English",
  },
  {
    id: "es",
    title: "Español",
  },
];

const styles = createUseStyles({
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    marginBottom: 8,
  },
});

export const ProfilePage = () => {
  const classes = styles();

  const { i18n } = useTranslation();

  const [activeLang, setActiveLang] = React.useState("en");

  const handleLangChange = (langId: string) => {
    i18n.changeLanguage(langId);
    setActiveLang(langId);
  };

  return (
    <div>
      <ul className={classes.list}>
        {langs.map((lang) => (
          <li
            key={lang.id}
            className={classes.item}
            style={{
              color: lang.id === activeLang ? "var(--color-orange)" : "#fff",
            }}
            onClick={() => handleLangChange(lang.id)}
          >
            {lang.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
