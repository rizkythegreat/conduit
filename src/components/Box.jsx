function Box({ className, children, ...props }) {
    return (
        <div className={className} {...props}>{children}</div>
    )
}

export default Box