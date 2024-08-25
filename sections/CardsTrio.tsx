import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Card {
  caption?: {
    title: string;
    description: string;
  }
  image: ImageWidget;
  title: string;
  description: string;
}

interface Props {
  /**
   * @maxItems 3
   * @minItems 3 
   */
  cards: Card[];
}

export default function CardsTrio({ cards }: Props) {
  return (
    <div class="relative bg-primary overflow-x-hidden lg:overflow-hidden">
      <div class="lg:hidden">
        {
          cards.map((card, index) => {
            if (index === 0) {
              return (
                <div class="relative flex flex-col gap-[50px] mt-[90px]">
                  <div 
                    class="absolute top-[-14%] left-[30%] w-[300vw] h-[300px] rounded-ss-[40px]"
                    style={{
                      background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                    }}
                  />
                  <Image 
                    class="ml-[10%] relative z-10"
                    style={{
                      boxShadow: '0px 0px 50px -15px rgba(154,30,133,1)'
                    }}
                    src={card.image}
                    width={277}
                    alt={card.title}
                  />
                  <div class="flex flex-col gap-[12px] ml-[20%] mr-[7%] relative z-10">
                    <h1 class="max-w-[0] text-[38px] lg:text-[55px] leading-8 lg:leading-[83.66px] text-white font-black uppercase">{card.title}</h1>
                    <p class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{card.description}</p>
                  </div>
                </div>
              )
            }
            if (index === 1) {
              return (
                <div class="relative flex flex-col gap-[18px] mt-[50px]">
                  <div 
                    class="absolute top-[-10%] left-[-65%] w-[300vw] h-[300px] rounded-ss-[40px]"
                    style={{
                      background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                    }}
                  />
                  <div class="ml-[20%] relative z-10">
                    <div class="mb-[7px] ml-[7px]">
                      <h1 class="text-[12.42px] leading-[12.42px] text-white font-bold">{card.caption?.title}</h1>
                      <p class="text-[5.91px] leading-[8.05px] text-white lg:pb-0">{card.caption?.description}</p>
                    </div>
                    <Image 
                      class="relative z-10 w-1/2"
                      style={{
                        boxShadow: '0px 0px 50px -15px rgba(154,30,133,1)'
                      }}
                      src={card.image}
                      width={277}
                      alt={card.title}
                    />
                  </div>
                  <div class="flex flex-col gap-[12px] ml-[25%] mr-[7%] relative z-10">
                    <h1 class="max-w-[0] text-[38px] lg:text-[55px] leading-8 lg:leading-[83.66px] text-white font-black uppercase">{card.title}</h1>
                    <p class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{card.description}</p>
                  </div>
                </div>
              )
            }
            if (index === 2) {
              return (
                <div class="relative flex flex-col gap-[18px] mt-[50px]">
                  <div 
                    class="absolute top-[-3%] left-[-210%] w-[300vw] h-[300px] rounded-br-[40px]"
                    style={{
                      background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
                    }}
                  />
                  <div class="relative z-10">
                    <div class="mb-[7px] ml-[20%]">
                      <h1 class="text-[12.42px] leading-[12.42px] text-white font-bold">{card.caption?.title}</h1>
                      <p class="text-[5.91px] leading-[8.05px] text-white lg:pb-0">{card.caption?.description}</p>
                    </div>
                    <Image 
                      class="relative z-10 w-4/5	"
                      style={{
                        boxShadow: '0px 0px 50px -15px rgba(154,30,133,1)'
                      }}
                      src={card.image}
                      width={277}
                      alt={card.title}
                    />
                  </div>
                  <div class="flex flex-col gap-[12px] ml-[25%] mr-[7%] relative z-10">
                    <h1 class="max-w-[0] text-[38px] lg:text-[55px] leading-8 lg:leading-[83.66px] text-white font-black uppercase">{card.title}</h1>
                    <p class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{card.description}</p>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
      <div class="hidden lg:grid grid-cols-3 gap-[60px] mx-[60px] pt-[60px]">
        <div 
          class="w-[90%] rounded-ss-[100px] h-[600px] absolute right-0 top-0"
          style={{
            background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
          }} 
        />
        {
          cards.map((card, index) => (
            <div class="grid grid-rows-2 gap-[26px]">
              <div class="relative z-10 flex flex-col justify-start">
                {
                  card.caption &&
                  <div class="ml-[20px] mb-[10px]">
                    <h1 class="text-[21px] leading-[21px] text-white font-bold">{card.caption?.title}</h1>
                    <p class="text-[10px] leading-[13.62px] text-white lg:pb-0">{card.caption?.description}</p>
                  </div>
                }
                <Image 
                  class="relative z-10 w-full"
                  style={{
                    top: index === 0 ? "25%" : "",
                    boxShadow: '0px 0px 50px -15px rgba(154,30,133,1)'
                  }}
                  src={card.image}
                  width={277}
                  alt={card.title}
                />
              </div>
              <div class="flex flex-col gap-[12px] relative z-10 ml-[10%]">
                <h1 class="max-w-[0] text-[38px] lg:text-[55px] leading-8 lg:leading-[55px] text-white font-black uppercase">{card.title}</h1>
                <p class="text-base lg:text-2xl leading-8 lg:leading-[34px] text-white pb-4 lg:pb-0">{card.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
