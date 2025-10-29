import Home from "@/app/(landing)/page";
import { IPrimaryLayout } from "./PrimaryLayout";

const base: IPrimaryLayout = {
  children: <Home />,
};

export const mockPrimaryLayoutProps = {
  base,
};
