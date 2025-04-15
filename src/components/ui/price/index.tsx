type Props = {};

const Price = ({}: Props) => {
  return (
    <div className="flex gap-1.5 items-end">
      <span className="font-normal text-xs text-text-muted line-through mb-0.5">
        $16.48
      </span>
      <span className="font-bold text-base text-secondary">$6.48</span>
    </div>
  );
};

export { Price };
