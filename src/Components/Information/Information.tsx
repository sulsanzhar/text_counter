import './Information.css'

type TState = {
    words: number,
    characters: number
    sybmols: number
}

export const Information = ({words, characters, sybmols}: TState) => {
    return (
        <div className='Information'>
            <div className='infomation-item'>
                <h3>{words}</h3>
                <p>words</p>
            </div>
            <div className='infomation-item'>
                <h3>{characters}</h3>
                <p>characters</p>
            </div>
            <div className='infomation-item'>
                <h3>{sybmols}</h3>
                <p>symbols</p>
            </div>
        </div>
    )
}
