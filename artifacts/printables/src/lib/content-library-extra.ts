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

// ---- FRUIT SVGs ----
function dragrfruitSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="255" rx="140" ry="165" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 90 Q270 75 265 55 Q255 40 250 50 Q245 40 235 55 Q230 75 250 90" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M215 100 Q195 80 188 60 Q205 68 218 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M285 100 Q305 80 312 60 Q295 68 282 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M180 130 Q155 115 148 95 Q165 105 182 118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M320 130 Q345 115 352 95 Q335 105 318 118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M155 180 Q128 170 120 150 Q138 162 158 172" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M345 180 Q372 170 380 150 Q362 162 342 172" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M140 235 Q112 228 108 210 Q125 222 142 228" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M360 235 Q388 228 392 210 Q375 222 358 228" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M145 295 Q118 295 115 278 Q132 285 148 288" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M355 295 Q382 295 385 278 Q368 285 352 288" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="260" rx="55" ry="70" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="220" cy="248" rx="7" ry="9" fill="#1a1a1a"/>
  <ellipse cx="250" cy="240" rx="7" ry="9" fill="#1a1a1a"/>
  <ellipse cx="280" cy="248" rx="7" ry="9" fill="#1a1a1a"/>
  <ellipse cx="232" cy="270" rx="7" ry="9" fill="#1a1a1a"/>
  <ellipse cx="268" cy="270" rx="7" ry="9" fill="#1a1a1a"/>
  <ellipse cx="250" cy="290" rx="7" ry="9" fill="#1a1a1a"/>
  <text x="250" y="460" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Dragonfruit</text>
</svg>`;
}

function pomegrSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="280" r="165" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M230 115 Q225 90 230 70 Q240 58 250 65 Q260 58 270 70 Q275 90 270 115" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M220 68 L215 50 L225 55 L220 68Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M260 68 L265 50 L255 55 L260 68Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M240 65 L238 47 L248 52 L242 65Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 115 Q235 115 225 125 L195 120 L205 138 Q215 145 250 145 Q285 145 295 138 L305 120 L275 125 Q265 115 250 115Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M185 240 Q250 225 315 240 Q250 258 185 240" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M180 280 Q250 265 320 280 Q250 295 180 280" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 225 Q250 265 250 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="215" cy="255" r="8" fill="#1a1a1a"/>
  <circle cx="250" cy="248" r="8" fill="#1a1a1a"/>
  <circle cx="285" cy="255" r="8" fill="#1a1a1a"/>
  <circle cx="225" cy="280" r="8" fill="#1a1a1a"/>
  <circle cx="275" cy="280" r="8" fill="#1a1a1a"/>
  <circle cx="210" cy="305" r="8" fill="#1a1a1a"/>
  <circle cx="250" cy="300" r="8" fill="#1a1a1a"/>
  <circle cx="290" cy="305" r="8" fill="#1a1a1a"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Pomegranate</text>
</svg>`;
}

function lycheeSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="270" r="165" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 105 Q255 85 252 70" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 78 Q268 62 280 68 Q268 80 255 80" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${Array.from({length:12}, (_,i)=>{const a=i*30*Math.PI/180; const cx=250+140*Math.cos(a); const cy=270+140*Math.sin(a); return `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="22" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>`}).join('')}
  ${Array.from({length:8}, (_,i)=>{const a=i*45*Math.PI/180; const cx=250+80*Math.cos(a); const cy=270+80*Math.sin(a); return `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>`}).join('')}
  <circle cx="250" cy="270" r="30" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="485" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Lychee</text>
</svg>`;
}

function figSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 155 Q325 148 370 210 Q410 270 390 345 Q365 425 300 450 Q270 462 250 462 Q230 462 200 450 Q135 425 110 345 Q90 270 130 210 Q175 148 250 155Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 155 Q253 125 252 105" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 112 Q270 95 282 105 Q268 115 255 112" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M248 112 Q230 95 218 105 Q232 115 245 112" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M215 200 Q250 188 285 200 Q285 260 270 305 Q260 340 250 355 Q240 340 230 305 Q215 260 215 200Z" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="230" cy="240" r="5" fill="#1a1a1a"/>
  <circle cx="270" cy="235" r="5" fill="#1a1a1a"/>
  <circle cx="250" cy="255" r="5" fill="#1a1a1a"/>
  <circle cx="235" cy="275" r="5" fill="#1a1a1a"/>
  <circle cx="265" cy="270" r="5" fill="#1a1a1a"/>
  <circle cx="250" cy="295" r="5" fill="#1a1a1a"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Fig</text>
</svg>`;
}

function papayaSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 100 Q300 95 335 150 Q370 210 365 310 Q355 400 310 440 Q280 460 250 462 Q220 460 190 440 Q145 400 135 310 Q130 210 165 150 Q200 95 250 100Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M248 100 Q250 75 252 58" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 62 Q268 48 278 58 Q265 68 253 65" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M248 62 Q232 48 222 58 Q235 68 247 65" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 175 Q255 280 250 385" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="215" cy="240" rx="12" ry="16" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="250" cy="228" rx="12" ry="16" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="285" cy="240" rx="12" ry="16" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="222" cy="278" rx="12" ry="16" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="278" cy="278" rx="12" ry="16" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="250" cy="298" rx="12" ry="16" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Papaya</text>
</svg>`;
}

function apricotSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="280" r="170" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 112 Q250 90 250 72" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 80 Q268 62 280 70 Q266 82 252 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 110 Q235 115 220 110" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 115 Q250 200 250 350" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M205 155 Q222 185 212 215" fill="none" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Apricot</text>
</svg>`;
}

function avocadoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 90 Q305 88 345 150 Q380 215 375 310 Q365 410 305 448 Q275 465 250 465 Q225 465 195 448 Q135 410 125 310 Q120 215 155 150 Q195 88 250 90Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <ellipse cx="250" cy="310" rx="75" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="315" rx="45" ry="58" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="318" r="30" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M248 90 Q250 68 252 52" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 58 Q268 44 280 52 Q266 62 253 59" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Avocado</text>
</svg>`;
}

function coconutSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="270" r="170" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M140 170 Q180 145 220 158" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="6 3"/>
  <path d="M190 148 Q240 130 285 148" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="6 3"/>
  <path d="M272 155 Q310 148 350 168" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="6 3"/>
  <circle cx="222" cy="215" r="14" fill="#1a1a1a"/>
  <circle cx="260" cy="208" r="14" fill="#1a1a1a"/>
  <circle cx="240" cy="240" r="10" fill="#1a1a1a"/>
  <path d="M250 100 Q258 80 268 62 Q282 38 295 25" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M295 25 Q330 20 350 35 Q335 45 310 38 Q298 35 295 42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M252 105 Q238 88 225 72 Q208 48 200 35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M200 35 Q168 28 148 40 Q162 52 188 48" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="482" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Coconut</text>
</svg>`;
}

function guavaSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="278" r="168" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M228 112 Q225 90 230 72 Q240 60 250 65 Q260 60 270 72 Q275 90 272 112" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M220 68 L215 52 L228 58 Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 65 L250 48" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M280 68 L285 52 L272 58 Z" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 115 Q225 112 208 118 Q192 126 195 140 Q215 145 250 145 Q285 145 305 140 Q308 126 292 118 Q275 112 250 115Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="285" r="60" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="220" cy="270" r="6" fill="#1a1a1a"/>
  <circle cx="250" cy="262" r="6" fill="#1a1a1a"/>
  <circle cx="280" cy="270" r="6" fill="#1a1a1a"/>
  <circle cx="235" cy="292" r="6" fill="#1a1a1a"/>
  <circle cx="265" cy="292" r="6" fill="#1a1a1a"/>
  <text x="250" y="488" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Guava</text>
</svg>`;
}

function blackberrySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${[
    [195,180],[250,170],[305,180],[168,210],[222,205],[278,205],[332,210],
    [195,240],[250,232],[305,240],[168,268],[222,262],[278,262],[332,268],
    [195,300],[250,292],[305,300],[222,325],[278,325],[250,350]
  ].map(([cx,cy]) => `<circle cx="${cx}" cy="${cy}" r="26" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="${cx}" cy="${cy}" r="10" fill="none" stroke="#1a1a1a" stroke-width="2"/>`).join('')}
  <path d="M248 170 Q250 138 252 115" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 122 Q268 105 280 115 Q266 126 252 120" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M240 115 Q225 108 215 120 Q228 126 240 120" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="420" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Blackberry</text>
</svg>`;
}

function raspberrySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${[
    [210,190],[255,182],[300,190],
    [185,222],[232,215],[277,215],[322,222],
    [210,255],[255,248],[300,255],
    [232,288],[277,288],[255,320]
  ].map(([cx,cy]) => `<circle cx="${cx}" cy="${cy}" r="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="${cx}" cy="${cy}" r="6" fill="#1a1a1a"/>`).join('')}
  <path d="M248 182 Q250 148 252 122" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 128 Q270 110 284 122 Q268 132 252 126" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M248 128 Q230 110 216 122 Q232 132 248 126" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M240 122 Q235 105 232 90" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M260 122 Q265 105 268 90" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="400" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Raspberry</text>
</svg>`;
}

function plumSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 130 Q330 125 375 195 Q415 265 395 348 Q370 428 305 455 Q275 468 250 468 Q225 468 195 455 Q130 428 105 348 Q85 265 125 195 Q170 125 250 130Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 130 Q250 105 252 88" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 95 Q268 78 280 88 Q265 98 252 93" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 128 Q250 250 250 400" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="192" cy="212" r="22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Plum</text>
</svg>`;
}

function starfruitSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 85 Q268 135 320 148 Q285 178 295 230 Q250 205 205 230 Q215 178 180 148 Q232 135 250 85Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M420 185 Q375 215 372 268 Q335 238 285 252 Q298 205 268 168 Q340 175 420 185Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M388 375 Q335 355 295 382 Q298 330 270 295 Q308 310 340 288 Q368 328 388 375Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M112 375 Q132 328 160 288 Q192 310 230 295 Q202 330 205 382 Q165 355 112 375Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M80 185 Q160 175 232 168 Q202 205 215 252 Q165 238 128 268 Q125 215 80 185Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="228" r="35" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M248 85 Q250 60 252 42" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="430" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Starfruit</text>
</svg>`;
}

function passionfruitSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="270" r="170" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M248 100 Q250 78 252 62" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 68 Q268 52 280 62 Q265 72 252 66" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${Array.from({length:16}, (_,i) => {
    const a = i * 22.5 * Math.PI/180;
    const cx = (250+158*Math.cos(a)).toFixed(0);
    const cy = (270+158*Math.sin(a)).toFixed(0);
    return `<circle cx="${cx}" cy="${cy}" r="10" fill="none" stroke="#1a1a1a" stroke-width="2"/>`;
  }).join('')}
  <circle cx="250" cy="270" r="90" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${Array.from({length:8}, (_,i) => {
    const a = i * 45 * Math.PI/180;
    const x1 = (250+45*Math.cos(a)).toFixed(0);
    const y1 = (270+45*Math.sin(a)).toFixed(0);
    const x2 = (250+85*Math.cos(a)).toFixed(0);
    const y2 = (270+85*Math.sin(a)).toFixed(0);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1a1a1a" stroke-width="2"/>`;
  }).join('')}
  <circle cx="250" cy="270" r="30" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="485" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Passionfruit</text>
