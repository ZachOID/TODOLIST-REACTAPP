
import React, { useState } from 'react';
import Sidebar from './Sidebar'
import Tasks from './Tasks'
import '../App.scss';

const Content = () => {
    const [selectedTab, setSelectedTab] = useState('INBOX');

    return <div> 
        <section className="content">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <Tasks selectedTab={selectedTab}/>
        </section> 

        </div>;
};

export default Content;
