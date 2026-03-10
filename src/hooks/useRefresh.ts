// import axiosInstance from "../utils/axiosInstance";
// import lsInstance from "../utils/lsInstance";
// import useAuth from "./useAuth";

const useRefreshToken = () => {
  // const { setAuth } = useAuth();
  const refresh = async () => {
    // try {
    //   const response = await axiosInstance.get("/auth/refresh", {
    //     withCredentials: true, // This is necessary to send the HTTP cookie
    //     method: "GET",
    //   });
    //   console.log("fetching on refresh");
    //   if (response.status === 200 || response.status === 304) {
    //     const token = response.data.accessToken;
    //     setAuth({
    //       id: response?.data?.user?.id,
    //       userName: response?.data?.user?.userName,
    //       email: response?.data?.user?.email,
    //       role: response?.data?.user?.role,
    //       accessToken: token,
    //     });
    //     const auth = {
    //       id: response?.data?.user?.id,
    //       userName: response?.data?.user?.userName,
    //       email: response?.data?.user?.email,
    //       role: response?.data?.user?.role,
    //       accessToken: token,
    //     };
    //     if (auth?.userName) {
    //       //  Store in local storage
    //       lsInstance.set("auth", auth);
    //       return auth;
    //     }
    //     return null;
    //   }
    // } catch (error: any) {
    //   // Not using the util function because we don't want a toast.
    //   if (error.response.status === 401) {
    //     console.log(error.response.data.message);
    //   }
    //   if (error.response.status === 404) {
    //     console.log(error.response.data.message);
    //   }
    //   if (error.response.status === 500) {
    //     console.log(error.response.data.message);
    //   }
    // }
    return null;
  };
  return refresh;
};

export default useRefreshToken;

// Uncomment the function, make sure the backend is auth/refresh, and it should work
