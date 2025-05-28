import AddIcon from '@mui/icons-material/Add';

const AddPostButton = () => {
  return (
    <a href="/createPost" className='p-3 z-1 border-2 border[#d4be81] fixed mb-4 mr-4 bottom-0 right-0 rounded-full flex items-center justify-center bg-black text-[#d4be81] duration-300 hover:cursor-pointer hover:scale-120 hover:text-black hover:bg-[#d4be81]'><AddIcon/></a>
  )
}

export default AddPostButton