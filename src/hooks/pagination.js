import { useState } from "react";

export const usePagination = (perPageRecords, totalPageRecords) => {
    const totalPages = Math.ceil(totalPageRecords / perPageRecords);
    const [startPageIndex, setStatPageIndex] = useState(0);
    const [endPageIndex, setEndPageIndex] = useState(perPageRecords - 1);
    const [currentPageIndex, setCurrentPageIndex] = useState(1);

    //function
    const displayPage = (pageNo) => {
        setCurrentPageIndex(pageNo);
        let end_page_index = perPageRecords * pageNo - 1;
        let start_page_index = perPageRecords * pageNo - perPageRecords;
        setStatPageIndex(start_page_index);

        if (end_page_index > totalPageRecords) {
            setEndPageIndex(totalPageRecords - 1);
        } else {
            setEndPageIndex(end_page_index);
        }
    };

    return [
        totalPages,
        startPageIndex,
        endPageIndex,
        currentPageIndex,
        displayPage,
    ];
};