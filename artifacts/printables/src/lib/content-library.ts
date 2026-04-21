export type Category =
  | "alphabet"
  | "numbers"
  | "math"
  | "shapes"
  | "animals"
  | "fruits"
  | "vegetables"
  | "anatomy"
  | "planners";

export interface PrintItem {
  id: string;
  category: Category;
  title: string;
  subtitle?: string;
  tags: string[];
  svgContent: string;
  traceText: string;
  description: string;
}

function alphabetSVG(letter: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="340" font-family="Georgia, serif" font-size="320" font-weight="bold"
    text-anchor="middle" fill="none" stroke="#1a1a1a" stroke-width="4"
    paint-order="stroke fill">${letter}</text>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="24" font-weight="600"
    text-anchor="middle" fill="#555">Uppercase ${letter}</text>
</svg>`;
}

function alphabetLowerSVG(letter: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="340" font-family="Georgia, serif" font-size="320" font-weight="bold"
    text-anchor="middle" fill="none" stroke="#1a1a1a" stroke-width="4"
    paint-order="stroke fill">${letter.toLowerCase()}</text>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="24" font-weight="600"
    text-anchor="middle" fill="#555">Lowercase ${letter.toLowerCase()}</text>
</svg>`;
}

function numberSVG(num: number): string {
  const size = num >= 100 ? 200 : 280;
  const y = num >= 100 ? 300 : 340;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="${y}" font-family="Georgia, serif" font-size="${size}" font-weight="bold"
    text-anchor="middle" fill="none" stroke="#1a1a1a" stroke-width="4"
    paint-order="stroke fill">${num}</text>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Number ${num}</text>
</svg>`;
}

function mathSymbolSVG(symbol: string, name: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="320" font-family="Georgia, serif" font-size="260" font-weight="bold"
    text-anchor="middle" fill="none" stroke="#1a1a1a" stroke-width="5"
    paint-order="stroke fill">${symbol}</text>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">${name}</text>
</svg>`;
}

function circleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="230" r="170" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Circle</text>
</svg>`;
}

function squareSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="65" y="65" width="370" height="330" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Square</text>
</svg>`;
}

function triangleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="250,50 450,400 50,400" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Triangle</text>
</svg>`;
}

function rectangleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="40" y="130" width="420" height="240" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Rectangle</text>
</svg>`;
}

function ovalSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="230" rx="210" ry="140" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Oval</text>
</svg>`;
}

function diamondSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="250,40 450,230 250,420 50,230" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="470" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Diamond</text>
</svg>`;
}

function pentagonSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="250,45 455,195 375,420 125,420 45,195" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="468" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Pentagon</text>
</svg>`;
}

function hexagonSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="250,55 445,165 445,335 250,445 55,335 55,165" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Hexagon</text>
</svg>`;
}

function starSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="250,30 305,185 470,185 340,280 390,440 250,350 110,440 160,280 30,185 195,185"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="480" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Star</text>
</svg>`;
}

function heartSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 430 C100 330 30 230 30 155 C30 90 80 50 140 50 C180 50 215 70 250 110 C285 70 320 50 360 50 C420 50 470 90 470 155 C470 230 400 330 250 430Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="480" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Heart</text>
</svg>`;
}

function arrowSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M30 230 L320 230 L320 150 L470 250 L320 350 L320 270 L30 270 Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Arrow</text>
</svg>`;
}

function crescentSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 50 A180 180 0 1 0 250 410 A120 120 0 1 1 250 50Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <text x="250" y="470" font-family="Arial, sans-serif" font-size="26" font-weight="600"
    text-anchor="middle" fill="#555">Crescent</text>
</svg>`;
}

// Animal SVGs
function lionSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Mane -->
  <circle cx="250" cy="210" r="140" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="210" r="110" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Mane spikes -->
  <line x1="250" y1="70" x2="250" y2="90" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="180" y1="80" x2="195" y2="98" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="120" y1="120" x2="140" y2="135" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="90" y1="175" x2="113" y2="185" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="320" y1="80" x2="305" y2="98" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="380" y1="120" x2="360" y2="135" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="410" y1="175" x2="387" y2="185" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Face -->
  <ellipse cx="250" cy="210" rx="85" ry="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Eyes -->
  <circle cx="220" cy="190" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="280" cy="190" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Pupils -->
  <circle cx="222" cy="192" r="5" fill="#1a1a1a"/>
  <circle cx="282" cy="192" r="5" fill="#1a1a1a"/>
  <!-- Nose -->
  <path d="M238 220 Q250 230 262 220 Q250 242 238 220" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Mouth -->
  <path d="M230 242 Q250 258 270 242" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Ears -->
  <polygon points="185,135 170,105 205,125" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="315,135 330,105 295,125" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="380" rx="90" ry="70" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Legs -->
  <rect x="180" y="420" width="30" height="60" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="290" y="420" width="30" height="60" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M340 350 Q400 320 410 380 Q420 420 400 440" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="400" cy="445" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="500" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Lion</text>
</svg>`;
}

function elephantSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520">
  <rect width="500" height="520" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="270" cy="320" rx="150" ry="110" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <ellipse cx="145" cy="210" rx="100" ry="90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Eye -->
  <circle cx="120" cy="185" r="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="122" cy="187" r="4" fill="#1a1a1a"/>
  <!-- Ear -->
  <ellipse cx="80" cy="225" rx="45" ry="60" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Trunk -->
  <path d="M100 255 Q60 310 75 370 Q85 400 110 390 Q130 385 120 360 Q110 330 140 290"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Tusk -->
  <path d="M145 270 Q120 295 125 320 Q130 335 145 330"
    fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Legs -->
  <rect x="145" y="400" width="45" height="80" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="205" y="405" width="45" height="80" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="295" y="405" width="45" height="80" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="355" y="400" width="45" height="80" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M420 320 Q450 330 445 360 Q440 380 430 385" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="510" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Elephant</text>
</svg>`;
}

function tigerSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="260" cy="330" rx="140" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Stripes on body -->
  <path d="M180 290 Q200 310 185 340" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M220 270 Q240 295 225 330" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M290 270 Q310 295 295 330" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M330 285 Q350 310 335 345" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Head -->
  <ellipse cx="170" cy="210" rx="90" ry="85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Ears -->
  <polygon points="105,140 90,110 130,130" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="230,140 250,110 215,130" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Eyes -->
  <ellipse cx="140" cy="195" rx="14" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="200" cy="195" rx="14" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="142" cy="197" r="6" fill="#1a1a1a"/>
  <circle cx="202" cy="197" r="6" fill="#1a1a1a"/>
  <!-- Nose -->
  <path d="M160 222 Q170 232 180 222 Q170 244 160 222" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Mouth -->
  <path d="M150 244 Q170 260 190 244" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Face stripes -->
  <path d="M110 175 Q120 185 110 200" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M225 175 Q215 185 225 200" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Legs -->
  <rect x="145" y="400" width="38" height="70" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="200" y="405" width="38" height="70" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="285" y="405" width="38" height="70" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="340" y="400" width="38" height="70" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M400 310 Q450 290 460 330 Q470 360 450 380" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Tiger</text>
</svg>`;
}

function giraffesSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 550" width="500" height="550">
  <rect width="500" height="550" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Long neck -->
  <path d="M210 340 L190 120 L270 120 L260 340" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Body -->
  <ellipse cx="245" cy="380" rx="120" ry="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Spots -->
  <ellipse cx="230" cy="360" rx="18" ry="14" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="275" cy="370" rx="16" ry="12" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="250" cy="400" rx="15" ry="11" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="220" cy="390" rx="12" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Neck spots -->
  <ellipse cx="220" cy="230" rx="12" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="248" cy="270" rx="11" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="215" cy="300" rx="10" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Head -->
  <ellipse cx="230" cy="95" rx="55" ry="40" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Eyes -->
  <circle cx="208" cy="85" r="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="210" cy="87" r="3" fill="#1a1a1a"/>
  <!-- Ossicones (horns) -->
  <line x1="215" y1="60" x2="210" y2="35" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="210" cy="33" r="5" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="240" y1="57" x2="238" y2="32" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="238" cy="30" r="5" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Ears -->
  <ellipse cx="180" cy="85" rx="15" ry="22" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(-20,180,85)"/>
  <!-- Legs -->
  <rect x="145" y="435" width="30" height="90" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="190" y="440" width="30" height="90" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="280" y="440" width="30" height="90" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="325" y="435" width="30" height="90" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="545" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Giraffe</text>
</svg>`;
}

