import data from './data'

export default function JokesList() {
    return (
        <div className="mt-8 space-y-8">
            {data.map((question) => (
                <div className="space-y-1 ">
                    <span>
                        <p className="font-medium text-primary">{question.description}</p>
                    </span>
                    {question.response && (
                        <p className="prose text-tertiary">
                            {question.response}
                        </p>
                    )}
                </div>
            ))}
            {data.length === 0 && <p>No jokes yet!</p>}
            <div className="p-8 mt-16 -mx-4 border-t border-b border-dashed bg-tertiary border-note space-y-4 md:-mx-8">
                <p className="font-semibold">
                    Disclaimer
                </p>
                <div className="prose text-primary">
                    <p>
                        If you have an actual
                        hilarious joke, please email me at{' '}
                        <a href="mailto:ste.tho.mat@gmail.com">ste.tho.mat@gmail.com</a>
                        .
                    </p>
                </div>
            </div>
        </div >
    )
}
