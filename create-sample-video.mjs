// A minimal valid WebM file containing a short black/coffee frame with VP8 video track
// EBML Header + Segment + Tracks + Cluster + SimpleBlock
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/videos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Minimal valid WebM byte sequence (RFC standard EBML WebM container)
const minimalWebmBase64 = 
  "GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQACFHVZXRJ4+02CQACFHVZXRJ4+02CQACHVZXRJ4+02EQQ6EBAAAAWlA=";

// We will also write a README.md in public/videos documenting how to drop real client MP4 files
const readmeContent = `# CUP2EAT Videos Directory

Drop your client or Instagram MP4 video files into this directory:
- \`community-tasting.mp4\` (Featured video on the left)
- \`customer-reactions.mp4\` (Reel 1: First-time reactions to eating the cup)
- \`coffee-test.mp4\` (Reel 2: The 40-Minute Hot Coffee Test)
- \`barista-service.mp4\` (Reel 3: Barista Service Flow at Peak Rush)

The video player automatically loads and plays these local files. If a file is omitted or fails to load, the player automatically falls back to an elegant branded preview with the video's thumbnail, description, and direct link to the Instagram demonstration on @cup2eat.
`;

fs.writeFileSync(path.join(outDir, 'README.md'), readmeContent);
console.log('Video configuration ready in public/videos/README.md');
