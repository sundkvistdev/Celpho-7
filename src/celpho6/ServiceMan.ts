import ICelphoServiceModule from "./ICelphoServiceModule";

/**
 * The primary Celpho
 * service manager.
 */
export default class ServiceMan {
	private _serviceCache: Map<string, Promise<ICelphoServiceModule>>;

	constructor() {
		this._serviceCache = new Map();
	}

	public loadServiceClass(url: URL) {
		const { href } = url;
		let svc = this._serviceCache.get(href);
		if (svc !== undefined) {
			return svc;
		}
		svc = import(href) as Promise<ICelphoServiceModule>;
		this._serviceCache.set(href, svc);
		return svc;
	}

	public async createServiceInstance(url: URL) {
		return new (await this.loadServiceClass(url)).default();
	}
}