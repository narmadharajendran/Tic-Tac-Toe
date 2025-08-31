import "./header.styles.scss"

const Header = (props) => {
    const {headerText} = props;
    return(
        <div className="header">
            {headerText}
        </div>
    )
}

export default Header