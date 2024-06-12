import {useState} from 'react'
import BackButton from '../component/BackButton';
import Spinner from '../component/Spinner';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';
import {useSnackbar} from 'notistack'

export default function DeleteBooks() {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id}=useParams();
  const {enqueueSnackbar} =useSnackbar();

  const handleDelteBook=()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Book Delted Sucessfully',{variant:"success"})

      navigate('/');
    })
    .catch((error)=>{
      setLoading(false);
      // alert("An error happended.Please Check Console")
      enqueueSnackbar("Error",{variant:'error'});

      console.log(error);
    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Books</h1>
      {loading ? <Spinner/>:''};
        <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w:{600px} p-8 mx-auto'>
          <h1>Are You Sure You want to delete this book ?</h1>
          <button className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDelteBook}>
              Yes,Delete it
          </button>
        </div>
    </div>
  )
}
