
/************************ useClick *********************************************
 * - function for event listeners / on click events
 ******************************************************************************/
export const useClick = onClick => {
    if(typeof onClick !== 'function'){
        return;
    }
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