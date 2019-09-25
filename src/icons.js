import React from 'react';

const Logo = (props) => {
    //const { url, reversed, shrunk } = props;
    return (
        <svg
            width="30"
            height="30"
            aria-hidden="true" 
            focusable="false" 
            data-prefix="fas" 
            data-icon="bars" 
            className="svg-inline--fa fa-bars fa-w-14" 
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512">
            <path 
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
            </path>
        </svg>
    );
};

const ReactLogo = (props) => {
    //const { url, reversed, shrunk } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3" 
            width="30"
            height="30">
            <g fill="#61DAFB">
                <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
                <circle cx="420.9" cy="296.5" r="45.7"/>
                <path d="M520.5 78.1z"/>
            </g>
        </svg>
    );
};

const Bicycle = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.529 451.529"
            width="30"
            height="30">
            <g>
                <g>
                    <path fill="#333E48" d="M367.98,374.108c-46.068,0-83.548-37.48-83.548-83.549c0-46.07,37.48-83.549,83.548-83.549    c46.069,0,83.549,37.479,83.549,83.549C451.529,336.628,414.05,374.108,367.98,374.108z M367.98,233.425    c-31.503,0-57.133,25.631-57.133,57.135s25.63,57.133,57.133,57.133c31.505,0,57.134-25.629,57.134-57.133    S399.485,233.425,367.98,233.425z"/>
                    <path opacity="0.4" fill="#222222" d="M367.98,233.425v-26.414c-46.068,0-83.548,37.479-83.548,83.549    c0,46.068,37.48,83.549,83.548,83.549v-26.416c-31.503,0-57.133-25.629-57.133-57.133S336.478,233.425,367.98,233.425z"/>
                </g>
                <g>
                    <path fill="#333E48" d="M83.549,374.108C37.479,374.108,0,336.628,0,290.559c0-46.07,37.479-83.549,83.549-83.549    c46.067,0,83.548,37.479,83.548,83.549C167.097,336.628,129.616,374.108,83.549,374.108z M83.549,233.425    c-31.505,0-57.134,25.631-57.134,57.135s25.629,57.133,57.134,57.133c31.503,0,57.133-25.629,57.133-57.133    S115.052,233.425,83.549,233.425z"/>
                    <path opacity="0.4" fill="#222222" d="M83.549,233.425v-26.414C37.479,207.011,0,244.489,0,290.559    c0,46.068,37.479,83.549,83.549,83.549v-26.416c-31.505,0-57.134-25.629-57.134-57.133S52.044,233.425,83.549,233.425z"/>
                    <path opacity="0.4" fill="#222222" d="M122.259,216.556l-13.721,22.637c6.028,2.945,11.458,6.928,16.072,11.701    l13.998-23.092C133.642,223.438,128.16,219.655,122.259,216.556z M140.632,292.542c-0.238,6.92-1.708,13.533-4.205,19.621    l27.42,1.408c1.807-6.289,2.896-12.875,3.164-19.672L140.632,292.542z"/>
                </g>
                <g>
                    <path fill="#A4A9AD" d="M152.268,187.1c-2.872,0-5.612-1.66-6.855-4.453l-18.248-41c-1.685-3.783,0.018-8.217,3.802-9.9    c3.783-1.686,8.217,0.018,9.901,3.801l18.248,41c1.685,3.785-0.018,8.219-3.802,9.902    C154.323,186.892,153.288,187.1,152.268,187.1z"/>
                    <path opacity="0.3" fill="#222222" d="M140.868,135.548c-1.685-3.783-6.118-5.486-9.901-3.801    c-3.784,1.684-5.486,6.117-3.802,9.9l5.859,13.164c4.396-1.115,9.603-2.428,14.753-3.738L140.868,135.548z"/>
                    <path fill="#333E48" d="M176.938,122.548c0.336-8.314-6.132-15.328-14.447-15.662l-48.265-1.949    c-12.27-0.496-22.616,9.049-23.112,21.318c-0.495,12.268,9.05,22.615,21.319,23.111c2.397,0.096,4.72-0.201,6.912-0.818    l0.001,0.008c6.932-1.885,38.026-9.523,46.412-12.051c0.052-0.018,0.101-0.033,0.15-0.049c0.421-0.127,0.799-0.244,1.087-0.344    l-0.001-0.004C172.587,134.087,176.684,128.854,176.938,122.548z"/>
                    <path opacity="0.4" fill="#222222" d="M176.938,122.548H91.6c-0.254,1.203-0.435,2.438-0.485,3.707    c-0.495,12.268,9.05,22.615,21.319,23.111c2.397,0.096,4.72-0.201,6.912-0.818l0.001,0.008    c6.932-1.885,38.026-9.523,46.412-12.051c0.052-0.018,0.101-0.033,0.15-0.049c0.421-0.127,0.799-0.244,1.087-0.344l-0.001-0.004    C172.587,134.087,176.684,128.854,176.938,122.548z"/>
                </g>
                <path fill="#FF5959" d="M367.98,297.038c-3.113,0-6.021-1.953-7.091-5.061l-44.085-127.99l-7.31-50.646   c-0.592-4.1,2.252-7.902,6.352-8.494c4.091-0.592,7.902,2.25,8.494,6.352l7.109,49.244l43.622,126.65   c1.35,3.916-0.732,8.186-4.648,9.533C369.614,296.905,368.79,297.038,367.98,297.038z"/>
                <g>
                    <path fill="#333E48" d="M316.91,119.77c-1.449,0-2.913-0.42-4.202-1.295l-25.223-17.104    c-3.429-2.324-4.323-6.988-1.998-10.416c2.325-3.43,6.989-4.324,10.416-1.998l25.223,17.104c3.429,2.324,4.323,6.988,1.998,10.416    C321.674,118.616,319.313,119.77,316.91,119.77z"/>
                    <path opacity="0.4" fill="#222222" d="M295.903,88.958c-3.427-2.326-8.091-1.432-10.416,1.998    c-2.325,3.428-1.431,8.092,1.998,10.416l18.207,12.348c4.041-3.053,7.049-7.395,8.42-12.414L295.903,88.958z"/>
                    <path fill="#333E48" d="M309.438,95.167c0-9.803-7.943-17.746-17.744-17.746c-9.8,0-17.741,7.943-17.741,17.746    c0,9.799,7.941,17.74,17.741,17.74C301.494,112.907,309.438,104.966,309.438,95.167z"/>
                    <circle fill="#D1D3D3" cx="291.695" cy="95.167" r="6.444"/>
                    <path opacity="0.4" fill="#222222" d="M291.693,77.421c-9.8,0-17.741,7.943-17.741,17.746c0,9.799,7.941,17.74,17.741,17.74    V77.421z"/>
                </g>
                <path fill="#FF5959" d="M328.496,165.249c-1.736-3.574-5.44-5.766-9.414-5.564l-167.878,8.539   c-0.066,0.004-0.129,0.016-0.196,0.025c-0.165,0.01-0.326,0.033-0.489,0.051c-0.27,0.035-0.539,0.072-0.806,0.129   c-0.145,0.029-0.288,0.066-0.431,0.102c-0.279,0.072-0.556,0.15-0.826,0.246c-0.128,0.045-0.251,0.092-0.376,0.143   c-0.277,0.107-0.55,0.229-0.815,0.365c-0.116,0.057-0.23,0.115-0.343,0.178c-0.262,0.145-0.514,0.301-0.762,0.471   c-0.109,0.072-0.218,0.145-0.325,0.221c-0.235,0.178-0.46,0.363-0.681,0.561c-0.104,0.092-0.21,0.178-0.31,0.275   c-0.211,0.201-0.406,0.42-0.599,0.641c-0.093,0.107-0.19,0.205-0.278,0.314c-0.202,0.254-0.385,0.525-0.563,0.797   c-0.053,0.086-0.116,0.158-0.168,0.242L75.078,285.425c-1.808,2.982-1.915,6.691-0.282,9.771c1.633,3.082,4.762,5.078,8.245,5.256   l124.808,6.416c0.17,0.008,0.341,0.012,0.51,0.012c0.386,0,0.768-0.025,1.147-0.07c0.128-0.016,0.251-0.041,0.376-0.06   c0.251-0.037,0.501-0.082,0.748-0.141c0.144-0.033,0.285-0.076,0.428-0.117c0.224-0.063,0.444-0.131,0.664-0.211   c0.145-0.051,0.285-0.107,0.428-0.168c0.211-0.086,0.419-0.182,0.625-0.285c0.136-0.066,0.271-0.135,0.402-0.209   c0.207-0.115,0.407-0.244,0.607-0.373c0.117-0.078,0.239-0.15,0.355-0.236c0.216-0.154,0.42-0.322,0.623-0.496   c0.09-0.074,0.182-0.142,0.268-0.221c0.276-0.252,0.539-0.517,0.788-0.801l0.023-0.027c0.003-0.004,0.007-0.008,0.011-0.012   l111.194-127.363C329.661,173.095,330.231,168.825,328.496,165.249z M100.611,281.52l50.05-82.572l41.601,87.281L100.611,281.52z    M210.811,279.102l-32.609-68.42l96.623-4.9L210.811,279.102z"/>
                <path fill="#FEDD3D" d="M228.759,193.808c-3.975,0-7.291-3.123-7.485-7.137c-0.2-4.137,2.991-7.654,7.129-7.854   l53.316-2.582c4.126-0.189,7.653,2.992,7.854,7.129s-2.991,7.654-7.129,7.854l-53.316,2.582   C229.004,193.806,228.881,193.808,228.759,193.808z"/>
                <path opacity="0.3" fill="#222222" d="M210.811,165.19l-59.607,3.033c-0.066,0.004-0.129,0.016-0.196,0.025   c-0.165,0.01-0.326,0.033-0.489,0.051c-0.27,0.035-0.539,0.072-0.806,0.129c-0.145,0.029-0.288,0.066-0.431,0.102   c-0.279,0.072-0.556,0.15-0.826,0.246c-0.128,0.045-0.251,0.092-0.376,0.143c-0.277,0.107-0.55,0.229-0.815,0.365   c-0.116,0.057-0.23,0.115-0.343,0.178c-0.262,0.145-0.514,0.301-0.762,0.471c-0.109,0.072-0.218,0.145-0.325,0.221   c-0.235,0.178-0.46,0.363-0.681,0.561c-0.104,0.092-0.21,0.178-0.31,0.275c-0.211,0.201-0.406,0.42-0.599,0.641   c-0.093,0.107-0.19,0.205-0.278,0.314c-0.202,0.254-0.385,0.525-0.563,0.797c-0.053,0.086-0.116,0.158-0.168,0.242L75.078,285.425   c-1.808,2.982-1.915,6.691-0.282,9.771c1.633,3.082,4.762,5.078,8.245,5.256l124.808,6.416c0.17,0.008,0.341,0.012,0.51,0.012   c0.386,0,0.768-0.025,1.147-0.07c0.128-0.016,0.251-0.041,0.376-0.06c0.251-0.037,0.501-0.082,0.748-0.141   c0.06-0.014,0.121-0.033,0.182-0.047v-27.459l-32.609-68.42l32.609-1.652V165.19z M192.262,286.229l-91.65-4.709l50.05-82.572   L192.262,286.229z"/>
                <g>
                    <path fill="#A4A9AD" d="M233.689,296.975c0-13.988-11.341-25.334-25.333-25.334c-13.99,0-25.333,11.346-25.333,25.334    c0,13.99,11.343,25.332,25.333,25.332C222.349,322.308,233.689,310.966,233.689,296.975z"/>
                    <circle fill="#333E48" cx="208.356" cy="296.975" r="13.519"/>
                    <path opacity="0.2" fill="#222222" d="M208.356,271.642c-13.99,0-25.333,11.346-25.333,25.334    c0,13.99,11.343,25.332,25.333,25.332V271.642z"/>
                    <path fill="#A4A9AD" d="M230.643,338.849c-2.483,0-4.906-0.438-6.334-2.689l-22.288-35.17    c-2.217-3.498-1.179-8.133,2.32-10.35c3.497-2.215,8.133-1.178,10.35,2.32l22.288,35.17c2.217,3.498,1.179,8.131-2.32,10.35    C233.414,339.268,232.017,338.849,230.643,338.849z"/>
                    <path opacity="0.2" fill="#222222" d="M236.979,328.13l-4.932-7.781H214.29l10.02,15.811    c1.428,2.252,3.851,2.689,6.334,2.689c1.373,0,2.771,0.42,4.016-0.369C238.158,336.261,239.196,331.628,236.979,328.13z"/>
                    <rect x="211.658" y="324.645" fill="#FF5959" width="37.972" height="15"/>
                </g>
            </g>
        </svg>
    )
}

