import * as React from "react";
import {useState} from "react";
import {
    Button,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Popover,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Sort: React.FC = () => {
    return (
        <SortPopover/>
    )
}

export default Sort

const SortPopover: React.FC = () => {
    // TODO get sorted columns from state
    const [dummySortValues, setDummySortValues] = useState<string[]>(['id', 'name', 'email'])

    const [sortedColumns, setSortedColumns] = useState<string[]>([])
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onSortRowDeleteClick = () => {
        // Remove column in sortedColumns from dropdown
        // Add column to values in dropdown
        console.log("Delete sort row")
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                Open Popover
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {sortedColumns?.length > 0 &&
                    sortedColumns.map((col, idx) =>
                        <SortRow key={idx} columnName={col}
                                 index={idx}
                                 onDeleteClick={onSortRowDeleteClick}
                        />
                    )}

                {sortedColumns.length == 0 && (
                    <Typography sx={{p: 2}}>No sorts applied.</Typography>
                )}

                <Divider variant="middle"/>

                {dummySortValues?.length > 0
                    ? <SortDropdown sortedColumns={sortedColumns} updateSortedColumns={setSortedColumns} dummySortValues={dummySortValues} setDummySortValues={setDummySortValues}/>
                    : <Typography sx={{p: 2}}>All columns have been sorted.</Typography>
                }
            </Popover>
        </>
    )
}

// SortDropdown -> click column -> SortPopover.sortedColumns
type SortDropdownProps = {
    updateSortedColumns: (value: string[]) => void;
    sortedColumns: string[];
    dummySortValues: string[];
    setDummySortValues: (value: string[]) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({sortedColumns, updateSortedColumns, dummySortValues, setDummySortValues}) => {
    // TODO get columns from state

    function handleChange(event: SelectChangeEvent) {
        const selectedValue = event.target.value as string
        updateSortedColumns([...sortedColumns, selectedValue])
        for (let i = 0; i < dummySortValues.length; i++) {
            if (dummySortValues[i] === selectedValue) {
                let newDummySortValues = dummySortValues.slice()
                newDummySortValues.splice(i, 1)
                setDummySortValues(newDummySortValues)
                break
            }
        }
    }

    return (
        <FormControl variant="standard" fullWidth>
            <InputLabel id="columnSortDropdownSelectLabel">Pick a column to sort by</InputLabel>
            <Select
                labelId="columnSortDropdown"
                id="columnSortDropdown"
                label="Pick a column to sort by"
                onChange={handleChange}
            >
                {dummySortValues.map((value, idx) => {
                    return <MenuItem key={idx} value={value}>{value}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

type SortRowProps = {
    columnName: string;
    index: number;
    onDeleteClick: () => void;
};

const SortRow: React.FC<SortRowProps> = ({columnName, index, onDeleteClick}) => {
    // TODO update sorted rows when clicking delete
    return (
        <div>
            <CloseIcon style={{cursor: 'pointer'}} onClick={onDeleteClick}/>{columnName}
        </div>
    )
}