import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  mobileImage: ImageWidget;
  desktopCoverImage: ImageWidget;
  desktopCardImage: ImageWidget;
  title: string;
  description: string;
}

export default function StockManagement({ description, desktopCardImage, desktopCoverImage, mobileImage, title }: Props) {
  return (
    <div class="bg-primary lg:pt-40 lg:pb-48 lg:pl-[10%] lg:pr-[20%]">
      <div
        class="lg:w-full lg:relative rounded-3xl lg:h-[400px] xl:h-[500px] 2xl:h-[600px]"
        style={{
          background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
        }}
      >
        <Image
          class="lg:hidden w-full relative top-[-100px]"
          src={mobileImage}
          width={518.83}
        />
        <Image
          class="hidden lg:flex w-[70%] relative top-[-200px] ml-[3%]"
          src={desktopCoverImage}
          width={788}
        />
        <Image
          class="hidden lg:flex w-[40%] absolute top-[15%] right-[20%]"
          src={desktopCardImage}
          width={400}
        />
        <div class="pl-[58px] pr-[26px] relative top-[-50px] lg:absolute lg:max-w-[47%] lg:top-[40%] lg:right-[-17%] 2xl:right-[-20%]">
          <h1 class="text-[38px] 2xl:text-[55px] leading-8 2xl:leading-[83.66px] text-white font-black uppercase">{title}</h1>
          <p class="text-base 2xl:text-2xl leading-8 2xl:leading-[34px] text-white pb-4 lg:pb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