</svg>`;
}

function kiwiSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="270" rx="180" ry="175" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <circle cx="250" cy="270" r="145" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="250" cy="270" r="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${Array.from({length:8}, (_,i) => {
    const a = i * 45 * Math.PI/180;
    const x1 = (250+38*Math.cos(a)).toFixed(0); const y1 = (270+38*Math.sin(a)).toFixed(0);
    const x2 = (250+140*Math.cos(a)).toFixed(0); const y2 = (270+140*Math.sin(a)).toFixed(0);
    const mx = (250+90*Math.cos(a+0.2)).toFixed(0); const my = (270+90*Math.sin(a+0.2)).toFixed(0);
    return `<path d="M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}" fill="none" stroke="#1a1a1a" stroke-width="2"/>`;
  }).join('')}
  ${Array.from({length:8}, (_,i) => {
    const a = (i*45+22.5) * Math.PI/180;
    const cx = (250+90*Math.cos(a)).toFixed(0); const cy = (270+90*Math.sin(a)).toFixed(0);
    return `<ellipse cx="${cx}" cy="${cy}" rx="10" ry="14" fill="#1a1a1a" transform="rotate(${i*45+22.5} ${cx} ${cy})"/>`;
  }).join('')}
  <path d="M248 95 Q250 70 252 52" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Kiwi</text>
</svg>`;
}

function peachSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="280" r="172" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 108 Q250 85 252 68" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 74 Q268 56 282 68 Q266 78 252 72" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M248 74 Q232 56 218 68 Q234 78 248 72" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 108 Q250 200 250 420" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M182 168 Q195 198 185 228" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <path d="M178 230 Q190 260 180 290" fill="none" stroke="#1a1a1a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Peach</text>
</svg>`;
}

function blueberrySVG(): string {
  const positions = [
    [200,200],[245,195],[290,200],[175,232],[220,228],[265,225],[310,232],
    [200,262],[245,258],[290,262],[175,295],[220,290],[265,288],[310,295],
    [200,325],[245,320],[290,325],[220,355],[265,355],[245,385]
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${positions.map(([cx,cy]) => `<circle cx="${cx}" cy="${cy}" r="24" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M${cx-6} ${cy-20} L${cx} ${cy-24} L${cx+6} ${cy-20}" fill="none" stroke="#1a1a1a" stroke-width="2"/>`).join('')}
  <path d="M248 195 Q250 160 252 138" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 145 Q268 128 282 138 Q266 148 252 142" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="445" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Blueberry</text>
</svg>`;
}

function persimmonSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="290" r="168" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 122 Q250 100 252 82" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M220 128 Q205 110 190 120 Q208 138 222 130" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M280 128 Q295 110 310 120 Q292 138 278 130" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M235 120 Q228 100 220 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M265 120 Q272 100 280 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 122 L250 138" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M195 122 Q210 115 228 128 Q250 145 272 128 Q290 115 305 122" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 138 Q250 250 250 430" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Persimmon</text>
</svg>`;
}

function limeSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="270" r="175" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 95 Q250 72 252 55" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 62 Q268 45 282 55 Q266 65 252 59" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 95 Q280 170 250 270 Q220 170 250 95" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 95 Q318 178 318 270 Q318 362 250 445" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 95 Q182 178 182 270 Q182 362 250 445" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M75 270 Q162 240 250 270 Q162 300 75 270" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M425 270 Q338 240 250 270 Q338 300 425 270" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Lime</text>
</svg>`;
}

function grapefruitSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="260" r="185" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <circle cx="250" cy="260" r="155" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 75 Q250 260 250 445" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M65 260 Q250 260 435 260" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M118 147 Q250 260 382 373" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M382 147 Q250 260 118 373" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 80 Q250 58 252 42" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 48 Q268 32 280 42 Q265 52 252 46" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Grapefruit</text>
</svg>`;
}

function cantaloupeSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="270" rx="195" ry="175" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 95 Q280 150 250 270 Q220 150 250 95" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 95 Q330 155 345 270 Q330 385 250 445" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 95 Q170 155 155 270 Q170 385 250 445" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M55 270 Q155 240 250 270 Q155 300 55 270" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M445 270 Q345 240 250 270 Q345 300 445 270" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M90 175 Q175 195 250 195 Q175 215 90 175" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M90 365 Q175 345 250 345 Q175 365 90 365" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M248 96 Q250 72 252 55" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Cantaloupe</text>
</svg>`;
}

function honeydewSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="270" rx="200" ry="180" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 90 Q252 65 252 48" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 55 Q268 38 282 48 Q265 58 252 52" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M165 148 Q175 185 168 220" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M162 228 Q172 265 165 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M335 148 Q325 185 332 220" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M338 228 Q328 265 335 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M200 115 Q210 152 202 185" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M300 115 Q290 152 298 185" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Honeydew</text>
</svg>`;
}

function cranberrySVG(): string {
  const pos = [[200,215],[250,205],[300,215],[175,248],[222,242],[278,242],[325,248],
    [200,278],[250,268],[300,278],[222,310],[278,310],[250,340]];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${pos.map(([cx,cy]) => `<circle cx="${cx}" cy="${cy}" r="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <line x1="${cx-8}" y1="${cy-18}" x2="${cx+8}" y2="${cy-18}" stroke="#1a1a1a" stroke-width="2"/>`).join('')}
  <path d="M248 205 Q250 170 252 148" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 155 Q268 138 280 148 Q265 158 252 152" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="410" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Cranberry</text>
</svg>`;
}

function dateSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 130 Q295 125 325 170 Q355 220 345 310 Q330 395 290 425 Q270 438 250 440 Q230 438 210 425 Q170 395 155 310 Q145 220 175 170 Q205 125 250 130Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M248 130 Q250 105 252 88" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 95 Q268 78 280 88 Q264 98 252 92" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M175 230 Q250 220 325 230" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M165 280 Q250 270 335 280" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M172 330 Q250 320 328 330" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M195 380 Q250 372 305 380" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Date</text>
</svg>`;
}

function jackfruitSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="285" rx="170" ry="200" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M248 85 Q250 62 252 45" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 52 Q268 35 282 45 Q265 55 252 49" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${Array.from({length:60}, (_,i) => {
    const row = Math.floor(i/8); const col = i%8;
    const cx = 90 + col*45 + (row%2)*22;
    const cy = 105 + row*42;
    if (cx > 420 || cy > 475) return '';
    return `<polygon points="${cx},${cy-15} ${cx+12},${cy} ${cx},${cy+15} ${cx-12},${cy}" fill="none" stroke="#1a1a1a" stroke-width="2"/>`;
  }).join('')}
  <text x="250" y="497" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Jackfruit</text>
</svg>`;
}

function gooseberrySVG(): string {
  const pos = [[190,240],[250,225],[310,240],[170,275],[230,265],[290,265],[330,275],
    [190,310],[250,298],[310,310],[215,342],[285,342],[250,372]];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  ${pos.map(([cx,cy]) => `<circle cx="${cx}" cy="${cy}" r="24" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M${cx-10} ${cy-20} Q${cx} ${cy-28} ${cx+10} ${cy-20}" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
  <path d="M${cx-10} ${cy+20} Q${cx} ${cy+28} ${cx+10} ${cy+20}" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>`).join('')}
  <path d="M248 225 Q250 188 252 165" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 172 Q268 155 282 165 Q265 175 252 169" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="440" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Gooseberry</text>
</svg>`;
}

function currantSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 80 Q250 120 250 160" stroke="#1a1a1a" stroke-width="4" fill="none"/>
  <path d="M200 100 Q200 148 200 185" stroke="#1a1a1a" stroke-width="3.5" fill="none"/>
  <path d="M300 100 Q300 148 300 185" stroke="#1a1a1a" stroke-width="3.5" fill="none"/>
  <path d="M165 130 Q165 175 165 210" stroke="#1a1a1a" stroke-width="3" fill="none"/>
  <path d="M335 130 Q335 175 335 210" stroke="#1a1a1a" stroke-width="3" fill="none"/>
  <path d="M250 80 Q240 65 232 55" stroke="#1a1a1a" stroke-width="3" fill="none"/>
  <path d="M250 80 Q260 65 268 55" stroke="#1a1a1a" stroke-width="3" fill="none"/>
  ${[[250,220],[200,245],[300,245],[165,268],[335,268],[250,290],[218,315],[282,315],[250,342]].map(([cx,cy]) => 
    `<circle cx="${cx}" cy="${cy}" r="26" fill="none" stroke="#1a1a1a" stroke-width="3"/>`).join('')}
  <text x="250" y="430" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Currant</text>
</svg>`;
}

function elderberrySVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 80 L250 180" stroke="#1a1a1a" stroke-width="5" fill="none"/>
  <path d="M250 140 L180 200" stroke="#1a1a1a" stroke-width="4" fill="none"/>
  <path d="M250 140 L320 200" stroke="#1a1a1a" stroke-width="4" fill="none"/>
  <path d="M250 120 L160 180" stroke="#1a1a1a" stroke-width="3.5" fill="none"/>
  <path d="M250 120 L340 180" stroke="#1a1a1a" stroke-width="3.5" fill="none"/>
  <path d="M250 105 L140 165" stroke="#1a1a1a" stroke-width="3" fill="none"/>
  <path d="M250 105 L360 165" stroke="#1a1a1a" stroke-width="3" fill="none"/>
  <path d="M248 80 Q250 60 252 44" stroke="#1a1a1a" stroke-width="4" fill="none"/>
  <path d="M252 50 Q268 34 282 44 Q265 54 252 48" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${[[250,210],[218,225],[282,225],[185,218],[315,218],[155,195],[345,195],
    [158,245],[200,255],[250,248],[300,255],[342,245]].map(([cx,cy]) =>
    `<circle cx="${cx}" cy="${cy}" r="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>`).join('')}
  <text x="250" y="370" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Elderberry</text>
</svg>`;
}

function mangosteenSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="280" r="170" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M248 110 Q250 88 252 72" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M220 118 Q205 100 195 112 Q212 128 225 120" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M280 118 Q295 100 305 112 Q288 128 275 120" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 110 L250 128" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M190 120 Q215 112 250 128 Q285 112 310 120" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <ellipse cx="222" cy="425" rx="12" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="250" cy="430" rx="12" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="278" cy="425" rx="12" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="236" cy="440" rx="12" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="264" cy="440" rx="12" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Mangosteen</text>
</svg>`;
}

function tamarindSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M100 260 Q110 210 140 185 Q175 162 250 160 Q325 162 360 185 Q390 210 400 260 Q395 315 360 345 Q325 372 250 375 Q175 372 140 345 Q105 315 100 260Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M120 250 Q130 200 145 175" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M138 290 Q148 250 160 225" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M362 290 Q352 250 340 225" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M380 250 Q370 200 355 175" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M178 165 Q205 140 225 118 Q220 138 218 158" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 160 Q255 132 258 110" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M322 165 Q295 140 275 118 Q280 138 282 158" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${[[195,255],[240,248],[285,255],[218,290],[282,290],[250,320]].map(([cx,cy]) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="14" ry="18" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>`).join('')}
  <text x="250" y="432" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Tamarind</text>
</svg>`;
}

function rambutan(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="270" r="140" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M248 130 Q250 105 252 88" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 95 Q268 78 282 88 Q265 98 252 92" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${Array.from({length:20}, (_,i) => {
    const a = i * 18 * Math.PI/180;
    const cx = (250+132*Math.cos(a)).toFixed(0);
    const cy = (270+132*Math.sin(a)).toFixed(0);
    const ex = (250+172*Math.cos(a)).toFixed(0);
    const ey = (270+172*Math.sin(a)).toFixed(0);
    return `<line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="#1a1a1a" stroke-width="3"/>
    <circle cx="${ex}" cy="${ey}" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>`;
  }).join('')}
  <text x="250" y="468" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Rambutan</text>
</svg>`;
}

function longanSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="250" cy="275" r="165" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M248 110 Q250 85 252 68" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M252 75 Q268 58 280 68 Q264 78 252 72" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M180 165 Q200 180 190 200" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <path d="M178 208 Q198 223 188 243" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <path d="M175 250 Q195 265 185 285" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <path d="M320 165 Q300 180 310 200" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <path d="M322 208 Q302 223 312 243" fill="none" stroke="#1a1a1a" stroke-width="2.5" stroke-dasharray="5 3"/>
  <circle cx="250" cy="275" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Longan</text>