function zebra(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="260" cy="320" rx="135" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Stripes -->
  <path d="M155 285 Q175 310 155 345" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M200 265 Q220 295 200 335" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M245 260 Q265 290 245 330" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M295 265 Q315 295 295 330" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M340 280 Q360 310 340 345" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Neck -->
  <path d="M160 250 L185 140 L235 140 L235 250" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <ellipse cx="200" cy="118" rx="65" ry="45" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Ears -->
  <polygon points="175,80 165,50 195,68" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="220,78 232,48 212,66" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Eye -->
  <circle cx="175" cy="108" r="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="177" cy="110" r="4" fill="#1a1a1a"/>
  <!-- Mane -->
  <path d="M183 74 L188 55 L193 74 L198 52 L203 74 L208 53 L213 74 L218 55 L223 74"
    fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Nose stripes -->
  <line x1="160" y1="120" x2="155" y2="130" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="172" y1="122" x2="168" y2="134" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Legs -->
  <rect x="148" y="393" width="35" height="75" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="197" y="398" width="35" height="75" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="285" y="398" width="35" height="75" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="338" y="393" width="35" height="75" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Zebra</text>
</svg>`;
}

function catSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="350" rx="110" ry="90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="250" cy="195" r="90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Ears -->
  <polygon points="175,135 155,75 210,118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="325,135 345,75 290,118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Inner ears -->
  <polygon points="182,128 167,90 205,117" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <polygon points="318,128 333,90 295,117" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <!-- Eyes -->
  <ellipse cx="210" cy="180" rx="18" ry="20" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="290" cy="180" rx="18" ry="20" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Pupils (cat-like) -->
  <ellipse cx="210" cy="180" rx="6" ry="16" fill="#1a1a1a"/>
  <ellipse cx="290" cy="180" rx="6" ry="16" fill="#1a1a1a"/>
  <!-- Nose -->
  <polygon points="250,210 242,224 258,224" fill="#1a1a1a"/>
  <!-- Mouth -->
  <path d="M242 225 Q235 240 222 238" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M258 225 Q265 240 278 238" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Whiskers -->
  <line x1="180" y1="215" x2="235" y2="218" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="175" y1="225" x2="232" y2="225" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="265" y1="218" x2="320" y2="215" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="268" y1="225" x2="325" y2="225" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Neck -->
  <path d="M200 275 L220 280" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M300 275 L280 280" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Legs -->
  <rect x="172" y="415" width="30" height="60" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="215" y="418" width="30" height="60" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="258" y="418" width="30" height="60" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="302" y="415" width="30" height="60" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M360 330 Q420 290 430 350 Q440 400 415 425" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Cat</text>
</svg>`;
}

function dogSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="255" cy="340" rx="130" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="190" cy="190" r="85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Floppy ears -->
  <ellipse cx="127" cy="205" rx="32" ry="55" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(-15,127,205)"/>
  <ellipse cx="253" cy="202" rx="32" ry="55" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(15,253,202)"/>
  <!-- Eyes -->
  <circle cx="162" cy="175" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="215" cy="175" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="164" cy="177" r="6" fill="#1a1a1a"/>
  <circle cx="217" cy="177" r="6" fill="#1a1a1a"/>
  <!-- Snout -->
  <ellipse cx="190" cy="220" rx="40" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Nose -->
  <ellipse cx="190" cy="210" rx="16" ry="10" fill="#1a1a1a"/>
  <!-- Mouth -->
  <path d="M175 230 Q190 246 205 230" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Legs -->
  <rect x="152" y="408" width="35" height="72" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="200" y="412" width="35" height="72" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="288" y="412" width="35" height="72" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="338" y="408" width="35" height="72" rx="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M385 300 Q435 268 445 318 Q448 355 425 370" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="497" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Dog</text>
</svg>`;
}

function rabbitSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="360" rx="100" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="250" cy="218" r="75" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Long ears -->
  <ellipse cx="210" cy="105" rx="28" ry="90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="290" cy="105" rx="28" ry="90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Inner ears -->
  <ellipse cx="210" cy="105" rx="16" ry="76" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="290" cy="105" rx="16" ry="76" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Eyes -->
  <circle cx="220" cy="200" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="280" cy="200" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="222" cy="202" r="5" fill="#1a1a1a"/>
  <circle cx="282" cy="202" r="5" fill="#1a1a1a"/>
  <!-- Nose -->
  <circle cx="250" cy="228" r="8" fill="#1a1a1a"/>
  <!-- Mouth -->
  <path d="M240 236 Q250 248 260 236" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Whiskers -->
  <line x1="195" y1="228" x2="240" y2="228" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="195" y1="235" x2="238" y2="233" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="262" y1="228" x2="305" y2="228" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="262" y1="233" x2="305" y2="235" stroke="#1a1a1a" stroke-width="1.5"/>
  <!-- Arms -->
  <path d="M168 335 Q140 355 148 385 Q155 400 170 398" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M332 335 Q360 355 352 385 Q345 400 330 398" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Legs/Feet -->
  <ellipse cx="205" cy="445" rx="45" ry="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="295" cy="445" rx="45" ry="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Fluffy tail -->
  <circle cx="350" cy="370" r="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Rabbit</text>
</svg>`;
}

function bearSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="355" rx="125" ry="105" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="250" cy="195" r="90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Round ears -->
  <circle cx="175" cy="125" r="32" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="325" cy="125" r="32" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="175" cy="125" r="20" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="325" cy="125" r="20" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Eyes -->
  <circle cx="215" cy="178" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="285" cy="178" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="217" cy="180" r="7" fill="#1a1a1a"/>
  <circle cx="287" cy="180" r="7" fill="#1a1a1a"/>
  <!-- Snout -->
  <ellipse cx="250" cy="225" rx="45" ry="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Nose -->
  <ellipse cx="250" cy="214" rx="18" ry="12" fill="#1a1a1a"/>
  <!-- Mouth -->
  <path d="M233 235 Q250 252 267 235" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Arms -->
  <path d="M128 315 Q95 340 100 380 Q105 400 128 400"
    fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M372 315 Q405 340 400 380 Q395 400 372 400"
    fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Legs -->
  <rect x="162" y="430" width="50" height="50" rx="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="290" y="430" width="50" height="50" rx="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Bear</text>
</svg>`;
}

function monkeySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="355" rx="100" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="250" cy="200" r="85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Ears -->
  <circle cx="168" cy="210" r="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="332" cy="210" r="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="168" cy="210" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="332" cy="210" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Eyes -->
  <circle cx="220" cy="185" r="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="280" cy="185" r="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="222" cy="187" r="7" fill="#1a1a1a"/>
  <circle cx="282" cy="187" r="7" fill="#1a1a1a"/>
  <!-- Muzzle -->
  <ellipse cx="250" cy="230" rx="42" ry="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Nose -->
  <circle cx="238" cy="218" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="262" cy="218" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Mouth -->
  <path d="M225 245 Q250 265 275 245" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Arms -->
  <path d="M152 305 Q100 330 90 395 Q88 415 108 420 Q128 418 130 400" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M348 305 Q400 330 410 395 Q412 415 392 420 Q372 418 370 400" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Legs -->
  <path d="M195 430 Q185 465 180 485" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M305 430 Q315 465 320 485" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Feet -->
  <ellipse cx="180" cy="487" rx="28" ry="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="320" cy="487" rx="28" ry="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M350 355 Q410 330 425 380 Q440 420 400 440 Q370 455 360 430" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="510" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Monkey</text>
</svg>`;
}

function penguinSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="340" rx="100" ry="130" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- White belly -->
  <ellipse cx="250" cy="350" rx="65" ry="95" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Head -->
  <circle cx="250" cy="175" r="70" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Eyes -->
  <circle cx="225" cy="162" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="275" cy="162" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="227" cy="164" r="6" fill="#1a1a1a"/>
  <circle cx="277" cy="164" r="6" fill="#1a1a1a"/>
  <!-- Beak -->
  <polygon points="250,185 237,205 263,205" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Wings -->
  <path d="M155 280 Q115 320 120 380 Q124 400 148 408" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M345 280 Q385 320 380 380 Q376 400 352 408" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Feet -->
  <path d="M215 455 Q195 468 180 465 Q175 475 195 475 Q215 475 225 465" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M285 455 Q305 468 320 465 Q325 475 305 475 Q285 475 275 465" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Penguin</text>
</svg>`;
}

function fishSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="220" cy="250" rx="160" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Tail -->
  <path d="M380 250 L450 180 L450 320 Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Scales pattern -->
  <path d="M220 165 Q250 185 220 200" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M190 168 Q220 188 190 203" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 168 Q280 188 250 203" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M205 200 Q235 220 205 235" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M235 200 Q265 220 235 235" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M265 200 Q295 220 265 235" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Eye -->
  <circle cx="110" cy="230" r="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="112" cy="232" r="10" fill="#1a1a1a"/>
  <!-- Mouth -->
  <path d="M60 250 Q72 240 70 260" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Dorsal fin -->
  <path d="M180 155 Q220 100 280 155" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Belly fin -->
  <path d="M200 345 Q230 390 270 345" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Side fin -->
  <path d="M250 240 Q300 210 310 250 Q300 280 250 260" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="468" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Fish</text>
</svg>`;
}

function butterflyS(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Upper left wing -->
  <path d="M240 250 Q150 160 80 180 Q30 200 60 270 Q90 330 180 280 Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Upper right wing -->
  <path d="M260 250 Q350 160 420 180 Q470 200 440 270 Q410 330 320 280 Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Lower left wing -->
  <path d="M240 260 Q160 290 120 360 Q100 400 155 400 Q210 395 245 310 Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Lower right wing -->
  <path d="M260 260 Q340 290 380 360 Q400 400 345 400 Q290 395 255 310 Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Wing patterns -->
  <circle cx="165" cy="220" r="25" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="335" cy="220" r="25" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="155" cy="340" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="345" cy="340" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Body -->
  <ellipse cx="250" cy="270" rx="12" ry="55" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="250" cy="200" r="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Antennae -->
  <path d="M242 184 Q225 150 218 130" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="218" cy="128" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M258 184 Q275 150 282 130" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="282" cy="128" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="465" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Butterfly</text>
</svg>`;
}

function snakeSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Snake body (coiled) -->
  <path d="M250 440 Q100 420 80 320 Q60 220 180 200 Q300 180 320 280 Q340 370 220 380 Q120 385 140 290 Q155 220 240 230"
    fill="none" stroke="#1a1a1a" stroke-width="18" stroke-linecap="round"/>
  <!-- Snake body lighter inner -->
  <path d="M250 440 Q100 420 80 320 Q60 220 180 200 Q300 180 320 280 Q340 370 220 380 Q120 385 140 290 Q155 220 240 230"
    fill="none" stroke="white" stroke-width="12" stroke-linecap="round"/>
  <path d="M250 440 Q100 420 80 320 Q60 220 180 200 Q300 180 320 280 Q340 370 220 380 Q120 385 140 290 Q155 220 240 230"
    fill="none" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round" stroke-dasharray="20 15"/>
  <!-- Head -->
  <ellipse cx="270" cy="175" rx="45" ry="30" fill="white" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Eye -->
  <circle cx="285" cy="168" r="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="287" cy="170" r="4" fill="#1a1a1a"/>
  <!-- Tongue -->
  <path d="M315 178 L345 175 L355 168 M345 175 L355 182" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Snake</text>
</svg>`;
}

function horseSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="270" cy="320" rx="145" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Neck -->
  <path d="M165 265 L185 135 L235 140 L225 270" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <ellipse cx="200" cy="112" rx="60" ry="42" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Snout -->
  <ellipse cx="165" cy="120" rx="30" ry="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Nostril -->
  <ellipse cx="152" cy="118" rx="7" ry="5" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Eye -->
  <circle cx="208" cy="100" r="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="210" cy="102" r="5" fill="#1a1a1a"/>
  <!-- Ears -->
  <polygon points="218,78 210,50 232,68" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="240,75 234,47 253,65" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Mane -->
  <path d="M222 75 Q210 90 218 115 Q222 135 215 155 Q210 175 215 200" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-dasharray="6 4"/>
  <!-- Legs -->
  <rect x="148" y="390" width="30" height="85" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="198" y="395" width="30" height="85" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="300" y="395" width="30" height="85" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="350" y="390" width="30" height="85" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Hooves -->
  <rect x="145" y="472" width="36" height="12" rx="4" fill="#1a1a1a"/>
  <rect x="195" y="477" width="36" height="12" rx="4" fill="#1a1a1a"/>
  <rect x="297" y="477" width="36" height="12" rx="4" fill="#1a1a1a"/>
  <rect x="347" y="472" width="36" height="12" rx="4" fill="#1a1a1a"/>
  <!-- Tail -->
  <path d="M415 295 Q460 270 468 330 Q475 380 445 410" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-dasharray="6 4"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Horse</text>
</svg>`;
}

function cowSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="255" cy="325" rx="145" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Spots -->
  <path d="M215 295 Q240 285 255 305 Q250 325 220 320 Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M280 300 Q305 290 320 310 Q315 330 285 325 Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Head -->
  <ellipse cx="148" cy="210" rx="80" ry="70" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Snout -->
  <ellipse cx="120" cy="230" rx="38" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Nostrils -->
  <circle cx="110" cy="228" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="128" cy="230" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Eyes -->
  <circle cx="148" cy="190" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="150" cy="192" r="6" fill="#1a1a1a"/>
  <!-- Horns -->
  <path d="M178 148 Q190 120 210 118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M145 145 Q148 115 165 110" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Ears -->
  <ellipse cx="78" cy="200" rx="20" ry="32" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(-20,78,200)"/>
  <!-- Udder -->
  <path d="M200 420 Q215 445 235 440 Q255 450 265 430" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Legs -->
  <rect x="148" y="400" width="33" height="72" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="197" y="405" width="33" height="72" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="285" y="405" width="33" height="72" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="335" y="400" width="33" height="72" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M400 295 Q440 280 448 330 Q450 365 430 378" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Cow</text>
</svg>`;
}

function pigSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="340" rx="135" ry="108" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="250" cy="195" r="88" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Snout -->
  <ellipse cx="250" cy="230" rx="48" ry="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Nostrils -->
  <ellipse cx="234" cy="228" rx="10" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="266" cy="228" rx="10" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Eyes -->
  <circle cx="210" cy="175" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="290" cy="175" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="212" cy="177" r="6" fill="#1a1a1a"/>
  <circle cx="292" cy="177" r="6" fill="#1a1a1a"/>
  <!-- Ears -->
  <polygon points="185,128 170,82 220,112" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="315,128 330,82 280,112" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Legs -->
  <rect x="162" y="415" width="38" height="60" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="212" y="420" width="38" height="60" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="252" y="420" width="38" height="60" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="300" y="415" width="38" height="60" rx="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Curly tail -->
  <path d="M385 320 Q415 305 420 330 Q425 355 405 360 Q390 362 388 345" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Pig</text>
</svg>`;
}

function owlSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="340" rx="100" ry="125" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Wing pattern on body -->
  <path d="M165 300 Q200 310 170 370" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M335 300 Q300 310 330 370" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Head -->
  <circle cx="250" cy="188" r="78" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Ear tufts -->
  <polygon points="215,118 205,80 232,108" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="285,118 295,80 268,108" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Big eyes -->
  <circle cx="218" cy="185" r="32" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="282" cy="185" r="32" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="218" cy="185" r="20" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="282" cy="185" r="20" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="218" cy="185" r="10" fill="#1a1a1a"/>
  <circle cx="282" cy="185" r="10" fill="#1a1a1a"/>
  <!-- Beak -->
  <polygon points="250,205 238,228 262,228" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Feet/talons -->
  <path d="M210 455 L200 475 M220 458 L215 478 M230 460 L228 480" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M290 455 L300 475 M280 458 L285 478 M270 460 L272 480" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="500" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Owl</text>
</svg>`;
}

function frogSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="340" rx="130" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <ellipse cx="250" cy="210" rx="110" ry="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Bulging eyes -->
  <circle cx="185" cy="160" r="35" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="315" cy="160" r="35" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="185" cy="160" r="22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="315" cy="160" r="22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="185" cy="160" r="12" fill="#1a1a1a"/>
  <circle cx="315" cy="160" r="12" fill="#1a1a1a"/>
  <!-- Wide mouth -->
  <path d="M160 230 Q250 268 340 230" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Nostrils -->
  <circle cx="235" cy="205" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="265" cy="205" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Front arms -->
  <path d="M135 295 Q90 320 80 370 Q78 390 100 385" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M365 295 Q410 320 420 370 Q422 390 400 385" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Webbed feet front -->
  <path d="M80 385 Q70 395 82 400 Q90 405 100 395 Q108 405 118 395 Q126 405 136 395" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M400 385 Q420 395 418 400 Q410 405 400 395 Q392 405 382 395 Q374 405 364 395" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Back legs -->
  <path d="M160 420 Q130 450 115 475" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M340 420 Q370 450 385 475" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Frog</text>
</svg>`;
}

function duckSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="255" cy="345" rx="140" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Wing detail -->
  <path d="M160 310 Q210 290 260 320 Q210 330 160 320" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Neck -->
  <path d="M168 270 L180 155 L225 155 L230 272" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Head -->
  <circle cx="202" cy="128" r="55" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Eye -->
  <circle cx="180" cy="115" r="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="182" cy="117" r="5" fill="#1a1a1a"/>
  <!-- Bill -->
  <path d="M155 130 Q125 132 120 145 Q120 158 148 158 Q162 158 168 145 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tail -->
  <path d="M395 320 Q440 295 445 340 Q448 365 425 375" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Feet -->
  <path d="M185 430 Q165 450 145 448 Q140 462 165 460 Q190 458 200 445 L200 430" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M295 430 Q315 450 335 448 Q340 462 315 460 Q290 458 280 445 L280 430" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Duck</text>
</svg>`;
}

// Fruits
function appleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Apple body -->
  <path d="M250 120 Q340 115 380 190 Q430 270 400 360 Q370 430 300 445 Q270 455 250 450 Q230 455 200 445 Q130 430 100 360 Q70 270 120 190 Q160 115 250 120Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Apple indent top -->
  <path d="M220 125 Q250 100 280 125" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Stem -->
  <path d="M250 112 Q255 80 275 65" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Leaf -->
  <path d="M265 90 Q295 60 310 80 Q295 100 270 95 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Shine -->
  <path d="M158 200 Q148 230 158 255" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Apple</text>
</svg>`;
}

function bananaSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Banana bunch -->
  <path d="M120 180 Q100 250 150 360 Q175 410 230 420 Q280 425 310 395 Q350 355 330 280 Q315 230 350 190 Q380 165 390 140"
    fill="none" stroke="#1a1a1a" stroke-width="6"/>
  <path d="M150 175 Q130 245 178 355 Q200 405 252 415"
    fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M175 172 Q155 242 202 350"
    fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Ridges -->
  <path d="M155 255 Q180 250 200 260" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M165 295 Q190 290 210 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M180 335 Q205 330 225 340" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Tip/stem -->
  <path d="M120 180 Q115 160 125 148 Q135 138 145 145" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M390 140 Q405 128 415 132 Q420 140 410 148" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="470" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Banana</text>
</svg>`;
}

function orangeSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Orange body -->
  <circle cx="250" cy="270" r="180" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Texture lines -->
  <path d="M250 90 Q280 150 250 270 Q220 150 250 90" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 90 Q310 170 310 270 Q310 370 250 450" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 90 Q190 170 190 270 Q190 370 250 450" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M70 270 Q160 240 250 270 Q160 300 70 270" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M430 270 Q340 240 250 270 Q340 300 430 270" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Stem -->
  <path d="M250 90 Q253 68 258 55" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Leaf -->
  <path d="M258 68 Q280 48 292 65 Q275 75 260 72 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="480" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Orange</text>
</svg>`;
}

function grapeSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Grape bunch -->
  <circle cx="195" cy="200" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="305" cy="200" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="248" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="160" cy="272" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="340" cy="272" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="215" cy="320" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="285" cy="320" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="375" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="195" cy="420" r="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="305" cy="420" r="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Stem -->
  <path d="M250 158 L250 95" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Leaf -->
  <path d="M250 100 Q220 65 195 72 Q210 95 232 100 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 100 Q280 65 305 72 Q290 95 268 100 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Leaf veins -->
  <path d="M222 83 Q230 92 228 100" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M278 83 Q270 92 272 100" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Grapes</text>
</svg>`;
}

function strawberrySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Berry body -->
  <path d="M250 170 Q340 165 390 260 Q420 320 380 390 Q340 450 250 465 Q160 450 120 390 Q80 320 110 260 Q160 165 250 170Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Seeds -->
  <ellipse cx="200" cy="280" rx="7" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="250" cy="260" rx="7" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="300" cy="280" rx="7" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="220" cy="330" rx="7" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="280" cy="330" rx="7" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="250" cy="380" rx="7" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="185" cy="365" rx="6" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="315" cy="365" rx="6" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Leaves (calyx) -->
  <path d="M250 170 Q235 135 210 130 Q230 155 245 165 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 170 Q265 135 290 130 Q270 155 255 165 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 170 Q218 125 215 95 Q238 120 248 162 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 170 Q282 125 285 95 Q262 120 252 162 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Strawberry</text>
</svg>`;
}

function watermelonSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Slice shape -->
  <path d="M250 100 L60 430 L440 430 Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Rind outer -->
  <path d="M250 118 L78 422 L422 422 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Rind inner -->
  <path d="M250 138 L98 414 L402 414 Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Seeds -->
  <ellipse cx="210" cy="330" rx="10" ry="14" fill="#1a1a1a"/>
  <ellipse cx="250" cy="300" rx="10" ry="14" fill="#1a1a1a"/>
  <ellipse cx="290" cy="330" rx="10" ry="14" fill="#1a1a1a"/>
  <ellipse cx="230" cy="370" rx="10" ry="14" fill="#1a1a1a"/>
  <ellipse cx="270" cy="370" rx="10" ry="14" fill="#1a1a1a"/>
  <ellipse cx="175" cy="365" rx="9" ry="12" fill="#1a1a1a"/>
  <ellipse cx="325" cy="365" rx="9" ry="12" fill="#1a1a1a"/>
  <!-- Stripes on rind -->
  <path d="M95 415 Q130 390 135 380" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M155 415 Q180 388 183 375" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M345 415 Q320 388 317 375" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M405 415 Q370 390 365 380" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Watermelon</text>
</svg>`;
}

function pineappleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520">
  <rect width="500" height="520" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Body -->
  <ellipse cx="250" cy="340" rx="120" ry="155" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Diamond pattern -->
  <line x1="250" y1="185" x2="200" y2="295" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="250" y1="185" x2="250" y2="495" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="250" y1="185" x2="300" y2="295" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="200" y1="295" x2="130" y2="340" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="300" y1="295" x2="370" y2="340" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="130" y1="340" x2="200" y2="385" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="370" y1="340" x2="300" y2="385" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="200" y1="385" x2="250" y2="495" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="300" y1="385" x2="250" y2="495" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="200" y1="295" x2="300" y2="295" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="130" y1="340" x2="370" y2="340" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="200" y1="385" x2="300" y2="385" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Crown leaves -->
  <path d="M250 185 Q230 145 220 100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M250 185 Q250 135 250 85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M250 185 Q270 145 280 100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M250 185 Q205 148 195 118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 185 Q295 148 305 118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 185 Q220 158 205 138" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 185 Q280 158 295 138" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="515" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Pineapple</text>
