// Helper to get current timestamp
export const ONE_HOUR_IN_MS = 60 * 60 * 1000;
const DB_NAME = 'webpImageCache';
const STORE_NAME = 'images';
const CACHE_KEY_PATH = 'url';
const CACHED_AT_FIELD = 'cachedAt';
const WEBP_URL_FIELD = 'webpUrl';

// Helper to get current timestamp
function getCurrentTimestamp(): number {
	return new Date().getTime();
}

// Helper to open IndexedDB
function openIndexedDB(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open(DB_NAME, 1);

		request.onupgradeneeded = (event) => {
			const db = (event.target as IDBOpenDBRequest).result;
			if (!db.objectStoreNames.contains(STORE_NAME)) {
				db.createObjectStore(STORE_NAME, { keyPath: CACHE_KEY_PATH });
			}
		};

		request.onsuccess = () => {
			resolve(request.result);
		};

		request.onerror = () => {
			reject('Error opening IndexedDB');
		};
	});
}

// Helper to get image from IndexedDB
export async function getCachedWebP(imageUrl: string): Promise<string | undefined> {
	const db = await openIndexedDB();
	return new Promise((resolve, reject) => {
		const transaction = db.transaction(STORE_NAME, 'readonly');
		const store = transaction.objectStore(STORE_NAME);
		const request = store.get(imageUrl);

		request.onsuccess = () => {
			resolve(request.result?.[WEBP_URL_FIELD]);
		};

		request.onerror = () => {
			reject('Error fetching image from IndexedDB');
		};
	});
}

// Helper to store image in IndexedDB
export async function cacheWebP(imageUrl: string, webpUrl: string): Promise<void> {
	const db = await openIndexedDB();
	return new Promise((resolve, reject) => {
		const transaction = db.transaction(STORE_NAME, 'readwrite');
		const store = transaction.objectStore(STORE_NAME);

		const request = store.put({ [CACHE_KEY_PATH]: imageUrl, [WEBP_URL_FIELD]: webpUrl, [CACHED_AT_FIELD]: new Date() });

		request.onsuccess = () => resolve();
		request.onerror = () => reject('Error storing image in IndexedDB');
	});
}

// Cleanup expired cache
export async function cleanupExpiredCache() {
	const db = await openIndexedDB();
	const transaction = db.transaction(STORE_NAME, 'readwrite');
	const store = transaction.objectStore(STORE_NAME);

	const now = getCurrentTimestamp();
	const request = store.openCursor();

	request.onsuccess = (event) => {
		const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;
		if (cursor) {
			const entry = cursor.value;
			const cachedAt = entry[CACHED_AT_FIELD];

			// If cache is older than 1 hour, delete it
			if (now - cachedAt >= ONE_HOUR_IN_MS) {
				store.delete(cursor.primaryKey);
			}

			cursor.continue();
		}
	};

	request.onerror = () => {
		console.error('Error cleaning up expired cache entries');
	};
}
