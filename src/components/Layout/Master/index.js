import { Navbar } from '../../Header';

const Master = ( { children } ) => {
    return (
        <div className="container app-layout-master p-3">
            <div className="app-navbar mb-3">
                <Navbar />
            </div>
            <div className="app-content">
                {children}
            </div>
        </div>
    )
}

export default Master;
