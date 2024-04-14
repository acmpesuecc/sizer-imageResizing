export default function Resizer({get_img_details, set_img_details}){
    if (get_img_details == null){
        return(
            <div className="pl-8">
                <form>
                    <input className="m-1 outline-none text-white border border-2 bg-inherit border-cyan-300 rounded-2xl w-full px-3 py-1" type="text" name="fileName" id="name" placeholder="File name" /><br/>
                    <input className="m-1 outline-none text-white border border-2 bg-inherit border-cyan-300 rounded-2xl w-32 px-3 py-1" type="text" name="fileName" id="name" placeholder="width" />
                    <select name="unit" id="wid_u" className="outline-none border-none text-cyan-200 bg-inherit border-cyan-300 rounded-2xl text-white px-1 py-1">
                        <option className="text-white bg-black" value="px">px</option>
                        <option className="text-white bg-black" value="cm">cm</option>
                        <option className="text-white bg-black" value="in">in</option>
                    </select>
                    <input className="m-1 outline-none text-white border border-2 bg-inherit border-cyan-300 rounded-2xl w-32 px-3 py-1" type="text" name="fileName" id="name" placeholder="height" />
                    <select name="unit" id="hig_u" className="outline-none border-none text-cyan-200 bg-inherit border-cyan-300 rounded-2xl text-white px-1 py-1">
                        <option className="text-white bg-black" value="px">px</option>
                        <option className="text-white bg-black" value="cm">cm</option>
                        <option className="text-white bg-black" value="in">in</option>
                    </select> <br />
                    <div className="flex text-4xl font-bold text-white justify-between">
                        <h1 className="mt-8">
                            Presets:
                        </h1>
                        <button className="rounded-2xl my-2 ">
                            <svg width="166" height="64" viewBox="0 0 166 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2_90)">
                            <path d="M4 28C4 12.536 16.536 0 32 0H134C149.464 0 162 12.536 162 28C162 43.464 149.464 56 134 56H32C16.536 56 4 43.464 4 28Z" fill="#353535"/>
                            <path d="M130.807 17.0151H127.936V27.0645H137.985V24.1932H132.837L139 18.0303L136.97 16L130.807 22.1629V17.0151ZM115.015 32.8068H120.163L114 38.9698L116.03 41L122.193 34.837V39.9849H125.064V29.9356H115.015V32.8068Z" fill="#00FFFF"/>
                            <path d="M30.0398 37V23.9091H34.0881V26.2955H34.2244C34.4631 25.4318 34.8523 24.7898 35.392 24.3693C35.9318 23.9432 36.5597 23.7301 37.2756 23.7301C37.4688 23.7301 37.6676 23.7443 37.8722 23.7727C38.0767 23.7955 38.267 23.8324 38.4432 23.8835V27.5057C38.2443 27.4375 37.983 27.3835 37.6591 27.3438C37.3409 27.304 37.0568 27.2841 36.8068 27.2841C36.3125 27.2841 35.8665 27.3949 35.4688 27.6165C35.0767 27.8324 34.767 28.1364 34.5398 28.5284C34.3182 28.9148 34.2074 29.3693 34.2074 29.892V37H30.0398ZM45.581 37.2472C44.2116 37.2472 43.0298 36.9773 42.0355 36.4375C41.0469 35.892 40.2855 35.1165 39.7514 34.1108C39.223 33.0994 38.9588 31.8977 38.9588 30.5057C38.9588 29.1534 39.2259 27.9716 39.7599 26.9602C40.294 25.9432 41.0469 25.1534 42.0185 24.5909C42.9901 24.0227 44.1349 23.7386 45.4531 23.7386C46.3849 23.7386 47.2372 23.8835 48.0099 24.1733C48.7827 24.4631 49.4503 24.892 50.0128 25.4602C50.5753 26.0284 51.0128 26.7301 51.3253 27.5653C51.6378 28.3949 51.794 29.3466 51.794 30.4205V31.4602H40.4162V29.0398H47.9162C47.9105 28.5966 47.8054 28.2017 47.6009 27.8551C47.3963 27.5085 47.1151 27.2386 46.7571 27.0455C46.4048 26.8466 45.9986 26.7472 45.5384 26.7472C45.0724 26.7472 44.6548 26.8523 44.2855 27.0625C43.9162 27.267 43.6236 27.5483 43.4077 27.9062C43.1918 28.2585 43.0781 28.6591 43.0668 29.108V31.571C43.0668 32.1051 43.1719 32.5739 43.3821 32.9773C43.5923 33.375 43.8906 33.6847 44.277 33.9062C44.6634 34.1278 45.1236 34.2386 45.6577 34.2386C46.027 34.2386 46.3622 34.1875 46.6634 34.0852C46.9645 33.983 47.223 33.8324 47.4389 33.6335C47.6548 33.4347 47.8168 33.1903 47.9247 32.9006L51.7514 33.0114C51.5923 33.8693 51.2429 34.6165 50.7031 35.2528C50.169 35.8835 49.4673 36.375 48.598 36.7273C47.7287 37.0739 46.723 37.2472 45.581 37.2472ZM65.3516 27.9062L61.5249 28.0085C61.4851 27.7358 61.3771 27.4943 61.201 27.2841C61.0249 27.0682 60.7947 26.9006 60.5107 26.7812C60.2322 26.6562 59.9084 26.5938 59.5391 26.5938C59.0561 26.5938 58.6442 26.6903 58.3033 26.8835C57.968 27.0767 57.8033 27.3381 57.8089 27.6676C57.8033 27.9233 57.9055 28.1449 58.1158 28.3324C58.3317 28.5199 58.7152 28.6705 59.2663 28.7841L61.7891 29.2614C63.0959 29.5114 64.0675 29.9261 64.7038 30.5057C65.3459 31.0852 65.6697 31.8523 65.6754 32.8068C65.6697 33.7045 65.4027 34.4858 64.8743 35.1506C64.3516 35.8153 63.6357 36.3324 62.7266 36.7017C61.8175 37.0653 60.7777 37.2472 59.6072 37.2472C57.7379 37.2472 56.2635 36.8636 55.1839 36.0966C54.1101 35.3239 53.4964 34.2898 53.343 32.9943L57.4595 32.892C57.5504 33.3693 57.7862 33.733 58.1669 33.983C58.5476 34.233 59.0334 34.358 59.6243 34.358C60.1584 34.358 60.593 34.2585 60.9283 34.0597C61.2635 33.8608 61.4339 33.5966 61.4396 33.267C61.4339 32.9716 61.3033 32.7358 61.0476 32.5597C60.7919 32.3778 60.3913 32.2358 59.8459 32.1335L57.5618 31.6989C56.2493 31.4602 55.272 31.0199 54.63 30.3778C53.9879 29.7301 53.6697 28.9062 53.6754 27.9062C53.6697 27.0312 53.9027 26.2841 54.3743 25.6648C54.8459 25.0398 55.5163 24.5625 56.3857 24.233C57.255 23.9034 58.2805 23.7386 59.4624 23.7386C61.2351 23.7386 62.6328 24.1108 63.6555 24.8551C64.6783 25.5937 65.2436 26.6108 65.3516 27.9062ZM67.7273 37V23.9091H71.8949V37H67.7273ZM69.8153 22.3835C69.2301 22.3835 68.7273 22.1903 68.3068 21.804C67.8864 21.4119 67.6761 20.9403 67.6761 20.3892C67.6761 19.8437 67.8864 19.3778 68.3068 18.9915C68.7273 18.5994 69.2301 18.4034 69.8153 18.4034C70.4063 18.4034 70.9091 18.5994 71.3239 18.9915C71.7443 19.3778 71.9545 19.8437 71.9545 20.3892C71.9545 20.9403 71.7443 21.4119 71.3239 21.804C70.9091 22.1903 70.4063 22.3835 69.8153 22.3835ZM74.5817 37V34.6222L80.6499 27.233V27.1477H74.7947V23.9091H85.6186V26.517L79.9936 33.6761V33.7614H85.8232V37H74.5817ZM94.2607 37.2472C92.8913 37.2472 91.7095 36.9773 90.7152 36.4375C89.7266 35.892 88.9652 35.1165 88.4311 34.1108C87.9027 33.0994 87.6385 31.8977 87.6385 30.5057C87.6385 29.1534 87.9055 27.9716 88.4396 26.9602C88.9737 25.9432 89.7266 25.1534 90.6982 24.5909C91.6697 24.0227 92.8146 23.7386 94.1328 23.7386C95.0646 23.7386 95.9169 23.8835 96.6896 24.1733C97.4624 24.4631 98.13 24.892 98.6925 25.4602C99.255 26.0284 99.6925 26.7301 100.005 27.5653C100.317 28.3949 100.474 29.3466 100.474 30.4205V31.4602H89.0959V29.0398H96.5959C96.5902 28.5966 96.4851 28.2017 96.2805 27.8551C96.076 27.5085 95.7947 27.2386 95.4368 27.0455C95.0845 26.8466 94.6783 26.7472 94.218 26.7472C93.7521 26.7472 93.3345 26.8523 92.9652 27.0625C92.5959 27.267 92.3033 27.5483 92.0874 27.9062C91.8714 28.2585 91.7578 28.6591 91.7464 29.108V31.571C91.7464 32.1051 91.8516 32.5739 92.0618 32.9773C92.272 33.375 92.5703 33.6847 92.9567 33.9062C93.343 34.1278 93.8033 34.2386 94.3374 34.2386C94.7067 34.2386 95.0419 34.1875 95.343 34.0852C95.6442 33.983 95.9027 33.8324 96.1186 33.6335C96.3345 33.4347 96.4964 33.1903 96.6044 32.9006L100.431 33.0114C100.272 33.8693 99.9226 34.6165 99.3828 35.2528C98.8487 35.8835 98.147 36.375 97.2777 36.7273C96.4084 37.0739 95.4027 37.2472 94.2607 37.2472Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_2_90" x="0" y="0" width="166" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_90"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_90" result="shape"/>
                            </filter>
                            </defs>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
    else{
        return(
            <div className="pl-8">
                <form>
                    <input className="m-1 outline-none text-white border-2 bg-inherit border-cyan-300 rounded-2xl w-full px-3 py-1" type="text" name="fileName" id="name" placeholder="File name" value={get_img_details.FileName} onChange={()=>{
                        const fld = document.getElementsByName("fileName");
                        set_img_details(
                            {
                                FileName : fld.value,
                                w : get_img_details.w,
                                h : get_img_details.h
                            }
                        )
                    }}/><br/>
                    <input className="m-1 outline-none text-white border-2 bg-inherit border-cyan-300 rounded-2xl w-32 px-3 py-1" type="text" name="width" id="name" placeholder="width" value={get_img_details.w} onChange={()=>{
                        const fld = document.getElementsByName("width");
                        set_img_details(
                            {
                                FileName : get_img_details.FileName,
                                w : fld.value,
                                h : get_img_details.h
                            }
                        )
                    }} />
                    <select name="unit" id="wid_u" className="outline-none border-none text-cyan-200 bg-inherit border-cyan-300 rounded-2xl text-white px-1 py-1">
                        <option className="text-white bg-black" value="px">px</option>
                        <option className="text-white bg-black" value="cm">cm</option>
                        <option className="text-white bg-black" value="in">in</option>
                    </select>
                    <input className="m-1 outline-none text-white border border-2 bg-inherit border-cyan-300 rounded-2xl w-32 px-3 py-1" type="text" name="height" id="name" placeholder="height" value={get_img_details.h} onChange={()=>{
                        const fld = document.getElementsByName("height");
                        set_img_details(
                            {
                                FileName : get_img_details.FileName,
                                w : get_img_details.w,
                                h : fld.value
                            }
                        )
                    }} />
                    <select name="unit" id="hig_u" className="outline-none border-none text-cyan-200 bg-inherit border-cyan-300 rounded-2xl text-white px-1 py-1">
                        <option className="text-white bg-black" value="px">px</option>
                        <option className="text-white bg-black" value="cm">cm</option>
                        <option className="text-white bg-black" value="in">in</option>
                    </select> <br />
                    <div className="flex text-4xl font-bold text-white justify-between">
                        <h1 className="mt-8">
                            Presets:
                        </h1>
                        <button className="rounded-2xl my-2 ">
                            <svg width="166" height="64" viewBox="0 0 166 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2_90)">
                            <path d="M4 28C4 12.536 16.536 0 32 0H134C149.464 0 162 12.536 162 28C162 43.464 149.464 56 134 56H32C16.536 56 4 43.464 4 28Z" fill="#353535"/>
                            <path d="M130.807 17.0151H127.936V27.0645H137.985V24.1932H132.837L139 18.0303L136.97 16L130.807 22.1629V17.0151ZM115.015 32.8068H120.163L114 38.9698L116.03 41L122.193 34.837V39.9849H125.064V29.9356H115.015V32.8068Z" fill="#00FFFF"/>
                            <path d="M30.0398 37V23.9091H34.0881V26.2955H34.2244C34.4631 25.4318 34.8523 24.7898 35.392 24.3693C35.9318 23.9432 36.5597 23.7301 37.2756 23.7301C37.4688 23.7301 37.6676 23.7443 37.8722 23.7727C38.0767 23.7955 38.267 23.8324 38.4432 23.8835V27.5057C38.2443 27.4375 37.983 27.3835 37.6591 27.3438C37.3409 27.304 37.0568 27.2841 36.8068 27.2841C36.3125 27.2841 35.8665 27.3949 35.4688 27.6165C35.0767 27.8324 34.767 28.1364 34.5398 28.5284C34.3182 28.9148 34.2074 29.3693 34.2074 29.892V37H30.0398ZM45.581 37.2472C44.2116 37.2472 43.0298 36.9773 42.0355 36.4375C41.0469 35.892 40.2855 35.1165 39.7514 34.1108C39.223 33.0994 38.9588 31.8977 38.9588 30.5057C38.9588 29.1534 39.2259 27.9716 39.7599 26.9602C40.294 25.9432 41.0469 25.1534 42.0185 24.5909C42.9901 24.0227 44.1349 23.7386 45.4531 23.7386C46.3849 23.7386 47.2372 23.8835 48.0099 24.1733C48.7827 24.4631 49.4503 24.892 50.0128 25.4602C50.5753 26.0284 51.0128 26.7301 51.3253 27.5653C51.6378 28.3949 51.794 29.3466 51.794 30.4205V31.4602H40.4162V29.0398H47.9162C47.9105 28.5966 47.8054 28.2017 47.6009 27.8551C47.3963 27.5085 47.1151 27.2386 46.7571 27.0455C46.4048 26.8466 45.9986 26.7472 45.5384 26.7472C45.0724 26.7472 44.6548 26.8523 44.2855 27.0625C43.9162 27.267 43.6236 27.5483 43.4077 27.9062C43.1918 28.2585 43.0781 28.6591 43.0668 29.108V31.571C43.0668 32.1051 43.1719 32.5739 43.3821 32.9773C43.5923 33.375 43.8906 33.6847 44.277 33.9062C44.6634 34.1278 45.1236 34.2386 45.6577 34.2386C46.027 34.2386 46.3622 34.1875 46.6634 34.0852C46.9645 33.983 47.223 33.8324 47.4389 33.6335C47.6548 33.4347 47.8168 33.1903 47.9247 32.9006L51.7514 33.0114C51.5923 33.8693 51.2429 34.6165 50.7031 35.2528C50.169 35.8835 49.4673 36.375 48.598 36.7273C47.7287 37.0739 46.723 37.2472 45.581 37.2472ZM65.3516 27.9062L61.5249 28.0085C61.4851 27.7358 61.3771 27.4943 61.201 27.2841C61.0249 27.0682 60.7947 26.9006 60.5107 26.7812C60.2322 26.6562 59.9084 26.5938 59.5391 26.5938C59.0561 26.5938 58.6442 26.6903 58.3033 26.8835C57.968 27.0767 57.8033 27.3381 57.8089 27.6676C57.8033 27.9233 57.9055 28.1449 58.1158 28.3324C58.3317 28.5199 58.7152 28.6705 59.2663 28.7841L61.7891 29.2614C63.0959 29.5114 64.0675 29.9261 64.7038 30.5057C65.3459 31.0852 65.6697 31.8523 65.6754 32.8068C65.6697 33.7045 65.4027 34.4858 64.8743 35.1506C64.3516 35.8153 63.6357 36.3324 62.7266 36.7017C61.8175 37.0653 60.7777 37.2472 59.6072 37.2472C57.7379 37.2472 56.2635 36.8636 55.1839 36.0966C54.1101 35.3239 53.4964 34.2898 53.343 32.9943L57.4595 32.892C57.5504 33.3693 57.7862 33.733 58.1669 33.983C58.5476 34.233 59.0334 34.358 59.6243 34.358C60.1584 34.358 60.593 34.2585 60.9283 34.0597C61.2635 33.8608 61.4339 33.5966 61.4396 33.267C61.4339 32.9716 61.3033 32.7358 61.0476 32.5597C60.7919 32.3778 60.3913 32.2358 59.8459 32.1335L57.5618 31.6989C56.2493 31.4602 55.272 31.0199 54.63 30.3778C53.9879 29.7301 53.6697 28.9062 53.6754 27.9062C53.6697 27.0312 53.9027 26.2841 54.3743 25.6648C54.8459 25.0398 55.5163 24.5625 56.3857 24.233C57.255 23.9034 58.2805 23.7386 59.4624 23.7386C61.2351 23.7386 62.6328 24.1108 63.6555 24.8551C64.6783 25.5937 65.2436 26.6108 65.3516 27.9062ZM67.7273 37V23.9091H71.8949V37H67.7273ZM69.8153 22.3835C69.2301 22.3835 68.7273 22.1903 68.3068 21.804C67.8864 21.4119 67.6761 20.9403 67.6761 20.3892C67.6761 19.8437 67.8864 19.3778 68.3068 18.9915C68.7273 18.5994 69.2301 18.4034 69.8153 18.4034C70.4063 18.4034 70.9091 18.5994 71.3239 18.9915C71.7443 19.3778 71.9545 19.8437 71.9545 20.3892C71.9545 20.9403 71.7443 21.4119 71.3239 21.804C70.9091 22.1903 70.4063 22.3835 69.8153 22.3835ZM74.5817 37V34.6222L80.6499 27.233V27.1477H74.7947V23.9091H85.6186V26.517L79.9936 33.6761V33.7614H85.8232V37H74.5817ZM94.2607 37.2472C92.8913 37.2472 91.7095 36.9773 90.7152 36.4375C89.7266 35.892 88.9652 35.1165 88.4311 34.1108C87.9027 33.0994 87.6385 31.8977 87.6385 30.5057C87.6385 29.1534 87.9055 27.9716 88.4396 26.9602C88.9737 25.9432 89.7266 25.1534 90.6982 24.5909C91.6697 24.0227 92.8146 23.7386 94.1328 23.7386C95.0646 23.7386 95.9169 23.8835 96.6896 24.1733C97.4624 24.4631 98.13 24.892 98.6925 25.4602C99.255 26.0284 99.6925 26.7301 100.005 27.5653C100.317 28.3949 100.474 29.3466 100.474 30.4205V31.4602H89.0959V29.0398H96.5959C96.5902 28.5966 96.4851 28.2017 96.2805 27.8551C96.076 27.5085 95.7947 27.2386 95.4368 27.0455C95.0845 26.8466 94.6783 26.7472 94.218 26.7472C93.7521 26.7472 93.3345 26.8523 92.9652 27.0625C92.5959 27.267 92.3033 27.5483 92.0874 27.9062C91.8714 28.2585 91.7578 28.6591 91.7464 29.108V31.571C91.7464 32.1051 91.8516 32.5739 92.0618 32.9773C92.272 33.375 92.5703 33.6847 92.9567 33.9062C93.343 34.1278 93.8033 34.2386 94.3374 34.2386C94.7067 34.2386 95.0419 34.1875 95.343 34.0852C95.6442 33.983 95.9027 33.8324 96.1186 33.6335C96.3345 33.4347 96.4964 33.1903 96.6044 32.9006L100.431 33.0114C100.272 33.8693 99.9226 34.6165 99.3828 35.2528C98.8487 35.8835 98.147 36.375 97.2777 36.7273C96.4084 37.0739 95.4027 37.2472 94.2607 37.2472Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_2_90" x="0" y="0" width="166" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_90"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_90" result="shape"/>
                            </filter>
                            </defs>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}