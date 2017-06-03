interface PathResult<T> {
    <TSubKey extends keyof T>(key: TSubKey): PathResult<T[TSubKey]>;
    /**Gets the resulting path */
    path: string[];
}

/**
 * Create a deep path builder for a given type
 */
export function path<T>() {
    function subpath<T, TKey extends keyof T>(parent: string[], key: TKey): PathResult<T[TKey]> {
        const newPath = [...parent, key];
        const x = (<TSubKey extends keyof T[TKey]>(subkey: TSubKey) => subpath<T[TKey], TSubKey>(newPath, subkey)) as PathResult<T[TKey]>;
        x.path = newPath;
        return x;
    }

    return <TKey extends keyof T>(key: TKey) => subpath<T, TKey>([], key);
}
