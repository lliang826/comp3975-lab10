import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <React.Fragment>
    <footer class="border-top footer text-muted" style={{position: "absolute", bottom: 0, width: "100%", whiteSpace: "nowrap", lineHeight: "60px"}}>
        <div class="container">
            <p>© 2022 - FizzBuzzWeb - <Link to="/Home/Privacy">Privacy</Link></p>
        </div>
    </footer>
    </React.Fragment>
);

export default HomePage;
