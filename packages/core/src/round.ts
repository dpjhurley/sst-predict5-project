import crypto from 'crypto';
import { readSync } from 'fs';

export async function create() {
    const id = crypto.randomUUID();
    // write to database
    return 'foo';
}

export function list() {
    return Array(50)
        .fill(0)
        .map((_, index) => ({
            id: crypto.randomUUID(),
            title: 'Todo #' + index,
        }));
}
