const TextField = ({
    value = '',
    placeholder,
    onInput,
    className = '',
}) => {
    return (
        <div className={`group invoice-control ${className}`}>
            <textarea
                className="bg-[transparent] w-full focus-visible:outline-none resize-none"
                rows={2}
                onInput={({ target: { value } }) => onInput(value)}
                placeholder={placeholder}
                value={value || ''}
            />
        </div>
    );
};

export default TextField;