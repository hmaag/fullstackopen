import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.part[0].name} {props.part[0].exercises}</p>
//       <p>{props.part[1].name} {props.part[1].exercises}</p>
//       <p>{props.part[2].name} {props.part[2].exercises}</p>
//     </div>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//         <Part part={props.parts} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     </div>
//   )
// }

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (

    courses.map(course => (<Course key={course.id} name={course.name} parts={course.parts} />))

  ) 
}

ReactDOM.render(<App />, document.getElementById('root'))
