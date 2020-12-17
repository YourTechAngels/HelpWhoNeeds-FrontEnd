import NavigationBarItem from './NavigationBarItem'

function NavigationBar() {
    return (
        <ul className="mui-list--inline mui--text-body2">
            <NavigationBarItem text="About"/>
            <NavigationBarItem text="Contact"/>
        </ul>
    );
}

export default NavigationBar;