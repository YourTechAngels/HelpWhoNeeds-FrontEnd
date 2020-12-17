import './Header.css';
import NavigationBar from './NavigationBar';

function Header() {
    return (
        <header className="mui-appbar mui--z1 purple-col">

            <div className="mui-container">
                <table>
                    <tr className="mui--appbar-height">
                        <td className="mui--text-title">Help Who Needs</td>
                        <td className="mui--text-right">
                           <NavigationBar />
                        </td>
                    </tr>
                </table>
            </div>
        </header>
    );
}

export default Header;