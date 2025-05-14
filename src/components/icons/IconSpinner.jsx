export function IconSpinner() {
  return <svg style={{width: '50px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"
              data-inject-url="https://www.svgbackgrounds.com/svg/preloaders/tube-spinner.svg" loading="lazy">
    <radialGradient id="a--inject-10" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
      <stop className="svg__stop-color" offset="0" stop-color="#808"></stop>
      <stop className="svg__stop-color" offset=".3" stop-color="#808" stop-opacity=".9"></stop>
      <stop className="svg__stop-color" offset=".6" stop-color="#808" stop-opacity=".6"></stop>
      <stop className="svg__stop-color" offset=".8" stop-color="#808" stop-opacity=".3"></stop>
      <stop className="svg__stop-color" offset="1" stop-color="#808" stop-opacity="0"></stop>
    </radialGradient>
    <circle className="svg_strokeWidth" transform-origin="center" fill="none" stroke="url(#a--inject-10)"
            stroke-width="18" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100"
            cy="100" r="70">
      <animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0"
                        keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform>
    </circle>
    <circle className="svg__stroke svg_strokeWidth" transform-origin="center" fill="none" opacity=".2" stroke="#808"
            stroke-width="18" stroke-linecap="round" cx="100" cy="100" r="70"></circle>
  </svg>
}