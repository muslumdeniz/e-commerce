import { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { LoadingScreen } from "../ui/loading-screen";

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <LoadingScreen />
      <Nav />
      {children}
      <Footer />
    </>
  );
};
