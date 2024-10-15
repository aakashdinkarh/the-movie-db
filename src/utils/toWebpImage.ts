import { cacheWebP, getCachedWebP } from "./indexedDBUtils";

export async function convertToWebP(imageUrl: string): Promise<string> {
	if (!imageUrl) return imageUrl;

	try {
		const cachedWebp = await getCachedWebP(imageUrl);
		if (cachedWebp) {
			console.log('from cache');
			return cachedWebp;
		}

		// Fetch the image as a blob
		const blob = await (await fetch(imageUrl)).blob();

		// Convert the blob into a data URL
		const reader = new FileReader();
		const imageRead = new Promise<void>((resolve, reject) => {
			reader.onload = () => resolve();
			reader.onerror = reject;
		});

		reader.readAsDataURL(blob);
		await imageRead;

		const img = new Image();
		const imgLoad = new Promise<void>((resolve, reject) => {
			img.onload = () => resolve();
			img.onerror = reject;
		});

		img.src = reader.result as string;
		await imgLoad;

		// Create a canvas to draw the image
		const canvas = document.createElement('canvas');
		canvas.width = img.width;
		canvas.height = img.height;

		// Draw the image onto the canvas
		const ctx = canvas.getContext('2d');
		// @ts-ignore
		ctx.drawImage(img, 0, 0);

		// Convert the canvas to WebP format
		const webpUrl = canvas.toDataURL('image/webp');

		// Cache the WebP URL in IndexedDB
		cacheWebP(imageUrl, webpUrl);

		// Return the WebP URL
		return webpUrl;
	} catch (error) {
		console.error('Error converting image to WebP:', error);
		return imageUrl; // Return the original image if there's an error
	}
}
