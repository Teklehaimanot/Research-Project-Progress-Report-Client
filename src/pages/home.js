import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { makeStyles, InputLabel, Select, MenuItem, FormControl, FormHelperText,Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(12),
        // margin:theme.spacing(3,40),
        // border: "1px solid #444",
        // borderRadius: "5px",

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '600px',
        },
        '& .MuiSelect-root': {
            margin: theme.spacing(1),
            width: '600px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },

    },
    dateFormat: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiTextField-root': {
            margin: theme.spacing(5, 1),
            width: '190px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
    selectors: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        '& .MuiSelect-root': {
            margin: theme.spacing(1),
            width: '160px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    }
}))

const Home = () => {
    const classes = useStyles()
    return (

        <from className={classes.root}>
            <Typography>Project Overview</Typography>
            <TextField
                label="Project Finance Code"
                variant="outlined"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="Project Title"
                variant="outlined"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="Funding Institute"
                variant="outlined"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="Amount Budget"
                variant="outlined"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <TextField
                label="IRB Number Given"
                variant="outlined"
                type="text"
                required
            // onChange = {}
            // value={'4455590'}
            />
            <div className={classes.dateFormat}>
                <TextField
                    label="Date of Approval"
                    variant="outlined"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    required
                // onChange = {}
                // value={'4455590'}
                />
                <TextField
                    label="Project Start Date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    required
                // onChange = {}
                // value={'4455590'}
                />
                <TextField
                    label="Project End Date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true, required: true }}
                    type="date"
                    required
                // onChange = {}
                // value={'4455590'}
                />
            </div>
            <div className={classes.selectors}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        // value={age}
                        label="Age"
                        onChange={""}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Directorate Name</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        // value={age}
                        label="Age"
                        onChange={""}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Types of Research Project</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        // value={''}
                        label="Age"
                        onChange={""}
                        // variant = "contained"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Progress Level</FormHelperText>
                </FormControl>
            </div>

            <div>
                <Button type="submit" variant="contained" >
                   Next 
                </Button>
            </div>
        </from>
    )
}

export default Home
