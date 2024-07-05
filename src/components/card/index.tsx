import { ReactNode } from "react";
import { clsx } from "clsx/lite";

const Card = ({
  children,
  classes,
}: {
  children: ReactNode;
  classes?: string;
}) => {
  return <section className={`c-card border ${classes}`}>{children}</section>;
};

const CardTitle = ({
  open = false,
  cardInfo,
  children,
}: {
  open?: Boolean;
  children?: ReactNode;
  cardInfo: {
    title: string;
    description: string;
    index: any;
  };
}) => {
  return (
    <header className={clsx("c-card__header", open && "open")}>
      <div className="c-card__container">
        <span className="c-card__index">{cardInfo.index}</span>
        <h2 className="c-card__title">{cardInfo.title}</h2>
        <p className="c-card__description">{cardInfo.description}</p>
      </div>
      <div className="c-card__action">{children}</div>
    </header>
  );
};

export { Card, CardTitle };