</svg>`;
}

function quinceSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 120 Q315 108 360 160 Q405 215 400 295 Q392 375 345 420 Q300 455 250 460 Q200 455 155 420 Q108 375 100 295 Q95 215 140 160 Q185 108 250 120Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M218 120 Q205 100 200 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 120 Q250 95 252 78" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M282 120 Q295 100 300 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M200 80 Q215 68 222 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M300 80 Q285 68 278 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 120 L250 180" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M205 120 Q222 115 240 125 Q258 115 276 120 Q290 115 308 120" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Quince</text>
</svg>`;
}

// ---- ANIMAL SVGs ----
function alligatorSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="240" cy="290" rx="185" ry="72" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M425 290 Q455 278 478 282 Q460 292 445 298 Q478 300 475 308 Q455 310 435 305 Q460 320 455 330 Q432 318 425 308" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="125" cy="248" rx="80" ry="35" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="125" cy="290" rx="75" ry="28" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M55 248 L52 245 L58 245 L55 248Z M68 244 L65 241 L71 241 Z M80 242 L78 238 L83 238 Z M92 241 L90 238 L96 238 Z M104 240 L102 237 L108 237Z M116 240 L114 237 L120 237Z M128 240 L126 237 L132 237Z M140 240 L138 237 L144 237Z M152 240 L150 237 L156 237Z M164 241 L162 238 L168 238Z M176 242 L174 239 L180 239Z M188 243 L186 240 L192 240Z M200 244 L198 241 L204 241Z" fill="#1a1a1a"/>
  <circle cx="80" cy="248" r="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="82" cy="250" r="4" fill="#1a1a1a"/>
  <path d="M150 360 L148 395 M180 365 L178 400 M300 360 L298 395 M330 365 L328 400" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M148 398 L138 408 M178 403 L168 413 M298 398 L288 408 M328 403 L318 413" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M200 280 Q240 268 280 280" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M220 300 Q240 288 260 300" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Alligator</text>
</svg>`;
}

function parrotSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="310" rx="110" ry="130" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="162" r="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M195 135 Q178 108 172 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M220 128 Q210 100 205 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="218" cy="155" rx="16" ry="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="220" cy="157" r="7" fill="#1a1a1a"/>
  <ellipse cx="282" cy="155" rx="16" ry="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="284" cy="157" r="7" fill="#1a1a1a"/>
  <path d="M228 185 Q250 205 272 185" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M228 185 Q232 195 250 198 Q268 195 272 185" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="160" cy="280" rx="22" ry="80" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(-20 160 280)"/>
  <ellipse cx="340" cy="280" rx="22" ry="80" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(20 340 280)"/>
  <path d="M210 420 L195 455 Q185 468 195 470 Q210 472 215 460 L225 445" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M290 420 L305 455 Q315 468 305 470 Q290 472 285 460 L275 445" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M215 458 L215 470 M225 462 L225 474" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M285 458 L285 470 M275 462 L275 474" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Parrot</text>
</svg>`;
}

function flamingoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 550" width="500" height="550">
  <rect width="500" height="550" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="270" rx="100" ry="75" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M210 200 Q225 140 240 100 Q248 70 255 48 Q262 70 268 100 Q278 140 290 200" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="255" cy="42" rx="38" ry="28" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M218 50 Q205 62 200 75 Q215 70 222 58" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <circle cx="238" cy="36" r="7" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="240" cy="38" r="3.5" fill="#1a1a1a"/>
  <path d="M340 220 Q370 215 395 228" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M395 228 Q420 225 435 235" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="190" cy="255" rx="65" ry="45" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(-20 190 255)"/>
  <path d="M240 340 L235 430 L230 520" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M260 340 L265 430 L270 520" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M235 430 Q225 440 215 440 Q200 452 205 460 Q218 458 228 448 Q238 458 248 450" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M265 430 Q275 440 285 440 Q300 452 295 460 Q282 458 272 448 Q262 458 252 450" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="548" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Flamingo</text>
</svg>`;
}

function peacockSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 560" width="500" height="560">
  <rect width="500" height="560" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="360" rx="85" ry="105" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="220" rx="55" ry="70" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="142" r="38" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M238 108 Q232 90 228 72" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 108 Q250 88 250 70" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M262 108 Q268 90 272 72" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="235" cy="78" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="250" cy="76" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="265" cy="78" r="6" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="232" cy="138" r="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="234" cy="140" r="5" fill="#1a1a1a"/>
  <path d="M255 155 Q265 165 270 172" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M255 160 Q258 168 255 175" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${Array.from({length:7}, (_,i) => {
    const a = (i * 30 - 90) * Math.PI/180;
    const r1=138, r2=220;
    const x1=(250+r1*Math.cos(a)).toFixed(0); const y1=(345+r1*Math.sin(a)).toFixed(0);
    const x2=(250+r2*Math.cos(a)).toFixed(0); const y2=(345+r2*Math.sin(a)).toFixed(0);
    return `<path d="M${x1} ${y1} Q${((+x1+(+x2))/2+15*Math.cos(a+1.2)).toFixed(0)} ${((+y1+(+y2))/2+15*Math.sin(a+1.2)).toFixed(0)} ${x2} ${y2}" fill="none" stroke="#1a1a1a" stroke-width="3"/>
    <ellipse cx="${x2}" cy="${y2}" rx="18" ry="24" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
    <circle cx="${x2}" cy="${y2}" r="9" fill="none" stroke="#1a1a1a" stroke-width="2"/>`;
  }).join('')}
  <path d="M232 450 L228 520" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M268 450 L272 520" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="558" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Peacock</text>
</svg>`;
}

function toucanSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="258" cy="320" rx="105" ry="120" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="258" cy="178" r="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M318 178 Q368 170 398 200 Q420 225 405 255 Q388 278 358 268 Q328 255 318 235" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M318 195 Q365 192 388 215 Q405 235 395 255 Q380 268 360 260 Q335 250 325 232" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="240" cy="162" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="242" cy="164" r="7" fill="#1a1a1a"/>
  <path d="M215 420 L208 458" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M300 420 L307 458" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M205 458 L195 470 L215 468 M220 460 L212 472 L228 470" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M305 458 L315 470 L295 468 M290 460 L298 472 L282 470" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Toucan</text>
</svg>`;
}

function eagleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="275" rx="100" ry="120" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="140" r="70" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="225" cy="128" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="227" cy="130" r="6" fill="#1a1a1a"/>
  <path d="M242 158 Q255 172 255 180" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M242 163 Q250 175 248 184" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M155 250 Q100 210 60 235 Q80 262 115 258 Q88 278 98 305 Q128 285 155 278" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M345 250 Q400 210 440 235 Q420 262 385 258 Q412 278 402 305 Q372 285 345 278" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M208 385 L200 425 L192 465" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M292 385 L300 425 L308 465" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M188 462 L178 475 L196 475 M200 466 L192 478 L208 478" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M312 462 L322 475 L304 475 M300 466 L308 478 L292 478" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Eagle</text>
</svg>`;
}

function polarBearSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="360" rx="140" ry="110" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="195" r="98" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="175" cy="120" rx="36" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="325" cy="120" rx="36" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="175" cy="120" rx="22" ry="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="325" cy="120" rx="22" ry="18" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="215" cy="180" r="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="285" cy="180" r="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="217" cy="182" r="7" fill="#1a1a1a"/>
  <circle cx="287" cy="182" r="7" fill="#1a1a1a"/>
  <ellipse cx="250" cy="228" rx="50" ry="38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="218" rx="20" ry="13" fill="#1a1a1a"/>
  <path d="M232 238 Q250 256 268 238" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M122 325 Q88 348 92 388 Q96 408 120 408" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M378 325 Q412 348 408 388 Q404 408 380 408" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M92 408 Q78 415 75 428 Q92 432 110 425 Q120 432 134 428 Q128 415 120 408" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M408 408 Q422 415 425 428 Q408 432 390 425 Q380 432 366 428 Q372 415 380 408" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <rect x="168" y="435" width="48" height="52" rx="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="284" y="435" width="48" height="52" rx="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="20" font-weight="600" text-anchor="middle" fill="#555">Polar Bear</text>
</svg>`;
}

function arcticFoxSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="252" cy="330" rx="135" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="175" cy="198" rx="90" ry="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <polygon points="130,130 110,75 160,118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="215,130 240,75 202,118" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="150" cy="188" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="152" cy="190" r="6" fill="#1a1a1a"/>
  <circle cx="200" cy="188" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="202" cy="190" r="6" fill="#1a1a1a"/>
  <ellipse cx="175" cy="225" rx="38" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="175" cy="215" rx="14" ry="9" fill="#1a1a1a"/>
  <path d="M160 232 Q175 248 190 232" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <line x1="120" y1="222" x2="155" y2="222" stroke="#1a1a1a" stroke-width="1.8"/>
  <line x1="118" y1="230" x2="153" y2="228" stroke="#1a1a1a" stroke-width="1.8"/>
  <line x1="196" y1="222" x2="230" y2="222" stroke="#1a1a1a" stroke-width="1.8"/>
  <line x1="198" y1="228" x2="232" y2="230" stroke="#1a1a1a" stroke-width="1.8"/>
  <path d="M387 310 Q440 285 450 335 Q455 375 435 395" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="440" cy="398" r="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="148" y="400" width="32" height="70" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="195" y="405" width="32" height="70" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="285" y="405" width="32" height="70" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="335" y="400" width="32" height="70" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="20" font-weight="600" text-anchor="middle" fill="#555">Arctic Fox</text>
</svg>`;
}

function sealSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="245" cy="315" rx="165" ry="115" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <ellipse cx="180" cy="195" rx="90" ry="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="155" cy="178" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="157" cy="180" r="6" fill="#1a1a1a"/>
  <ellipse cx="178" cy="222" rx="30" ry="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="178" cy="215" rx="12" ry="8" fill="#1a1a1a"/>
  <path d="M165 230 Q178 242 191 230" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <line x1="125" y1="218" x2="162" y2="220" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="123" y1="226" x2="160" y2="226" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="195" y1="220" x2="232" y2="218" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="197" y1="226" x2="234" y2="226" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M95 320 Q62 308 58 340 Q65 368 95 368" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M395 320 Q428 308 432 340 Q425 368 395 368" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M300 400 Q330 415 360 408 Q375 440 350 445 Q325 445 310 425 Q290 448 268 445 Q255 438 270 418" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Seal</text>
</svg>`;
}

function whaleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M80 280 Q130 220 250 210 Q375 202 430 250 Q460 278 450 320 Q435 358 390 365 Q340 372 250 365 Q160 358 115 338 Q78 318 80 280Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M450 280 Q475 268 490 280 Q485 295 470 305 Q490 308 488 320 Q472 318 458 312 Q475 328 468 338 Q452 325 448 310" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 210 Q265 170 285 148 Q305 170 310 210" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M175 212 Q185 190 200 175" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <circle cx="135" cy="262" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="137" cy="264" r="7" fill="#1a1a1a"/>
  <path d="M115 305 Q95 315 80 310" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="115" cy="308" rx="22" ry="8" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M138 345 Q155 380 180 392 Q205 405 250 408" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M250 365 Q260 340 250 365" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Whale</text>
</svg>`;
}

function dolphinSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M80 275 Q150 225 280 215 Q370 210 420 255 Q445 280 435 318 Q420 350 360 358 Q280 365 200 345 Q138 328 100 305 Q78 290 80 275Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M420 255 Q450 235 465 248 Q455 268 440 275" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M280 215 Q295 175 320 155 Q335 178 330 215" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="112" cy="268" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="114" cy="270" r="6" fill="#1a1a1a"/>
  <path d="M95 288 Q82 295 75 290" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M130 350 Q155 382 200 390 Q170 385 160 360" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="108" cy="292" rx="18" ry="7" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Dolphin</text>
