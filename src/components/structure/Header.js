import './Header.css';

function Header() {
    return (
        <header className="mui-appbar mui--z1 purple-col">

            <div className="mui-container">
                <table>
                    <tr className="mui--appbar-height">
                        <td className="mui--text-title">Help Who Needs</td>
                        <td className="mui--text-right">
                            <ul className="mui-list--inline mui--text-body2">
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        </header>
    );
}

export default Header;