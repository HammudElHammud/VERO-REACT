import React from 'react'
import Sidebar from "../../components/Sidebar";
import PageContent from "../../components/PageContent";

const Home = (props) => {


    return (
        <>
            <div className="relative flex size-full min-h-screen flex-col bg-[#131C24]
             dark group/design-root overflow-x-hidden page-container">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="gap-1 px-3 flex flex-1 justify-center py-2">
                        <Sidebar/>
                        <PageContent/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home