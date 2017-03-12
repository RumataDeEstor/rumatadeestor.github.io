export const SYNC_UPDATE = 'SYNC_UPDATE';

export function syncUpdate(id) {
  return {
    type: SYNC_UPDATE,
    time: Date.now(),
  }
}
