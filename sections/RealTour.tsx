import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  backgroundImage: ImageWidget;
  frontImage: ImageWidget;
  mobileDispositiveImage: ImageWidget;
  title: string;
  description: string;
}

export default function RealTour({ description, backgroundImage, frontImage, mobileDispositiveImage, title }: Props) {
  return (
    <div class="relative bg-primary pt-[100px] h-[900px] md:h-[1400px] lg:h-[1200px] overflow-x-hidden">
      <Image
        class="w-full lg:w-1/2 relative right-[7%] lg:right-0 lg:ml-[5%]"
        src={backgroundImage}
        alt={backgroundImage}
        width={518.83}
        loading="lazy"
        decoding="async"
      />
      <div
        class="rounded-[11.8px] w-full lg:w-[45%] h-[270px] lg:h-[450px] absolute top-[25%] lg:top-[15%] left-1/2"
        style={{
          background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
        }}
      />
      <Image
        class="absolute top-[28%] lg:top-[19%] left-[38%] lg:left-auto lg:right-[10%] z-10"
        src={frontImage}
        alt={frontImage}
        width={788}
        loading="lazy"
        decoding="async"
      />
      <div 
        class="absolute z-20 w-3/5 lg:w-[28%] top-[55%] lg:top-[54%] left-[19%] lg:left-[28%] h-[54px] lg:h-[60px] rounded-[11.8px]"
        style={{
          background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
        }}
      />
      <Image
        class="absolute z-30 w-2/6 lg:w-[15%] right-[20%] lg:right-[43%] top-[33%] lg:top-[27%]"
        src={mobileDispositiveImage}
        alt={mobileDispositiveImage}
        width={400}
        loading="lazy"
        decoding="async"
      />
      <h1 class="z-40 absolute top-[56%] lg:top-[53%] left-[11%] lg:left-[23%] text-[38px] lg:text-[55px] leading-8 lg:leading-[83.66px] text-white font-black uppercase">{title}</h1>
      <p class="max-w-[85%] lg:max-w-[50%] absolute top-[64%] md:top-[73%] lg:top-[70%] 2xl:top-[75%] left-[11%] lg:left-[23%] text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{description}</p>
    </div>
  );
}
