import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <nav style={{ margin: 10 }}>
                    <Link to='/' style={{ padding: 10 }}>
                        Home
                    </Link>

                    <Link to='/about' style={{ padding: 10 }}>
                        About
                    </Link>

                    <Link to='/contact' style={{ padding: 10 }}>
                        Contact
                    </Link>
                </nav>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </div>
        </Router>
    )
}

export default App