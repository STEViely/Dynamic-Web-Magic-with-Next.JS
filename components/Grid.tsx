import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((items, i) => (
          <BentoGridItem
            id={items.id}
            key={i}
            title={items.title}
            description={items.description}
            className={items.className}
            img={items.img}
            imgClassName={items.imgClassName}
            titleClassName={items.titleClassName}
            spareImg={items.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
