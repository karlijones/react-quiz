function Question({ question }) { 
    console.log(question);

    return (    
        <div>
            <h1>{question.question}</h1>
            <Options question={question} />
        </div>
    );                  
}

export default Question;
