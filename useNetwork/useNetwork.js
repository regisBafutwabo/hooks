/************************ useNetwork *********************************************
 * - function that check if you are still connected
 * - and then create an event 
 ******************************************************************************/

export const useNetwork = onNetworkChange => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
      if (typeof onNetworkChange === "function") {
        onNetworkChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
  
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, []);
    return status;
};