</svg>`;
}

function octopusSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="195" rx="120" ry="105" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="215" cy="180" r="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="217" cy="182" r="9" fill="#1a1a1a"/>
  <circle cx="285" cy="180" r="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="287" cy="182" r="9" fill="#1a1a1a"/>
  <path d="M228 218 Q250 235 272 218" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M148 275 Q125 330 118 400 Q128 410 138 405 Q145 340 155 290" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M188 290 Q178 350 182 420 Q192 428 202 420 Q200 355 205 300" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M228 295 Q230 365 240 435 Q250 442 260 435 Q268 365 270 295" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M312 290 Q320 350 318 420 Q308 428 298 420 Q298 355 294 300" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M352 275 Q374 330 382 400 Q372 410 362 405 Q354 340 345 290" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M168 282 Q138 325 125 380 Q138 390 148 382 Q158 332 175 295" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M332 282 Q362 325 374 380 Q362 390 352 382 Q342 332 325 295" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  ${[118,130,143,158,175,128,143,158].map((y,i) => {
    const x = [115,119,121,120,117,127,131,136][i];
    return `<circle cx="${x}" cy="${y}" r="4" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>`;
  }).join('')}
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Octopus</text>
</svg>`;
}

function crabSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="280" rx="130" ry="100" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M200 195 Q160 158 120 140 Q108 160 125 175 Q142 190 162 205" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="105" cy="135" rx="38" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M300 195 Q340 158 380 140 Q392 160 375 175 Q358 190 338 205" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="395" cy="135" rx="38" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  ${[-1,-0.5,0,0.5,1].map((offset,i) => {
    const side = i < 2.5 ? -1 : 1;
    return `<path d="M${250+side*130} ${255+offset*25} Q${250+side*172} ${248+offset*25} ${250+side*200} ${245+offset*25}" fill="none" stroke="#1a1a1a" stroke-width="3"/>`;
  }).join('')}
  <path d="M145 215 L128 245 M170 205 L155 238 M330 215 L347 245 M360 205 L372 238" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="210" cy="252" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="212" cy="254" r="7" fill="#1a1a1a"/>
  <circle cx="290" cy="252" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="292" cy="254" r="7" fill="#1a1a1a"/>
  <path d="M228 295 Q250 312 272 295" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M190 360 L185 390 M220 368 L215 400 M280 368 L285 400 M310 360 L315 390" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Crab</text>
</svg>`;
}

function turtleSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="275" rx="155" ry="130" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M250 145 Q298 140 310 165 Q295 175 250 175 Q205 175 190 165 Q202 140 250 145Z" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 145 Q252 115 255 95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="256" cy="88" rx="28" ry="20" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="244" cy="83" r="7" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="246" cy="85" r="3.5" fill="#1a1a1a"/>
  <path d="M272 100 Q285 108 292 118" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M105 240 Q80 230 68 250 Q75 268 95 270" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M395 240 Q420 230 432 250 Q425 268 405 270" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M140 380 Q120 400 112 425 Q128 428 142 415 Q152 428 165 420 Q162 400 155 380" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M360 380 Q380 400 388 425 Q372 428 358 415 Q348 428 335 420 Q338 400 345 380" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 175 Q280 195 300 235" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M250 175 Q220 195 200 235" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M150 220 Q180 240 200 275" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M350 220 Q320 240 300 275" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M200 275 Q225 290 250 295 Q275 290 300 275" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M160 310 Q180 328 200 340 Q225 350 250 352 Q275 350 300 340" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Turtle</text>
</svg>`;
}

function lizardSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M115 260 Q165 228 230 218 Q295 210 345 228 Q385 242 408 268 Q420 288 415 315 Q408 340 385 352 Q355 365 315 358 Q280 350 250 358 Q218 365 185 355 Q152 342 135 315 Q118 290 115 260Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M415 295 Q448 280 468 295 Q455 310 440 308" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M440 308 Q458 320 462 340 Q448 338 435 328" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M435 328 Q445 345 442 362 Q430 352 420 340" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="195" cy="238" rx="70" ry="52" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <circle cx="170" cy="228" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="172" cy="230" r="6" fill="#1a1a1a"/>
  <path d="M155 252 Q155 265 148 272" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M148 272 L138 280 M148 272 L148 282" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M160 378 L155 415 M185 385 L180 422 M305 385 L308 422 M330 380 L333 415" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M155 418 L148 430 L162 428 M180 425 L173 438 L187 436" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M205 290 Q250 278 295 290" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Lizard</text>
</svg>`;
}

function rhinoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="255" cy="318" rx="170" ry="118" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <ellipse cx="130" cy="258" rx="105" ry="85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M60 258 L38 242 Q28 250 32 262 L60 270" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M52 252 Q42 230 52 218 Q62 218 60 232" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="100" cy="220" rx="22" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="92" cy="248" r="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="94" cy="250" r="5" fill="#1a1a1a"/>
  <circle cx="115" cy="232" r="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="130" cy="230" r="8" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M155 380 L150 440 M195 390 L190 450 M295 390 L300 450 M340 380 L345 440" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M415 300 Q448 285 455 310 Q450 335 425 335" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M255 200 Q262 180 268 162 Q275 180 270 200" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Rhinoceros</text>
</svg>`;
}

function hippoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="330" rx="172" ry="120" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <ellipse cx="162" cy="238" rx="115" ry="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="105" cy="198" rx="40" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="180" cy="188" rx="38" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="100" cy="225" rx="15" ry="10" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="118" cy="228" rx="15" ry="10" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="138" cy="215" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="140" cy="217" r="7" fill="#1a1a1a"/>
  <ellipse cx="102" cy="198" rx="10" ry="7" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="116" cy="196" rx="10" ry="7" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M68 265 L62 305" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M60 285 Q48 295 45 308 Q58 312 65 302" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M155 410 L148 468 M195 420 L190 475 M298 420 L305 475 M340 410 L348 468" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M415 305 Q448 295 452 320 Q448 345 415 345" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Hippopotamus</text>
</svg>`;
}

function cheetahSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="258" cy="320" rx="148" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  ${[[200,285],[240,270],[285,278],[310,295],[230,310],[265,320],[295,335],[210,345]].map(([cx,cy]) =>
    `<circle cx="${cx}" cy="${cy}" r="9" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>`).join('')}
  <ellipse cx="158" cy="210" rx="85" ry="80" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <polygon points="108,145 92,108 128,130" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="205,145 225,108 198,130" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="132" cy="195" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="134" cy="197" r="6" fill="#1a1a1a"/>
  <circle cx="185" cy="195" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="187" cy="197" r="6" fill="#1a1a1a"/>
  <path d="M130 228 Q158 242 186 228" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M112 218 Q125 210 140 220" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M205 218 Q192 210 177 220" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M390 300 Q438 275 448 318 Q455 355 430 368" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <rect x="140" y="393" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="188" y="398" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="285" y="398" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="335" y="393" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Cheetah</text>
</svg>`;
}

function wolfSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="255" cy="328" rx="142" ry="100" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="162" cy="205" rx="88" ry="85" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <polygon points="112,142 92,95 148,128" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="210,142 235,95 202,128" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="133" cy="193" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="135" cy="195" r="6" fill="#1a1a1a"/>
  <circle cx="190" cy="193" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="192" cy="195" r="6" fill="#1a1a1a"/>
  <ellipse cx="162" cy="238" rx="42" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="162" cy="226" rx="15" ry="10" fill="#1a1a1a"/>
  <path d="M148 245 Q162 260 176 245" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <line x1="108" y1="232" x2="145" y2="232" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="106" y1="240" x2="143" y2="238" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="180" y1="232" x2="215" y2="232" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="182" y1="238" x2="218" y2="240" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M390 305 Q435 280 445 322 Q450 358 428 372" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <rect x="145" y="397" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="192" y="402" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="285" y="402" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="335" y="397" width="32" height="72" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="495" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Wolf</text>
</svg>`;
}

function foxSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="252" cy="320" rx="130" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="178" cy="205" rx="80" ry="75" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <polygon points="120,142 96,88 155,125" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="232,140 258,86 220,122" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="148" cy="192" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="150" cy="194" r="6" fill="#1a1a1a"/>
  <circle cx="205" cy="192" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="207" cy="194" r="6" fill="#1a1a1a"/>
  <ellipse cx="178" cy="240" rx="42" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="178" cy="228" rx="14" ry="9" fill="#1a1a1a"/>
  <path d="M165 248 Q178 262 191 248" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <line x1="120" y1="235" x2="155" y2="236" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="118" y1="243" x2="153" y2="241" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="202" y1="236" x2="237" y2="235" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="204" y1="241" x2="239" y2="243" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M382 295 Q430 268 440 308 Q445 345 422 360" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="432" cy="363" r="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="142" y="390" width="28" height="68" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="185" y="395" width="28" height="68" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="278" y="395" width="28" height="68" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="325" y="390" width="28" height="68" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Fox</text>
</svg>`;
}

function deerSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="258" cy="318" rx="138" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M178 248 L192 148 L228 148 L225 250" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="210" cy="128" rx="58" ry="42" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="188" cy="118" r="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="190" cy="120" r="5" fill="#1a1a1a"/>
  <ellipse cx="160" cy="112" rx="15" ry="24" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M225 88 L220 65 L230 75 L235 52 L242 68 L248 48" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M248 48 L255 65 L262 50 L266 68 L272 58 L275 78 L265 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M225 88 Q235 95 248 95 Q258 95 265 88" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="210" cy="155" rx="32" ry="22" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="210" cy="146" rx="12" ry="8" fill="#1a1a1a"/>
  <path d="M200 162 Q210 172 220 162" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M395 295 Q428 278 438 315 Q440 350 418 365" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <rect x="155" y="390" width="26" height="80" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="195" y="395" width="26" height="80" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="288" y="395" width="26" height="80" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="330" y="390" width="26" height="80" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Deer</text>
</svg>`;
}

function kangarooSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 520" width="500" height="520">
  <rect width="500" height="520" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="238" cy="298" rx="112" ry="135" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M215 175 L225 95 L265 95 L258 180" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="240" cy="80" rx="52" ry="40" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <polygon points="218,48 205,15 228,35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="262,48 278,15 255,35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="222" cy="68" r="11" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="224" cy="70" r="5" fill="#1a1a1a"/>
  <path d="M232 98 Q240 110 248 98" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M130 260 Q95 245 88 290 Q90 325 118 325" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M340 288 Q380 265 405 300 Q418 328 400 352 Q380 372 355 365" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M355 370 Q370 400 368 435 Q358 442 350 432 Q348 405 340 382" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M200 410 L198 475 Q198 495 215 495 Q232 495 232 475 L230 412" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M258 410 L260 475 Q260 495 248 495 Q235 495 235 475 L232 412" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M232 475 Q210 490 200 510" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M232 475 Q260 490 272 510" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M200 510 L188 514 M210 512 L200 516" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="515" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Kangaroo</text>
</svg>`;
}

function koalaSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="345" rx="118" ry="108" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="195" r="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="165" cy="128" rx="52" ry="45" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="335" cy="128" rx="52" ry="45" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="165" cy="128" rx="38" ry="32" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="335" cy="128" rx="38" ry="32" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <circle cx="215" cy="178" r="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="217" cy="180" r="7" fill="#1a1a1a"/>
  <circle cx="285" cy="178" r="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="287" cy="180" r="7" fill="#1a1a1a"/>
  <ellipse cx="250" cy="228" rx="42" ry="35" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <ellipse cx="250" cy="218" rx="26" ry="18" fill="#1a1a1a"/>
  <path d="M232 240 Q250 255 268 240" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M122 305 Q88 330 92 370 Q96 395 122 395" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M378 305 Q412 330 408 370 Q404 395 378 395" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M92 398 Q78 408 75 422 Q92 425 110 418 Q120 425 132 422 Q128 408 122 398" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M408 398 Q422 408 425 422 Q408 425 390 418 Q380 425 368 422 Q372 408 378 398" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <rect x="175" y="422" width="45" height="48" rx="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="280" y="422" width="45" height="48" rx="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Koala</text>
