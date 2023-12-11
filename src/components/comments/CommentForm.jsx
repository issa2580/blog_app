import React, {useState} from 'react'

const CommentForm = ({btnSubmit, formSubmitHandler, formCanceledHandler = null, initialText = ''}) => {

    const [value, setValue] = useState(initialText)

    const handleSubmit = (e) => {
        e.preventDefault()
        formSubmitHandler(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div
                className='flex flex-col items-end border border-primary rounded-lg p-4'>
                <textarea
                    className='w-full focus:outline-none bg-transparent'
                    id='tst'
                    rows={5}
                    placeholder='leave your comments here'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div
                    className='flex flex-col-reverse gap-y-2 items-center gap-x-2 pt-2 min-[420px]:flex-row'>
                    {formCanceledHandler && (
                        <button
                            onClick={formCanceledHandler}
                            className='px-6 py-2.5 rounded-lg border border-red-500 text-red-500'>
                            Cancel
                        </button>
                    )}
                    <button
                        className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold' 
                        type='submit'>
                        {btnSubmit}
                    </button>
                </div>
            </div>

        </form>
    )
}

export default CommentForm