const LifeCycleLogo = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
            width="30"
            height="30">
            <g>
                <g>
                    <path fill="#9F6459" d="M416,32H272c0,8.836-7.164,16-16,16s-16-7.164-16-16H96c-22.055,0-40,17.945-40,40v400
                        c0,22.055,17.945,40,40,40h320c22.055,0,40-17.945,40-40V72C456,49.945,438.054,32,416,32z M416,464c0,4.418-3.582,8-8,8H104
                        c-4.418,0-8-3.582-8-8V80c0-4.418,3.582-8,8-8h304c4.418,0,8,3.582,8,8V464z"/>
                </g>
                <g>
                    <g>
                        <path fill="#D8DCE1" d="M152,368c-1.891,0-3.789-0.664-5.312-2.023c-3.305-2.93-3.602-7.992-0.664-11.289l64-72
                            c2.328-2.625,6.094-3.422,9.289-1.969l80.445,36.57l52.844-128.336c1.688-4.078,6.359-6,10.445-4.352
                            c4.086,1.68,6.031,6.359,4.352,10.445l-56,136c-0.828,2.008-2.438,3.594-4.453,4.391s-4.273,0.742-6.258-0.156l-82.625-37.555
                            l-60.086,67.586C156.398,367.094,154.203,368,152,368z"/>
                    </g>
                </g>
                <g>
                    <circle fill="#FF4F19" cx="152" cy="360" r="24"/>
                </g>
                <g>
                    <circle fill="#FF9600" cx="216" cy="288" r="24"/>
                </g>
                <g>
                    <circle fill="#FFD200" cx="304" cy="328" r="24"/>
                </g>
                <g>
                    <circle fill="#74D24F" cx="360" cy="192" r="24"/>
                </g>
                <g>
                    <path fill="#B9BBC1" d="M304,16h-20.391C277.969,6.242,267.484,0,256,0s-21.969,6.242-27.609,16H208
                        c-22.055,0-40,17.945-40,40v32c0,4.418,3.578,8,8,8h160c4.422,0,8-3.582,8-8V56C344,33.945,326.055,16,304,16z M256,40
                        c-4.418,0-8-3.582-8-8c0-4.418,3.582-8,8-8s8,3.582,8,8C264,36.418,260.418,40,256,40z"/>
                </g>
            </g>
        </svg>
    );
};