</svg>`;
}

function pandaSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="355" rx="128" ry="108" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="192" r="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="175" cy="122" r="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="325" cy="122" r="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="210" cy="175" rx="30" ry="28" fill="#1a1a1a"/>
  <ellipse cx="290" cy="175" rx="30" ry="28" fill="#1a1a1a"/>
  <circle cx="210" cy="175" r="14" fill="none" stroke="white" stroke-width="2.5"/>
  <circle cx="290" cy="175" r="14" fill="none" stroke="white" stroke-width="2.5"/>
  <circle cx="212" cy="177" r="8" fill="white"/>
  <circle cx="292" cy="177" r="8" fill="white"/>
  <ellipse cx="250" cy="228" rx="45" ry="36" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="218" rx="20" ry="13" fill="#1a1a1a"/>
  <path d="M232 238 Q250 255 268 238" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M122 312 Q88 338 92 378 Q96 400 122 400" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M378 312 Q412 338 408 378 Q404 400 378 400" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <rect x="170" y="430" width="50" height="52" rx="16" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <rect x="280" y="430" width="50" height="52" rx="16" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Panda</text>
</svg>`;
}

function gorillaSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="340" rx="140" ry="120" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="175" rx="108" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="170" cy="120" rx="40" ry="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="330" cy="120" rx="40" ry="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="215" cy="158" rx="20" ry="17" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="217" cy="160" r="9" fill="#1a1a1a"/>
  <ellipse cx="285" cy="158" rx="20" ry="17" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="287" cy="160" r="9" fill="#1a1a1a"/>
  <path d="M208 105 Q250 95 292 105" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="215" rx="58" ry="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="204" rx="24" ry="16" fill="#1a1a1a"/>
  <path d="M228 228 Q250 246 272 228" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M112 275 Q68 305 60 365 Q65 398 95 398 Q108 395 115 380" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <ellipse cx="88" cy="402" rx="32" ry="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M388 275 Q432 305 440 365 Q435 398 405 398 Q392 395 385 380" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <ellipse cx="412" cy="402" rx="32" ry="18" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="175" y="430" width="48" height="55" rx="15" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <rect x="277" y="430" width="48" height="55" rx="15" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Gorilla</text>
</svg>`;
}

function hedgehogSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="320" rx="160" ry="105" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="135" cy="260" rx="80" ry="65" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="100" cy="248" r="10" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="102" cy="250" r="5" fill="#1a1a1a"/>
  <ellipse cx="128" cy="288" rx="28" ry="20" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="128" cy="280" rx="11" ry="7" fill="#1a1a1a"/>
  <path d="M118 295 Q128 305 138 295" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  ${Array.from({length:24}, (_,i) => {
    const a = (i * 15 - 45) * Math.PI/180;
    const r1 = 105; const r2 = 130;
    const x1 = (250+r1*Math.cos(a)).toFixed(0); const y1 = (320+r1*Math.sin(a)).toFixed(0);
    const x2 = (250+r2*Math.cos(a)).toFixed(0); const y2 = (320+r2*Math.sin(a)).toFixed(0);
    if (+x1 < 185 && +y1 < 290) return '';
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1a1a1a" stroke-width="2"/>`;
  }).join('')}
  <path d="M170 395 L162 440 M210 408 L205 452 M290 408 L295 452 M330 395 L338 440" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Hedgehog</text>
</svg>`;
}

function squirrelSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="230" cy="328" rx="105" ry="112" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="205" cy="188" r="78" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <polygon points="170,128 155,82 192,115" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="238,125 258,78 232,112" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="180" cy="175" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="182" cy="177" r="6" fill="#1a1a1a"/>
  <circle cx="228" cy="175" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="230" cy="177" r="6" fill="#1a1a1a"/>
  <ellipse cx="205" cy="218" rx="35" ry="26" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="205" cy="210" rx="13" ry="8" fill="#1a1a1a"/>
  <path d="M192 226 Q205 238 218 226" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M340 230 Q365 185 385 155 Q410 125 395 105 Q375 92 350 118 Q320 148 315 188 Q310 225 320 255 Q328 275 335 290" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M320 255 Q350 248 380 255" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M130 292 Q98 318 102 358 Q106 385 128 388" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <rect x="165" y="410" width="28" height="65" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="205" y="415" width="28" height="65" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="265" y="415" width="28" height="65" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="308" y="410" width="28" height="65" rx="8" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Squirrel</text>
</svg>`;
}

function raccoonSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="338" rx="122" ry="105" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="190" r="90" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="178" cy="122" rx="32" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="322" cy="122" rx="32" ry="28" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="205" cy="175" rx="35" ry="30" fill="#1a1a1a"/>
  <ellipse cx="295" cy="175" rx="35" ry="30" fill="#1a1a1a"/>
  <circle cx="205" cy="175" r="14" fill="none" stroke="white" stroke-width="2.5"/>
  <circle cx="295" cy="175" r="14" fill="none" stroke="white" stroke-width="2.5"/>
  <circle cx="207" cy="177" r="7" fill="white"/>
  <circle cx="297" cy="177" r="7" fill="white"/>
  <path d="M228 108 Q250 98 272 108" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="228" rx="42" ry="32" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="218" rx="17" ry="11" fill="#1a1a1a"/>
  <path d="M235 236 Q250 250 265 236" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <line x1="195" y1="225" x2="230" y2="226" stroke="#1a1a1a" stroke-width="1.8"/>
  <line x1="193" y1="232" x2="228" y2="231" stroke="#1a1a1a" stroke-width="1.8"/>
  <line x1="272" y1="226" x2="305" y2="225" stroke="#1a1a1a" stroke-width="1.8"/>
  <line x1="274" y1="231" x2="307" y2="232" stroke="#1a1a1a" stroke-width="1.8"/>
  <path d="M380 308 Q420 280 430 318 Q435 352 415 368" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M380 310 Q388 320 390 335 Q392 348 388 358" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M395 318 Q400 330 398 344 Q396 356 392 365" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <rect x="162" y="408" width="32" height="68" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="205" y="413" width="32" height="68" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="263" y="413" width="32" height="68" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="308" y="408" width="32" height="68" rx="9" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Raccoon</text>
</svg>`;
}

function batSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M250 240 Q170 210 100 228 Q55 240 38 278 Q55 295 85 282 Q115 268 140 278 Q105 305 115 340 Q138 328 152 305 Q165 288 175 295 Q195 320 210 310 Q222 300 230 282" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M250 240 Q330 210 400 228 Q445 240 462 278 Q445 295 415 282 Q385 268 360 278 Q395 305 385 340 Q362 328 348 305 Q335 288 325 295 Q305 320 290 310 Q278 300 270 282" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="252" rx="42" ry="48" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="228" cy="232" rx="12" ry="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="230" cy="234" r="6" fill="#1a1a1a"/>
  <ellipse cx="272" cy="232" rx="12" ry="15" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="274" cy="234" r="6" fill="#1a1a1a"/>
  <polygon points="238,218 230,200 245,212" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <polygon points="262,218 270,200 255,212" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M240 268 Q250 278 260 268" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M238 275 Q245 285 256 282" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M240 285 L232 315 M260 285 L268 315" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Bat</text>
</svg>`;
}

function narwhalSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M85 272 Q135 232 250 222 Q360 215 415 258 Q440 278 432 315 Q420 348 368 358 Q288 365 205 348 Q145 332 108 305 Q82 288 85 272Z" fill="none" stroke="#1a1a1a" stroke-width="5"/>
  <path d="M85 272 Q62 258 38 248 Q28 232 42 218 Q56 208 72 220 Q58 234 85 245" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M42 218 L250 88" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="118" cy="260" r="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="120" cy="262" r="6" fill="#1a1a1a"/>
  <path d="M250 222 Q260 182 275 160" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M380 238 Q405 218 418 228 Q408 245 395 248" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M145 355 Q162 388 205 398 Q172 390 160 362" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M200 275 Q225 262 250 270" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Narwhal</text>
</svg>`;
}

function jellyfishSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M100 240 Q108 130 250 118 Q392 130 400 240 Q380 248 360 240 Q340 232 320 240 Q300 248 280 240 Q260 232 240 240 Q220 248 200 240 Q180 232 160 240 Q140 248 120 240 Q110 248 100 240Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M250 118 Q250 95 250 78" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="188" cy="188" r="28" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="312" cy="188" r="28" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="250" cy="175" r="22" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  ${[[120,255],[155,260],[190,260],[225,260],[250,265],[275,265],[310,260],[345,260],[380,255]].map(([x,y],i) => {
    const amp = i%2===0 ? 60 : 80;
    return `<path d="M${x} ${y} Q${x-10} ${y+amp*0.6} ${x-5} ${y+amp}" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>`;
  }).join('')}
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Jellyfish</text>
</svg>`;
}

function lobsterSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="295" rx="80" ry="115" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="175" rx="65" ry="75" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="218" cy="148" rx="15" ry="10" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="218" cy="148" r="6" fill="#1a1a1a"/>
  <ellipse cx="282" cy="148" rx="15" ry="10" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="282" cy="148" r="6" fill="#1a1a1a"/>
  <path d="M210 112 Q205 90 200 72" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M230 108 Q228 85 226 65" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M270 108 Q272 85 274 65" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M290 112 Q295 90 300 72" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M178 210 Q140 195 115 205 Q105 218 112 232 Q125 242 148 238 Q162 232 175 240" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="105" cy="218" rx="28" ry="20" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M322 210 Q360 195 385 205 Q395 218 388 232 Q375 242 352 238 Q338 232 325 240" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="395" cy="218" rx="28" ry="20" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M175 280 L148 305 M180 295 L155 318 M178 310 L152 332" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M325 280 L352 305 M320 295 L345 318 M322 310 L348 332" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M215 400 L205 435 M235 405 L228 440 M265 405 L272 440 M285 400 L295 435" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Lobster</text>
</svg>`;
}

function starfishSVG(): string {
  const cx = 250, cy = 255, R = 175, r = 68;
  const pts = Array.from({length:10}, (_,i) => {
    const a = (i*36 - 90) * Math.PI/180;
    const rad = i%2===0 ? R : r;
    return `${(cx+rad*Math.cos(a)).toFixed(1)},${(cy+rad*Math.sin(a)).toFixed(1)}`;
  }).join(' ');
  const suckers = Array.from({length:5}, (_,i) =>
    Array.from({length:4}, (_,j) => {
      const a = (i*72 - 54 + j*9) * Math.PI/180;
      const rad = 88 + j*22;
      return `<circle cx="${(cx+rad*Math.cos(a)).toFixed(1)}" cy="${(cy+rad*Math.sin(a)).toFixed(1)}" r="5" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>`;
    }).join('')
  ).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <polygon points="${pts}" fill="none" stroke="#1a1a1a" stroke-width="4.5"/>
  <circle cx="${cx}" cy="${cy}" r="42" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  ${suckers}
  <text x="250" y="490" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Starfish</text>
</svg>`;
}

function hamsterSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="338" rx="128" ry="112" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="250" cy="190" r="98" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="163" cy="148" rx="42" ry="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="337" cy="148" rx="42" ry="35" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="163" cy="148" rx="28" ry="22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="337" cy="148" rx="28" ry="22" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <ellipse cx="195" cy="138" rx="55" ry="42" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <ellipse cx="305" cy="138" rx="55" ry="42" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <circle cx="215" cy="178" r="16" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="217" cy="180" r="8" fill="#1a1a1a"/>
  <circle cx="285" cy="178" r="16" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="287" cy="180" r="8" fill="#1a1a1a"/>
  <ellipse cx="250" cy="228" rx="38" ry="30" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="218" rx="15" ry="10" fill="#1a1a1a"/>
  <path d="M235 236 Q250 250 265 236" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <line x1="195" y1="222" x2="232" y2="223" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="193" y1="230" x2="230" y2="229" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="270" y1="223" x2="305" y2="222" stroke="#1a1a1a" stroke-width="2"/>
  <line x1="272" y1="229" x2="307" y2="230" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M122 302 Q88 328 92 368 Q96 392 120 392" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M378 302 Q412 328 408 368 Q404 392 380 392" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <rect x="175" y="418" width="42" height="48" rx="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="283" y="418" width="42" height="48" rx="13" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="494" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Hamster</text>
