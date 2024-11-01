"use client";
import { useContext } from "react";
import { TunisContext } from "@/context/context";

const TunisCss = () => {
  const { color } = useContext(TunisContext);
  return <link rel="stylesheet" href={`/assets/css/${color}.css`} />;
};

export default TunisCss;
