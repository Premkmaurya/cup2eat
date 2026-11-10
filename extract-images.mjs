import sharp from 'sharp';
import path from 'path';

const userUploads = 'C:/Users/prem/.gemini/antigravity/brain/4cbdc175-2f90-45e5-9586-38ca61cb407b/.user_uploaded';

async function extract() {
  const img1 = path.join(userUploads, 'media_1794303498420_8a207d36.jpg');
  const img2 = path.join(userUploads, 'media_1794303517378_8891e2ee.jpg');
  const img4 = path.join(userUploads, 'media_1794303547950_a7b2ab94.png');

  // Hero: Edible cup with beans on warm background
  await sharp(img1)
    .extract({ left: 21, top: 76, width: 111, height: 137 })
    .resize(600, 740, { kernel: 'lanczos3' })
    .toFile('public/images/hero-edible-cup.jpg');

  // Product Story: Steamy espresso in edible waffle cup
  await sharp(img1)
    .extract({ left: 21, top: 250, width: 111, height: 137 })
    .resize(600, 740, { kernel: 'lanczos3' })
    .toFile('public/images/product-story-cup.jpg');

  // The Experience / Pour: Pouring espresso into cup
  await sharp(img1)
    .extract({ left: 21, top: 425, width: 111, height: 90 })
    .resize(600, 480, { kernel: 'lanczos3' })
    .toFile('public/images/experience-pour.jpg');

  // Where it belongs: Coffee poured on wooden outdoor table
  await sharp(img2)
    .extract({ left: 51, top: 28, width: 111, height: 137 })
    .resize(600, 740, { kernel: 'lanczos3' })
    .toFile('public/images/cafe-table-pour.jpg');

  // Real world proof: 3 friends enjoying edible drinks outdoor
  await sharp(img2)
    .extract({ left: 51, top: 202, width: 111, height: 137 })
    .resize(600, 740, { kernel: 'lanczos3' })
    .toFile('public/images/social-people.jpg');

  // Business partnerships: Editorial magazine layout
  await sharp(img2)
    .extract({ left: 51, top: 376, width: 111, height: 137 })
    .resize(600, 740, { kernel: 'lanczos3' })
    .toFile('public/images/editorial-table.jpg');

  // Ironhill brand closing card reference
  await sharp(img4)
    .extract({ left: 45, top: 65, width: 650, height: 440 })
    .resize(1300, 880, { kernel: 'lanczos3' })
    .toFile('public/images/ironhill-reference.png');

  console.log('Successfully extracted 7 reference photographic assets!');
}

extract().catch(console.error);
