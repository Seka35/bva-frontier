import { useEffect, useRef } from "react";

const logos = [
    "/logo/685bf79d2cecfca83be94287_imessage.webp",
    "/logo/685bf79d2dc29ed5b8bcee92_replit.webp",
    "/logo/685bf79d62123cc342bcbc7a_github.webp",
    "/logo/685bf79dadaf5b9ec3e4d993_notion.webp",
    "/logo/685bf79dbd085cf0d09838f2_obsidian.webp",
    "/logo/685bf79dd99dd275c84910b5_perplexity.webp",
    "/logo/685bf79dea7b28162fd04606_figma.webp",
    "/logo/6863d1da7723389966d8b94d_tinder.webp",
    "/logo/google-2015-10-22.webp",
    "/logo/instagram-2016-05-12.webp",
    "/logo/telegram-messenger-2019-01-15.webp",
];

const LogoCarousel = () => {
    return (
        <div className="w-full py-0 bg-transparent overflow-hidden flex items-center justify-center">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <div className="p-4 bg-muted/10 rounded-3xl hover:bg-muted/20 transition-colors">
                                <img
                                    src={logo}
                                    alt={`Logo ${index}`}
                                    className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 object-contain rounded-2xl"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <li key={`duplicate-${index}`}>
                            <div className="p-4 bg-muted/10 rounded-3xl hover:bg-muted/20 transition-colors">
                                <img
                                    src={logo}
                                    alt={`Logo ${index}`}
                                    className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 object-contain rounded-2xl"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LogoCarousel;
