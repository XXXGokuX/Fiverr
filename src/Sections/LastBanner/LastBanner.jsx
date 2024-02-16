import React from 'react'

function LastBanner() {
    return (
        <div class="banner-section-second px-[32px] my-10 md:my-28">
            <div class="banner-section-inner relative text-white ">
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" class=" lg:object-top object-none object-left h-[300px] lg:h-[350px] w-full rounded-sm" />

                <div class="banner-text absolute top-[50%] -translate-y-[60%] w-full ps-[32px] pt-[64px]">
                    <h1 class="font-semibold md:text-4xl text-3xl">Suddenly it's all so <i>doable.</i></h1>

                    <div class="btn mt-7">
                        <a href="#" class="bg-[#1dbf73] px-5 py-2 rounded-sm font-semibold">Join Fiverr</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LastBanner
