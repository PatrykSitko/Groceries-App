import React from "react";

export default function ForkSVG({ enabled, className, svg, ...other }) {
  const style = {
    stroke: "none",
    fill: enabled ? "black" : "#9b9b9b",
    fillRule: "evenodd"
  };
  return (
    <div
      {...{
        className: `fork-svg${
          typeof className === "string" ? ` ${className}` : ""
        }`,
        ...other
      }}
    >
      <svg
        {...{
          version: "1.1",
          viewBox: "0, 0, 400,400",
          ...svg
        }}
      >
        <path
          {...style}
          d="M155.428 0.268 C 154.404 0.558,153.600 1.395,153.600 2.171 C 153.600 2.517,153.420 2.800,153.200 2.800 C 152.935 2.800,152.800 20.541,152.800 55.224 C 152.800 90.071,152.934 107.564,153.200 107.400 C 153.450 107.246,153.600 108.063,153.600 109.576 C 153.600 110.925,153.777 112.000,154.000 112.000 C 154.220 112.000,154.400 112.900,154.400 114.000 C 154.400 115.100,154.580 116.000,154.800 116.000 C 155.020 116.000,155.200 116.439,155.200 116.976 C 155.200 117.513,155.380 118.064,155.600 118.200 C 155.820 118.336,156.000 119.157,156.000 120.024 C 156.000 120.891,156.180 121.600,156.400 121.600 C 156.620 121.600,156.800 121.960,156.800 122.400 C 156.800 122.840,156.980 123.200,157.200 123.200 C 157.420 123.200,157.600 123.650,157.600 124.200 C 157.600 124.750,157.764 125.200,157.965 125.200 C 158.166 125.200,158.451 125.920,158.600 126.800 C 158.773 127.824,159.083 128.400,159.462 128.400 C 159.853 128.400,159.975 128.648,159.822 129.130 C 159.660 129.642,159.895 130.023,160.609 130.405 C 161.170 130.705,161.540 131.180,161.432 131.462 C 161.324 131.743,161.947 132.671,162.818 133.524 C 163.688 134.377,164.406 135.238,164.413 135.438 C 164.432 135.998,166.307 138.000,166.812 138.000 C 167.060 138.000,167.925 138.690,168.735 139.532 C 169.545 140.375,170.701 141.189,171.304 141.340 C 171.907 141.491,172.400 141.792,172.400 142.008 C 172.400 142.223,172.760 142.400,173.200 142.400 C 173.640 142.400,174.000 142.580,174.000 142.800 C 174.000 143.020,174.360 143.200,174.800 143.200 C 175.240 143.200,175.600 143.380,175.600 143.600 C 175.600 143.820,175.842 144.000,176.138 144.000 C 176.434 144.000,177.002 144.360,177.400 144.800 C 177.798 145.240,178.279 145.600,178.468 145.600 C 179.017 145.600,185.600 152.336,185.600 152.898 C 185.600 153.178,185.960 153.632,186.400 153.907 C 186.840 154.182,187.200 154.765,187.200 155.203 C 187.200 155.642,187.380 156.000,187.600 156.000 C 187.820 156.000,188.000 156.270,188.000 156.600 C 188.000 156.930,188.180 157.200,188.400 157.200 C 188.620 157.200,188.800 157.560,188.800 158.000 C 188.800 158.440,188.980 158.800,189.200 158.800 C 189.420 158.800,189.600 159.340,189.600 160.000 C 189.600 160.660,189.780 161.200,190.000 161.200 C 190.220 161.200,190.400 161.920,190.400 162.800 C 190.400 163.680,190.580 164.400,190.800 164.400 C 191.048 164.400,191.200 166.533,191.200 170.000 C 191.200 173.467,191.048 175.600,190.800 175.600 C 190.561 175.600,190.400 177.133,190.400 179.400 C 190.400 181.667,190.239 183.200,190.000 183.200 C 189.760 183.200,189.600 184.800,189.600 187.200 C 189.600 189.600,189.440 191.200,189.200 191.200 C 188.961 191.200,188.800 192.733,188.800 195.000 C 188.800 197.267,188.639 198.800,188.400 198.800 C 188.160 198.800,188.000 200.400,188.000 202.800 C 188.000 205.200,187.840 206.800,187.600 206.800 C 187.359 206.800,187.200 208.467,187.200 211.000 C 187.200 213.533,187.041 215.200,186.800 215.200 C 186.560 215.200,186.400 216.800,186.400 219.200 C 186.400 221.600,186.240 223.200,186.000 223.200 C 185.761 223.200,185.600 224.733,185.600 227.000 C 185.600 229.267,185.439 230.800,185.200 230.800 C 184.960 230.800,184.800 232.400,184.800 234.800 C 184.800 237.200,184.640 238.800,184.400 238.800 C 184.161 238.800,184.000 240.333,184.000 242.600 C 184.000 244.867,183.839 246.400,183.600 246.400 C 183.358 246.400,183.200 248.125,183.200 250.776 C 183.200 253.263,183.027 255.260,182.800 255.400 C 182.580 255.536,182.400 257.257,182.400 259.224 C 182.400 261.341,182.237 262.800,182.000 262.800 C 181.760 262.800,181.600 264.400,181.600 266.800 C 181.600 269.200,181.440 270.800,181.200 270.800 C 180.961 270.800,180.800 272.333,180.800 274.600 C 180.800 276.867,180.639 278.400,180.400 278.400 C 180.158 278.400,180.000 280.125,180.000 282.776 C 180.000 285.263,179.827 287.260,179.600 287.400 C 179.380 287.536,179.200 289.246,179.200 291.200 C 179.200 293.154,179.020 294.864,178.800 295.000 C 178.579 295.137,178.400 296.937,178.400 299.024 C 178.400 301.101,178.265 302.800,178.100 302.800 C 177.935 302.800,177.864 304.447,177.942 306.460 C 178.060 309.504,177.976 310.182,177.442 310.480 C 176.924 310.771,176.800 311.564,176.800 314.596 C 176.800 316.669,176.621 318.464,176.400 318.600 C 176.175 318.739,176.000 320.671,176.000 323.024 C 176.000 325.321,175.865 327.200,175.700 327.199 C 175.535 327.199,175.457 328.909,175.527 330.999 C 175.612 333.509,175.510 334.800,175.227 334.800 C 174.954 334.800,174.800 336.164,174.800 338.576 C 174.800 340.663,174.621 342.463,174.400 342.600 C 174.179 342.737,174.000 344.537,174.000 346.624 C 174.000 348.875,173.838 350.400,173.600 350.400 C 173.360 350.400,173.200 352.000,173.200 354.400 C 173.200 356.800,173.040 358.400,172.800 358.400 C 172.559 358.400,172.400 360.067,172.400 362.600 C 172.400 365.133,172.241 366.800,172.000 366.800 C 171.753 366.800,171.600 368.867,171.600 372.200 C 171.600 375.533,171.753 377.600,172.000 377.600 C 172.220 377.600,172.400 378.500,172.400 379.600 C 172.400 380.700,172.580 381.600,172.800 381.600 C 173.020 381.600,173.200 381.960,173.200 382.400 C 173.200 382.840,173.380 383.200,173.600 383.200 C 173.820 383.200,174.000 383.740,174.000 384.400 C 174.000 385.060,174.180 385.600,174.400 385.600 C 174.620 385.600,174.800 385.938,174.800 386.351 C 174.800 386.764,175.070 387.326,175.400 387.600 C 175.730 387.874,176.000 388.312,176.000 388.574 C 176.000 388.835,176.540 389.449,177.200 389.937 C 177.860 390.425,178.400 391.097,178.400 391.430 C 178.400 392.171,180.167 394.000,180.883 394.000 C 181.169 394.000,181.912 394.540,182.535 395.200 C 183.158 395.860,183.923 396.400,184.234 396.400 C 184.545 396.400,184.800 396.580,184.800 396.800 C 184.800 397.020,185.160 397.200,185.600 397.200 C 186.040 397.200,186.400 397.380,186.400 397.600 C 186.400 397.820,186.760 398.000,187.200 398.000 C 187.640 398.000,188.000 398.180,188.000 398.400 C 188.000 398.620,188.345 398.800,188.767 398.800 C 189.188 398.800,189.608 399.025,189.700 399.300 C 189.941 400.024,208.458 400.024,208.700 399.300 C 208.792 399.025,209.392 398.800,210.033 398.800 C 210.675 398.800,211.200 398.620,211.200 398.400 C 211.200 398.180,211.560 398.000,212.000 398.000 C 212.440 398.000,212.800 397.820,212.800 397.600 C 212.800 397.380,213.120 397.200,213.512 397.200 C 213.903 397.200,214.483 396.840,214.800 396.400 C 215.117 395.960,215.577 395.600,215.822 395.600 C 216.279 395.600,222.400 389.891,222.400 389.465 C 222.400 389.335,222.920 388.465,223.556 387.533 C 224.192 386.600,224.623 385.604,224.513 385.319 C 224.404 385.033,224.514 384.800,224.757 384.800 C 225.001 384.800,225.200 384.260,225.200 383.600 C 225.200 382.940,225.380 382.400,225.600 382.400 C 225.820 382.400,226.000 381.860,226.000 381.200 C 226.000 380.540,226.180 380.000,226.400 380.000 C 226.622 380.000,226.800 378.933,226.800 377.600 C 226.800 376.267,226.978 375.200,227.200 375.200 C 227.420 375.200,227.600 374.210,227.600 373.000 C 227.600 371.790,227.420 370.800,227.200 370.800 C 226.958 370.800,226.800 369.067,226.800 366.400 C 226.800 363.733,226.642 362.000,226.400 362.000 C 226.159 362.000,226.000 360.333,226.000 357.800 C 226.000 355.267,225.841 353.600,225.600 353.600 C 225.360 353.600,225.200 352.000,225.200 349.600 C 225.200 347.400,225.048 345.600,224.862 345.600 C 224.565 345.600,224.316 342.451,223.362 326.600 C 223.243 324.620,222.978 322.829,222.773 322.620 C 222.568 322.411,222.400 320.296,222.400 317.920 C 222.400 315.307,222.242 313.600,222.000 313.600 C 221.762 313.600,221.600 312.078,221.600 309.833 C 221.600 307.762,221.429 306.007,221.220 305.933 C 221.011 305.860,220.808 304.045,220.769 301.900 C 220.730 299.755,220.541 298.000,220.349 298.000 C 220.157 298.000,220.000 296.290,220.000 294.200 C 220.000 291.933,219.839 290.400,219.600 290.400 C 219.360 290.400,219.200 288.800,219.200 286.400 C 219.200 284.000,219.040 282.400,218.800 282.400 C 218.559 282.400,218.400 280.733,218.400 278.200 C 218.400 275.667,218.241 274.000,218.000 274.000 C 217.760 274.000,217.600 272.400,217.600 270.000 C 217.600 267.600,217.440 266.000,217.200 266.000 C 216.961 266.000,216.800 264.467,216.800 262.200 C 216.800 259.933,216.639 258.400,216.400 258.400 C 216.160 258.400,216.000 256.800,216.000 254.400 C 216.000 252.000,215.840 250.400,215.600 250.400 C 215.359 250.400,215.200 248.733,215.200 246.200 C 215.200 243.667,215.041 242.000,214.800 242.000 C 214.560 242.000,214.400 240.400,214.400 238.000 C 214.400 235.600,214.240 234.000,214.000 234.000 C 213.761 234.000,213.600 232.467,213.600 230.200 C 213.600 227.933,213.439 226.400,213.200 226.400 C 212.960 226.400,212.800 224.800,212.800 222.400 C 212.800 220.000,212.640 218.400,212.400 218.400 C 212.160 218.400,212.000 216.800,212.000 214.400 C 212.000 212.000,211.840 210.400,211.600 210.400 C 211.359 210.400,211.200 208.733,211.200 206.200 C 211.200 203.667,211.041 202.000,210.800 202.000 C 210.562 202.000,210.400 200.475,210.400 198.224 C 210.400 196.137,210.221 194.337,210.000 194.200 C 209.779 194.063,209.600 192.263,209.600 190.176 C 209.600 187.925,209.438 186.400,209.200 186.400 C 208.960 186.400,208.800 184.811,208.800 182.433 C 208.800 180.073,208.634 178.411,208.389 178.330 C 207.801 178.134,207.775 163.075,208.361 162.880 C 208.603 162.799,208.800 162.208,208.800 161.567 C 208.800 160.925,208.980 160.400,209.200 160.400 C 209.420 160.400,209.600 159.860,209.600 159.200 C 209.600 158.540,209.780 158.000,210.000 158.000 C 210.220 158.000,210.400 157.730,210.400 157.400 C 210.400 157.070,210.580 156.800,210.800 156.800 C 211.020 156.800,211.200 156.320,211.200 155.733 C 211.200 155.147,211.311 154.778,211.448 154.914 C 211.762 155.228,212.800 154.211,212.800 153.589 C 212.800 153.332,213.340 152.617,214.000 152.000 C 214.660 151.383,215.200 150.675,215.200 150.426 C 215.200 149.806,217.851 147.201,218.487 147.196 C 218.769 147.194,219.425 146.654,219.945 145.996 C 220.465 145.338,221.230 144.800,221.645 144.800 C 222.060 144.800,222.400 144.620,222.400 144.400 C 222.400 144.180,222.760 144.000,223.200 144.000 C 223.640 144.000,224.000 143.820,224.000 143.600 C 224.000 143.380,224.204 143.200,224.453 143.200 C 224.702 143.200,225.197 142.869,225.553 142.464 C 225.909 142.059,226.695 141.606,227.300 141.456 C 227.924 141.302,228.400 140.910,228.400 140.550 C 228.400 140.151,228.622 140.000,228.996 140.143 C 229.624 140.384,231.600 138.694,231.600 137.915 C 231.600 137.668,231.707 137.574,231.838 137.704 C 232.162 138.028,236.400 133.748,236.400 133.097 C 236.400 132.811,236.760 132.317,237.200 132.000 C 237.640 131.683,238.000 131.103,238.000 130.712 C 238.000 130.320,238.191 130.000,238.424 130.000 C 238.657 130.000,238.748 129.839,238.626 129.642 C 238.504 129.445,238.674 129.181,239.002 129.054 C 239.331 128.928,239.600 128.549,239.600 128.213 C 239.600 127.876,239.792 127.600,240.027 127.600 C 240.272 127.600,240.346 127.259,240.200 126.800 C 240.015 126.216,240.128 126.000,240.620 126.000 C 241.097 126.000,241.232 125.766,241.084 125.199 C 240.969 124.759,241.038 124.500,241.237 124.623 C 241.437 124.746,241.600 124.196,241.600 123.400 C 241.600 122.537,241.761 122.053,242.000 122.200 C 242.233 122.344,242.400 121.937,242.400 121.224 C 242.400 120.551,242.580 120.000,242.800 120.000 C 243.020 120.000,243.200 119.460,243.200 118.800 C 243.200 118.140,243.380 117.600,243.600 117.600 C 243.820 117.600,244.000 116.880,244.000 116.000 C 244.000 115.120,244.180 114.400,244.400 114.400 C 244.620 114.400,244.800 113.500,244.800 112.400 C 244.800 111.300,244.980 110.400,245.200 110.400 C 245.431 110.400,245.600 109.133,245.600 107.400 C 245.600 105.667,245.769 104.400,246.000 104.400 C 246.265 104.400,246.400 87.333,246.400 54.000 C 246.400 20.667,246.265 3.600,246.000 3.600 C 245.780 3.600,245.600 3.312,245.600 2.960 C 245.600 1.102,243.305 -0.001,239.458 0.010 L 235.800 0.020 234.100 1.624 C 232.736 2.912,232.400 3.503,232.400 4.614 C 232.400 5.377,232.220 6.000,232.000 6.000 C 231.736 6.000,231.600 20.333,231.600 48.200 C 231.600 76.067,231.464 90.400,231.200 90.400 C 230.980 90.400,230.800 90.694,230.800 91.054 C 230.800 92.838,226.091 94.838,224.669 93.657 C 224.370 93.410,224.009 93.324,223.866 93.468 C 223.381 93.952,220.800 90.881,220.800 89.820 C 220.800 89.259,220.620 88.800,220.400 88.800 C 220.136 88.800,220.000 74.256,220.000 45.969 L 220.000 3.137 218.332 1.535 L 216.665 -0.067 212.403 0.066 C 207.991 0.205,206.800 0.652,206.800 2.171 C 206.800 2.517,206.620 2.800,206.400 2.800 C 206.180 2.800,206.000 3.160,206.000 3.600 C 206.000 4.040,205.820 4.400,205.600 4.400 C 205.336 4.400,205.200 19.000,205.200 47.400 C 205.200 75.800,205.064 90.400,204.800 90.400 C 204.580 90.400,204.400 90.683,204.400 91.029 C 204.400 91.774,203.403 92.869,203.048 92.514 C 202.911 92.378,202.800 92.579,202.800 92.960 C 202.800 93.472,202.590 93.587,202.000 93.400 C 201.541 93.254,201.200 93.328,201.200 93.573 C 201.200 93.808,200.480 94.000,199.600 94.000 C 198.720 94.000,198.000 93.826,198.000 93.613 C 198.000 93.399,197.740 93.325,197.421 93.447 C 196.738 93.709,194.000 91.121,194.000 90.213 C 194.000 89.876,193.820 89.600,193.600 89.600 C 193.336 89.600,193.200 75.000,193.200 46.600 C 193.200 18.200,193.064 3.600,192.800 3.600 C 192.580 3.600,192.400 3.304,192.400 2.943 C 192.400 2.582,191.841 1.753,191.159 1.100 L 189.918 -0.086 185.626 0.061 C 181.188 0.213,180.000 0.659,180.000 2.171 C 180.000 2.517,179.820 2.800,179.600 2.800 C 179.380 2.800,179.200 3.149,179.200 3.576 C 179.200 4.003,179.020 4.464,178.800 4.600 C 178.537 4.762,178.400 19.537,178.400 47.624 C 178.400 77.464,178.272 90.400,177.976 90.400 C 177.743 90.400,177.675 90.597,177.824 90.838 C 178.148 91.363,175.700 93.709,175.170 93.381 C 174.966 93.256,174.800 93.343,174.800 93.576 C 174.800 93.818,173.941 94.000,172.800 94.000 C 171.659 94.000,170.800 93.818,170.800 93.576 C 170.800 93.343,170.639 93.252,170.442 93.374 C 170.245 93.496,169.981 93.326,169.854 92.998 C 169.728 92.669,169.349 92.400,169.013 92.400 C 168.676 92.400,168.400 92.130,168.400 91.800 C 168.400 91.470,168.220 91.200,168.000 91.200 C 167.780 91.200,167.600 90.840,167.600 90.400 C 167.600 89.960,167.420 89.600,167.200 89.600 C 166.936 89.600,166.800 75.075,166.800 46.824 C 166.800 18.737,166.663 3.962,166.400 3.800 C 166.180 3.664,166.000 3.285,166.000 2.958 C 166.000 0.778,159.485 -0.880,155.428 0.268 "
        />
      </svg>
    </div>
  );
}