const TextInput = ({
        value='', 
        placeholder,
        onInput,
        className='',
    }) => {
    
    return (
        <div className={`group invoice-control ${className}`}>
            <input type='text'
                onInput={({ target: { value } }) => { onInput(value) }}
                placeholder={placeholder} 
                value={value || ''} />
        </div>
    )
}

export default TextInput
