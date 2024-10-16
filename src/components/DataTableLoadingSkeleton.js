import React from 'react'
import ContentLoader from 'react-content-loader'
import { isTablet, isMobile, isIOS, isAndroid } from 'react-device-detect'

const DataTableLoadingSkeleton = (props: any) => {
    let baseY = 0
    let baseX = 0
    let width = 23
    let numberOfRows = 1

    if (isTablet) {
        width = 32
        numberOfRows = 3
    } else if (isMobile || isIOS || isAndroid) {
        width = 100
        numberOfRows = 1
        baseX = 0
    }

    const spacing = 180; // Adjusted spacing value
    return (
        <div className="mx-0 py-0">
            <ContentLoader
                height={'70vh'}
                width={'100%'}
                {...props}
            >
                <rect x="1" y="20" rx="3" ry="3" width="98%" height="17" />

                <rect x="50" y="115" rx="3" ry="3" width="141" height="15" />
                <rect x="230" y="114" rx="3" ry="3" width="299" height="15" />
                <rect x="560" y="114" rx="3" ry="3" width="141" height="15" />
                <rect x="760" y="114" rx="3" ry="3" width="141" height="15" />
                <rect x="970" y="110" rx="3" ry="3" width="24" height="33" />
                <rect x="1" y="155" rx="3" ry="3" width="98%" height="2" />
                <rect x="970" y="175" rx="3" ry="3" width="24" height="33" />

                <rect x="50" y="176" rx="3" ry="3" width="141" height="15" />
                <rect x="230" y="175" rx="3" ry="3" width="299" height="15" />
                <rect x="560" y="175" rx="3" ry="3" width="141" height="15" />
                <rect x="760" y="175" rx="3" ry="3" width="141" height="15" />
                <rect x="1" y="216" rx="3" ry="3" width="98%" height="2" />
                <rect x="970" y="225" rx="3" ry="3" width="24" height="33" />

                <rect x="50" y="234" rx="3" ry="3" width="141" height="15" />
                <rect x="230" y="233" rx="3" ry="3" width="299" height="15" />
                <rect x="560" y="233" rx="3" ry="3" width="141" height="15" />
                <rect x="760" y="233" rx="3" ry="3" width="141" height="15" />
                <rect x="1" y="274" rx="3" ry="3" width="98%" height="2" />


                <rect x="50" y="298" rx="3" ry="3" width="141" height="15" />
                <rect x="230" y="294" rx="3" ry="3" width="299" height="15" />
                <rect x="560" y="294" rx="3" ry="3" width="141" height="15" />
                <rect x="760" y="294" rx="3" ry="3" width="141" height="15" />
                <rect x="1" y="335" rx="3" ry="3" width="98%" height="2" />
                <rect x="970" y="285" rx="3" ry="3" width="24" height="33" />
                <rect x="970" y="348" rx="3" ry="3" width="24" height="33" />


                <rect x="50" y="355" rx="3" ry="3" width="141" height="15" />
                <rect x="230" y="354" rx="3" ry="3" width="299" height="15" />
                <rect x="560" y="354" rx="3" ry="3" width="141" height="15" />
                <rect x="760" y="354" rx="3" ry="3" width="141" height="15" />
                <rect x="1" y="398" rx="3" ry="3" width="98%" height="2" />
                <rect x="970" y="408" rx="3" ry="3" width="24" height="33" />


                <rect x="50" y="416" rx="3" ry="3" width="141" height="15" />
                <rect x="230" y="415" rx="3" ry="3" width="299" height="15" />
                <rect x="560" y="415" rx="3" ry="3" width="141" height="15" />
                <rect x="760" y="415" rx="3" ry="3" width="141" height="15" />
                <rect x="1" y="453" rx="3" ry="3" width="98%" height="2" />
                <rect x="1" y="35" rx="3" ry="3" width="2" height="479" />
                {/*<rect x="1060" y="49" rx="3" ry="3" width="2" height="465" />*/}
                <rect x="760" y="477" rx="3" ry="3" width="141" height="15" />
                {/*<circle cx="882" cy="484" r="11" />*/}
                {/*<circle cx="917" cy="484" r="11" />*/}
                <rect x="970" y="470" rx="3" ry="3" width="24" height="33" />


                <rect x="50" y="476" rx="3" ry="3" width="141" height="15" />
                <rect x="230" y="475" rx="3" ry="3" width="299" height="15" />
                <rect x="560" y="475" rx="3" ry="3" width="141" height="15" />
                <rect x="1" y="513" rx="3" ry="3" width="98%" height="2" />
                <rect x="1" y="80" rx="3" ry="3" width="98%" height="17" />
                <rect x="53" y="42" rx="3" ry="3" width="68" height="33" />
                <rect x="232" y="42" rx="3" ry="3" width="149" height="33" />
                <rect x="557" y="42" rx="3" ry="3" width="137" height="33" />
                <rect x="760" y="42" rx="3" ry="3" width="72" height="33" />
                <rect x="970" y="42" rx="3" ry="3" width="24" height="33" />
            </ContentLoader>
        </div>
    )
}

export default DataTableLoadingSkeleton
