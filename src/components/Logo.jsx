import React from 'react';

export default function Logo({ className = '', iconOnly = false, lightText = true }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SparkPlow SVG Icon */}
      <svg
        viewBox="0 0 110 60"
        className="h-8 sm:h-10 w-auto flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SparkPlow Icon"
      >
        {/* Styled Orange 'S' */}
        <path
          d="M 16,23 C 16,14.5 22.5,10 29,10 C 35,10 38.5,12 41,14.5 L 35,20 C 33.5,18.5 31.5,17 29,17 C 25,17 23,19.5 23,23 C 23,27 28.5,27.5 32,29.5 C 38,33 39,37.5 39,41.5 C 39,49.5 31.5,54 24.5,54 C 18,54 14,51.5 11.5,48.5 L 18,42.5 C 19.5,44.5 21.5,46.5 24.5,46.5 C 29,46.5 31,44 31,41.5 C 31,38 26,37.5 22,35 C 17.5,32.5 15.5,28.5 15.5,23 Z"
          fill="#FF5722"
        />
        
        {/* Styled 'p' */}
        <path
          d="M 43,18 L 51,18 L 51,23.5 C 53,20 57,18 62,18 C 70.5,18 76,24.5 76,33 C 76,41.5 70.5,48 62,48 C 57,48 53,46 51,42.5 L 51,54 L 43,54 L 43,18 Z M 51,33 C 51,38 54.5,41.5 59,41.5 C 63.5,41.5 67.5,38 67.5,33 C 67.5,28 63.5,24.5 59,24.5 C 54.5,24.5 51,28 51,33 Z"
          className={lightText ? "fill-slate-100" : "fill-brand-navy-dark"}
        />

        {/* Growth Bar Chart */}
        {/* Bar 1 */}
        <rect
          x="80"
          y="38"
          width="5"
          height="12"
          rx="2.5"
          className={lightText ? "fill-slate-100" : "fill-brand-navy-dark"}
        />
        {/* Bar 2 */}
        <rect
          x="88"
          y="29"
          width="5"
          height="21"
          rx="2.5"
          className={lightText ? "fill-slate-100" : "fill-brand-navy-dark"}
        />
        {/* Bar 3 */}
        <rect
          x="96"
          y="20"
          width="5"
          height="30"
          rx="2.5"
          className={lightText ? "fill-slate-100" : "fill-brand-navy-dark"}
        />
        {/* Orange Arrow Head on Bar 3 */}
        <path
          d="M 91.5,17 L 98.5,8 L 105.5,17 Z"
          fill="#FF5722"
        />
      </svg>

      {/* SparkPlow Logotype Text */}
      {!iconOnly && (
        <span className="font-sans font-extrabold text-lg sm:text-2xl tracking-wider uppercase flex items-center">
          <span className="text-brand-orange">Spark</span>
          <span className={lightText ? "text-slate-100" : "text-brand-navy-dark"}>Plow</span>
        </span>
      )}
    </div>
  );
}
