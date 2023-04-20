import React from "react";
import SVG from "../SVG/SVG";

export default function SocialMediaBox() {
  const socialMediaItems = [
    {
      name: "GitHub",
      link: "https://github.com/MaralNajafi",
      icon: "github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/maral-najafi",
      icon: "linked-in",
    },
    {
      name: "Telegram",
      link: "https://t.me/MaralNajafi",
      icon: "telegram",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/maralnajafi_/",
      icon: "instagram",
    },
  ];
  const SOCIAL_MEDIA_ITEM = socialMediaItems.map((socialMediaItem, index) => {
    return (
        <a href={socialMediaItem.link}>
          <SVG id={socialMediaItem.icon} />
        </a>
    );
  });
  return <ul className="d-flex jc-space-between">{SOCIAL_MEDIA_ITEM}</ul>;
}
