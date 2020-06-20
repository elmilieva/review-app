import React from "react";
import './Title.css';

type TitleProps = {
  titleName: string;
};

export const Title = ({ titleName }: TitleProps) => {
  return <h1 className="title-name">{titleName}</h1>;
};