</svg>`;
}

function slothSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <rect x="200" y="68" width="100" height="22" rx="5" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M205 90 Q175 125 165 180" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M295 90 Q325 125 335 180" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="168" cy="192" rx="18" ry="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="332" cy="192" rx="18" ry="22" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M155 210 Q135 240 130 280 Q128 310 140 325" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M345 210 Q365 240 370 280 Q372 310 360 325" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="300" rx="118" ry="95" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="188" rx="80" ry="82" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <circle cx="218" cy="178" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="220" cy="180" r="7" fill="#1a1a1a"/>
  <circle cx="282" cy="178" r="14" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="284" cy="180" r="7" fill="#1a1a1a"/>
  <ellipse cx="250" cy="215" rx="32" ry="25" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M238 222 Q250 232 262 222" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M200 110 Q210 88 208 68 L220 75 L208 85" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M300 110 Q290 88 292 68 L280 75 L292 85" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M252 68 Q252 52 252 38" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M185 380 Q168 415 162 448 M215 390 L210 432 M285 390 L290 432 M315 380 Q332 415 338 448" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M160 448 L148 460 M168 450 L158 462" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M340 448 L352 460 M332 450 L342 462" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Sloth</text>
</svg>`;
}

function chameleonSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M95 320 Q145 280 220 268 Q295 258 358 278 Q405 295 422 330 Q435 358 415 385 Q392 410 352 418 Q310 425 268 418 Q228 412 200 418 Q165 425 138 412 Q108 395 95 360 Q88 340 95 320Z" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="170" cy="255" rx="80" ry="58" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M110 252 Q82 242 68 258 Q68 275 88 278" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M88 265 Q72 272 68 285 Q80 292 95 288" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <circle cx="128" cy="248" r="15" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <circle cx="130" cy="250" r="8" fill="#1a1a1a"/>
  <path d="M422 330 Q455 310 472 332 Q460 350 442 348" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M442 350 Q462 368 458 388 Q442 382 432 368" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M432 370 Q445 390 438 408 Q422 400 418 386" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M165 325 L152 362 M198 320 L188 358 M320 318 L328 355 M348 322 L358 360" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M150 362 L140 375 L158 373 M188 358 L178 372 L196 370" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <path d="M200 280 Q225 268 252 272" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <path d="M160 298 Q180 288 200 292" fill="none" stroke="#1a1a1a" stroke-width="2"/>
  <text x="250" y="492" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Chameleon</text>
</svg>`;
}

function pelikanSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <ellipse cx="250" cy="320" rx="115" ry="125" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <ellipse cx="250" cy="175" rx="75" ry="72" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M220 140 Q188 120 170 95 Q185 88 200 100 Q212 112 225 130" fill="none" stroke="#1a1a1a" stroke-width="4"/>
  <path d="M170 95 Q165 60 175 42 Q192 48 195 72 Q195 82 188 95" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M175 42 Q192 30 205 38 Q208 55 200 70" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <path d="M170 95 Q145 110 142 132" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M220 140 Q215 148 218 162 Q225 170 238 168" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="238" cy="155" r="12" fill="none" stroke="#1a1a1a" stroke-width="3"/>
  <circle cx="240" cy="157" r="6" fill="#1a1a1a"/>
  <ellipse cx="162" cy="280" rx="25" ry="85" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(-18 162 280)"/>
  <ellipse cx="338" cy="280" rx="25" ry="85" fill="none" stroke="#1a1a1a" stroke-width="3" transform="rotate(18 338 280)"/>
  <path d="M218 435 L210 465 M240 442 L235 472 M260 442 L265 472 M282 435 L290 465" fill="none" stroke="#1a1a1a" stroke-width="3.5"/>
  <path d="M208 465 L195 475 L218 475 M235 472 L224 482 L245 482" fill="none" stroke="#1a1a1a" stroke-width="2.5"/>
  <text x="250" y="498" font-family="Arial, sans-serif" font-size="22" font-weight="600" text-anchor="middle" fill="#555">Pelican</text>
</svg>`;
}

// ---- MATH FRACTIONS ----
function fractionSVG(num: number, den: number): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="500" height="500" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="250" y="240" font-family="Georgia, serif" font-size="180" font-weight="bold"
    text-anchor="middle" fill="none" stroke="#1a1a1a" stroke-width="4">${num}</text>
  <line x1="120" y1="270" x2="380" y2="270" stroke="#1a1a1a" stroke-width="6"/>
  <text x="250" y="420" font-family="Georgia, serif" font-size="180" font-weight="bold"
    text-anchor="middle" fill="none" stroke="#1a1a1a" stroke-width="4">${den}</text>
  <text x="250" y="478" font-family="Arial, sans-serif" font-size="22" font-weight="600"
    text-anchor="middle" fill="#555">${num}/${den} Fraction</text>
</svg>`;
}

// ---- MASTER SHEETS ----
function fruitAlphabetSheetSVG(): string {
  const pairs: [string, string][] = [
    ['A', 'Apple'], ['B', 'Banana'], ['C', 'Coconut'], ['D', 'Date'], ['E', 'Elderberry'],
    ['F', 'Fig'], ['G', 'Grape'], ['H', 'Honeydew'], ['I', 'Jackfruit (I)'], ['J', 'Jackfruit'],
    ['K', 'Kiwi'], ['L', 'Lemon'], ['M', 'Mango'], ['N', 'Nectarine'], ['O', 'Orange'],
    ['P', 'Peach'], ['Q', 'Quince'], ['R', 'Raspberry'], ['S', 'Strawberry'], ['T', 'Tamarind'],
    ['U', 'Ugli Fruit'], ['V', 'Vanilla'], ['W', 'Watermelon'], ['X', 'Ximenia'], ['Y', 'Yuzu'], ['Z', 'Zucchini']
  ];
  const cols = 6; const rows = 5;
  const cw = 155; const rh = 118;
  const startX = 15; const startY = 90;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 700" width="960" height="700">
  <rect width="960" height="700" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="480" y="50" font-family="Arial, sans-serif" font-size="32" font-weight="bold" text-anchor="middle" fill="#1a1a1a">Fruit Alphabet A–Z</text>
  <text x="480" y="72" font-family="Arial, sans-serif" font-size="15" text-anchor="middle" fill="#888">Color and trace each fruit letter!</text>
  ${pairs.map(([letter, fruit], i) => {
    const col = i % cols; const row = Math.floor(i / cols);
    const x = startX + col * cw; const y = startY + row * rh;
    return `<rect x="${x}" y="${y}" width="${cw-8}" height="${rh-8}" rx="8" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="${x+22}" y="${y+42}" font-family="Georgia,serif" font-size="48" font-weight="bold" fill="none" stroke="#1a1a1a" stroke-width="2">${letter}</text>
    <text x="${x+68}" y="${y+30}" font-family="Arial,sans-serif" font-size="12" fill="#555">${fruit}</text>
    <rect x="${x+12}" y="${y+52}" width="${cw-32}" height="42" rx="4" fill="none" stroke="#ccc" stroke-width="1"/>
    <text x="${x+(cw-8)/2}" y="${y+78}" font-family="Georgia,serif" font-size="11" fill="#aaa" text-anchor="middle">draw here</text>`;
  }).join('')}
  </svg>`;
}

function animalsMegaGridSVG(): string {
  const animals = [
    'Lion','Elephant','Tiger','Giraffe','Zebra','Cat',
    'Dog','Rabbit','Bear','Monkey','Penguin','Fish',
    'Butterfly','Snake','Horse','Cow','Pig','Owl',
    'Frog','Duck','Alligator','Parrot','Flamingo','Kangaroo'
  ];
  const cols = 6; const cw = 148; const rh = 118;
  const startX = 18; const startY = 85;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 680" width="920" height="680">
  <rect width="920" height="680" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="460" y="48" font-family="Arial, sans-serif" font-size="30" font-weight="bold" text-anchor="middle" fill="#1a1a1a">100 Animals Mega-Grid — Color Them All!</text>
  <text x="460" y="70" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#888">24 animals to color — check each one off as you go!</text>
  ${animals.map((name, i) => {
    const col = i % cols; const row = Math.floor(i / cols);
    const x = startX + col * cw; const y = startY + row * rh;
    const emoji = ['🦁','🐘','🐯','🦒','🦓','🐱','🐶','🐰','🐻','🐵','🐧','🐟','🦋','🐍','🐴','🐄','🐷','🦉','🐸','🦆','🐊','🦜','🦩','🦘'][i];
    return `<rect x="${x}" y="${y}" width="${cw-10}" height="${rh-10}" rx="8" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="${x+(cw-10)/2}" y="${y+48}" font-family="Arial,sans-serif" font-size="36" text-anchor="middle">${emoji}</text>
    <text x="${x+(cw-10)/2}" y="${y+75}" font-family="Arial,sans-serif" font-size="13" font-weight="600" text-anchor="middle" fill="#333">${name}</text>
    <rect x="${x+10}" y="${y+82}" width="18" height="18" rx="3" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="${x+32}" y="${y+96}" font-family="Arial,sans-serif" font-size="11" fill="#888">done!</text>`;
  }).join('')}
  </svg>`;
}

function mathReferenceSheetSVG(): string {
  const symbols = [
    ['+','Plus'],['−','Minus'],['×','Times'],['÷','Divide'],['=','Equals'],['≠','Not Equal'],
    ['<','Less Than'],['>','Greater Than'],['≤','Less or Equal'],['≥','Greater or Equal'],
    ['%','Percent'],['∞','Infinity'],['√','Square Root'],['π','Pi'],
    ['½','One Half'],['¼','One Quarter'],['¾','Three Quarters'],['²','Squared'],
  ];
  const cols = 6; const cw = 148; const rh = 90;
  const startX = 18; const startY = 85;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 560" width="920" height="560">
  <rect width="920" height="560" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="460" y="46" font-family="Arial, sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="#1a1a1a">Complete Math Reference Sheet</text>
  <text x="460" y="68" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#888">All the symbols you need — trace and color!</text>
  ${symbols.map(([sym, name], i) => {
    const col = i % cols; const row = Math.floor(i / cols);
    const x = startX + col * cw; const y = startY + row * rh;
    return `<rect x="${x}" y="${y}" width="${cw-10}" height="${rh-8}" rx="8" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="${x+(cw-10)/2}" y="${y+52}" font-family="Georgia,serif" font-size="44" font-weight="bold" fill="none" stroke="#1a1a1a" stroke-width="3" text-anchor="middle" paint-order="stroke fill">${sym}</text>
    <text x="${x+(cw-10)/2}" y="${y+76}" font-family="Arial,sans-serif" font-size="12" fill="#555" text-anchor="middle">${name}</text>`;
  }).join('')}
  <text x="460" y="548" font-family="Arial, sans-serif" font-size="13" text-anchor="middle" fill="#aaa">Numbers 1–100 available as individual tracing sheets</text>
  </svg>`;
}

