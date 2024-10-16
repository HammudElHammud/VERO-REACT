import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


import {colorRowFormatter, descriptionFormatter} from "./TableRowFormatter";

import './table.css'

const TableContent = (props) => {
    const {SearchBar} = Search;
    const columns = [
        {
            dataField: 'task',
            text: 'Task',
            headerStyle: {backgroundColor: '#1d2a36', color: '#F8F9FB', textAlign: 'start'},
            sort: true
        },
        {
            dataField: 'title',
            text: 'Title',
            headerStyle: {backgroundColor: '#1d2a36', color: '#F8F9FB', textAlign: 'start'},
            sort: true
        },
        {
            dataField: 'description',
            text: 'Description',
            headerStyle: {backgroundColor: '#1d2a36', color: '#F8F9FB', textAlign: 'start'},
            formatter: descriptionFormatter,
            sort: true
        },
        {
            dataField: 'colorCode',
            text: 'Color Code',
            headerStyle: {backgroundColor: '#1d2a36', color: '#F8F9FB', textAlign: 'start'},
            formatter: colorRowFormatter,
            sort: true
        }];

    const paginationOptions = {
        sizePerPage: 10,
        showTotal: true,
        paginationSize: 4,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Prev',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        hideSizePerPage: true,
        hidePageListOnlyOnePage: true,
        paginationTotalRenderer: (from, to, size) => (
            <span className="pagination-total text-[#8A9DC0]">
      Showing {from} to {to} of {size} results
    </span>
        )
    };

    return (
        <>
            <ToolkitProvider
                keyField="id"
                data={props.tasks}
                columns={columns}
                search
            >
                {
                    props => (
                        <div className='w-100'>
                            <SearchBar
                                {...props.searchProps}
                            />
                            <hr/>
                            <BootstrapTable
                                {...props.baseProps}
                                border={false}
                                classes={'custom-table'}
                                pagination={paginationFactory(paginationOptions)}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </>
    )

}

export default TableContent