/************************ useTitle *********************************************
 * - function for modifying the title of the currentcomponent / page
 ******************************************************************************/
export const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };