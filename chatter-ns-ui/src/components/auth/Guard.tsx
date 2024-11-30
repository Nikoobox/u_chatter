import { FC, PropsWithChildren } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import excludedRoutes from "../../constants/excluded-routes";

const Guard: FC<PropsWithChildren> = ({ children }) => {
  const { data: user } = useGetMe();

  console.log(">> user", user);

  return (
    <>
      {excludedRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};

export default Guard;
