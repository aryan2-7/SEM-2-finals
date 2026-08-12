import { useEffect, useRef, useState } from 'react';

// Draws field lines + equipotentials for a physical dipole (+q,-q) at variable separation,
// letting the user slide from "near field" (large d) toward the ideal r>>d point-dipole limit.
export default function DipoleFieldViz() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sep, setSep] = useState(60); // pixel separation between charges, controls near/far regime
  const [showEquipotential, setShowEquipotential] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;
    const q = 1;
    const posCharge = { x: cx, y: cy - sep / 2 };
    const negCharge = { x: cx, y: cy + sep / 2 };

    function field(x: number, y: number) {
      let ex = 0, ey = 0;
      for (const [c, sign] of [[posCharge, 1], [negCharge, -1]] as const) {
        const dx = x - c.x, dy = y - c.y;
        const r2 = dx * dx + dy * dy + 4;
        const r = Math.sqrt(r2);
        const k = (sign * q) / (r2 * r);
        ex += k * dx;
        ey += k * dy;
      }
      return { ex, ey };
    }

    function potential(x: number, y: number) {
      let v = 0;
      for (const [c, sign] of [[posCharge, 1], [negCharge, -1]] as const) {
        const dx = x - c.x, dy = y - c.y;
        const r = Math.sqrt(dx * dx + dy * dy) + 2;
        v += (sign * q) / r;
      }
      return v;
    }

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0e1219';
    ctx.fillRect(0, 0, W, H);

    // equipotential contours (simple threshold bands)
    if (showEquipotential) {
      const img = ctx.createImageData(W, H);
      for (let px = 0; px < W; px += 2) {
        for (let py = 0; py < H; py += 2) {
          const v = potential(px, py);
          const band = Math.sin(v * 40) > 0.92;
          if (band) {
            const col = v > 0 ? [91, 141, 239] : [239, 91, 111];
            for (let ddx = 0; ddx < 2; ddx++) for (let ddy = 0; ddy < 2; ddy++) {
              const ii2 = ((py + ddy) * W + (px + ddx)) * 4;
              img.data[ii2] = col[0]; img.data[ii2 + 1] = col[1]; img.data[ii2 + 2] = col[2]; img.data[ii2 + 3] = 70;
            }
          }
        }
      }
      ctx.putImageData(img, 0, 0);
    }

    // field lines via simple streamline tracing from points around + charge
    ctx.lineWidth = 1.2;
    const nLines = 16;
    for (let i = 0; i < nLines; i++) {
      const angle = (i / nLines) * Math.PI * 2;
      let x = posCharge.x + 6 * Math.cos(angle);
      let y = posCharge.y + 6 * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.strokeStyle = `rgba(242,181,68,0.55)`;
      for (let step = 0; step < 400; step++) {
        const { ex, ey } = field(x, y);
        const mag = Math.sqrt(ex * ex + ey * ey) || 1e-6;
        const stepSize = 3;
        x += (ex / mag) * stepSize;
        y += (ey / mag) * stepSize;
        if (x < 0 || x > W || y < 0 || y > H) break;
        ctx.lineTo(x, y);
        const dNeg = Math.hypot(x - negCharge.x, y - negCharge.y);
        if (dNeg < 8) break;
      }
      ctx.stroke();
    }

    // draw charges
    ctx.beginPath();
    ctx.arc(posCharge.x, posCharge.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#5b8def';
    ctx.fill();
    ctx.fillStyle = '#0b0e14';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('+q', posCharge.x, posCharge.y);

    ctx.beginPath();
    ctx.arc(negCharge.x, negCharge.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#ef5b6f';
    ctx.fill();
    ctx.fillStyle = '#0b0e14';
    ctx.fillText('−q', negCharge.x, negCharge.y);

    // p vector
    ctx.strokeStyle = '#f2b544';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(negCharge.x, negCharge.y);
    ctx.lineTo(posCharge.x, posCharge.y - 4);
    ctx.stroke();
    ctx.fillStyle = '#f2b544';
    ctx.font = '12px sans-serif';
    ctx.fillText('p', posCharge.x + 16, cy);
  }, [sep, showEquipotential]);

  const regime = sep > 45 ? 'near field (r ~ d)' : 'far field (r ≫ d, ideal dipole)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, width: '100%' }}>
      <canvas ref={canvasRef} width={520} height={380} style={{ borderRadius: 8, maxWidth: '100%' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, width: '100%', maxWidth: 480 }}>
        <span style={{ fontSize: 11.5, color: 'var(--text-dim)', fontFamily: 'var(--mono)', whiteSpace: 'nowrap' }}>separation d</span>
        <input
          type="range" min={16} max={90} value={sep}
          onChange={e => setSep(Number(e.target.value))}
          style={{ flex: 1, accentColor: '#f2b544' }}
        />
        <span style={{ fontSize: 11.5, color: 'var(--amber)', fontFamily: 'var(--mono)', width: 150 }}>{regime}</span>
      </div>
      <label style={{ fontSize: 12, color: 'var(--text-dim)', display: 'flex', gap: 6, alignItems: 'center' }}>
        <input type="checkbox" checked={showEquipotential} onChange={e => setShowEquipotential(e.target.checked)} />
        show equipotential bands
      </label>
    </div>
  );
}
