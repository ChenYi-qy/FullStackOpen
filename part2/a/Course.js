
const Course = (props) => {


    return (
      <div>
        <h1>{props.course.name}</h1>
        <div>{props.course.parts[0].name} {props.course.parts[0].exercises} </div>
        <div>{props.course.parts[1].name} {props.course.parts[1].exercises} </div>
        <div>{props.course.parts[2].name} {props.course.parts[2].exercises} </div>
        <div> <strong> total of {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises} exercises </strong> </div>
      </div>
    )
  }

  export default Course