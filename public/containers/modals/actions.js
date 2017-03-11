export const ACTIVATE_MODAL = 'ACTIVATE_MODAL';

export function activateModal(modalName) {
  return {
    type: ACTIVATE_MODAL,
    modalName,
  }
}

export const DEACTIVATE_MODAL = 'DEACTIVATE_MODAL';

export function deactivateModal(modalName) {
  return {
    type: DEACTIVATE_MODAL,
    modalName,
  }
}
