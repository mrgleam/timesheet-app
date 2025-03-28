import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Breadcrumbs, FormHelperText, Textarea } from '@mui/joy';

const floatNumber = (min?: number, max?: number) =>
    z
        .string()
        .transform((value) =>
            max && Number(value) > max
                ? max
                : min && Number(value) < min
                    ? min
                    : value === ''
                        ? ''
                        : Number(value)
        )
        .refine((value) => !isNaN(Number(value)), {
            message: 'invalid',
        })
        .refine((value) => value !== '', {
            message: 'required',
        })
        .refine((value) => (max ? Number(value) <= max : true), {
            message: 'tooBig',
        })
        .refine((value) => (min || min === 0 ? Number(value) >= min : true), {
            message: 'tooSmall',
        });

// Define types for the form data
type TimeRowFormData = {
    date: string;
    activity: string;
    hours: number;
};

// Create separate validation schemas
const timeRowSchema = z.object({
    date: z.string().date().nonempty('Date is required'),
    activity: z.string().max(255, 'Activity must be 255 characters or less').nonempty('Activity is required'),
    hours: floatNumber(0, 24),
});

const rows = [
    {
        id: 'INV-1234',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        activity: '- Update UI Flow 1 2\n- Create UI Flow 3 4 and Non-digital\n- Update UI on presentation',
        day: 1,
        hours: 8,
        customer: {
            initial: 'O',
            name: 'Olivia Ryhe',
            email: 'olivia@email.com',
        },
    },
    {
        id: 'INV-1233',
        date: 'Feb 3, 2023',
        status: 'Paid',
        day: 1.125,
        customer: {
            initial: 'S',
            name: 'Steve Hampton',
            email: 'steve.hamp@email.com',
        },
    },
    {
        id: 'INV-1232',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'C',
            name: 'Ciaran Murray',
            email: 'ciaran.murray@email.com',
        },
    },
    {
        id: 'INV-1231',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'M',
            name: 'Maria Macdonald',
            email: 'maria.mc@email.com',
        },
    },
    {
        id: 'INV-1230',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'C',
            name: 'Charles Fulton',
            email: 'fulton@email.com',
        },
    },
    {
        id: 'INV-1229',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'J',
            name: 'Jay Hooper',
            email: 'hooper@email.com',
        },
    },
    {
        id: 'INV-1228',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'K',
            name: 'Krystal Stevens',
            email: 'k.stevens@email.com',
        },
    },
    {
        id: 'INV-1227',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Sachin Flynn',
            email: 's.flyn@email.com',
        },
    },
    {
        id: 'INV-1226',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'B',
            name: 'Bradley Rosales',
            email: 'brad123@email.com',
        },
    },
    {
        id: 'INV-1225',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'O',
            name: 'Olivia Ryhe',
            email: 'olivia@email.com',
        },
    },
    {
        id: 'INV-1224',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'S',
            name: 'Steve Hampton',
            email: 'steve.hamp@email.com',
        },
    },
    {
        id: 'INV-1223',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'C',
            name: 'Ciaran Murray',
            email: 'ciaran.murray@email.com',
        },
    },
    {
        id: 'INV-1221',
        date: 'Feb 3, 2023',
        status: 'Refunded',
        customer: {
            initial: 'M',
            name: 'Maria Macdonald',
            email: 'maria.mc@email.com',
        },
    },
    {
        id: 'INV-1220',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'C',
            name: 'Charles Fulton',
            email: 'fulton@email.com',
        },
    },
    {
        id: 'INV-1219',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'J',
            name: 'Jay Hooper',
            email: 'hooper@email.com',
        },
    },
    {
        id: 'INV-1218',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'K',
            name: 'Krystal Stevens',
            email: 'k.stevens@email.com',
        },
    },
    {
        id: 'INV-1217',
        date: 'Feb 3, 2023',
        status: 'Paid',
        customer: {
            initial: 'S',
            name: 'Sachin Flynn',
            email: 's.flyn@email.com',
        },
    },
    {
        id: 'INV-1216',
        date: 'Feb 3, 2023',
        status: 'Cancelled',
        customer: {
            initial: 'B',
            name: 'Bradley Rosales',
            email: 'brad123@email.com',
        },
    },
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function RowMenu({ setEdit }: { setEdit: (edit: boolean) => void }) {
    const handleClickEdit = () => {
        setEdit(true);
    };

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="sm" sx={{ minWidth: 140 }}>
                <MenuItem onClick={handleClickEdit}
                >Edit</MenuItem>
                <Divider />
                <MenuItem color="danger">Delete</MenuItem>
            </Menu>
        </Dropdown>
    );
}
export default function TimeTable() {
    const [order, setOrder] = React.useState<Order>('desc');
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);

    const handleCloseEdit = () => {
        setEdit(false);
    };

    // Time Row form
    const {
        control: timeRowControl,
        handleSubmit: handleTimeRowSubmit,
        formState: { errors: timeRowErrors }
    } = useForm<TimeRowFormData>({
        resolver: zodResolver(timeRowSchema),
        defaultValues: {
            date: '2020-01-01',
            activity: '',
            hours: 0,
        },
    });

    const onTimeRowSubmit = (data: TimeRowFormData) => {
        console.log('Time row data submitted:', data);
        handleCloseEdit();
        // Handle profile update logic here
    };

    return (
        <React.Fragment>
            <Box sx={{ flex: 1, width: '100%' }}>
                <Box
                    sx={{
                        top: { sm: -100, md: -110 },
                        bgcolor: 'background.body',
                        zIndex: 9995,
                    }}
                >
                    <Box sx={{ px: { xs: 2, md: 6 } }}>
                        <Breadcrumbs
                            size="sm"
                            aria-label="breadcrumbs"
                            separator={<ChevronRightRoundedIcon fontSize="small" />}
                            sx={{ pl: 0 }}
                        >
                            <Link
                                underline="none"
                                color="neutral"
                                href="/"
                                aria-label="Home"
                            >
                                <HomeRoundedIcon />
                            </Link>
                            <Typography color="primary" sx={{ fontWeight: 500, fontSize: 12 }}>
                                Time Table
                            </Typography>
                        </Breadcrumbs>
                        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
                            Time Table
                        </Typography>
                        <Sheet
                            className="SearchAndFilters-mobile"
                            sx={{ display: { xs: 'flex', sm: 'none' }, my: 1, gap: 1 }}
                        >
                            <Input
                                size="sm"
                                placeholder="Search"
                                startDecorator={<SearchIcon />}
                                sx={{ flexGrow: 1 }}
                            />
                            <IconButton
                                size="sm"
                                variant="outlined"
                                color="neutral"
                                onClick={() => setOpen(true)}
                            >
                                <FilterAltIcon />
                            </IconButton>
                            <Modal open={open} onClose={() => setOpen(false)}>
                                <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
                                    <ModalClose />
                                    <Typography id="filter-modal" level="h2">
                                        Filters
                                    </Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Button color="primary" onClick={() => setOpen(false)}>
                                            Submit
                                        </Button>
                                    </Sheet>
                                </ModalDialog>
                            </Modal>
                        </Sheet>
                        <Box
                            className="SearchAndFilters-tabletUp"
                            sx={{
                                borderRadius: 'sm',
                                py: 2,
                                display: { xs: 'none', sm: 'flex' },
                                flexWrap: 'wrap',
                                gap: 1.5,
                                '& > *': {
                                    minWidth: { xs: '120px', md: '160px' },
                                },
                            }}
                        >
                            <FormControl sx={{ flex: 1 }} size="sm">
                                <FormLabel>Search for activity</FormLabel>
                                <Input size="sm" placeholder="Search" startDecorator={<SearchIcon />} />
                            </FormControl>
                        </Box>
                        <Sheet
                            className="TimeTableContainer"
                            variant="outlined"
                            sx={{
                                display: { xs: 'none', sm: 'initial' },
                                width: '100%',
                                borderRadius: 'sm',
                                flexShrink: 1,
                                overflow: 'auto',
                                minHeight: 0,
                            }}
                        >
                            <Table
                                aria-labelledby="tableTitle"
                                stickyHeader
                                hoverRow
                                sx={{
                                    '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                                    '--Table-headerUnderlineThickness': '1px',
                                    '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                                    '--TableCell-paddingY': '4px',
                                    '--TableCell-paddingX': '8px',
                                }}
                            >
                                <thead>
                                    <tr>
                                        <th style={{ width: 48, textAlign: 'center', padding: '12px 6px' }}>
                                            <Checkbox
                                                size="sm"
                                                indeterminate={
                                                    selected.length > 0 && selected.length !== rows.length
                                                }
                                                checked={selected.length === rows.length}
                                                onChange={(event) => {
                                                    setSelected(
                                                        event.target.checked ? rows.map((row) => row.id) : [],
                                                    );
                                                }}
                                                color={
                                                    selected.length > 0 || selected.length === rows.length
                                                        ? 'primary'
                                                        : undefined
                                                }
                                                sx={{ verticalAlign: 'text-bottom' }}
                                            />
                                        </th>
                                        <th style={{ width: 140, padding: '12px 6px' }}>
                                            <Link
                                                underline="none"
                                                color="primary"
                                                component="button"
                                                onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                                                endDecorator={<ArrowDropDownIcon />}
                                                sx={[
                                                    {
                                                        fontWeight: 'lg',
                                                        '& svg': {
                                                            transition: '0.2s',
                                                            transform:
                                                                order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                                        },
                                                    },
                                                    order === 'desc'
                                                        ? { '& svg': { transform: 'rotate(0deg)' } }
                                                        : { '& svg': { transform: 'rotate(180deg)' } },
                                                ]}
                                            >
                                                Date
                                            </Link>
                                        </th>
                                        <th style={{ width: 380, padding: '12px 6px' }}>Activities</th>
                                        <th style={{ width: 70, padding: '12px 6px' }}>Day</th>
                                        <th style={{ width: 70, padding: '12px 6px' }}>Hours</th>
                                        <th style={{ width: 140, padding: '12px 6px' }}> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...rows].sort(getComparator(order, 'id')).map((row) => (
                                        <tr key={row.id}>
                                            <td style={{ textAlign: 'center', width: 120 }}>
                                                <Checkbox
                                                    size="sm"
                                                    checked={selected.includes(row.id)}
                                                    color={selected.includes(row.id) ? 'primary' : undefined}
                                                    onChange={(event) => {
                                                        setSelected((ids) =>
                                                            event.target.checked
                                                                ? ids.concat(row.id)
                                                                : ids.filter((itemId) => itemId !== row.id),
                                                        );
                                                    }}
                                                    slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
                                                    sx={{ verticalAlign: 'text-bottom' }}
                                                />
                                            </td>
                                            <td>
                                                <Typography level="body-xs">{row.date}</Typography>
                                            </td>
                                            <td>
                                                <Typography style={{ whiteSpace: 'pre-line' }} level="body-xs">{row.activity}</Typography>
                                            </td>
                                            <td>
                                                <Typography level="body-xs">{row.day}</Typography>
                                            </td>
                                            <td>
                                                <Typography level="body-xs">{row.hours}</Typography>
                                            </td>
                                            <td>
                                                <RowMenu setEdit={setEdit} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Sheet>
                        <Box
                            className="Pagination-laptopUp"
                            sx={{
                                pt: 2,
                                gap: 1,
                                [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                                display: {
                                    xs: 'none',
                                    md: 'flex',
                                },
                            }}
                        >
                            <Button
                                size="sm"
                                variant="outlined"
                                color="neutral"
                                startDecorator={<KeyboardArrowLeftIcon />}
                            >
                                Previous
                            </Button>

                            <Box sx={{ flex: 1 }} />
                            {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
                                <IconButton
                                    key={page}
                                    size="sm"
                                    variant={Number(page) ? 'outlined' : 'plain'}
                                    color="neutral"
                                >
                                    {page}
                                </IconButton>
                            ))}
                            <Box sx={{ flex: 1 }} />
                            <Button
                                size="sm"
                                variant="outlined"
                                color="neutral"
                                endDecorator={<KeyboardArrowRightIcon />}
                            >
                                Next
                            </Button>
                        </Box>
                        <Modal open={edit} onClose={handleCloseEdit} sx={{ zIndex: 13000 }}>
                            <ModalDialog aria-labelledby="edit-modal" layout="fullscreen" sx={{ zIndex: 13001 }}>
                                <ModalClose />
                                <form onSubmit={handleTimeRowSubmit(onTimeRowSubmit)}>
                                    <Typography id="edit-modal" level="h2">Edit Activity & Time</Typography>
                                    <Divider sx={{ my: 2 }} />
                                    <FormControl error={!!timeRowErrors.date}>
                                        <FormLabel>Date</FormLabel>
                                        <Controller name="date" control={timeRowControl} render={({ field }) => (
                                            <>
                                                <Input type="hidden" {...field} />
                                                {timeRowErrors.date?.message && <FormHelperText>{timeRowErrors.date?.message}</FormHelperText>}
                                            </>
                                        )}>
                                        </Controller>
                                    </FormControl>
                                    <FormControl error={!!timeRowErrors.activity}>
                                        <FormLabel>Activity</FormLabel>
                                        <Controller name="activity" control={timeRowControl} render={({ field }) => (
                                            <>
                                                <Textarea placeholder="Activity Details" minRows={4} {...field} />
                                                {timeRowErrors.activity?.message && <FormHelperText>{timeRowErrors.activity?.message}</FormHelperText>}
                                            </>
                                        )}>
                                        </Controller>
                                    </FormControl>
                                    <FormControl error={!!timeRowErrors.hours}>
                                        <FormLabel>Hours</FormLabel>
                                        <Controller name="hours" control={timeRowControl} render={({ field }) => (
                                            <>
                                                <Input
                                                    type="number"
                                                    placeholder="Enter an hours between 0 and 24"
                                                    {...field}
                                                />
                                                {timeRowErrors.hours?.message && <FormHelperText>{timeRowErrors.hours?.message}</FormHelperText>}
                                            </>
                                        )}>
                                        </Controller>
                                    </FormControl>
                                    <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
                                        <Button type="submit" color="primary">
                                            Submit
                                        </Button>
                                    </Sheet>
                                </form>
                            </ModalDialog>
                        </Modal>
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    );
}