import { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};