</svg>`;
}

function mangoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Mango body (kidney shape) -->
  <path d="M250 120 Q330 108 375 165 Q430 235 410 320 Q390 400 310 435 Q260 455 215 440 Q150 418 125 355 Q95 280 135 210 Q170 148 250 120Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Shine -->
  <path d="M175 185 Q162 220 170 255" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="5 5"/>
  <!-- Stem -->
  <path d="M245 118 Q240 88 248 68" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Leaf -->
  <path d="M248 88 Q275 62 288 78 Q268 92 250 90 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Mango</text>
</svg>`;
}

function pearSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Pear body -->
  <path d="M250 180 Q295 175 330 220 Q380 275 365 350 Q350 420 290 450 Q260 462 250 462 Q240 462 210 450 Q150 420 135 350 Q120 275 170 220 Q205 175 250 180Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Neck -->
  <path d="M225 182 Q230 150 235 125 Q240 105 250 90 Q260 105 265 125 Q270 150 275 182" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Stem -->
  <path d="M250 88 Q252 68 256 52" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Leaf -->
  <path d="M256 68 Q280 48 292 62 Q275 76 258 72 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Shine -->
  <path d="M175 270 Q165 300 173 330" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Pear</text>
</svg>`;
}

function cherrySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Left cherry -->
  <circle cx="178" cy="368" r="85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Right cherry -->
  <circle cx="322" cy="368" r="85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Left shine -->
  <circle cx="148" cy="335" r="15" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Right shine -->
  <circle cx="293" cy="335" r="15" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Stems -->
  <path d="M178 283 Q185 220 250 165" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M322 283 Q315 220 250 165" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Leaf -->
  <path d="M250 165 Q228 128 210 118 Q228 140 248 158 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Stem top -->
  <path d="M250 165 Q250 138 250 120" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Cherries</text>
</svg>`;
}

function lemonSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Lemon body -->
  <ellipse cx="250" cy="265" rx="175" ry="135" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Pointed ends -->
  <path d="M75 265 Q55 255 42 265 Q55 275 75 265" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M425 265 Q445 255 458 265 Q445 275 425 265" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Texture -->
  <path d="M165 165 Q195 155 225 165" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M275 165 Q305 155 335 165" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M140 215 Q160 205 180 215" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Stem -->
  <path d="M250 130 Q250 105 255 90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Leaf -->
  <path d="M255 105 Q278 82 292 97 Q274 110 257 107 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="450" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Lemon</text>
</svg>`;
}

// Vegetables
function carrotSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520">
  <rect width="500" height="520" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Carrot body -->
  <path d="M210 155 Q245 145 290 155 Q350 250 320 380 Q290 460 250 475 Q210 460 180 380 Q150 250 210 155Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Rings -->
  <path d="M175 250 Q250 238 325 250" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M163 300 Q250 288 337 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M170 350 Q250 338 330 350" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M188 400 Q250 390 312 400" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Leafy top -->
  <path d="M250 155 Q240 115 220 90 Q235 110 248 148 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 155 Q250 105 250 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 155 Q260 115 280 90 Q265 110 252 148 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 155 Q228 108 215 78 Q232 100 248 148 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 155 Q272 108 285 78 Q268 100 252 148 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="512" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Carrot</text>
</svg>`;
}

function broccoliSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520">
  <rect width="500" height="520" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Stalk -->
  <rect x="218" y="320" width="64" height="160" rx="12" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Main floret clusters -->
  <circle cx="250" cy="240" r="70" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="165" cy="270" r="55" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="335" cy="270" r="55" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="210" cy="195" r="45" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="290" cy="195" r="45" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Small floret bumps on top -->
  <circle cx="250" cy="178" r="22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="220" cy="162" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="280" cy="162" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="180" cy="225" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="320" cy="225" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Stalk detail lines -->
  <line x1="235" y1="320" x2="230" y2="480" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="265" y1="320" x2="270" y2="480" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="515" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Broccoli</text>
</svg>`;
}

function cornSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520">
  <rect width="500" height="520" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Husk leaves -->
  <path d="M200 455 Q145 350 168 240 Q185 255 195 380 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M300 455 Q355 350 332 240 Q315 255 305 380 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M225 460 Q180 365 200 230 Q215 248 218 375 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M275 460 Q320 365 300 230 Q285 248 282 375 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Corn cob body -->
  <ellipse cx="250" cy="290" rx="65" ry="155" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Kernel rows (horizontal lines) -->
  <line x1="188" y1="188" x2="312" y2="188" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="185" y1="208" x2="315" y2="208" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="184" y1="228" x2="316" y2="228" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="184" y1="248" x2="316" y2="248" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="185" y1="268" x2="315" y2="268" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="186" y1="288" x2="314" y2="288" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="186" y1="308" x2="314" y2="308" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="186" y1="328" x2="314" y2="328" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="187" y1="348" x2="313" y2="348" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="190" y1="368" x2="310" y2="368" stroke="#1a1a1a" stroke-width="1.5"/>
  <!-- Kernel columns (vertical lines) -->
  <line x1="215" y1="140" x2="215" y2="440" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="233" y1="135" x2="233" y2="445" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="250" y1="135" x2="250" y2="445" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="267" y1="135" x2="267" y2="445" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="285" y1="140" x2="285" y2="440" stroke="#1a1a1a" stroke-width="1.5"/>
  <!-- Silk tassels at top -->
  <path d="M235 138 Q228 108 222 82" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M242 135 Q238 105 235 78" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M250 135 Q250 105 250 78" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M258 135 Q262 105 265 78" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M265 138 Q272 108 278 82" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="250" y="515" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Corn</text>
</svg>`;
}

function tomatoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Tomato body -->
  <circle cx="250" cy="285" r="170" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Segments -->
  <path d="M250 115 Q210 180 250 285" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 115 Q290 180 250 285" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 115 Q170 160 250 285" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 115 Q330 160 250 285" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Calyx (green top) -->
  <path d="M250 118 Q225 95 205 100 Q225 115 248 120 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 118 Q275 95 295 100 Q275 115 252 120 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 118 Q220 88 218 65 Q238 88 250 115 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 118 Q280 88 282 65 Q262 88 250 115 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Stem -->
  <path d="M250 118 Q250 100 250 85" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Shine -->
  <circle cx="192" cy="208" r="22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Tomato</text>
</svg>`;
}

function potatoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Potato irregular shape -->
  <path d="M250 140 Q325 130 375 175 Q420 220 415 290 Q410 355 370 395 Q330 432 270 440 Q218 448 180 425 Q135 395 118 345 Q100 290 120 235 Q142 178 195 152 Q220 142 250 140Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Eyes/buds on potato -->
  <ellipse cx="195" cy="195" rx="12" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="195" cy="195" r="4" fill="#1a1a1a"/>
  <ellipse cx="320" cy="200" rx="12" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="320" cy="200" r="4" fill="#1a1a1a"/>
  <ellipse cx="355" cy="305" rx="12" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="355" cy="305" r="4" fill="#1a1a1a"/>
  <ellipse cx="155" cy="330" rx="12" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="155" cy="330" r="4" fill="#1a1a1a"/>
  <ellipse cx="250" cy="395" rx="12" ry="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="250" cy="395" r="4" fill="#1a1a1a"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Potato</text>
</svg>`;
}

function onionSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Onion body -->
  <path d="M250 185 Q340 178 390 240 Q430 300 405 365 Q378 428 310 450 Q270 462 250 462 Q230 462 190 450 Q122 428 95 365 Q70 300 110 240 Q160 178 250 185Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Layers -->
  <path d="M250 200 Q325 195 365 250 Q398 305 375 362 Q352 415 290 435 Q270 442 250 442"
    fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 215 Q310 210 345 258 Q373 308 352 355 Q330 400 270 418 Q260 422 250 422"
    fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Top (neck) -->
  <path d="M222 185 Q230 148 235 120 Q240 100 250 85 Q260 100 265 120 Q270 148 278 185" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Sprouts -->
  <path d="M242 88 Q238 65 232 48" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 85 Q250 62 250 45" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M258 88 Q262 65 268 48" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Roots -->
  <path d="M225 458 Q222 475 218 488" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 462 Q250 478 250 490" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M275 458 Q278 475 282 488" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="508" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Onion</text>
