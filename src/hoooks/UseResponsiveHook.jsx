import { useMediaQuery } from "react-responsive";

export default function UseResponsive() {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 576px) and (max-width: 768px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  let responsive = {
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop,
  };
  return responsive;
}
