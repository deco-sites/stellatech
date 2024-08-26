import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  title: string;
  description: string;
  successDescription: string;
  CTAText: string;
}

export default function Partnering({ CTAText, description, successDescription, title }: Props) {
  return (
    <div class="relative bg-primary overflow-x-hidden py-[70px]">
      <div class="relative px-[10%]">
        <div class="text-[38px] lg:text-[55px] leading-[32px] lg:leading-[60px] text-white font-black uppercase pb-[12px] lg:pb-[20px]" dangerouslySetInnerHTML={{
          __html: title
        }}/>
        <div class="lg:flex lg:items-center lg:gap-[50px]">
          {
            true && 
            <>
              <div class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white lg:w-1/2" dangerouslySetInnerHTML={{
                __html: description
              }} />
              <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px] lg:w-1/2"
                style={{
                  background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                }}
              >
                <input class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none" type="text" />
                <button class="absolute rounded-r-[8.22px] h-full bg-[#9A1E85] text-white font-black text-[12.65px] leading-[19.24px] uppercase right-0 px-[8px]">{CTAText}</button>
              </div>
            </>
          }
          {
            false && 
            <>
              <div class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white lg:w-1/2" dangerouslySetInnerHTML={{
                __html: successDescription
              }} />
              <div class="w-1/2">
                <Image 
                  width={200}
                  alt="check"
                  src={"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/12273/e6aad1a9-c916-4540-bca3-3375c4bc6b66"}
                />
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}
