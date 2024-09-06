import { lazy, Suspense } from "react";
import UseResponsive from "../../hoooks/UseResponsiveHook";
import CategoryCard from "./CategoryCard";
import OfferCard from "./OffersCard";
import BestDeals from "./BestDeals";
import BestDealsMobile from "./BestDealsMobile";

//lazy loading
const Info = lazy(() => import("./Info"));
export default function MainContainer() {
  const responsive = UseResponsive();
  return (
    <div className="main-container">
      <CategoryCard />
      <OfferCard />
      {responsive.isDesktop || responsive.isTablet ? (
        <BestDeals />
      ) : (
        <BestDealsMobile />
      )}

      {/* have to add suspense for the component that is loading lazy  */}
      <Suspense fallback="loading...">
        <Info />
      </Suspense>
    </div>
  );
}
