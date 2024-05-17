import { Button, ButtonProps } from "../ui/button";

type AboutShopProps = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export default function AboutShop({
  heading,
  description,
  buttons,
}: AboutShopProps) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <h1 className="mb-3 text-4xl md:mb-3 md:text-4xl lg:text-6xl">
          {heading}
        </h1>
        <div>
          <div>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
