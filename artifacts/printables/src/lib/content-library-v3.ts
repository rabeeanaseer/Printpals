interface PrintItem {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  tags: string[];
  svgContent: string;
  traceText: string;
  description: string;
}

// ════════════════════ NEW VEGETABLE SVGs ════════════════════

function bellPepperSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="237" y="110" width="26" height="55" rx="10" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M255 138 Q295 118 305 96" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M245 138 Q205 118 195 96" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M160 200 Q150 170 170 158 Q195 152 210 168 Q220 152 240 148 Q260 148 270 162 Q280 148 300 148 Q320 152 330 168 Q345 152 370 158 Q390 170 340 200 Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M160 200 C145 250 145 320 175 370 C205 415 295 415 325 370 C355 320 355 250 340 200" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <line x1="250" y1="200" x2="250" y2="395" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M160 280 Q250 310 340 280" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Bell Pepper</text>
</svg>`;
}

function cucumberSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="255" rx="95" ry="185" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <path d="M250 70 Q268 62 272 50 Q258 45 250 52 Q242 45 228 50 Q232 62 250 70Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M230 80 Q215 72 210 60" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M270 80 Q285 72 290 60" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <line x1="250" y1="100" x2="250" y2="410" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="190" y1="160" x2="310" y2="160" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="165" y1="210" x2="335" y2="210" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="160" y1="260" x2="340" y2="260" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="165" y1="310" x2="335" y2="310" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="185" y1="360" x2="315" y2="360" stroke="#1a1a1a" stroke-width="2"/>
  ${[155,175,195,215,235,255,275,295,315,335].map((y,i) => `<ellipse cx="${i%2===0?220:280}" cy="${y}" rx="7" ry="5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>`).join('')}
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Cucumber</text>
</svg>`;
}

function cauliflowerSVG(): string {
  const bumps = [
    [250,145,42],[200,165,36],[300,165,36],[165,205,32],[250,185,38],[335,205,32],
    [150,248,30],[210,230,34],[290,230,34],[350,248,30],[175,278,28],[325,278,28],
    [250,258,36],[215,268,30],[285,268,30]
  ];
  const bumpStr = bumps.map(([x,y,r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#1a1a1a" stroke-width="3"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${bumpStr}
  <path d="M130 290 Q120 340 145 370 Q185 400 250 405 Q315 400 355 370 Q380 340 370 290 Q290 310 250 308 Q210 310 130 290Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M155 370 Q170 420 165 440" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M345 370 Q330 420 335 440" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 405 Q250 430 250 445" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="485" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Cauliflower</text>
</svg>`;
}

function eggplantSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="237" y="88" width="26" height="60" rx="10" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M250 148 Q210 148 195 155 Q180 165 175 175 L175 165 Q180 148 210 140Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 148 Q290 148 305 155 Q320 165 325 175 L325 165 Q320 148 290 140Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M175 175 Q155 165 155 178 Q155 192 175 185Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M325 175 Q345 165 345 178 Q345 192 325 185Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="310" rx="125" ry="165" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <ellipse cx="250" cy="145" rx="18" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="500" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Eggplant</text>
</svg>`;
}

function mushroomSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M80 265 Q75 140 250 95 Q425 140 420 265Z" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <path d="M80 265 Q120 285 250 280 Q380 285 420 265" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="198" y="265" width="104" height="160" rx="18" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="175" cy="185" rx="28" ry="32" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="155" rx="32" ry="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="325" cy="185" rx="28" ry="32" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M80 265 Q120 295 198 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M420 265 Q380 295 302 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="458" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Mushroom</text>
</svg>`;
}

function garlicSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="280" rx="155" ry="145" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <ellipse cx="195" cy="260" rx="65" ry="95" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="305" cy="260" rx="65" ry="95" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="245" rx="58" ry="90" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M165 200 Q250 195 335 200" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M250 135 Q238 115 238 98 Q245 88 250 92 Q255 88 262 98 Q262 115 250 135Z" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M210 145 Q200 120 205 105" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M290 145 Q300 120 295 105" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="462" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Garlic</text>
</svg>`;
}

function pumpkinSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="240" y="98" width="22" height="55" rx="9" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M255 118 Q292 102 298 82" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M245 118 Q208 102 202 82" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="310" rx="58" ry="155" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="188" cy="318" rx="56" ry="138" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="312" cy="318" rx="56" ry="138" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="132" cy="328" rx="50" ry="115" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <ellipse cx="368" cy="328" rx="50" ry="115" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M100 340 Q250 370 400 340" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="472" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Pumpkin</text>
</svg>`;
}

function radishSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M195 90 Q195 60 220 52 Q230 48 240 55" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M195 90 Q195 65 175 58 Q160 55 158 68" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M215 88 Q210 62 230 52 Q245 48 250 58" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 88 Q252 62 270 52 Q285 48 288 62" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M268 90 Q275 65 295 58 Q310 56 312 70" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="285" rx="145" ry="155" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <path d="M250 440 Q245 465 248 480" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M220 440 Q210 460 215 475" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M280 440 Q290 460 285 475" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="250" cy="165" rx="30" ry="10" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="500" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Radish</text>
</svg>`;
}

function asparagusSVG(): string {
  const stalks = [
    {x:195, h:350, head:25},
    {x:225, h:380, head:28},
    {x:255, h:370, head:26},
    {x:285, h:355, head:24},
    {x:315, h:330, head:22},
  ];
  const stalkSVG = stalks.map(({x,h,head}) => {
    const y2 = 430, y1 = y2-h;
    const scales = [y1+head+10, y1+head+35, y1+head+60, y1+head+85].filter(s=>s<y2-20);
    const scaleStr = scales.map(sy => `<path d="M${x} ${sy} Q${x-14} ${sy-8} ${x-8} ${sy+10}" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M${x} ${sy} Q${x+14} ${sy-8} ${x+8} ${sy+10}" fill="none" stroke="#1a1a1a" stroke-width="2"/>`).join('');
    return `<rect x="${x-9}" y="${y1}" width="18" height="${h}" rx="7" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="${x}" cy="${y1-head/3}" rx="12" ry="${head/2}" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${scaleStr}`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${stalkSVG}
  <rect x="150" y="430" width="200" height="22" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Asparagus</text>
</svg>`;
}

function greenBeansSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M80 200 Q100 170 140 168 Q250 155 360 168 Q400 170 420 200 Q440 232 430 258 Q415 290 370 285 Q260 278 140 285 Q100 288 82 258 Q65 232 80 200Z" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <circle cx="158" cy="228" r="18" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="208" cy="222" r="18" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="258" cy="220" r="18" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="308" cy="222" r="18" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="355" cy="226" r="16" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M80 200 Q65 165 72 155" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M420 200 Q438 165 428 155" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 155 Q248 135 258 120" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="370" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Green Beans</text>
</svg>`;
}

function peasSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M75 215 Q90 155 200 145 Q250 140 300 145 Q410 155 425 215 Q440 270 415 315 Q390 360 305 365 Q250 370 195 365 Q110 360 85 315 Q60 270 75 215Z" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <circle cx="148" cy="255" r="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="218" cy="248" r="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="288" cy="248" r="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="356" cy="255" r="36" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M75 215 Q58 178 65 165" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M425 215 Q442 178 435 165" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 140 Q248 118 260 105 Q258 118 275 110" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="438" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Peas</text>
</svg>`;
}

function zucchiniSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="248" cy="252" rx="90" ry="205" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <path d="M248 47 Q265 38 270 24 Q255 20 248 28 Q241 20 226 24 Q231 38 248 47Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="248" cy="445" rx="42" ry="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M210 100 Q248 92 286 100" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M175 150 Q248 138 321 150" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M162 205 Q248 192 334 205" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M160 258 Q248 245 336 258" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M162 310 Q248 297 334 310" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M175 360 Q248 348 321 360" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M210 405 Q248 395 286 405" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Zucchini</text>
</svg>`;
}

function leekSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="215" y="230" width="70" height="215" rx="12" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <line x1="215" y1="265" x2="285" y2="265" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="295" x2="285" y2="295" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="325" x2="285" y2="325" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="355" x2="285" y2="355" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="215" y1="385" x2="285" y2="385" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M215 230 Q205 200 215 100 Q218 55 230 30" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M250 230 Q250 200 250 120 Q250 70 258 40" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M285 230 Q295 200 285 100 Q282 55 270 30" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M200 230 Q185 200 195 90 Q198 50 212 25" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M300 230 Q315 200 305 90 Q302 50 288 25" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="472" font-family="Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#555">Leek</text>
</svg>`;
}

function celerySVG(): string {
  const stalks = [168,196,224,252,280,308,336];
  const stalkSVG = stalks.map((x,i) => {
    const h = 265 + (i<2 || i>4 ? -30 : 0);
    const y1 = 440-h;
    return `<path d="M${x} 440 Q${x+(i<3?-8:8)} ${y1+h/2} ${x} ${y1}" fill="none" stroke="#1a1a1a" stroke-width="${i===3?'4.5':'3.5'}"/>
  <path d="M${x} ${y1} Q${x+(i<3?-30:30)} ${y1-40} ${x+(i<3?-42:42)} ${y1-25}" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${stalkSVG}
  <path d="M145 440 Q250 450 355 440 Q355 455 250 462 Q145 455 145 440Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Celery</text>
