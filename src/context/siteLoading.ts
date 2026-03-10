import { createContext } from "react";
type siteLoadingContextType = {
  siteLoading: boolean;
  setSiteLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const siteLoadingContext = createContext<siteLoadingContextType>({
  siteLoading: true,
  setSiteLoading: () => {},
});

export default siteLoadingContext;

// Used when the page is refreshed, to render skeletons
