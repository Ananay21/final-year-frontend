import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const QuizPost = (props) => {
    const {title,tags}=props.quizObj;
    const newTags=tags.map((elem)=>{
        if(elem.length>12) return elem.slice(0,12)+"..."
        else return elem;
    }).slice(0,7);

    return (
        <div className='h-[225px] w-[450px] flex flex-col mx-2 mb-3 border-4 border-black bg-white p-3 rounded-3xl gap-2 max-sm:w-full max-sm:h-full shadow-md shadow-gray-300'>
            <div>
                <h1 className='font-mono text-3xl font-bold ml-2'>
                    {title}
                </h1>
            </div>
            <hr />
            <div className='flex flex-wrap gap-2 w-full'>
                tags: 
                {newTags.map((element,i)=><div key={i} className='bg-black text-white rounded-full px-2 py-1 flex items-center'>{element}</div>)}
                ...
            </div>
            <div className='w-full h-full flex items-end justify-end'>
                <a href="/quiz/12" className='bg-green-400 px-3 py-2 gap-1 rounded-full flex items-center duration-300 text-white border-2 border-white hover:text-green-400 hover:bg-white hover:border-green-400'>Start Quiz {<ArrowForwardIcon/>}</a>
            </div>
        </div>
    )
}

export default QuizPost