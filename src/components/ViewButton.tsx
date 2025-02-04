
const ViewButton = ({gridView, setGridView}) => {
    
    const toggleProductView = () => {
    setGridView((prev) => !prev);
  };
  
  return (
    <button onClick={toggleProductView} className="flex items-center gap-2 cursor-pointer bg-[#064f38] py-[5px] px-[6px] rounded-md">
        <span className={`${gridView ? 'bg-white text-[#064f38]' : 'bg-transparent text-white'} rounded-sm py-1 px-3`}>Grid</span>
        <span className={`${!gridView ? 'bg-white text-[#064f38]' : 'bg-transparent text-white'} rounded-sm py-1 px-3`}>List</span>
    </button>
  )
}

export default ViewButton;