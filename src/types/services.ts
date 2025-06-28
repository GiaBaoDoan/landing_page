import { SVGProps } from "react";

export type ServiceItem = {
  title: string;
  img: string;
  desc: string;
  price: number;
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};
