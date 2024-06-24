import './Display.css'

export const Display = ({onChange}: {onChange: React.ChangeEventHandler<HTMLTextAreaElement>}) => {
    return (
        <div className='Display'>
            <textarea onChange={onChange}/>
        </div>
    )
}
