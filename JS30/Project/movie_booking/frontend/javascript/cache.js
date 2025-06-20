// cache.js - quản lý cache có thời hạn bằng localStorage

export function setCache(key, data, ttlMinutes = 5) {
    const now = new Date();
    const item = {
        value: data,
        expiry: now.getTime() + ttlMinutes * 60 * 1000
    };
    localStorage.setItem(key, JSON.stringify(item));
}

export function getCache(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
        const item = JSON.parse(itemStr);
        const now = new Date();
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    } catch (e) {
        localStorage.removeItem(key);
        return null;
    }
}
