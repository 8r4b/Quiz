import "./style.css";
import Quiz from "./components/quiz";
import Result from "./components/result";
function App() {
    return (
        <div className="app-container">
            <h1>Quiz App</h1>
            <Quiz />
        </div>
    );
}
export default App;