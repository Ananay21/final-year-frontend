import Header from '../components/Header'
import Footer from '../components/Footer'
import QuizComponent from '../components/QuizComponent';

const QuizPage = () => {
  const questions=[
  {
    question: "What is the primary purpose of JSX in React?",
    options: [
      {key:"To define the application's data structure.",val: 0},
      {key:"To handle asynchronous operations.",val: 0},
      {key:"To describe the user interface.",val: 1},
      {key:"To manage component state.",val: 0}
    ]
  },
  {
    question: "Which of the following is NOT a valid React lifecycle method for class components?",
    options: [
      {key:"componentDidMount()",val: 0},
      {key:"componentWillUpdate()",val: 1},
      {key:"render()",val: 0},
      {key:"componentWillUnmount()",val: 0}
    ]
  },
  {
    question: "What is the role of the `useState` hook in functional components?",
    options: [
      {key:"To perform side effects.",val: 0},
      {key:"To define the component's initial props.",val: 0},
      {key:"To manage the component's local state.",val: 1},
      {key:"To handle events within the component.",val: 0}
    ]
  },
  {
    question: "Which of the following is the correct way to pass data from a parent component to a child component in React?",
    options: [
      {key:"Using `this.props` in the child component.",val: 1},
      {key:"Using `state` in the parent component.",val: 0},
      {key:"Directly modifying the child component's state.",val: 0},
      {key:"Using `refs` to access child component methods.",val: 0}
    ]
  },
  {
    question: "What is the significance of the 'key' prop when rendering lists of elements in React?",
    options: [
      {key:"It provides styling to the list items.",val: 0},
      {key:"It helps React identify which items have changed, are added, or are removed.",val: 1},
      {key:"It defines the order in which the list items are rendered.",val: 0},
      {key:"It is used for event handling in list items.",val: 0}
    ]
  }
]


  return (
    <>
    <Header/>
    <div className='w-full h-screen mt-25'>
        <div className='h-3/4 rounded-xl flex flex-wrap justify-center items-center mx-10 '>
          <QuizComponent obj={questions}/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default QuizPage