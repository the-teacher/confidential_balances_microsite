import React from "react";
import "./styles.scss";

type InfoBlockProps = {
  number: number;
  title: string;
  description: string;
};

export const InfoBlock = ({ number, title, description }: InfoBlockProps) => {
  return (
    <div className="info-block">
      <div className="info-block__left">
        <div className="info-block__number">{number}</div>
      </div>
      <div className="info-block__right">
        <h3 className="info-block__title">{title}</h3>
        <p className="info-block__description">{description}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
