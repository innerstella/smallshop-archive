import { useEffect, useState } from "react";

export const useScrollHide = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsHidden(true); // 🔻 아래로 스크롤 → 숨김
      } else {
        setIsHidden(false); // 🔺 위로 스크롤 → 다시 보이기
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return isHidden;
};
