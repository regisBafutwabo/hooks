/************************ useConfirm *********************************************
 * - function opening a confirmation box on an event listener
 ******************************************************************************/

export const useConfirm = (message, onConfirm, onCancel) => {
    if (onConfirm && !typeof onConfirm !== "function") {
      return;
    } else if (onCancel && !typeof onCancel !== "function") {
      return;
    }
    const confirmAction = () => {
      if (confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };
    return confirmAction;
  };
  