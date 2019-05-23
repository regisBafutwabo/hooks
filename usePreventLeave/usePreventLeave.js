/************************ usePreventLeave *********************************************
 * - function that opens a confirmation box that asks the user if he wants to leave
 * - users can decide to leave or stay on the page
 ******************************************************************************/

export const usePreventLeave = () => {
    const listener = event => {
      event.preventDefault();
      event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
  };