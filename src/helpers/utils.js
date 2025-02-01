/**
 * Generates a Universally unique identifier of length 16.
 * @returns | string | The generated Uuid
 */
export function generateUuidv4() {
    return "xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

/**
 * Serializes an object by replacing any `Date` instance values with a UTC string.
 *
 * @param {Object} obj - The object to serialize.
 * @returns {Object} - The serialized object with `Date` values converted to UTC strings.
 *
 */
export const serializeObject = (obj) => {
    if (obj === null || typeof obj !== "object") return obj;

    if (obj instanceof Date) {
        return new Date(obj).toUTCString();
    }

    // Recursively handle nested objects and arrays
    if (Array.isArray(obj)) {
        return obj.map((item) => serializeObject(item));
    }

    const serialized = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            serialized[key] = serializeObject(obj[key]);
        }
    }

    return serialized;
};