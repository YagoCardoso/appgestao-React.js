import { AppBar } from '@material-ui/core'
import {node} from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const Layout = ({children}) => {
 
    return (

        <>
            <header>
                <AppBar>
                    <div>
                    <Link href={`/TablesTools`}>
                            <a>Home |</a>
                        </Link>
                        <Link href={`/CadSala`}>
                            <a> Incluir Sala |</a>
                        </Link>
                        <Link href={`/TableTools`}>
                            <a> Reservar  Sala</a>
                        </Link>
                    </div>
                </AppBar>
                <br></br>
            </header>
        {children}
        <footer>
            meu footer
        </footer>
        </>
    );
    
}  


Layout.propTypes = {
    children: node.isRequired,
}

export default Layout;