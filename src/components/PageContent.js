import React, {useEffect, useState} from 'react'

import {createAxios} from "../utils/Helpars/AxiosHelpers";
import TableContent from "./TableContent";
import DataTableLoadingSkeleton from "./DataTableLoadingSkeleton";
import ImageModel from "./ImageModel";

const api = createAxios()
const PageContent = (props) => {
   const [isLoading, setIsLoading] = useState(false)
   const [openModel, setOpenModel] = useState(false)
   const [tasks, setTasks] = useState([])

    const gettingTasks = () => {
        api.get('/tasks')
            .then((response) => {
                const data = response.data;
                setTasks(data)
                console.log({task: tasks})
            })
            .catch((e) => {
                console.error({error: e});
            });
    }


    useEffect(() => {
        setIsLoading(true)
        gettingTasks();
        setTimeout(()=>{
            setIsLoading(false)
        }, 750)

        const interval = setInterval(gettingTasks, 3600000);

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <ImageModel
                isOpen={openModel}
                setIsOpen={setOpenModel}
                />
            <div className="layout-content-container flex flex-col flex-1">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                    <div className="flex min-w-72 flex-col gap-3">
                        <p className="text-[#F8F9FB] tracking-light text-[32px] font-bold leading-tight">Support
                            tickets</p>
                        <p className="text-[#8A9DC0] text-sm font-normal leading-normal">Your team's tickets</p>
                    </div>
                    <button
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center
                         overflow-hidden rounded-xl h-8 px-4 bg-[#29374C] text-[#F8F9FB] text-sm font-medium
                          leading-normal"
                    onClick={()=>setOpenModel(true)}
                    >
                        <span className="truncate">Create a ticket</span>
                    </button>
                </div>
                <h3 className="text-[#F8F9FB] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Open
                    Tickets</h3>
                <div className="px-4 py-3 @container">
                    {
                        isLoading ? <DataTableLoadingSkeleton/> : <TableContent tasks={tasks}/>
                    }
                </div>
            </div>
        </>
    )

}

export default PageContent