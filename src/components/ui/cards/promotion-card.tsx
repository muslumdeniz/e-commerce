import { Image } from "../image";

type Props = {};

const PromotionCard = ({}: Props) => {
  return (
    <div className="">
      <div>
        <Image
          src="/media/cards/promotion-card.png"
          alt="Promotion"
          className=""
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export { PromotionCard };
