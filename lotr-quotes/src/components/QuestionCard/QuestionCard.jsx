import Answers from "../Answers/Answers"
import SubmitButton from "../SubmitButton/SubmitButton"
import Quote from "../Quote/Quote"


export default function QuestionCard({question}) {
    return (
        <>
            <Quote>{question.quote}</Quote>
            <Answers alternatives={question.alternatives} />
            <SubmitButton/>
        </>
    )
}