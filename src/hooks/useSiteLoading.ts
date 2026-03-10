import { useContext } from "react";
import siteLoadingContext from "../context/siteLoading";

const useSiteLoading = () => {
  return useContext(siteLoadingContext);
};
export default useSiteLoading;