const ContactLogo = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="30"
            height="30">
            <path d="M 16 4 C 12.145852 4 9 7.1458513 9 11 C 9 13.393064 10.220383 15.517805 12.0625 16.78125 C 8.485554 18.302923 6 21.859881 6 26 L 8 26 C 8 21.533333 11.533333 18 16 18 C 20.466667 18 24 21.533333 24 26 L 26 26 C 26 21.859881 23.514446 18.302923 19.9375 16.78125 C 21.779617 15.517805 23 13.393064 23 11 C 23 7.1458513 19.854148 4 16 4 z M 16 6 C 18.773268 6 21 8.2267317 21 11 C 21 13.773268 18.773268 16 16 16 C 13.226732 16 11 13.773268 11 11 C 11 8.2267317 13.226732 6 16 6 z" overflow="visible" font-family="Bitstream Vera Sans"/>
        </svg>
    );
};

const ToolLogo = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511"
            width="30"
            height="30">
              <g>
                <path fill="green" d="m487.5,208h-21.792c-5.402-24.064-14.791-46.742-27.971-67.562l15.399-15.4c9.163-9.163 9.163-24.071 0-33.234l-33.941-33.941c-4.438-4.439-10.34-6.883-16.617-6.883s-12.179,2.445-16.617,6.883l-15.399,15.399c-20.82-13.18-43.498-22.569-67.562-27.971v-21.791c1.13687e-13-12.958-10.542-23.5-23.5-23.5h-48c-12.958,0-23.5,10.542-23.5,23.5v21.792c-24.064,5.402-46.742,14.791-67.562,27.971l-15.399-15.399c-4.438-4.439-10.34-6.884-16.617-6.884s-12.179,2.445-16.617,6.883l-33.941,33.942c-9.163,9.163-9.163,24.071 0,33.234l15.4,15.4c-13.18,20.82-22.569,43.498-27.971,67.561h-21.793c-12.958-2.84217e-14-23.5,10.542-23.5,23.5v48c0,12.958 10.542,23.5 23.5,23.5h21.793c5.402,24.064 14.791,46.741 27.971,67.561l-15.4,15.4c-4.438,4.438-6.883,10.34-6.883,16.617s2.445,12.178 6.883,16.617l33.941,33.941c4.438,4.438 10.34,6.883 16.617,6.883s12.179-2.445 16.617-6.883l15.4-15.4c20.82,13.18 43.497,22.568 67.562,27.971v21.793c0,12.958 10.542,23.5 23.5,23.5h48c12.958,0 23.5-10.542 23.5-23.5v-21.792c24.064-5.402 46.741-14.791 67.562-27.971l15.399,15.4c4.438,4.438 10.34,6.883 16.617,6.883s12.179-2.445 16.617-6.883l33.941-33.941c4.438-4.438 6.883-10.34 6.883-16.617s-2.445-12.179-6.883-16.617l-15.399-15.399c13.18-20.82 22.568-43.497 27.971-67.562h21.791c12.958,0 23.5-10.542 23.5-23.5v-48c0-12.959-10.542-23.501-23.5-23.501zm8.5,71.5c0,4.687-3.813,8.5-8.5,8.5h-27.883c-3.589,0-6.675,2.543-7.361,6.065-5.14,26.378-15.351,51.041-30.348,73.303-2.005,2.976-1.621,6.956 0.917,9.493l19.705,19.705c1.605,1.606 2.49,3.74 2.49,6.011 0,2.27-0.884,4.405-2.49,6.01l-33.941,33.941c-1.605,1.605-3.74,2.49-6.011,2.49s-4.405-0.884-6.01-2.49l-19.706-19.706c-2.537-2.538-6.518-2.923-9.493-0.917-22.264,14.998-46.927,25.208-73.304,30.348-3.523,0.686-6.065,3.772-6.065,7.361v27.886c0,4.687-3.813,8.5-8.5,8.5h-48c-4.687,0-8.5-3.813-8.5-8.5v-27.883c0-3.589-2.542-6.675-6.065-7.361-26.377-5.14-51.041-15.351-73.303-30.348-1.276-0.859-2.736-1.28-4.188-1.28-1.935,0-3.856,0.747-5.306,2.197l-19.706,19.706c-1.605,1.605-3.739,2.49-6.01,2.49s-4.405-0.884-6.011-2.49l-33.941-33.942c-1.605-1.605-2.49-3.74-2.49-6.01 0-2.271 0.884-4.405 2.49-6.011l19.706-19.706c2.538-2.538 2.922-6.517 0.917-9.493-14.998-22.263-25.208-46.926-30.348-73.303-0.687-3.523-3.772-6.065-7.361-6.065h-27.884c-4.687,0-8.5-3.813-8.5-8.5v-48c0-4.687 3.813-8.5 8.5-8.5h27.883c3.589,0 6.675-2.543 7.361-6.065 5.14-26.377 15.351-51.04 30.348-73.303 2.005-2.976 1.621-6.956-0.917-9.493l-19.705-19.708c-3.314-3.314-3.314-8.707 0-12.021l33.941-33.941c1.605-1.605 3.74-2.49 6.011-2.49s4.405,0.884 6.01,2.49l19.705,19.705c2.538,2.537 6.516,2.922 9.494,0.917 22.263-14.997 46.926-25.208 73.304-30.348 3.522-0.687 6.065-3.772 6.065-7.362v-27.882c0-4.687 3.813-8.5 8.5-8.5h48c4.687,0 8.5,3.813 8.5,8.5v27.883c0,3.589 2.543,6.675 6.065,7.362 26.377,5.14 51.04,15.35 73.304,30.348 2.977,2.005 6.957,1.621 9.494-0.917l19.706-19.705c1.605-1.605 3.739-2.49 6.01-2.49s4.405,0.884 6.011,2.49l33.941,33.941c3.314,3.314 3.314,8.707 0,12.021l-19.705,19.705c-2.538,2.537-2.922,6.517-0.917,9.493 14.998,22.264 25.208,46.927 30.348,73.304 0.686,3.523 3.772,6.065 7.361,6.065h27.882c4.687,0 8.5,3.813 8.5,8.5v48z"/>
                <path fill="green" d="m119,255.5c0-75.266 61.234-136.5 136.5-136.5 18.423,0 36.292,3.605 53.108,10.715 3.815,1.613 8.216-0.172 9.829-3.987 1.613-3.815-0.172-8.216-3.988-9.829-18.675-7.895-38.508-11.899-58.949-11.899-83.538,0-151.5,67.963-151.5,151.5 0,34.6 11.969,68.436 33.702,95.275 1.482,1.831 3.648,2.781 5.833,2.781 1.658,0 3.327-0.547 4.715-1.672 3.219-2.607 3.716-7.329 1.109-10.548-19.577-24.177-30.359-54.661-30.359-85.836z"/>
                <path fill="green" d="m385.298,192.614c-3.816,1.611-5.603,6.011-3.992,9.827 7.096,16.804 10.694,34.656 10.694,53.059 0,75.266-61.233,136.5-136.5,136.5-31.162,0-61.636-10.774-85.808-30.337-3.219-2.606-7.941-2.109-10.548,1.112-2.605,3.22-2.108,7.942 1.112,10.548 26.833,21.717 60.658,33.677 95.244,33.677 83.538,0 151.5-67.963 151.5-151.5 0-20.419-3.996-40.234-11.875-58.894-1.612-3.816-6.013-5.603-9.827-3.992z"/>
                <path fill="green" d="m341.292,149.324c7.479,6.052 14.341,12.914 20.394,20.396 1.482,1.832 3.649,2.783 5.835,2.783 1.657,0 3.324-0.546 4.712-1.669 3.221-2.605 3.719-7.328 1.114-10.548-6.713-8.299-14.324-15.91-22.621-22.623-3.219-2.605-7.942-2.107-10.548,1.113-2.605,3.22-2.106,7.943 1.114,10.548z"/>
                <path fill="green" d="M255.5,136C189.607,136,136,189.608,136,255.5S189.607,375,255.5,375S375,321.393,375,255.5S321.393,136,255.5,136z    M255.5,360C197.878,360,151,313.122,151,255.5S197.878,151,255.5,151S360,197.879,360,255.5S313.122,360,255.5,360z"/>
            </g>
        </svg>
    );    
}

export {ReactLogo,Logo,LifeCycleLogo,ContactLogo,ToolLogo,Bicycle};