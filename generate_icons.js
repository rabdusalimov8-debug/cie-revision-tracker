const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (c & 1 ? 0xEDB88320 : 0);
  }
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const t   = Buffer.from(type);
  const crc = crc32(Buffer.concat([t, data]));
  const c   = Buffer.alloc(4); c.writeUInt32BE(crc >>> 0);
  return Buffer.concat([len, t, data, c]);
}

function makePNG(size) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0);
  ihdrData.writeUInt32BE(size, 4);
  ihdrData[8] = 8;  // 8-bit
  ihdrData[9] = 2;  // RGB
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const IHDR = chunk('IHDR', ihdrData);

  const rowSize = 1 + size * 3;
  const raw = Buffer.alloc(size * rowSize);
  for (let y = 0; y < size; y++) {
    const off = y * rowSize;
    raw[off] = 0; // Filter: none
    for (let x = 0; x < size; x++) {
      const cx = Math.abs(x - size / 2) / (size / 2);
      const cy = Math.abs(y - size / 2) / (size / 2);
      let pr, pg, pb;
      if (cx < 0.65 && cy < 0.65) {
        // Notion / CIE accent indigo (#5B5BD6)
        pr = 0x5B; pg = 0x5B; pb = 0xD6;
      } else {
        // Charcoal dark (#191919)
        pr = 0x19; pg = 0x19; pb = 0x19;
      }
      raw[off + 1 + x * 3]     = pr;
      raw[off + 1 + x * 3 + 1] = pg;
      raw[off + 1 + x * 3 + 2] = pb;
    }
  }

  const compressed = zlib.deflateSync(raw, { level: 9 });
  const IDAT = chunk('IDAT', compressed);
  const IEND = chunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, IHDR, IDAT, IEND]);
}

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), makePNG(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), makePNG(512));
console.log('PNG icons created successfully.');
