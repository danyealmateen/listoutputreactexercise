

const App = () => {

  const theList = ["A", "B", "C", "D", "E", "F", "G", "H",];

  return (
    <div>
      <h1>Output List Excercise</h1>
      {theList.map(item => {
        console.log(item)
        return <p key={item}>{item}</p>
      })}
    </div>
  )
}

export default App;
