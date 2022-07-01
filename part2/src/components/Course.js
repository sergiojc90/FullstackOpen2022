
const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
    return(
        parts.map(part =>
        <p key ={part.id}>
            {part.name} {part.exercises}
        </p>)
    )
}

const Total = ({parts}) => 
    <h4>
        {"Total of " + 
        parts.reduce((sum,part) => sum + part.exercises,0) + 
        " excercises"}
    </h4>

const Course = ({course}) =>{
    return(
        <div>
            <Header name ={course.name}/>
            <Content parts ={course.parts}/>
            <Total parts ={course.parts}/>
        </div>
    )
}

export default Course