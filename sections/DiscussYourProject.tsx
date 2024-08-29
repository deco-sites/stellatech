import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Props {
  image: ImageWidget;
  step1: {
    title: string;
    description: string;
    CTAText: string;
  }
  step2: {
    title: string;
    description: string;
    CTAText: string;
    options: string[];
  }
  step3: {
    title: string;
    description: string;
    CTAText: string;
    options: string[];
  }
  step4: {
    title: string;
    description: string;
    CTAText: string;
  }
  success: {
    title: string;
    description: string;
  }
}

export default function DiscussYourProject({ image, step1, step2, step3, step4, success }: Props) {
  return (
    <div class="relative">
      <Image
        class="w-4/5 lg:w-2/5"
        src={image}
        width={300}
      />
      {
        <div>
          <input type="checkbox" class="hidden peer/tab1" name="tab1" id="tab1" />
          <div class="absolute z-[5] top-0 peer-checked/tab1:hidden bg-primary overflow-x-hidden pb-[70px] lg:flex lg:items-center">
            <Image
              class="w-4/5 lg:w-2/5"
              src={image}
              width={300}
            />
            <div class="min-h-[590px] relative px-[10%] lg:px-[5%]">
              <div class="relative lg:left-[-120px] text-[38px] lg:text-[55px] leading-[32px] lg:leading-[60px] text-white font-black uppercase pb-[12px] lg:pb-[20px]" dangerouslySetInnerHTML={{
                __html: step1.title
              }}/>
              <div class="lg:max-w-[70%]">
                <div class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white" dangerouslySetInnerHTML={{
                  __html: step1.description
                }} />
                <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px]"
                  style={{
                    background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                  }}
                >
                  <input required class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none px-5" type="text" />
                  <label htmlFor={"tab1"} class="flex items-center cursor-pointer top-0 absolute rounded-r-[8.22px] h-full bg-[#9A1E85] text-white font-black text-[12.65px] lg:text-[20px] leading-[19.24px] uppercase right-0 px-[48px]">{step1.CTAText}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        <div>
          <input type="checkbox" class="hidden peer/tab2" name="tab2" id="tab2" />
          <div class="absolute z-[4] top-0 peer-checked/tab2:hidden bg-primary overflow-x-hidden pb-[70px] lg:flex lg:items-center">
            <Image
              class="w-4/5 lg:w-2/5"
              src={image}
              width={300}
            />
            <div class="min-h-[590px] relative px-[10%] lg:px-[5%]">
              <div class="relative lg:left-[-120px] text-[38px] lg:text-[55px] leading-[32px] lg:leading-[60px] text-white font-black uppercase pb-[12px] lg:pb-[20px]" dangerouslySetInnerHTML={{
                __html: step2.title
              }}/>
              <div class="lg:max-w-[70%]">
                <div class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white" dangerouslySetInnerHTML={{
                  __html: step2.description
                }} />
                <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px]"
                  style={{
                    background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                  }}
                >
                  <select name="" id="" class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none cursor-pointer">
                    {step2.options.map(option => (
                      <option value="">{option}</option>
                    ))}
                  </select>
                  <Icon id="ArrowBottom" size={24} fill="white" class="text-white absolute top-[30%] right-[30%] pointer-events-none" />
                  <label htmlFor={"tab2"} class="flex items-center cursor-pointer top-0 absolute rounded-r-[8.22px] h-full bg-[#9A1E85] text-white font-black text-[12.65px] lg:text-[20px] leading-[19.24px] uppercase right-0 px-[48px]">{step2.CTAText}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        <div>
          <input type="checkbox" class="hidden peer/tab3" name="tab3" id="tab3" />
          <div class="absolute z-[3] top-0 peer-checked/tab3:hidden bg-primary overflow-x-hidden pb-[70px] lg:flex lg:items-center">
            <Image
              class="w-4/5 lg:w-2/5"
              src={image}
              width={300}
            />
            <div class="min-h-[590px] relative px-[10%] lg:px-[5%]">
              <div class="relative lg:left-[-120px] text-[38px] lg:text-[55px] leading-[32px] lg:leading-[60px] text-white font-black uppercase pb-[12px] lg:pb-[20px]" dangerouslySetInnerHTML={{
                __html: step3.title
              }}/>
              <div class="lg:max-w-[70%]">
                <div class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white" dangerouslySetInnerHTML={{
                  __html: step3.description
                }} />
                <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px]"
                  style={{
                    background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                  }}
                >
                  <select name="" id="" class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none cursor-pointer">
                    {step3.options.map(option => (
                      <option value="">{option}</option>
                    ))}
                  </select>
                  <Icon id="ArrowBottom" size={24} fill="white" class="text-white absolute top-[30%] right-[30%] pointer-events-none" />
                  <label htmlFor={"tab3"} class="flex items-center cursor-pointer top-0 absolute rounded-r-[8.22px] h-full bg-[#9A1E85] text-white font-black text-[12.65px] lg:text-[20px] leading-[19.24px] uppercase right-0 px-[48px]">{step3.CTAText}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        <div>
          <input type="checkbox" class="hidden peer/tab4" name="tab4" id="tab4" />
          <div class="absolute z-[2] top-0 peer-checked/tab4:hidden bg-primary overflow-x-hidden pb-[70px] lg:flex lg:items-center">
            <Image
              class="w-4/5 lg:w-2/5"
              src={image}
              width={300}
            />
            <div class="min-h-[590px] relative px-[10%] lg:px-[5%]">
              <div class="relative lg:left-[-120px] text-[38px] lg:text-[55px] leading-[32px] lg:leading-[60px] text-white font-black uppercase pb-[12px] lg:pb-[20px]" dangerouslySetInnerHTML={{
                __html: step4.title
              }}/>
              <div class="lg:max-w-[70%]">
                <div class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white" dangerouslySetInnerHTML={{
                  __html: step4.description
                }} />
                <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px]"
                  style={{
                    background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                  }}
                >
                  <input placeholder={"Your name"} class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none px-5" type="text" />
                </div>
                <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px]"
                  style={{
                    background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                  }}
                >
                  <input placeholder={"Company"} class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none px-5" type="text" />
                </div>
                <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px]"
                  style={{
                    background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                  }}
                >
                  <input placeholder={"Phone number"} class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none px-5" type="text" />  
                </div>
                <div class="relative p-[1px] rounded-[8.22px] h-[50px] mt-[40px]"
                  style={{
                    background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                  }}
                >
                  <input placeholder={"Email"} class="w-full rounded-[8.22px] bg-primary h-full text-white outline-none px-5" type="text" />
                  <label class="flex items-center cursor-pointer top-0 absolute rounded-r-[8.22px] h-full bg-[#9A1E85] text-white font-black text-[12.65px] lg:text-[20px] leading-[19.24px] uppercase right-0 px-[48px]">{step4.CTAText}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        <div class="hidden relative px-[10%] lg:px-[5%]">
          <div class="relative lg:left-[-120px] text-[38px] lg:text-[55px] leading-[32px] lg:leading-[60px] text-white font-black uppercase pb-[12px] lg:pb-[20px]" dangerouslySetInnerHTML={{
            __html: success.title
          }}/>
          <div class="lg:max-w-[70%]">
            <div class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white" dangerouslySetInnerHTML={{
              __html: success.description
            }} />
            <Image 
              width={200}
              alt="check"
              src={"https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/12273/e6aad1a9-c916-4540-bca3-3375c4bc6b66"}
            />
          </div>
        </div>
      }
    </div>
  );
}
