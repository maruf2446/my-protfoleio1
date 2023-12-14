import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Bot = () => {
    return (
        // <div className='fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-4xl text-white bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce'>
        //     <a href="https://www.facebook.com/iskmaruf/" target='_blank'>
        //     <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
        //     </a>
        // </div>
        <div>
            <MessengerCustomerChat
                pageId="808052065974733"
                appId="6942769075839291"
                htmlRef="<REF_STRING>"
            />,
        </div>
    );
};

export default Bot;