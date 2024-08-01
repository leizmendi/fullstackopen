
// Componente para renderizar todas las partes del curso
const Course = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
        {course.parts.map(part => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    );
  };
// Componente para renderizar una sola parte del curso
const Part = ({ part }) => {
    return (
      <>
        {part.name} {part.exercises}<br/>
      </>
    );
  };

export default Course