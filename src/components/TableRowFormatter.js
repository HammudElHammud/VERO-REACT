import styled from "styled-components";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const StyledTooltip = styled(ReactTooltip)`
  white-space: normal;
  max-width: 300px;
  border-radius: 5px;
  background: #131c24;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
`
const Tooltip = (props: any) => (
    <StyledTooltip
        effect="solid"
        getContent={function () {
            return (
                <div>
                    <p className="my-2">{props.content}</p>
                </div>
            )
        }}
        backgroundColor='rgba(0, 0, 0, 0.85)'
        textColor='#FFF'
        zIndex='9999999'
        place="top"
        {...props}
        // arrowColor="transparent"
    />
)


export function colorRowFormatter(cell, row) {
    return (
        <div>
            <div className='m-0 p-0 ml-1'>
                <p className={'align-left mb-0 pb-0 text-[' + (row.colorCode) + ']'}>{row.colorCode}</p>
            </div>
        </div>

    );
}

export function descriptionFormatter(cell, row) {
    return (
        <div>
            <div className='m-0 p-0 ml-1'
                 data-tooltip-id="my-tooltip-description"
                 data-tooltip-content={row.description}
            >
                <p className={'align-left mb-0 pb-0' }>{row.description.length > 60 ? `${row.description.slice(0, 60)}...` : row.description}
                </p>
            </div>
            <Tooltip
                content={row.description}
                id={'my-tooltip-description'}/>
        </div>

    );
}