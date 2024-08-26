import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";

export interface Social {
  icon: AvailableIcons;
  href: string;
}

export interface Props {
  social: Social[];
}

export default function FooterLP({
  social
}: Props) {
  return (
    <div class="bg-primary relative px-[10%] pb-[25px]">
      <div
        class="rounded-[16px] lg:rounded-[34px] w-full h-[130px] flex lg:justify-between lg:items-center"
        style={{
          background: 'linear-gradient(252.56deg, rgba(154, 30, 133, 0.97) 19.32%, rgba(249, 157, 15, 0.97) 78.9%, rgba(255, 203, 79, 0.97) 104.97%)'
        }} 
      >
        <div class="flex justify-evenly lg:gap-[20px] lg:pl-[20px] pt-[20px] lg:pt-0 w-full lg:w-[300px]">
          {
            social.map(social => {
              if (social.icon === 'Linkedin') {
                return (
                  <a href={social.href} class="h-[30px]">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27 1H2.99375C1.89375 1 1 1.90625 1 3.01875V26.9813C1 28.0938 1.89375 29 2.99375 29H27C28.1 29 29 28.0938 29 26.9813V3.01875C29 1.90625 28.1 1 27 1ZM9.4625 25H5.3125V11.6375H9.46875V25H9.4625ZM7.3875 9.8125C6.05625 9.8125 4.98125 8.73125 4.98125 7.40625C4.98125 6.08125 6.05625 5 7.3875 5C8.7125 5 9.79375 6.08125 9.79375 7.40625C9.79375 8.7375 8.71875 9.8125 7.3875 9.8125ZM25.0187 25H20.8687V18.5C20.8687 16.95 20.8375 14.9563 18.7125 14.9563C16.55 14.9563 16.2188 16.6438 16.2188 18.3875V25H12.0688V11.6375H16.05V13.4625H16.1062C16.6625 12.4125 18.0188 11.3062 20.0375 11.3062C24.2375 11.3062 25.0187 14.075 25.0187 17.675V25Z" stroke="white"/>
                    </svg>
                  </a>
                )
              } 
              if (social.icon === 'Telegram') {
                return (
                  <a href={social.href} class="h-[30px]">
                    <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.5 10.5L13.2971 18.6504L27.4185 24.0258L28 1L2 16.6447L9.55911 18.0086V29L16.9521 20.5759" stroke="white" stroke-linecap="round"/>
                    </svg>
                  </a>
                )
              }
              return (
              <a href={social.href} class="h-[30px]">
                <Icon id={social.icon} size={30} />
              </a>
            )})
          }
        </div>
        <Icon class="hidden lg:flex pr-[20px]" id="Logo" width={200} />
      </div>
      <div class="w-[2px] h-[120px] absolute bottom-[20%] lg:bottom-[50%] right-[50%] lg:right-[30%] bg-white" />
      <Icon class="lg:hidden ml-auto" id="Logo" width={153} height={100} />
    </div>
  );
}
