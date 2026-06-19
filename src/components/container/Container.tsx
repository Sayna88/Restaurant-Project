interface Iprops{
    children: React.ReactNode
}

function Container({children}: Iprops) {
    return (
        <div className="mx-50">
            {children}
        </div>
    )
}

export default Container;