</svg>`;
}

// Anatomy
function humanBodySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600" width="500" height="600">
  <rect width="500" height="600" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Head -->
  <ellipse cx="250" cy="85" rx="55" ry="65" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Neck -->
  <rect x="228" y="148" width="44" height="38" rx="5" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Torso -->
  <path d="M175 186 L148 340 L352 340 L325 186 Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Shoulders -->
  <path d="M175 186 Q145 186 128 215" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M325 186 Q355 186 372 215" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Left arm -->
  <path d="M128 215 L105 338" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="105" cy="345" rx="18" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Left forearm -->
  <path d="M105 357 L88 450" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Left hand -->
  <ellipse cx="85" cy="460" rx="20" ry="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Right arm -->
  <path d="M372 215 L395 338" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="395" cy="345" rx="18" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Right forearm -->
  <path d="M395 357 L412 450" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <!-- Right hand -->
  <ellipse cx="415" cy="460" rx="20" ry="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Hips -->
  <path d="M148 340 L142 390 L358 390 L352 340" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Left leg -->
  <path d="M190 390 L178 510" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Left knee -->
  <ellipse cx="176" cy="516" rx="18" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Left lower leg -->
  <path d="M175 528 L170 580" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Right leg -->
  <path d="M310 390 L322 510" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Right knee -->
  <ellipse cx="324" cy="516" rx="18" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Right lower leg -->
  <path d="M325 528 L330 580" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Feet -->
  <path d="M168 580 Q158 590 152 595 Q165 598 182 595 Q192 590 175 580" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M332 580 Q342 590 348 595 Q335 598 318 595 Q308 590 325 580" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Centerline -->
  <line x1="250" y1="186" x2="250" y2="340" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <!-- Collar bone -->
  <path d="M228 186 Q205 195 175 195" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M272 186 Q295 195 325 195" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Rib cage lines -->
  <path d="M205 210 Q220 225 205 245" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M200 255 Q215 270 200 290" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M295 210 Q280 225 295 245" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M300 255 Q285 270 300 290" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <text x="250" y="602" font-family="Arial, sans-serif" font-size="20" font-weight="600"
    text-anchor="middle" fill="#555">Human Body</text>
</svg>`;
}

function humanFaceSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Head -->
  <ellipse cx="250" cy="240" rx="180" ry="205" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Ears -->
  <path d="M70 210 Q48 225 45 248 Q45 270 68 285 Q75 290 80 280 Q68 265 70 248 Q70 232 82 220 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M430 210 Q452 225 455 248 Q455 270 432 285 Q425 290 420 280 Q432 265 430 248 Q430 232 418 220 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Eyebrows -->
  <path d="M148 158 Q190 142 215 152" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M285 152 Q310 142 352 158" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <!-- Eyes -->
  <ellipse cx="188" cy="188" rx="35" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <ellipse cx="312" cy="188" rx="35" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <!-- Pupils -->
  <circle cx="188" cy="188" r="16" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="188" cy="188" r="8" fill="#1a1a1a"/>
  <circle cx="312" cy="188" r="16" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="312" cy="188" r="8" fill="#1a1a1a"/>
  <!-- Eyelashes top -->
  <line x1="158" y1="163" x2="155" y2="150" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="175" y1="158" x2="173" y2="145" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="192" y1="157" x2="192" y2="143" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="209" y1="158" x2="211" y2="145" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="220" y1="163" x2="225" y2="150" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Nose -->
  <path d="M250 210 L235 268 Q235 278 250 280 Q265 278 265 268 Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M235 270 Q225 282 218 275" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M265 270 Q275 282 282 275" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Philtrum -->
  <path d="M244 280 Q244 298 240 308" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M256 280 Q256 298 260 308" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Lips -->
  <path d="M195 315 Q220 305 250 308 Q280 305 305 315" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M195 315 Q222 338 250 342 Q278 338 305 315" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <!-- Lip center -->
  <path d="M220 308 Q250 320 280 308" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Chin dimple -->
  <path d="M242 395 Q250 405 258 395" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <!-- Hair (simple) -->
  <path d="M70 195 Q68 120 120 82 Q175 45 250 40 Q325 45 380 82 Q432 120 430 195"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Neck -->
  <path d="M200 435 L215 465 L285 465 L300 435" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">Human Face</text>
</svg>`;
}

function heartAnatomySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520">
  <rect width="500" height="520" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Heart outline -->
  <path d="M250 430 Q80 320 55 195 Q40 110 110 80 Q175 55 220 110 Q235 128 250 148 Q265 128 280 110 Q325 55 390 80 Q460 110 445 195 Q420 320 250 430Z"
    fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <!-- Aorta (top) -->
  <path d="M250 148 Q240 110 238 85 L250 85 L255 85 Q260 110 255 148" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M235 95 Q220 82 215 65 Q225 65 235 72 Q240 78 240 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M255 92 Q268 80 278 65 Q268 62 260 70 Q256 76 256 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Pulmonary artery -->
  <path d="M225 120 Q195 105 175 108 Q155 112 150 128" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <!-- Pulmonary veins -->
  <path d="M280 120 Q310 105 330 110 Q348 115 350 130" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <!-- Left ventricle wall -->
  <path d="M220 200 Q215 285 250 340 Q245 285 255 200" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Septum (dividing line) -->
  <path d="M248 168 Q245 260 248 340" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-dasharray="6 4"/>
  <!-- Right atrium -->
  <path d="M165 165 Q148 200 155 245 Q162 280 195 285" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Left atrium -->
  <path d="M335 165 Q352 200 345 245 Q338 280 305 285" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <!-- Valves (simplified) -->
  <path d="M235 200 Q250 210 265 200" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M235 220 Q250 230 265 220" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Vena cava (bottom vessels) -->
  <path d="M162 370 Q155 400 158 420" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M338 370 Q345 400 342 420" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <!-- Labels -->
  <text x="140" y="145" font-family="Arial, sans-serif" font-size="13" fill="#555">Right atrium</text>
  <text x="305" y="145" font-family="Arial, sans-serif" font-size="13" fill="#555">Left atrium</text>
  <text x="100" y="290" font-family="Arial, sans-serif" font-size="13" fill="#555">Right ventricle</text>
  <text x="305" y="290" font-family="Arial, sans-serif" font-size="13" fill="#555">Left ventricle</text>
  <text x="198" y="72" font-family="Arial, sans-serif" font-size="13" fill="#555">Aorta</text>
  <text x="250" y="515" font-family="Arial, sans-serif" font-size="20" font-weight="600"
    text-anchor="middle" fill="#555">Heart Anatomy</text>
</svg>`;
}

