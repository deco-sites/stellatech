import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Location {
  country: string;
  city: string;
}

interface Props {
  desktopImage: ImageWidget;
  mobileImage: ImageWidget;
  title: string;
  description: string;
  locations: Location[];
}

export default function WorldMap({ description, desktopImage, locations, mobileImage, title }: Props) {
  return (
    <div class="relative bg-primary overflow-x-hidden pt-[50px] lg:pt-[100px]">
      <Image 
        class="w-full hidden lg:flex"
        src={desktopImage}
        width={600}
        alt={"World Map"}
      />
      <Image 
        class="w-full lg:hidden"
        src={mobileImage}
        width={600}
        alt={"World Map"}
      />
      <div class="ml-[20%] lg:ml-[40%] relative top-[-200px] lg:max-w-[50%]">
        <h2 class="mb-[4%] text-[38px] lg:text-[55px] leading-[32px] text-white font-black uppercase">{title}</h2>
        <p class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{description}</p>
      </div>
      <div class="lg:hidden w-full flex overflow-x-auto absolute bottom-[90px]">
        {
          locations.map(location => (
            <div class="flex min-w-[250px] gap-[24px] first:pl-[24px] last:pr-[24px]">
              <Image
                class="h-fit"
                src={"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/12273/81c76702-b883-49bd-aa60-c3fd0ae4497c"}
                alt={"arrow"}
                width={20}
              />
              <div class="">
                <p class="font-black text-white text-[39px] leading-[30px]">{location.city}</p>
                <p class="text-white text-base leading-[24.34px]">{location.country}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
