const LinkedinLogo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <path
            stroke="#018762"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M26.5 4.5h-21a1 1 0 0 0-1 1v21a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1v-21a1 1 0 0 0-1-1ZM15 14v8M11 14v8"
        />
        <path
            stroke="#018762"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17.5a3.5 3.5 0 1 1 7 0V22"
        />
        <path fill="#018762" d="M11 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
)
export default LinkedinLogo