// Planners
function dailyPlannerSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 660" width="500" height="660">
  <rect width="500" height="660" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <!-- Title -->
  <rect x="20" y="20" width="460" height="55" rx="6" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="55" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#1a1a1a">DAILY PLANNER</text>
  <!-- Date line -->
  <text x="35" y="100" font-family="Arial, sans-serif" font-size="14" fill="#555">DATE: ___________________________</text>
  <text x="285" y="100" font-family="Arial, sans-serif" font-size="14" fill="#555">DAY: _________________</text>
  <!-- Time slots -->
  <text x="35" y="130" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1a1a1a">TIME SCHEDULE</text>
  ${[
    '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ].map((time, i) => `
    <text x="35" y="${148 + i * 27}" font-family="Arial, sans-serif" font-size="12" fill="#555">${time}</text>
    <line x1="100" y1="${145 + i * 27}" x2="480" y2="${145 + i * 27}" stroke="#1a1a1a" stroke-width="0.8"/>
  `).join('')}
  <!-- Priority section -->
  <text x="35" y="590" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1a1a1a">TOP PRIORITIES</text>
  <text x="35" y="608" font-family="Arial, sans-serif" font-size="12" fill="#555">1. _____________________________________________</text>
  <text x="35" y="626" font-family="Arial, sans-serif" font-size="12" fill="#555">2. _____________________________________________</text>
  <text x="35" y="644" font-family="Arial, sans-serif" font-size="12" fill="#555">3. _____________________________________________</text>
</svg>`;
}

function weeklyPlannerSVG(): string {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const colWidth = 65;
  const startX = 30;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700" width="500" height="700">
  <rect width="500" height="700" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="20" y="20" width="460" height="52" rx="6" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="53" font-family="Arial, sans-serif" font-size="22" font-weight="bold" text-anchor="middle" fill="#1a1a1a">WEEKLY PLANNER</text>
  <text x="35" y="92" font-family="Arial, sans-serif" font-size="14" fill="#555">WEEK OF: _________________________________</text>
  <!-- Day columns -->
  ${days.map((day, i) => `
    <rect x="${startX + i * colWidth}" y="108" width="${colWidth - 4}" height="32" rx="4" fill="none" stroke="#1a1a1a" stroke-width="2"/>
    <text x="${startX + i * colWidth + colWidth / 2 - 2}" y="130" font-family="Arial, sans-serif" font-size="13" font-weight="bold" text-anchor="middle" fill="#1a1a1a">${day}</text>
    ${Array.from({length: 18}, (_, j) => `<line x1="${startX + i * colWidth}" y1="${145 + j * 30}" x2="${startX + i * colWidth + colWidth - 4}" y2="${145 + j * 30}" stroke="#aaa" stroke-width="0.7"/>`).join('')}
    <rect x="${startX + i * colWidth}" y="142" width="${colWidth - 4}" height="540" rx="2" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  `).join('')}
  <!-- Goals section -->
  <text x="35" y="704" font-family="Arial, sans-serif" font-size="11" fill="#555">WEEKLY GOAL: _____________________________________________</text>
</svg>`;
}

function budgetPlannerSVG(): string {
  const categories = [
    'Housing/Rent', 'Food & Groceries', 'Transportation', 'Utilities',
    'Insurance', 'Health/Medical', 'Personal Care', 'Entertainment',
    'Clothing', 'Savings', 'Emergency Fund', 'Miscellaneous'
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700" width="500" height="700">
  <rect width="500" height="700" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="20" y="20" width="460" height="52" rx="6" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="53" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#1a1a1a">MONTHLY BUDGET PLANNER</text>
  <!-- Month and income -->
  <text x="35" y="92" font-family="Arial, sans-serif" font-size="13" fill="#555">MONTH: _____________________</text>
  <text x="270" y="92" font-family="Arial, sans-serif" font-size="13" fill="#555">INCOME: $______________</text>
  <!-- Table headers -->
  <rect x="22" y="100" width="456" height="26" rx="0" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="35" y="118" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1a1a1a">CATEGORY</text>
  <text x="255" y="118" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1a1a1a">BUDGET</text>
  <text x="335" y="118" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1a1a1a">ACTUAL</text>
  <text x="415" y="118" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1a1a1a">DIFF</text>
  <!-- Vertical dividers -->
  <line x1="245" y1="100" x2="245" y2="${126 + categories.length * 36}" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="325" y1="100" x2="325" y2="${126 + categories.length * 36}" stroke="#1a1a1a" stroke-width="1.5"/>
  <line x1="405" y1="100" x2="405" y2="${126 + categories.length * 36}" stroke="#1a1a1a" stroke-width="1.5"/>
  ${categories.map((cat, i) => `
    <rect x="22" y="${126 + i * 36}" width="456" height="36" fill="none" stroke="#1a1a1a" stroke-width="0.8"/>
    <text x="35" y="${150 + i * 36}" font-family="Arial, sans-serif" font-size="12" fill="#333">${cat}</text>
    <text x="255" y="${150 + i * 36}" font-family="Arial, sans-serif" font-size="12" fill="#888">$_________</text>
    <text x="335" y="${150 + i * 36}" font-family="Arial, sans-serif" font-size="12" fill="#888">$_________</text>
    <text x="415" y="${150 + i * 36}" font-family="Arial, sans-serif" font-size="12" fill="#888">$______</text>
  `).join('')}
  <!-- Total row -->
  <rect x="22" y="${126 + categories.length * 36}" width="456" height="36" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="35" y="${152 + categories.length * 36}" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1a1a1a">TOTAL</text>
  <text x="255" y="${152 + categories.length * 36}" font-family="Arial, sans-serif" font-size="12" fill="#888">$_________</text>
  <text x="335" y="${152 + categories.length * 36}" font-family="Arial, sans-serif" font-size="12" fill="#888">$_________</text>
  <text x="415" y="${152 + categories.length * 36}" font-family="Arial, sans-serif" font-size="12" fill="#888">$______</text>
  <!-- Notes -->
  <text x="35" y="${210 + categories.length * 36}" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#1a1a1a">NOTES:</text>
  <line x1="35" y1="${225 + categories.length * 36}" x2="475" y2="${225 + categories.length * 36}" stroke="#aaa" stroke-width="0.8"/>
  <line x1="35" y1="${245 + categories.length * 36}" x2="475" y2="${245 + categories.length * 36}" stroke="#aaa" stroke-width="0.8"/>
</svg>`;
}

// Build the full content library
export const ContentLibrary: PrintItem[] = [];

// Alphabet uppercase
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
letters.forEach(letter => {
  ContentLibrary.push({
    id: `alphabet-upper-${letter}`,
    category: 'alphabet',
    title: `Letter ${letter}`,
    subtitle: 'Uppercase',
    tags: ['alphabet', 'letters', 'tracing', 'uppercase', letter.toLowerCase()],
    svgContent: alphabetSVG(letter),
    traceText: letter,
    description: `Uppercase letter ${letter} tracing worksheet`
  });
});

// Alphabet lowercase
letters.forEach(letter => {
  ContentLibrary.push({
    id: `alphabet-lower-${letter}`,
    category: 'alphabet',
    title: `Letter ${letter.toLowerCase()}`,
    subtitle: 'Lowercase',
    tags: ['alphabet', 'letters', 'tracing', 'lowercase', letter.toLowerCase()],
    svgContent: alphabetLowerSVG(letter),
    traceText: letter.toLowerCase(),
    description: `Lowercase letter ${letter.toLowerCase()} tracing worksheet`
  });
});

// Numbers 1-100
for (let n = 1; n <= 100; n++) {
  ContentLibrary.push({
    id: `number-${n}`,
    category: 'numbers',
    title: `Number ${n}`,
    tags: ['numbers', 'math', 'counting', 'tracing', n.toString()],
    svgContent: numberSVG(n),
    traceText: n.toString(),
    description: `Number ${n} tracing worksheet`
  });
}

// Math symbols
const mathSymbols = [
  { symbol: '+', name: 'Addition', id: 'plus' },
  { symbol: '−', name: 'Subtraction', id: 'minus' },
  { symbol: '×', name: 'Multiplication', id: 'multiply' },
  { symbol: '÷', name: 'Division', id: 'divide' },
  { symbol: '=', name: 'Equals', id: 'equals' },
  { symbol: '<', name: 'Less Than', id: 'less-than' },
  { symbol: '>', name: 'Greater Than', id: 'greater-than' },
  { symbol: '≤', name: 'Less or Equal', id: 'less-equal' },
  { symbol: '≥', name: 'Greater or Equal', id: 'greater-equal' },
  { symbol: '≠', name: 'Not Equal', id: 'not-equal' },
  { symbol: '%', name: 'Percent', id: 'percent' },
  { symbol: '∞', name: 'Infinity', id: 'infinity' },
  { symbol: '√', name: 'Square Root', id: 'sqrt' },
  { symbol: 'π', name: 'Pi', id: 'pi' },
];
mathSymbols.forEach(ms => {
  ContentLibrary.push({
    id: `math-${ms.id}`,
    category: 'math',
    title: ms.name,
    subtitle: ms.symbol,
    tags: ['math', 'symbols', 'mathematics', ms.name.toLowerCase()],
    svgContent: mathSymbolSVG(ms.symbol, ms.name),
    traceText: ms.symbol,
    description: `${ms.name} symbol (${ms.symbol}) tracing worksheet`
  });
});

// Shapes
const shapeItems = [
  { id: 'circle', title: 'Circle', svg: circleSVG(), trace: 'circle' },
  { id: 'square', title: 'Square', svg: squareSVG(), trace: 'square' },
  { id: 'triangle', title: 'Triangle', svg: triangleSVG(), trace: 'triangle' },
  { id: 'rectangle', title: 'Rectangle', svg: rectangleSVG(), trace: 'rectangle' },
  { id: 'oval', title: 'Oval', svg: ovalSVG(), trace: 'oval' },
  { id: 'diamond', title: 'Diamond', svg: diamondSVG(), trace: 'diamond' },
  { id: 'pentagon', title: 'Pentagon', svg: pentagonSVG(), trace: 'pentagon' },
  { id: 'hexagon', title: 'Hexagon', svg: hexagonSVG(), trace: 'hexagon' },
  { id: 'star', title: 'Star', svg: starSVG(), trace: 'star' },
  { id: 'heart', title: 'Heart', svg: heartSVG(), trace: 'heart' },
  { id: 'arrow', title: 'Arrow', svg: arrowSVG(), trace: 'arrow' },
  { id: 'crescent', title: 'Crescent', svg: crescentSVG(), trace: 'crescent' },
];
shapeItems.forEach(s => {
  ContentLibrary.push({
    id: `shape-${s.id}`,
    category: 'shapes',
    title: s.title,
    tags: ['shapes', 'geometry', 'drawing', s.title.toLowerCase()],
    svgContent: s.svg,
    traceText: s.trace,
    description: `${s.title} shape coloring and tracing worksheet`
  });
});

// Animals
const animalItems = [
  { id: 'lion', title: 'Lion', svg: lionSVG() },
  { id: 'elephant', title: 'Elephant', svg: elephantSVG() },
  { id: 'tiger', title: 'Tiger', svg: tigerSVG() },
  { id: 'giraffe', title: 'Giraffe', svg: giraffesSVG() },
  { id: 'zebra', title: 'Zebra', svg: zebra() },
  { id: 'cat', title: 'Cat', svg: catSVG() },
  { id: 'dog', title: 'Dog', svg: dogSVG() },
  { id: 'rabbit', title: 'Rabbit', svg: rabbitSVG() },
  { id: 'bear', title: 'Bear', svg: bearSVG() },
  { id: 'monkey', title: 'Monkey', svg: monkeySVG() },
  { id: 'penguin', title: 'Penguin', svg: penguinSVG() },
  { id: 'fish', title: 'Fish', svg: fishSVG() },
  { id: 'butterfly', title: 'Butterfly', svg: butterflyS() },
  { id: 'snake', title: 'Snake', svg: snakeSVG() },
  { id: 'horse', title: 'Horse', svg: horseSVG() },
  { id: 'cow', title: 'Cow', svg: cowSVG() },
  { id: 'pig', title: 'Pig', svg: pigSVG() },
  { id: 'owl', title: 'Owl', svg: owlSVG() },
  { id: 'frog', title: 'Frog', svg: frogSVG() },
  { id: 'duck', title: 'Duck', svg: duckSVG() },
];
animalItems.forEach(a => {
  ContentLibrary.push({
    id: `animal-${a.id}`,
    category: 'animals',
    title: a.title,
    tags: ['animals', 'coloring', 'wildlife', a.title.toLowerCase()],
    svgContent: a.svg,
    traceText: a.title.toLowerCase(),
    description: `${a.title} coloring and tracing worksheet for kids`
  });
});

// Fruits
const fruitItems = [
  { id: 'apple', title: 'Apple', svg: appleSVG() },
  { id: 'banana', title: 'Banana', svg: bananaSVG() },
  { id: 'orange', title: 'Orange', svg: orangeSVG() },
  { id: 'grapes', title: 'Grapes', svg: grapeSVG() },
  { id: 'strawberry', title: 'Strawberry', svg: strawberrySVG() },
  { id: 'watermelon', title: 'Watermelon', svg: watermelonSVG() },
  { id: 'pineapple', title: 'Pineapple', svg: pineappleSVG() },
  { id: 'mango', title: 'Mango', svg: mangoSVG() },
  { id: 'pear', title: 'Pear', svg: pearSVG() },
  { id: 'cherries', title: 'Cherries', svg: cherrySVG() },
  { id: 'lemon', title: 'Lemon', svg: lemonSVG() },
];
fruitItems.forEach(f => {
  ContentLibrary.push({
    id: `fruit-${f.id}`,
    category: 'fruits',
    title: f.title,
    tags: ['fruits', 'food', 'coloring', 'healthy', f.title.toLowerCase()],
    svgContent: f.svg,
    traceText: f.title.toLowerCase(),
    description: `${f.title} coloring and tracing worksheet`
  });
});

// Vegetables
const vegItems = [
  { id: 'carrot', title: 'Carrot', svg: carrotSVG() },
  { id: 'broccoli', title: 'Broccoli', svg: broccoliSVG() },
  { id: 'corn', title: 'Corn', svg: cornSVG() },
  { id: 'tomato', title: 'Tomato', svg: tomatoSVG() },
  { id: 'potato', title: 'Potato', svg: potatoSVG() },
  { id: 'onion', title: 'Onion', svg: onionSVG() },
];
vegItems.forEach(v => {
  ContentLibrary.push({
    id: `veg-${v.id}`,
    category: 'vegetables',
    title: v.title,
    tags: ['vegetables', 'food', 'coloring', 'healthy', v.title.toLowerCase()],
    svgContent: v.svg,
    traceText: v.title.toLowerCase(),
    description: `${v.title} coloring and tracing worksheet`
  });
});

// Anatomy
ContentLibrary.push(
  {
    id: 'anatomy-body',
    category: 'anatomy',
    title: 'Human Body',
    tags: ['anatomy', 'body', 'science', 'education', 'human'],
    svgContent: humanBodySVG(),
    traceText: 'human body',
    description: 'Human body anatomy outline worksheet'
  },
  {
    id: 'anatomy-face',
    category: 'anatomy',
    title: 'Human Face',
    tags: ['anatomy', 'face', 'science', 'education', 'human'],
    svgContent: humanFaceSVG(),
    traceText: 'human face',
    description: 'Human face anatomy labeling worksheet'
  },
  {
    id: 'anatomy-heart',
    category: 'anatomy',
    title: 'Heart Anatomy',
    tags: ['anatomy', 'heart', 'science', 'education', 'biology'],
    svgContent: heartAnatomySVG(),
    traceText: 'heart',
    description: 'Heart anatomy diagram with labels'
  }
);

// Planners
ContentLibrary.push(
  {
    id: 'planner-daily',
    category: 'planners',
    title: 'Daily Planner',
    tags: ['planner', 'schedule', 'daily', 'organizer', 'productivity'],
    svgContent: dailyPlannerSVG(),
    traceText: 'daily planner',
    description: 'Printable daily schedule planner with hourly time slots'
  },
  {
    id: 'planner-weekly',
    category: 'planners',
    title: 'Weekly Planner',
    tags: ['planner', 'schedule', 'weekly', 'organizer', 'productivity'],
    svgContent: weeklyPlannerSVG(),
    traceText: 'weekly planner',
    description: 'Printable weekly planner with day columns'
  },
  {
    id: 'planner-budget',
    category: 'planners',
    title: 'Budget Planner',
    tags: ['planner', 'budget', 'finance', 'money', 'monthly', 'organizer'],
    svgContent: budgetPlannerSVG(),
    traceText: 'budget planner',
    description: 'Monthly budget tracker with income and expense categories'
  }
);

export const CATEGORY_META: Record<Category, { label: string; color: string; description: string }> = {
  alphabet: { label: 'Alphabet', color: '#FFD6E0', description: 'A-Z uppercase & lowercase tracing sheets' },
  numbers: { label: 'Numbers', color: '#FFECD2', description: 'Numbers 1–100 tracing worksheets' },
  math: { label: 'Math', color: '#D4F1F4', description: 'Math symbols and operators' },
  shapes: { label: 'Shapes', color: '#E8D5F5', description: 'Basic geometric shapes' },
  animals: { label: 'Animals', color: '#D5F5E3', description: 'Wild and domestic animal coloring pages' },
  fruits: { label: 'Fruits', color: '#FDE8C8', description: 'Colorful fruit illustrations to color' },
  vegetables: { label: 'Vegetables', color: '#D5EAD9', description: 'Vegetable coloring worksheets' },
  anatomy: { label: 'Anatomy', color: '#F9DDDD', description: 'Basic human anatomy outlines' },
  planners: { label: 'Planners', color: '#E0E8FF', description: 'Daily, weekly & budget planners' },
};