</svg>`;
}

function sweetPotatoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M95 235 Q90 160 155 130 Q210 110 250 115 Q290 110 345 130 Q410 160 405 235 Q415 310 360 360 Q305 400 250 402 Q195 400 140 360 Q85 310 95 235Z" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <path d="M95 235 Q82 220 80 205" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M405 235 Q418 220 420 205" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M160 132 Q145 110 152 90" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M340 132 Q355 110 348 90" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M110 280 Q140 310 120 330" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M390 280 Q360 310 380 330" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M155 375 Q145 400 148 420" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M345 375 Q355 400 352 420" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M250 400 Q248 420 250 435" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="480" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Sweet Potato</text>
</svg>`;
}

// ════════════════════ MASTER TRACING SHEETS ════════════════════

function masterAlphabetTraceSVG(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const cols = 5, cellW = 140, cellH = 148, startY = 78;
  const cells = letters.map((L, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = col * cellW + cellW / 2;
    const cy = startY + row * cellH;
    return `<rect x="${col * cellW}" y="${cy}" width="${cellW}" height="${cellH}" fill="none" stroke="#e8e8e8" stroke-width="1"/>
  <line x1="${col * cellW + 8}" y1="${cy + cellH - 32}" x2="${col * cellW + cellW - 8}" y2="${cy + cellH - 32}" stroke="#d0d0d0" stroke-width="1" stroke-dasharray="4 5"/>
  <text x="${cx}" y="${cy + cellH - 36}" font-family="Arial Black, Arial, sans-serif" font-size="88" font-weight="900" text-anchor="middle" fill="#ececec">${L}</text>
  <text x="${cx}" y="${cy + cellH - 36}" font-family="Arial Black, Arial, sans-serif" font-size="88" font-weight="900" text-anchor="middle" fill="none" stroke="#aaaaaa" stroke-width="2" stroke-dasharray="6 5">${L}</text>
  <text x="${cx}" y="${cy + cellH - 10}" font-family="Arial, sans-serif" font-size="11" text-anchor="middle" fill="#bbb">${L}</text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 970" width="700" height="970">
  <rect width="700" height="970" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="350" y="52" font-family="Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle" fill="#1a1a2e">✏️  Ultimate Alphabet Trace  —  A to Z</text>
  ${cells}
  <text x="350" y="958" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#ccc">printpals.com  •  Free for classroom &amp; home use</text>
</svg>`;
}

function masterNumberTraceSVG(): string {
  const cols = 10, cellW = 88, cellH = 145, startY = 75;
  const cells = Array.from({length: 50}, (_, i) => {
    const n = i + 1;
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = col * cellW + cellW / 2;
    const cy = startY + row * cellH;
    const fs = n >= 10 ? 62 : 78;
    return `<rect x="${col * cellW}" y="${cy}" width="${cellW}" height="${cellH}" fill="none" stroke="#e8e8e8" stroke-width="1"/>
  <line x1="${col * cellW + 5}" y1="${cy + cellH - 30}" x2="${col * cellW + cellW - 5}" y2="${cy + cellH - 30}" stroke="#d0d0d0" stroke-width="1" stroke-dasharray="3 4"/>
  <text x="${cx}" y="${cy + cellH - 34}" font-family="Arial Black, Arial, sans-serif" font-size="${fs}" font-weight="900" text-anchor="middle" fill="#eeeeee">${n}</text>
  <text x="${cx}" y="${cy + cellH - 34}" font-family="Arial Black, Arial, sans-serif" font-size="${fs}" font-weight="900" text-anchor="middle" fill="none" stroke="#aaaaaa" stroke-width="2" stroke-dasharray="5 4">${n}</text>
  <text x="${cx}" y="${cy + cellH - 9}" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#bbb">${n}</text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 825" width="880" height="825">
  <rect width="880" height="825" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="440" y="52" font-family="Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle" fill="#1a1a2e">✏️  Number Master Trace  —  1 to 50</text>
  ${cells}
  <text x="440" y="815" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#ccc">printpals.com  •  Free for classroom &amp; home use</text>
</svg>`;
}

function masterShapeTraceSVG(): string {
  type ShapeDef = { name: string; svg: string };
  const shapes: ShapeDef[] = [
    { name: 'Circle',    svg: `<circle cx="88" cy="95" r="68" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Square',    svg: `<rect x="26" y="33" width="124" height="124" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Triangle',  svg: `<polygon points="88,18 168,155 8,155" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Rectangle', svg: `<rect x="10" y="55" width="156" height="90" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Oval',      svg: `<ellipse cx="88" cy="95" rx="80" ry="52" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Diamond',   svg: `<polygon points="88,14 168,95 88,176 8,95" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Pentagon',  svg: `<polygon points="88,14 166,70 138,158 38,158 10,70" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Hexagon',   svg: `<polygon points="88,10 162,52 162,136 88,178 14,136 14,52" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Star',      svg: `<polygon points="88,8 106,62 164,62 118,98 135,155 88,122 41,155 58,98 12,62 70,62" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Heart',     svg: `<path d="M88 160 C25 118 5 78 5 52 C5 28 22 12 44 12 C62 12 76 22 88 38 C100 22 114 12 132 12 C154 12 171 28 171 52 C171 78 151 118 88 160Z" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Arrow',     svg: `<path d="M8 82 L110 82 L110 42 L168 95 L110 148 L110 108 L8 108 Z" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
    { name: 'Crescent',  svg: `<path d="M88 10 A75 75 0 1 0 88 165 A50 50 0 1 1 88 10Z" fill="none" stroke="#aaa" stroke-width="2.5" stroke-dasharray="7 5"/>` },
  ];
  const cols = 4, cellW = 175, cellH = 255, startY = 75;
  const cells = shapes.map((s, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const ox = col * cellW;
    const oy = startY + row * cellH;
    return `<rect x="${ox}" y="${oy}" width="${cellW}" height="${cellH}" fill="none" stroke="#e8e8e8" stroke-width="1"/>
  <rect x="${ox+5}" y="${oy+5}" width="${s.name.length > 7 ? 165 : 165}" height="${cellH-10}" rx="12" fill="#fafafa" stroke="none"/>
  <g transform="translate(${ox + (cellW-176)/2}, ${oy + 30})">${s.svg}</g>
  <text x="${ox + cellW/2}" y="${oy + cellH - 20}" font-family="Arial, sans-serif" font-size="15" font-weight="700" text-anchor="middle" fill="#555">${s.name}</text>
  <text x="${ox + cellW/2}" y="${oy + cellH - 5}" font-family="Arial, sans-serif" font-size="10" text-anchor="middle" fill="#bbb">trace the outline</text>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 845" width="700" height="845">
  <rect width="700" height="845" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="350" y="52" font-family="Arial, sans-serif" font-size="26" font-weight="800" text-anchor="middle" fill="#1a1a2e">✏️  Shape Master  —  Trace &amp; Learn</text>
  ${cells}
  <text x="350" y="836" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#ccc">printpals.com  •  Free for classroom &amp; home use</text>
</svg>`;
}

// ════════════════════ EXPORT ════════════════════

export const V3Library: PrintItem[] = [
  // ---- Vegetables ----
  { id:'veg-bell-pepper', category:'vegetables', title:'Bell Pepper', subtitle:'Sweet & colorful', tags:['bell pepper','capsicum','pepper','vegetable','colorful'],
    svgContent:bellPepperSVG(), traceText:'BELL PEPPER', description:'A sweet bell-shaped pepper with multiple lobes.' },
  { id:'veg-cucumber', category:'vegetables', title:'Cucumber', subtitle:'Cool & crisp', tags:['cucumber','green','vegetable','salad'],
    svgContent:cucumberSVG(), traceText:'CUCUMBER', description:'A long green cucumber with bumpy skin and fresh tips.' },
  { id:'veg-cauliflower', category:'vegetables', title:'Cauliflower', subtitle:'White florets', tags:['cauliflower','white','vegetable','florets'],
    svgContent:cauliflowerSVG(), traceText:'CAULIFLOWER', description:'A cloud-like head of white florets surrounded by green leaves.' },
  { id:'veg-eggplant', category:'vegetables', title:'Eggplant', subtitle:'Purple & glossy', tags:['eggplant','aubergine','purple','vegetable'],
    svgContent:eggplantSVG(), traceText:'EGGPLANT', description:'A deep purple glossy eggplant with a green star-shaped calyx.' },
  { id:'veg-mushroom', category:'vegetables', title:'Mushroom', subtitle:'Umbrella cap', tags:['mushroom','fungi','umbrella','vegetable'],
    svgContent:mushroomSVG(), traceText:'MUSHROOM', description:'A classic mushroom with wide umbrella cap and cylindrical stem.' },
  { id:'veg-garlic', category:'vegetables', title:'Garlic', subtitle:'Bulb & cloves', tags:['garlic','cloves','bulb','vegetable','herb'],
    svgContent:garlicSVG(), traceText:'GARLIC', description:'A garlic bulb showing cloves wrapped in papery skin.' },
  { id:'veg-pumpkin', category:'vegetables', title:'Pumpkin', subtitle:'Autumn harvest', tags:['pumpkin','autumn','halloween','vegetable','squash'],
    svgContent:pumpkinSVG(), traceText:'PUMPKIN', description:'A round pumpkin with five segments and a curly stem.' },
  { id:'veg-radish', category:'vegetables', title:'Radish', subtitle:'Round & red', tags:['radish','red','root','vegetable'],
    svgContent:radishSVG(), traceText:'RADISH', description:'A bright round radish with leaves and a thin taproot.' },
  { id:'veg-asparagus', category:'vegetables', title:'Asparagus', subtitle:'Fresh spears', tags:['asparagus','spear','green','vegetable'],
    svgContent:asparagusSVG(), traceText:'ASPARAGUS', description:'A bundle of fresh asparagus spears with scaly tips.' },
  { id:'veg-green-beans', category:'vegetables', title:'Green Beans', subtitle:'Pod & seeds', tags:['green beans','string beans','pod','vegetable'],
    svgContent:greenBeansSVG(), traceText:'GREEN BEANS', description:'A curved green bean pod with visible seeds inside.' },
  { id:'veg-peas', category:'vegetables', title:'Peas', subtitle:'Round in a pod', tags:['peas','pod','green','vegetable','round'],
    svgContent:peasSVG(), traceText:'PEAS', description:'A plump pea pod showing four round peas inside.' },
  { id:'veg-zucchini', category:'vegetables', title:'Zucchini', subtitle:'Summer squash', tags:['zucchini','courgette','squash','vegetable','green'],
    svgContent:zucchiniSVG(), traceText:'ZUCCHINI', description:'A long ribbed zucchini with a flower end and short stem.' },
  { id:'veg-leek', category:'vegetables', title:'Leek', subtitle:'White & green', tags:['leek','allium','white','green','vegetable'],
    svgContent:leekSVG(), traceText:'LEEK', description:'A tall leek with white cylindrical base and long flat green leaves.' },
  { id:'veg-celery', category:'vegetables', title:'Celery', subtitle:'Crunchy stalks', tags:['celery','stalk','green','vegetable','crunchy'],
    svgContent:celerySVG(), traceText:'CELERY', description:'A bunch of celery stalks with leafy tops and joined base.' },
  { id:'veg-sweet-potato', category:'vegetables', title:'Sweet Potato', subtitle:'Orange & sweet', tags:['sweet potato','yam','orange','vegetable','root'],
    svgContent:sweetPotatoSVG(), traceText:'SWEET POTATO', description:'A plump sweet potato with root tendrils and bumpy skin.' },
  // ---- Master Tracing Sheets ----
  { id:'master-alphabet-trace', category:'master', title:'Ultimate Alphabet Trace', subtitle:'A–Z all 26 letters', tags:['alphabet','trace','tracing','A-Z','letters','master','dotted'],
    svgContent:masterAlphabetTraceSVG(), traceText:'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    description:'All 26 letters A–Z in dashed outline format on one A4 page — perfect for tracing practice.' },
  { id:'master-number-trace', category:'master', title:'Number Master Trace', subtitle:'1–50 all on one page', tags:['numbers','trace','tracing','1-50','counting','master','dotted'],
    svgContent:masterNumberTraceSVG(), traceText:'1 2 3 4 5 6 7 8 9 10 11 12 ... 50',
    description:'Numbers 1 to 50 in dashed outline format — trace each number to master writing them.' },
  { id:'master-shape-trace', category:'master', title:'Shape Master Trace', subtitle:'12 shapes to trace', tags:['shapes','trace','tracing','geometry','circle','square','master'],
    svgContent:masterShapeTraceSVG(), traceText:'CIRCLE SQUARE TRIANGLE RECTANGLE OVAL DIAMOND PENTAGON HEXAGON STAR HEART ARROW CRESCENT',
    description:'All 12 key geometric shapes in dashed outline format on one A4 page — trace and learn their names.' },
];