function alphabetObjectsSheetSVG(): string {
  const pairs: [string, string][] = [
    ['A','Apple'],['B','Ball'],['C','Cat'],['D','Dog'],['E','Elephant'],['F','Fish'],
    ['G','Grapes'],['H','Hat'],['I','Ice Cream'],['J','Jar'],['K','Kite'],['L','Lion'],
    ['M','Moon'],['N','Nest'],['O','Orange'],['P','Penguin'],['Q','Queen'],['R','Rabbit'],
    ['S','Star'],['T','Turtle'],['U','Umbrella'],['V','Vase'],['W','Whale'],['X','Xylophone'],['Y','Yo-Yo'],['Z','Zebra']
  ];
  const cols = 6; const cw = 152; const rh = 112;
  const startX = 15; const startY = 88;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 940 680" width="940" height="680">
  <rect width="940" height="680" fill="white" stroke="#1a1a1a" stroke-width="3"/>
  <text x="470" y="48" font-family="Arial, sans-serif" font-size="30" font-weight="bold" text-anchor="middle" fill="#1a1a1a">A–Z Alphabet with Objects</text>
  <text x="470" y="70" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#888">Trace the letters and draw the matching picture!</text>
  ${pairs.map(([letter, obj], i) => {
    const col = i % cols; const row = Math.floor(i / cols);
    const x = startX + col * cw; const y = startY + row * rh;
    return `<rect x="${x}" y="${y}" width="${cw-10}" height="${rh-8}" rx="8" fill="none" stroke="#1a1a1a" stroke-width="1.5"/>
    <text x="${x+18}" y="${y+50}" font-family="Georgia,serif" font-size="52" font-weight="bold" fill="none" stroke="#1a1a1a" stroke-width="2.5">${letter}</text>
    <text x="${x+65}" y="${y+28}" font-family="Arial,sans-serif" font-size="13" fill="#555" font-weight="600">${obj}</text>
    <rect x="${x+62}" y="${y+38}" width="${cw-82}" height="58" rx="4" fill="none" stroke="#ddd" stroke-width="1"/>
    <text x="${x+62+(cw-82)/2}" y="${y+72}" font-family="Arial,sans-serif" font-size="10" fill="#ccc" text-anchor="middle">draw ${obj}</text>`;
  }).join('')}
  </svg>`;
}

// ---- BUILD EXPORT LIBRARY ----
export const ExtraLibrary: PrintItem[] = [
  // Extra Fruits
  { id:'fruit-dragonfruit', category:'fruits', title:'Dragonfruit', subtitle:'Exotic', tags:['dragonfruit','exotic','tropical','pink'],
    svgContent:dragrfruitSVG(), traceText:'DRAGONFRUIT',
    description:'Dragonfruit coloring and tracing worksheet for kids' },
  { id:'fruit-pomegranate', category:'fruits', title:'Pomegranate', subtitle:'Ruby fruit', tags:['pomegranate','ruby','seeds'],
    svgContent:pomegrSVG(), traceText:'POMEGRANATE',
    description:'Pomegranate coloring and tracing worksheet for kids' },
  { id:'fruit-lychee', category:'fruits', title:'Lychee', subtitle:'Sweet & fragrant', tags:['lychee','tropical','sweet'],
    svgContent:lycheeSVG(), traceText:'LYCHEE',
    description:'Lychee coloring and tracing worksheet for kids' },
  { id:'fruit-fig', category:'fruits', title:'Fig', subtitle:'Ancient fruit', tags:['fig','ancient','sweet'],
    svgContent:figSVG(), traceText:'FIG',
    description:'Fig coloring and tracing worksheet for kids' },
  { id:'fruit-papaya', category:'fruits', title:'Papaya', subtitle:'Tropical', tags:['papaya','tropical','orange'],
    svgContent:papayaSVG(), traceText:'PAPAYA',
    description:'Papaya coloring and tracing worksheet for kids' },
  { id:'fruit-apricot', category:'fruits', title:'Apricot', subtitle:'Stone fruit', tags:['apricot','stone fruit','orange'],
    svgContent:apricotSVG(), traceText:'APRICOT',
    description:'Apricot coloring and tracing worksheet for kids' },
  { id:'fruit-avocado', category:'fruits', title:'Avocado', subtitle:'Creamy green', tags:['avocado','green','healthy'],
    svgContent:avocadoSVG(), traceText:'AVOCADO',
    description:'Avocado coloring and tracing worksheet for kids' },
  { id:'fruit-coconut', category:'fruits', title:'Coconut', subtitle:'Tropical nut', tags:['coconut','tropical','nut','palm'],
    svgContent:coconutSVG(), traceText:'COCONUT',
    description:'Coconut coloring and tracing worksheet for kids' },
  { id:'fruit-guava', category:'fruits', title:'Guava', subtitle:'Tropical fruit', tags:['guava','tropical','pink'],
    svgContent:guavaSVG(), traceText:'GUAVA',
    description:'Guava coloring and tracing worksheet for kids' },
  { id:'fruit-blackberry', category:'fruits', title:'Blackberry', subtitle:'Wild berry', tags:['blackberry','berry','wild'],
    svgContent:blackberrySVG(), traceText:'BLACKBERRY',
    description:'Blackberry coloring and tracing worksheet for kids' },
  { id:'fruit-raspberry', category:'fruits', title:'Raspberry', subtitle:'Red berry', tags:['raspberry','berry','red'],
    svgContent:raspberrySVG(), traceText:'RASPBERRY',
    description:'Raspberry coloring and tracing worksheet for kids' },
  { id:'fruit-plum', category:'fruits', title:'Plum', subtitle:'Stone fruit', tags:['plum','purple','stone fruit'],
    svgContent:plumSVG(), traceText:'PLUM',
    description:'Plum coloring and tracing worksheet for kids' },
  { id:'fruit-starfruit', category:'fruits', title:'Starfruit', subtitle:'Star-shaped', tags:['starfruit','star','tropical','carambola'],
    svgContent:starfruitSVG(), traceText:'STARFRUIT',
    description:'Starfruit coloring and tracing worksheet for kids' },
  { id:'fruit-passionfruit', category:'fruits', title:'Passionfruit', subtitle:'Tropical passion', tags:['passionfruit','tropical','passion'],
    svgContent:passionfruitSVG(), traceText:'PASSIONFRUIT',
    description:'Passionfruit coloring and tracing worksheet for kids' },
  { id:'fruit-kiwi', category:'fruits', title:'Kiwi', subtitle:'Fuzzy brown', tags:['kiwi','kiwifruit','green','fuzzy'],
    svgContent:kiwiSVG(), traceText:'KIWI',
    description:'Kiwi coloring and tracing worksheet for kids' },
  { id:'fruit-peach', category:'fruits', title:'Peach', subtitle:'Fuzzy & sweet', tags:['peach','fuzzy','sweet','stone fruit'],
    svgContent:peachSVG(), traceText:'PEACH',
    description:'Peach coloring and tracing worksheet for kids' },
  { id:'fruit-blueberry', category:'fruits', title:'Blueberry', subtitle:'Tiny & sweet', tags:['blueberry','berry','tiny','blue'],
    svgContent:blueberrySVG(), traceText:'BLUEBERRY',
    description:'Blueberry coloring and tracing worksheet for kids' },
  { id:'fruit-persimmon', category:'fruits', title:'Persimmon', subtitle:'Autumn fruit', tags:['persimmon','orange','autumn'],
    svgContent:persimmonSVG(), traceText:'PERSIMMON',
    description:'Persimmon coloring and tracing worksheet for kids' },
  { id:'fruit-lime', category:'fruits', title:'Lime', subtitle:'Citrus green', tags:['lime','citrus','green','sour'],
    svgContent:limeSVG(), traceText:'LIME',
    description:'Lime coloring and tracing worksheet for kids' },
  { id:'fruit-grapefruit', category:'fruits', title:'Grapefruit', subtitle:'Citrus', tags:['grapefruit','citrus','bitter','pink'],
    svgContent:grapefruitSVG(), traceText:'GRAPEFRUIT',
    description:'Grapefruit coloring and tracing worksheet for kids' },
  { id:'fruit-cantaloupe', category:'fruits', title:'Cantaloupe', subtitle:'Sweet melon', tags:['cantaloupe','melon','orange','sweet'],
    svgContent:cantaloupeSVG(), traceText:'CANTALOUPE',
    description:'Cantaloupe coloring and tracing worksheet for kids' },
  { id:'fruit-honeydew', category:'fruits', title:'Honeydew', subtitle:'Sweet melon', tags:['honeydew','melon','green','sweet'],
    svgContent:honeydewSVG(), traceText:'HONEYDEW',
    description:'Honeydew coloring and tracing worksheet for kids' },
  { id:'fruit-cranberry', category:'fruits', title:'Cranberry', subtitle:'Tart berry', tags:['cranberry','berry','tart','red'],
    svgContent:cranberrySVG(), traceText:'CRANBERRY',
    description:'Cranberry coloring and tracing worksheet for kids' },
  { id:'fruit-date', category:'fruits', title:'Date', subtitle:'Desert fruit', tags:['date','palm','sweet','desert'],
    svgContent:dateSVG(), traceText:'DATE',
    description:'Date fruit coloring and tracing worksheet for kids' },
  { id:'fruit-jackfruit', category:'fruits', title:'Jackfruit', subtitle:'Largest fruit', tags:['jackfruit','tropical','large'],
    svgContent:jackfruitSVG(), traceText:'JACKFRUIT',
    description:'Jackfruit coloring and tracing worksheet for kids' },
  { id:'fruit-gooseberry', category:'fruits', title:'Gooseberry', subtitle:'Tart berry', tags:['gooseberry','berry','tart'],
    svgContent:gooseberrySVG(), traceText:'GOOSEBERRY',
    description:'Gooseberry coloring and tracing worksheet for kids' },
  { id:'fruit-currant', category:'fruits', title:'Currant', subtitle:'Tiny berry clusters', tags:['currant','berry','cluster'],
    svgContent:currantSVG(), traceText:'CURRANT',
    description:'Currant coloring and tracing worksheet for kids' },
  { id:'fruit-elderberry', category:'fruits', title:'Elderberry', subtitle:'Dark berry', tags:['elderberry','berry','dark','medicinal'],
    svgContent:elderberrySVG(), traceText:'ELDERBERRY',
    description:'Elderberry coloring and tracing worksheet for kids' },
  { id:'fruit-mangosteen', category:'fruits', title:'Mangosteen', subtitle:'Queen of fruits', tags:['mangosteen','tropical','purple','exotic'],
    svgContent:mangosteenSVG(), traceText:'MANGOSTEEN',
    description:'Mangosteen coloring and tracing worksheet for kids' },
  { id:'fruit-tamarind', category:'fruits', title:'Tamarind', subtitle:'Sweet & sour', tags:['tamarind','sour','tropical','pod'],
    svgContent:tamarindSVG(), traceText:'TAMARIND',
    description:'Tamarind coloring and tracing worksheet for kids' },
  { id:'fruit-rambutan', category:'fruits', title:'Rambutan', subtitle:'Hairy fruit', tags:['rambutan','hairy','tropical','exotic'],
    svgContent:rambutan(), traceText:'RAMBUTAN',
    description:'Rambutan coloring and tracing worksheet for kids' },
  { id:'fruit-longan', category:'fruits', title:'Longan', subtitle:'Dragon eye fruit', tags:['longan','dragon eye','tropical'],
    svgContent:longanSVG(), traceText:'LONGAN',
    description:'Longan coloring and tracing worksheet for kids' },
  { id:'fruit-quince', category:'fruits', title:'Quince', subtitle:'Ancient fruit', tags:['quince','ancient','golden','pear'],
    svgContent:quinceSVG(), traceText:'QUINCE',
    description:'Quince coloring and tracing worksheet for kids' },

  // Extra Animals
  { id:'animal-alligator', category:'animals', title:'Alligator', subtitle:'Reptile', tags:['alligator','reptile','scales','green'],
    svgContent:alligatorSVG(), traceText:'ALLIGATOR',
    description:'Alligator coloring and tracing worksheet for kids' },
  { id:'animal-parrot', category:'animals', title:'Parrot', subtitle:'Colorful bird', tags:['parrot','bird','colorful','tropical'],
    svgContent:parrotSVG(), traceText:'PARROT',
    description:'Parrot coloring and tracing worksheet for kids' },
  { id:'animal-flamingo', category:'animals', title:'Flamingo', subtitle:'Pink bird', tags:['flamingo','bird','pink','tall'],
    svgContent:flamingoSVG(), traceText:'FLAMINGO',
    description:'Flamingo coloring and tracing worksheet for kids' },
  { id:'animal-peacock', category:'animals', title:'Peacock', subtitle:'Magnificent bird', tags:['peacock','bird','feathers','colorful'],
    svgContent:peacockSVG(), traceText:'PEACOCK',
    description:'Peacock coloring and tracing worksheet for kids' },
  { id:'animal-toucan', category:'animals', title:'Toucan', subtitle:'Big beak bird', tags:['toucan','bird','beak','tropical'],
    svgContent:toucanSVG(), traceText:'TOUCAN',
    description:'Toucan coloring and tracing worksheet for kids' },
  { id:'animal-eagle', category:'animals', title:'Eagle', subtitle:'Majestic raptor', tags:['eagle','bird','raptor','national'],
    svgContent:eagleSVG(), traceText:'EAGLE',
    description:'Eagle coloring and tracing worksheet for kids' },
  { id:'animal-polar-bear', category:'animals', title:'Polar Bear', subtitle:'Arctic giant', tags:['polar bear','arctic','white','bear'],
    svgContent:polarBearSVG(), traceText:'POLAR BEAR',
    description:'Polar Bear coloring and tracing worksheet for kids' },
  { id:'animal-arctic-fox', category:'animals', title:'Arctic Fox', subtitle:'Winter fox', tags:['arctic fox','fox','white','arctic'],
    svgContent:arcticFoxSVG(), traceText:'ARCTIC FOX',
    description:'Arctic Fox coloring and tracing worksheet for kids' },
  { id:'animal-seal', category:'animals', title:'Seal', subtitle:'Ocean mammal', tags:['seal','ocean','marine','arctic'],
    svgContent:sealSVG(), traceText:'SEAL',
    description:'Seal coloring and tracing worksheet for kids' },
  { id:'animal-whale', category:'animals', title:'Whale', subtitle:'Ocean giant', tags:['whale','ocean','giant','marine'],
    svgContent:whaleSVG(), traceText:'WHALE',
    description:'Whale coloring and tracing worksheet for kids' },
  { id:'animal-dolphin', category:'animals', title:'Dolphin', subtitle:'Playful ocean mammal', tags:['dolphin','ocean','playful','marine'],
    svgContent:dolphinSVG(), traceText:'DOLPHIN',
    description:'Dolphin coloring and tracing worksheet for kids' },
  { id:'animal-octopus', category:'animals', title:'Octopus', subtitle:'Eight arms', tags:['octopus','ocean','eight arms','marine'],
    svgContent:octopusSVG(), traceText:'OCTOPUS',
    description:'Octopus coloring and tracing worksheet for kids' },
  { id:'animal-crab', category:'animals', title:'Crab', subtitle:'Pincher creature', tags:['crab','ocean','pinchers','shell'],
    svgContent:crabSVG(), traceText:'CRAB',
    description:'Crab coloring and tracing worksheet for kids' },
  { id:'animal-turtle', category:'animals', title:'Turtle', subtitle:'Shell carrier', tags:['turtle','shell','slow','reptile'],
    svgContent:turtleSVG(), traceText:'TURTLE',
    description:'Turtle coloring and tracing worksheet for kids' },
  { id:'animal-lizard', category:'animals', title:'Lizard', subtitle:'Scaly reptile', tags:['lizard','reptile','scaly','tail'],
    svgContent:lizardSVG(), traceText:'LIZARD',
    description:'Lizard coloring and tracing worksheet for kids' },
  { id:'animal-rhino', category:'animals', title:'Rhinoceros', subtitle:'Armored giant', tags:['rhino','rhinoceros','horn','big'],
    svgContent:rhinoSVG(), traceText:'RHINOCEROS',
    description:'Rhinoceros coloring and tracing worksheet for kids' },
  { id:'animal-hippo', category:'animals', title:'Hippopotamus', subtitle:'River horse', tags:['hippo','hippopotamus','river','large'],
    svgContent:hippoSVG(), traceText:'HIPPOPOTAMUS',
    description:'Hippopotamus coloring and tracing worksheet for kids' },
  { id:'animal-cheetah', category:'animals', title:'Cheetah', subtitle:'Fastest animal', tags:['cheetah','fast','spots','africa'],
    svgContent:cheetahSVG(), traceText:'CHEETAH',
    description:'Cheetah coloring and tracing worksheet for kids' },
  { id:'animal-wolf', category:'animals', title:'Wolf', subtitle:'Pack hunter', tags:['wolf','pack','howl','forest'],
    svgContent:wolfSVG(), traceText:'WOLF',
    description:'Wolf coloring and tracing worksheet for kids' },
  { id:'animal-fox', category:'animals', title:'Fox', subtitle:'Clever creature', tags:['fox','clever','red','forest'],
    svgContent:foxSVG(), traceText:'FOX',
    description:'Fox coloring and tracing worksheet for kids' },
  { id:'animal-deer', category:'animals', title:'Deer', subtitle:'Antlered beauty', tags:['deer','antlers','forest','graceful'],
    svgContent:deerSVG(), traceText:'DEER',
    description:'Deer coloring and tracing worksheet for kids' },
  { id:'animal-kangaroo', category:'animals', title:'Kangaroo', subtitle:'Australian jumper', tags:['kangaroo','australia','jump','pouch'],
    svgContent:kangarooSVG(), traceText:'KANGAROO',
    description:'Kangaroo coloring and tracing worksheet for kids' },
  { id:'animal-koala', category:'animals', title:'Koala', subtitle:'Australian bear', tags:['koala','australia','eucalyptus','bear'],
    svgContent:koalaSVG(), traceText:'KOALA',
    description:'Koala coloring and tracing worksheet for kids' },
  { id:'animal-panda', category:'animals', title:'Panda', subtitle:'Bamboo bear', tags:['panda','bamboo','china','black white'],
    svgContent:pandaSVG(), traceText:'PANDA',
    description:'Panda coloring and tracing worksheet for kids' },
  { id:'animal-gorilla', category:'animals', title:'Gorilla', subtitle:'Mighty ape', tags:['gorilla','ape','jungle','africa'],
    svgContent:gorillaSVG(), traceText:'GORILLA',
    description:'Gorilla coloring and tracing worksheet for kids' },
  { id:'animal-hedgehog', category:'animals', title:'Hedgehog', subtitle:'Spiky little friend', tags:['hedgehog','spiky','nocturnal','cute'],
    svgContent:hedgehogSVG(), traceText:'HEDGEHOG',
    description:'Hedgehog coloring and tracing worksheet for kids' },
  { id:'animal-squirrel', category:'animals', title:'Squirrel', subtitle:'Nut collector', tags:['squirrel','nuts','fluffy tail','tree'],
    svgContent:squirrelSVG(), traceText:'SQUIRREL',
    description:'Squirrel coloring and tracing worksheet for kids' },
  { id:'animal-raccoon', category:'animals', title:'Raccoon', subtitle:'Masked bandit', tags:['raccoon','mask','nocturnal','clever'],
    svgContent:raccoonSVG(), traceText:'RACCOON',
    description:'Raccoon coloring and tracing worksheet for kids' },
  { id:'animal-bat', category:'animals', title:'Bat', subtitle:'Night flyer', tags:['bat','nocturnal','night','wings'],
    svgContent:batSVG(), traceText:'BAT',
    description:'Bat coloring and tracing worksheet for kids' },
  { id:'animal-narwhal', category:'animals', title:'Narwhal', subtitle:'Ocean unicorn', tags:['narwhal','unicorn','ocean','horn'],
    svgContent:narwhalSVG(), traceText:'NARWHAL',
    description:'Narwhal coloring and tracing worksheet for kids' },
  { id:'animal-jellyfish', category:'animals', title:'Jellyfish', subtitle:'Transparent ocean drifter', tags:['jellyfish','ocean','transparent','stinger'],
    svgContent:jellyfishSVG(), traceText:'JELLYFISH',
    description:'Jellyfish coloring and tracing worksheet for kids' },
  { id:'animal-lobster', category:'animals', title:'Lobster', subtitle:'Ocean crustacean', tags:['lobster','ocean','claws','crustacean'],
    svgContent:lobsterSVG(), traceText:'LOBSTER',
    description:'Lobster coloring and tracing worksheet for kids' },
  { id:'animal-starfish', category:'animals', title:'Starfish', subtitle:'Sea star', tags:['starfish','sea star','ocean','five arms'],
    svgContent:starfishSVG(), traceText:'STARFISH',
    description:'Starfish coloring and tracing worksheet for kids' },
  { id:'animal-hamster', category:'animals', title:'Hamster', subtitle:'Tiny cheek pouches', tags:['hamster','cheeks','small','pet'],
    svgContent:hamsterSVG(), traceText:'HAMSTER',
    description:'Hamster coloring and tracing worksheet for kids' },
  { id:'animal-sloth', category:'animals', title:'Sloth', subtitle:'Slow mover', tags:['sloth','slow','jungle','claws'],
    svgContent:slothSVG(), traceText:'SLOTH',
    description:'Sloth coloring and tracing worksheet for kids' },
  { id:'animal-chameleon', category:'animals', title:'Chameleon', subtitle:'Color changer', tags:['chameleon','lizard','color change','reptile'],
    svgContent:chameleonSVG(), traceText:'CHAMELEON',
    description:'Chameleon coloring and tracing worksheet for kids' },
  { id:'animal-pelican', category:'animals', title:'Pelican', subtitle:'Pouch-billed bird', tags:['pelican','bird','pouch','ocean'],
    svgContent:pelikanSVG(), traceText:'PELICAN',
    description:'Pelican coloring and tracing worksheet for kids' },

  // Math Fractions
  { id:'math-half', category:'math', title:'One Half (½)', subtitle:'1/2 fraction', tags:['fraction','half','1/2','math'],
    svgContent:fractionSVG(1,2), traceText:'ONE HALF',
    description:'One Half fraction tracing and coloring worksheet' },
  { id:'math-quarter', category:'math', title:'One Quarter (¼)', subtitle:'1/4 fraction', tags:['fraction','quarter','1/4','math'],
    svgContent:fractionSVG(1,4), traceText:'ONE QUARTER',
    description:'One Quarter fraction tracing and coloring worksheet' },
  { id:'math-third', category:'math', title:'One Third (⅓)', subtitle:'1/3 fraction', tags:['fraction','third','1/3','math'],
    svgContent:fractionSVG(1,3), traceText:'ONE THIRD',
    description:'One Third fraction tracing and coloring worksheet' },
  { id:'math-three-quarters', category:'math', title:'Three Quarters (¾)', subtitle:'3/4 fraction', tags:['fraction','three quarters','3/4','math'],
    svgContent:fractionSVG(3,4), traceText:'THREE QUARTERS',
    description:'Three Quarters fraction tracing and coloring worksheet' },

  // Master Sheets
  { id:'master-fruit-alphabet', category:'master', title:'Fruit Alphabet A–Z', subtitle:'All 26 fruits', tags:['fruit','alphabet','a-z','master','mega'],
    svgContent:fruitAlphabetSheetSVG(), traceText:'FRUIT ALPHABET',
    description:'Complete A–Z fruit alphabet master sheet — one fruit per letter with drawing space' },
  { id:'master-animals-grid', category:'master', title:'100 Animals Mega-Grid', subtitle:'24 animals to color', tags:['animals','grid','mega','master','color all'],
    svgContent:animalsMegaGridSVG(), traceText:'ANIMALS GRID',
    description:'Mega grid of 24 animals to color — tick them off as you go!' },
  { id:'master-math-reference', category:'master', title:'Complete Math Reference', subtitle:'All symbols', tags:['math','symbols','reference','master','all'],
    svgContent:mathReferenceSheetSVG(), traceText:'MATH REFERENCE',
    description:'Complete math symbols reference sheet for kids — all operators and fractions' },
  { id:'master-alphabet-objects', category:'master', title:'A–Z with Objects', subtitle:'Draw & trace', tags:['alphabet','objects','a-z','master','draw'],
    svgContent:alphabetObjectsSheetSVG(), traceText:'ALPHABET',
    description:'A–Z alphabet sheet with matching objects to draw and trace' },
];
