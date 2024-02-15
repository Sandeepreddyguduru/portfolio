import React from "react";
import './about.scss'
import Trans from "../translator/trans";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const organizations = t('about.experience.organizations', { returnObjects: true });
    const technical = t('about.technologies.courses', { returnObjects: true });

    const techologies = (type) => {
    let icon = '';
        switch (type) {
        case "react":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 -14 256 256" version="1.1" preserveAspectRatio="xMidYMid"><g><path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF"></path></g></svg>`;
            break;
        case "redux":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"><path d="M21.7868 21.556C22.8939 21.4433 23.7338 20.505 23.6956 19.3789C23.6575 18.253 22.703 17.3522 21.5577 17.3522H21.4814C20.2978 17.3897 19.3817 18.3656 19.4199 19.5291C19.4581 20.0921 19.6871 20.58 20.0307 20.9178C18.7327 23.4326 16.7475 25.2717 13.7698 26.8106C11.7464 27.8615 9.6468 28.2369 7.54715 27.9742C5.82918 27.749 4.49301 26.9984 3.65301 25.7596C2.43144 23.9205 2.31695 21.9312 3.34773 19.942C4.07312 18.5157 5.21828 17.4647 5.94367 16.9392C5.79098 16.4513 5.56187 15.6256 5.44738 15.0251C-0.0882044 18.9661 0.484491 24.2959 2.16426 26.8106C3.42402 28.6873 5.98187 29.8509 8.80691 29.8509C9.57039 29.8509 10.3339 29.7757 11.0975 29.5882C15.9841 28.6498 19.6872 25.7972 21.7868 21.556ZM28.5059 16.9018C25.6045 13.5613 21.3287 11.7222 16.4421 11.7222H15.8314C15.4878 11.0466 14.7624 10.5961 13.9607 10.5961H13.8843C12.7009 10.6337 11.7848 11.6095 11.8229 12.7731C11.8611 13.8991 12.8154 14.7999 13.9607 14.7999H14.037C14.8769 14.7624 15.6023 14.2369 15.9077 13.5237H16.5948C19.4963 13.5237 22.2449 14.3494 24.7265 15.9634C26.6352 17.202 28.0096 18.816 28.7731 20.7677C29.4221 22.3441 29.3839 23.883 28.6967 25.1967C27.6278 27.1859 25.8336 28.2744 23.4666 28.2744C21.9395 28.2744 20.4889 27.824 19.7253 27.4862C19.3054 27.8615 18.5418 28.462 18.0073 28.8375C19.649 29.5881 21.3287 30.001 22.9321 30.001C26.597 30.001 29.3076 28.0116 30.3384 26.0224C31.4454 23.8454 31.369 20.0921 28.5059 16.9018ZM9.1123 22.1939C9.15051 23.3199 10.1049 24.2206 11.2502 24.2206H11.3266C12.51 24.1832 13.4262 23.2073 13.388 22.0438C13.3499 20.9177 12.3954 20.017 11.2502 20.017H11.1739C11.0975 20.017 10.9829 20.017 10.9067 20.0544C9.3414 17.5022 8.69242 14.7248 8.92152 11.7221C9.0741 9.47006 9.83769 7.51828 11.1739 5.9043C12.2809 4.51555 14.4188 3.83996 15.8696 3.80252C19.9162 3.7274 21.634 8.68179 21.7486 10.6711C22.2449 10.7837 23.0848 11.0465 23.6575 11.2342C23.1993 5.15382 19.3817 2.00098 15.7169 2.00098C12.2809 2.00098 9.1123 4.44067 7.85242 8.04387C6.09637 12.8481 7.24164 17.4647 9.37949 21.1055C9.18871 21.3682 9.0741 21.7811 9.1123 22.194V22.1939Z" fill="#764ABC"/></svg>`;
            break;
        case "javascript":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#f7df1e"/><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"/></svg>`;
            break;
        case "bootstrap":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z" fill="#7911f7"/></svg>`;
            break;
        case "html":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/><path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/><path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/></svg>`;
            break;
        case "css":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" fill="none"><path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/><path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/><path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/></svg>`;
            break;
        case "scss":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32"><title>file_type_scss2</title><path d="M16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2Z" style="fill:#c69;fill-rule:evenodd"/><path d="M24.782,7.992c-.634-2.486-4.757-3.3-8.659-1.918A19.605,19.605,0,0,0,9.479,9.885c-2.149,2.01-2.492,3.76-2.351,4.491.5,2.58,4.033,4.266,5.486,5.517V19.9c-.428.211-3.564,1.8-4.3,3.42-.774,1.712.123,2.94.718,3.105A4.4,4.4,0,0,0,13.78,24.5a4.824,4.824,0,0,0,.472-4.288,5.639,5.639,0,0,1,2.143-.123c2.456.287,2.938,1.82,2.846,2.462a1.62,1.62,0,0,1-.779,1.1c-.172.107-.225.143-.21.223.021.115.1.111.247.086a1.915,1.915,0,0,0,1.336-1.707c.059-1.5-1.382-3.186-3.934-3.143a6.736,6.736,0,0,0-2.189.3c-.035-.04-.071-.08-.108-.12-1.578-1.683-4.494-2.874-4.371-5.137.045-.823.331-2.989,5.6-5.617,4.32-2.153,7.778-1.56,8.376-.247.854,1.876-1.848,5.361-6.334,5.864a3.37,3.37,0,0,1-2.833-.718c-.236-.26-.271-.271-.359-.223-.143.079-.052.309,0,.445a2.659,2.659,0,0,0,1.621,1.274,8.592,8.592,0,0,0,5.258-.52C23.283,13.362,25.405,10.437,24.782,7.992ZM13.218,20.663a3.584,3.584,0,0,1-.029,2.092q-.035.106-.077.21t-.091.2a3.911,3.911,0,0,1-.647.943c-.813.887-1.95,1.223-2.437.94-.526-.305-.263-1.556.68-2.553a9.478,9.478,0,0,1,2.474-1.762l0,0Z" style="fill:#fff"/></svg>`;
            break;
        case "framermotion":
                icon = `<svg xmlns="http://www.w3.org/2000/svg" height="2500" viewBox="3.7 3.7 43.6 43.6" width="2500"><path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/><path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/><path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/></svg>`;
            break;
        default: icon = null;
            break;
        }
        return icon;
    };        

    return (
        <div className="portfolio-about">
            <section className="portfolio-main-header">
                <div className="owner-name">
                    <div className="owner-name-outline"><Trans Translate={'about.my.name'}></Trans></div>
                    <div className="owner-full-name"><Trans Translate={'about.my.fullName'}></Trans></div>
                </div>
                <div className="owner-designation-main">
                    <div className="dash-line"></div>
                    <div className="owner-designation">
                        <Trans Translate={'about.my.designation'}></Trans>
                    </div>
                    <div className="dash-line"></div>
                </div>
            </section>

            <div className="container-fluid section">
                <div className="container py-5">
                    <div className="section-title">
                        <div className="section-text-light"><Trans Translate={'about.aboutMe.section.title1'}></Trans></div>
                        <div className="section-text-high-light"><Trans Translate={'about.aboutMe.section.title2'}></Trans></div>
                    </div>
                    <div className="section-content py-4 about-content">
                        {/* <Trans Translate={'about.aboutMe.content'}></Trans> */}
                        <div className="d-none">
                            <div className="owner-designation-conent text-center">As a seasoned web developer with over 5 years of hands-on experience, I bring a wealth of expertise in client-side programming and a specialization in cutting-edge technologies such as React JS, Redux, Javascript, HTML, CSS, and various front-end frameworks. My commitment to delivering high-quality solutions is driven by a genuine passion for my work, coupled with a proven track record of successfully meeting and exceeding client expectations.</div>
                            <div className="owner-designation-conent-header">Technical Proficiency:</div>
                            <div className="owner-designation-conent">Proficient in Client-Side Programming: Adept at crafting dynamic and interactive user interfaces, ensuring a seamless user experience through comprehensive client-side programming.</div>
                            <div className="owner-designation-conent">Specialization in React JS, Redux, and Front-End Technologies: Extensive experience and mastery in React JS, Redux, Javascript, HTML, and CSS, along with proficiency in leveraging other front-end frameworks to create robust and scalable web applications.</div>
                            <div className="owner-designation-conent-header">Key Strengths:</div>
                            <div className="owner-designation-conent">Passionate Work Ethic: My enthusiasm for web development fuels a proactive and results-driven work ethic. I am deeply committed to staying updated with industry trends and embracing new technologies to deliver cutting-edge solutions.</div>
                            <div className="owner-designation-conent">Quick and Self-Learner: Known for rapidly acquiring new skills and adapting to emerging technologies, I thrive in dynamic environments where continuous learning is essential.</div>
                            <div className="owner-designation-conent">Requirement Understanding: Adept at comprehending project requirements with precision, ensuring a clear and comprehensive understanding of client needs to deliver tailored and effective solutions.</div>
                            <div className="owner-designation-conent">Collaboration with Product Management: Skilled in collaborating with Product Management teams, providing valuable insights, and contributing to discussions that enhance the overall product strategy. I am proactive in suggesting improvements and optimizations based on my technical expertise.</div>
                            <div className="owner-designation-conent">Problem-Solving Methodology: Approach challenges with a strategic and analytical mindset, employing a problem-solving methodology that combines creativity and technical acumen to overcome obstacles and deliver optimal solutions.</div>
                            <div className="owner-designation-conent">On-Time Deliverables: Consistently demonstrate a commitment to meeting project timelines and delivering high-quality results within stipulated deadlines.</div>
                        </div>

                        <div className="about-content d-none">
                            <p className="about-content-text">I am a seasoned web developer with over 5 years of specialized experience in client-side programming, with a particular focus on React JS, Redux, Javascript, HTML, CSS, and various front-end frameworks. My professional journey is characterized by a passion for web development and a commitment to delivering high-quality solutions that exceed client expectations.</p>
                            <p className="about-content-text">In terms of technical expertise, I possess a deep understanding of React JS, Redux, and other front-end technologies, allowing me to craft dynamic and user-centric interfaces. This proficiency is driven by a proactive and results-driven work ethic, reflecting my continuous learning and adaptation to emerging technologies.</p>
                            <p className="about-content-text">My key strengths lie in being a quick and self-learner, a meticulous requirement understanding, active collaboration with Product Management teams, a problem-solving methodology that combines creativity and technical acumen, and a consistent track record of on-time project deliverables. These strengths underscore my commitment to success and make me a valuable asset in dynamic environments where adaptability and innovation are crucial.</p>
                            <p className="about-content-text">In summary, my experience, technical proficiency, and passion for excellence position me as an ideal candidate to contribute significantly to your team's projects, bringing a holistic and forward-thinking approach to web development. I look forward to the opportunity to leverage my skills and expertise to enhance the success of your web initiatives.</p>
                        </div>
                        <div className="owner-designation-conent about-content d-none">
                            <p className="about-content-text">I am a seasoned web developer with an extensive background spanning over 5 years, specializing in client-side programming and exhibiting a particular expertise in React JS, Redux, Javascript, HTML, CSS, and a diverse array of front-end frameworks. Throughout my professional journey, I have consistently demonstrated a passion for web development, underpinned by a dedicated commitment to delivering solutions that not only meet but exceed the expectations of clients and end-users alike.</p>
                            <p className="about-content-text">My proficiency in client-side programming is underscored by a deep understanding of cutting-edge technologies, particularly React JS, Redux, and various front-end frameworks. This technical acumen enables me to craft dynamic and user-centric interfaces that seamlessly integrate with evolving industry standards.</p>
                            <p className="about-content-text">At the core of my professional ethos is an unwavering passion for web development, driving a proactive and results-oriented work ethic. This passion fuels a continuous pursuit of knowledge, ensuring that my skill set remains at the forefront of the rapidly evolving technological landscape. I am dedicated to staying ahead of industry trends and adapting quickly to emerging technologies.</p>
                            <p className="about-content-text">My key strengths include being a quick and self-learner, demonstrating a meticulous understanding of project requirements, active collaboration with Product Management teams, and employing a problem-solving methodology that amalgamates creativity with technical acumen. Additionally, my track record of consistently delivering on-time project results speaks to my commitment to success in every endeavor.</p>
                            <p className="about-content-text">I thrive in dynamic environments where adaptability and innovation are crucial. My professional journey is marked by a commitment to on-time project deliverables, reflecting a disciplined approach to project management and an unwavering dedication to achieving success for both clients and the broader team.</p>
                        </div>
                        <div className="owner-designation-conent about-content">
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content1'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content2'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content3'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content4'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content5'}></Trans></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience-container container-fluid section">
                <div className="container py-5">
                    <div className="section-title">
                        <div className="section-text-light"><Trans Translate={'about.experience.section.title1'}></Trans></div>
                        <div className="section-text-high-light"><Trans Translate={'about.experience.section.title2'}></Trans></div>
                    </div>
                    <div className="section-content py-4">
                        <Trans Translate={'about.experience.description'}></Trans>
                    </div>
                    <div className="experience-cards">
                        {organizations?.map((org, i) => {
                            return (
                                <div key={i} className="experience-card p-4">
                                    <div className="org-info">
                                        <div className="org-name">{org?.name}</div>
                                        <div className="dot">.</div>
                                        <div className="org-role">{org?.role}</div>
                                    </div>
                                    {org?.description?.length > 0 ?
                                        <ul key={i}>
                                            {org?.description?.map((list, i) => <li key={i}>{list}</li>)}
                                        </ul>
                                        :
                                        <div className="experience-info">{org?.content}</div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="technical-container container-fluid section py-5">
                <div className="container">
                    <div className="section-title">
                        <div className="section-text-high-light"><Trans Translate={'about.technologies.section.title1'}></Trans></div>
                        <div className="section-text-light"><Trans Translate={'about.technologies.section.title2'}></Trans></div>
                    </div>
                    <div className="section-content py-4">
                        <Trans Translate={'about.technologies.description'}></Trans>
                    </div>
                    <div className="technical-cards">
                        {technical?.map((tech, i) => {
                            return (
                                <div key={i} className="tech-card p-2">
                                    <div className="tech-card-img" dangerouslySetInnerHTML={{__html: techologies(tech?.type)}}></div>
                                    <div className="tech-name p-2">{tech?.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="work-together-container container-fluid section py-5">
                <div className="container">
                    <div className="section-title">
                        <div className="section-text-light"><Trans Translate={'about.workTogether.section.lets'}></Trans></div>
                        <div className="section-text-light"><Trans Translate={'about.workTogether.section.work'}></Trans></div>
                    </div>
                    <div className="section-text-high-light"><Trans Translate={'about.workTogether.section.together'}></Trans></div>
                    <div className="section-content py-4">
                        <Trans Translate={'about.workTogether.description'}></Trans>
                    </div>
                    <div className="contact-details">
                        <a href="tel:9494785839" className="contact-phone"><Trans Translate={'about.my.phone'}></Trans></a> |
                        <a href="mailto:webdev.sandeep.g@gmail.com" className="contact-email"><Trans Translate={'about.my.email'}></Trans></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;