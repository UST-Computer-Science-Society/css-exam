type SubjectProps = {
    src: string
    code: string
    title: string
}

export const Subject = ({ src, code, title }: SubjectProps) => {
    return (
        <div className="subject-wrapper">
            <div className="subject-img-wrapper">
                <img className="subject-img" src={src} />
            </div>
            <div>
                <h5 className="subject-code">{code}</h5>
                <h6 className="subject-title">{title}</h6>
            </div>
            <div className="flex justify-end">
                <button className="subject-learn">Learn More</button>
            </div>
        </div>
    );
}