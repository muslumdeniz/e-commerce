import { CategoryCard } from "@/components/ui/cards/category-card";

const Categories = () => {
  const categories = [
    {
      title: "CLOTHS",
      description: "5 Items",
      src: "/media/products/card-1.jpg",
      alt: "Card 1",
    },
    {
      title: "CLOTHS",
      description: "5 Items",
      src: "/media/products/card-2.jpg",
      alt: "Card 2",
    },
    {
      title: "CLOTHS",
      description: "5 Items",
      src: "/media/products/card-3.jpg",
      alt: "Card 3",
    },
    {
      title: "CLOTHS",
      description: "5 Items",
      src: "/media/products/card-4.jpg",
      alt: "Card 4",
    },
    {
      title: "CLOTHS",
      description: "5 Items",
      src: "/media/products/card-1.jpg",
      alt: "Card 1",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-5 gap-3.5 mb-12">
          {categories.map((i, key) => (
            <div key={key} className="col-span-1">
              <CategoryCard
                title={i.title}
                description={i.description}
                src={i.src}
                alt={i.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Categories };
