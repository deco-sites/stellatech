import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";

export interface Card {
  image: ImageWidget;
}

export interface Props {
  desktopTitle: string;
  mobileTitle: string;
  mobileSubtitle: string;
  description: string;
  cards: Card[];
}
export default function CardsCarousel({ cards, description, desktopTitle, mobileSubtitle, mobileTitle }: Props) {
  const id = useId();
  return (
    <div class="flex flex-col justify-center relative w-full py-[120px] bg-primary overflow-x-hidden">
      <Slider
        class="carousel carousel-center w-full col-span-full row-span-full gap-[22px]"
        rootId={id}
      >
        {cards?.map((card, index) => (
          <Slider.Item
            index={index}
            class="carousel-item max-w-[80%] lg:max-w-[33%] w-full first:ml-[45px] last:mr-[45px]"
          >
            <Image 
              id={`${id}::${index}`}
              class="w-full h-full rounded-[34px]"
              width={655}
              height={345}
              src={card.image}
            />
          </Slider.Item>
        ))}
      </Slider>
      <div
        class="pl-[45px] lg:pl-[120px] py-5 lg:py-3 w-4/5 lg:w-2/6 rounded-r-xl lg:rounded-r-[34px] relative top-[-20px] lg:top-[-40px]"
        style={{
          background: "linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)"
        }}
      >
        <h2 class="lg:hidden whitespace-nowrap text-[38px] lg:text-[55px] leading-8 lg:leading-[83.66px] text-white font-black uppercase">{mobileTitle}</h2>
        <h2 class="hidden lg:flex whitespace-nowrap text-[38px] lg:text-[55px] leading-8 lg:leading-[83.66px] text-white font-black uppercase">{desktopTitle}</h2>
      </div>
      <div class="lg:max-w-[60%] lg:mx-auto lg:ml-[15%] mt-8 ml-[45px] flex flex-col gap-3">
        <h2 class="lg:hidden text-[38px] lg:text-[55px] leading-[32px] lg:leading-[83.66px] text-white font-black uppercase">{mobileSubtitle}</h2>
        <p class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{description}</p>
      </div>
    </div>
  );
}
