
/************************ useClick *********************************************
 * - function for event listeners / on click events
 ******************************************************************************/
export const useClick = onClick => {
    debugger;
    const element = useRef();
    useEffect(() => {
      //componentDidMount
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      //componentWillUnmount
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };