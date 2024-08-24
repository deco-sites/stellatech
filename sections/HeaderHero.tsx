import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface item {
  icon: AvailableIcons;
  text: string;
}

export interface Props {
  backgroundImage: ImageWidget;
  image: ImageWidget;
  description: string;
  title: string;
  items: item[];
}
export default function HeaderHero({ backgroundImage, description, image, items, title }: Props) {
  return (
    <header class="relative w-screen h-screen bg-primary overflow-x-hidden">
      <Image  
          class="w-screen h-screen absolute top-0 left-0 object-cover"
          width={1920}
          height={884}
          src={backgroundImage}
          alt={backgroundImage}
          loading="eager"
          decoding="sync"
          preload={true}
      />
      <div class="relative top-0 left-10 lg:left-0 lg:px-[9%] pt-[7%] lg:pt-[1%] pb-[4%] w-full h-[90%] lg:h-full">
        <div
            class="h-[12%] lg:h-1/2 border border-white absolute top-0 left-[70%] lg:left-[43%] z-20"
        />
        <div class="relative top-0 left-0 w-full h-full z-10 flex items-start lg:items-center rounded-[34px] pl-6"
            style={{
                background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
            }}
        >
          <Icon class="hidden lg:flex mb-[15%]" id="Logo" width={336} />
          <Icon class="lg:hidden mb-[15%]" id="Logo" width={163} height={100} />
        </div>
        <div class="absolute bottom-[5%] lg:bottom-[13%] z-20 max-w-[300px] lg:max-w-[500px] left-[8%] lg:left-1/4">
            <p class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{description}</p>
            <h1 class="text-[38px] lg:text-[55px] leading-8 lg:leading-[83.66px] text-white font-black uppercase">{title}</h1>
        </div>
        <div class="overflow-x-auto bg-primary w-full lg:w-[90%] mx-auto rounded-[21px] relative z-20 bottom-0 lg:bottom-[7%] flex justify-between px-5">
            {
              items.map(item => (
                <div class="flex gap-2 justify-center items-center py-5 min-w-[200px]">
                  <Icon id={item.icon} width={60} height={60} />
                  <p class="text-[13.78px] lg:text-[21px] leading-[20.96px] lg:leading-[31.94px] text-white">{item.text}</p>
                </div>
              ))
            }
        </div>
      </div>
      <Image  
          class="absolute right-0 top-[15%] lg:top-[7%] z-20 object-contain z-20 w-[97%] lg:w-[40%]"
          width={1109.92}
          src={image}
          alt={image}
          loading="eager"
          decoding="sync"
          preload={true}
      />
    </header>
  );
}
