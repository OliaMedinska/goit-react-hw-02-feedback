import './Feedback.css';

class Feedback extends Comment {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    render() {
        return (
           <div>
                <p>Please leave feedback</p>
                <ul>
                    <li><button>Good</button></li>
                    <li><button>Neutral</button></li>
                    <li><button>Bad</button></li>
                </ul>

                <p>Statistics</p>
                <ul>
                    <li><p>Good: { this.state.good}</p></li>
                    <li><p>Neutral: { this.state.neutral}</p></li>
                    <li><p>Bad: {this.state.bad}</p></li>
                </ul>
            </div>
        )
    }
}

export default Feedback;