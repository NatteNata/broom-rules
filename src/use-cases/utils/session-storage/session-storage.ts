export function getItem<T>(key: string): T | null {
	try {
		const item = sessionStorage.getItem(key)
		return item ? (JSON.parse(item) as T) : null
	} catch (error) {
		console.error(`Failed to get item ${key} from Local storage`, error)
		return null
	}
}

export function setItem<T>(key: string, value: T): void {
	try {
		sessionStorage.setItem(key, JSON.stringify(value))
	} catch (error) {
		console.error(`Failed to set item ${key} to Local storage`, error)
	}
}

export function removeItem<T>(key: string): void {
	try {
		sessionStorage.remove(key)
	} catch (error) {
		console.error(`Failed to remove item ${key} from Local storage`, error)
	}
}